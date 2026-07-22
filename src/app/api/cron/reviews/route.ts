import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { isAuthorizedCronRequest } from '@/lib/admin/cron-auth'
import { reviewRequestEmail } from '@/lib/bookings/emails'
import { getResendClient } from '@/lib/resend'

export const dynamic = 'force-dynamic'

// Runs once daily. Finds bookings marked "completed" with a pickup_date at
// least 1 day in the past that haven't had a review request sent yet, so
// the ask lands the day after the trip rather than immediately at drop-off.
export async function GET(request: NextRequest) {
  if (!isAuthorizedCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createServiceRoleClient()

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayYmd = yesterday.toISOString().slice(0, 10)

  const { data: bookings, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('status', 'completed')
    .lte('pickup_date', yesterdayYmd)
    .eq('review_email_sent', false)
    .is('deleted_at', null)

  if (error) {
    console.error('Cron reviews: failed to fetch bookings', error)
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
      const email = reviewRequestEmail(booking)
      const { error: sendError } = await resend.emails.send({
        from: fromAddress,
        to: booking.email,
        subject: email.subject,
        html: email.html,
      })
      if (sendError) {
        console.error(`Failed to send review request for booking ${booking.id}:`, sendError)
        failed++
        continue
      }
      await supabase.from('bookings').update({ review_email_sent: true }).eq('id', booking.id)
      sent++
    } catch (err) {
      console.error(`Failed to send review request for booking ${booking.id}:`, err)
      failed++
    }
  }

  return NextResponse.json({ checked: bookings?.length || 0, sent, failed })
}
