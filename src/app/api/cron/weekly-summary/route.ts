import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { isAuthorizedCronRequest } from '@/lib/admin/cron-auth'
import { getResendClient } from '@/lib/resend'

export const dynamic = 'force-dynamic'

function parsePrice(value: string | null | undefined): number {
  if (!value) return 0
  const n = parseFloat(String(value).replace(/[^0-9.]/g, ''))
  return Number.isFinite(n) ? n : 0
}

// Runs weekly (see vercel.json). Emails the business owner a plain summary
// of the last 7 days — new leads, status breakdown, revenue — since there's
// no other push notification for "how's the week going" today.
export async function GET(request: NextRequest) {
  if (!isAuthorizedCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const adminAddress = process.env.ADMIN_NOTIFICATION_EMAIL || process.env.ADMIN_GMAIL
  if (!adminAddress) {
    return NextResponse.json({ skipped: true, reason: 'No ADMIN_NOTIFICATION_EMAIL configured' })
  }

  const supabase = createServiceRoleClient()

  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)

  const { data: bookings, error } = await supabase
    .from('bookings')
    .select('status, price_quote, vehicle_type, created_at')
    .gte('created_at', weekAgo.toISOString())
    .is('deleted_at', null)

  if (error) {
    console.error('Cron weekly-summary: failed to fetch bookings', error)
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }

  const all = bookings || []
  const byStatus = {
    pending: all.filter((b) => b.status === 'pending' || !b.status).length,
    confirmed: all.filter((b) => b.status === 'confirmed').length,
    completed: all.filter((b) => b.status === 'completed').length,
    cancelled: all.filter((b) => b.status === 'cancelled').length,
  }
  const revenue = all
    .filter((b) => b.status === 'confirmed' || b.status === 'completed')
    .reduce((sum, b) => sum + parsePrice(b.price_quote), 0)

  const fromAddress =
    process.env.RESEND_FROM_EMAIL ||
    (process.env.RESEND_EMAIL_DOMAIN ? `bookings@${process.env.RESEND_EMAIL_DOMAIN}` : 'bookings@austriachauffeurservice.com')

  const html = `
    <div style="font-family: sans-serif; line-height: 1.6;">
      <h2>Weekly Summary — Austria Chauffeur Service</h2>
      <p>Last 7 days:</p>
      <table cellpadding="6">
        <tr><td><strong>New leads</strong></td><td>${all.length}</td></tr>
        <tr><td><strong>Pending</strong></td><td>${byStatus.pending}</td></tr>
        <tr><td><strong>Confirmed</strong></td><td>${byStatus.confirmed}</td></tr>
        <tr><td><strong>Completed</strong></td><td>${byStatus.completed}</td></tr>
        <tr><td><strong>Cancelled</strong></td><td>${byStatus.cancelled}</td></tr>
        <tr><td><strong>Confirmed + completed revenue</strong></td><td>€${revenue.toFixed(2)}</td></tr>
      </table>
      <p>Full detail in the admin dashboard.</p>
    </div>
  `

  const resend = getResendClient()
  const { error: sendError } = await resend.emails.send({
    from: fromAddress,
    to: adminAddress,
    subject: `Weekly Summary — ${all.length} new leads this week`,
    html,
  })

  if (sendError) {
    console.error('Failed to send weekly summary:', sendError)
    return NextResponse.json({ error: 'Failed to send summary email' }, { status: 500 })
  }

  return NextResponse.json({ sent: true, leadCount: all.length })
}
