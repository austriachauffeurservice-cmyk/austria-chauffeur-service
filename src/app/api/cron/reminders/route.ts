import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { isAuthorizedCronRequest } from '@/lib/admin/cron-auth'
import { pickupReminderEmail } from '@/lib/bookings/emails'
import { getResendClient } from '@/lib/resend'

export const dynamic = 'force-dynamic'

// Runs once daily. Finds confirmed bookings with pickup_date = tomorrow that
// haven't had a reminder sent yet, emails the customer, and marks them sent
// so a retried/duplicate cron run never double-sends.
export async function GET(request: NextRequest) {
  if (!isAuthorizedCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createServiceRoleClient()

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowYmd = tomorrow.toISOString().slice(0, 10)

  const { data: bookings, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('pickup_date', tomorrowYmd)
    .eq('status', 'confirmed')
    .eq('reminder_email_sent', false)
    .is('deleted_at', null)

  if (error) {
    console.error('Cron reminders: failed to fetch bookings', error)
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }

  const fromAddress =
    process.env.RESEND_FROM_EMAIL ||
    (process.env.RESEND_EMAIL_DOMAIN ? `bookings@${process.env.RESEND_EMAIL_DOMAIN}` : 'bookings@austriachauffeurservice.com')

  let sent = 0
  let failed = 0

  for (const booking of bookings || []) {
    try {
      const resend = getResendClient()
      const email = pickupReminderEmail(booking)
      const { error: sendError } = await resend.emails.send({
        from: fromAddress,
        to: booking.email,
        subject: email.subject,
        html: email.html,
      })
      if (sendError) {
        console.error(`Failed to send reminder for booking ${booking.id}:`, sendError)
        failed++
        continue
      }
      await supabase.from('bookings').update({ reminder_email_sent: true }).eq('id', booking.id)
      sent++
    } catch (err) {
      console.error(`Failed to send reminder for booking ${booking.id}:`, err)
      failed++
    }
  }

  return NextResponse.json({ checked: bookings?.length || 0, sent, failed })
}
