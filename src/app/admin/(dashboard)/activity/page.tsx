import Link from 'next/link'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { adminColors as c } from '@/lib/admin/theme'

export const dynamic = 'force-dynamic'

type LogRow = {
  id: string
  created_at: string
  actor: string
  action: string
  booking_id: string | null
  details: Record<string, unknown> | null
}

const ACTION_LABELS: Record<string, string> = {
  login: 'Logged in',
  login_failed: 'Failed login attempt',
  logout: 'Logged out',
  status_updated: 'Changed booking status',
  price_updated: 'Changed price quote',
  driver_assigned: 'Assigned transport partner',
  trip_details_updated: 'Edited trip details',
  tags_updated: 'Updated tags',
  booking_deleted: 'Moved booking to trash',
  booking_restored: 'Restored booking from trash',
  booking_purged: 'Permanently deleted booking',
  booking_created: 'Manually created booking',
  email_sent: 'Sent email to client',
  note_added: 'Added internal note',
  bulk_status_updated: 'Bulk status update',
  bulk_deleted: 'Bulk moved to trash',
  partner_created: 'Added partner',
  partner_updated: 'Updated partner',
  partner_deactivated: 'Deactivated partner',
}

const ACTION_COLORS: Record<string, string> = {
  login: c.green,
  login_failed: c.red,
  logout: c.textMuted,
  status_updated: c.blue,
  price_updated: c.gold,
  driver_assigned: c.blue,
  trip_details_updated: c.blue,
  tags_updated: c.blue,
  booking_deleted: c.red,
  booking_restored: c.green,
  booking_purged: c.red,
  booking_created: c.green,
  email_sent: c.green,
  note_added: c.blue,
  bulk_status_updated: c.blue,
  bulk_deleted: c.red,
  partner_created: c.green,
  partner_updated: c.blue,
  partner_deactivated: c.red,
}

function formatDetails(action: string, details: Record<string, unknown> | null): string {
  if (!details) return ''
  if (action === 'status_updated') return `${details.from ?? '—'} → ${details.to ?? '—'}`
  if (action === 'price_updated') return `€${details.from ?? '—'} → €${details.to ?? '—'}`
  if (action === 'driver_assigned') return `${details.from || '(none)'} → ${details.to || '(none)'}`
  if (action === 'trip_details_updated') return Array.isArray(details.fields) ? details.fields.join(', ') : ''
  if (action === 'tags_updated') return Array.isArray(details.tags) ? details.tags.join(', ') || '(cleared)' : ''
  if (action === 'booking_deleted') return `${details.full_name || ''} (${details.email || ''})`
  if (action === 'booking_created') return `${details.full_name || ''} via ${details.source || 'manual entry'}`
  if (action === 'email_sent') return `"${details.subject || ''}" to ${details.to || ''}`
  if (action === 'login_failed') return details.email ? `attempted email: ${details.email}` : ''
  if (action === 'note_added') return String(details.note || '').slice(0, 80)
  if (action === 'bulk_status_updated') return `${Array.isArray(details.ids) ? details.ids.length : 0} bookings → ${details.status || ''}`
  if (action === 'bulk_deleted') return `${Array.isArray(details.ids) ? details.ids.length : 0} bookings`
  if (action === 'partner_created' || action === 'partner_updated') return String(details.name || '')
  return ''
}

export default async function ActivityLogPage() {
  const supabase = createServiceRoleClient()
  const { data, error } = await supabase
    .from('admin_activity_log')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(200)

  const rows = (data || []) as LogRow[]
  const tableMissing = !!error && /relation .* does not exist/i.test(error.message)

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); * { box-sizing: border-box; }`}</style>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: c.text, margin: '0 0 4px' }}>Activity Log</h1>
        <p style={{ fontSize: 13, color: c.textFaint, margin: '0 0 24px' }}>
          Logins, status changes, price changes, driver assignments, deletions, and client emails — most recent first.
        </p>

        {tableMissing ? (
          <div style={{ background: c.yellowTint, border: '1px solid rgba(224,192,125,0.3)', borderRadius: 12, padding: 24 }}>
            <p style={{ margin: 0, color: c.yellow, fontWeight: 600, fontSize: 14 }}>Activity log table not set up yet</p>
            <p style={{ margin: '8px 0 0', fontSize: 13, color: c.textMuted, lineHeight: 1.6 }}>
              Run <code style={{ background: c.border, padding: '2px 6px', borderRadius: 4 }}>supabase/002_activity_log.sql</code> in
              your Supabase SQL Editor to create it. Everything else keeps working in the meantime — logging is best-effort and never blocks an action.
            </p>
          </div>
        ) : rows.length === 0 ? (
          <div style={{ padding: 64, textAlign: 'center', color: c.textFaint, fontSize: 14, background: c.panel, border: `1px solid ${c.border}`, borderRadius: 12 }}>
            No activity recorded yet.
          </div>
        ) : (
          <div style={{ background: c.panel, border: `1px solid ${c.border}`, borderRadius: 12, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${c.border}` }}>
                  {['When', 'Who', 'Action', 'Details'].map((h) => (
                    <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.textFaint }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} style={{ borderBottom: `1px solid ${c.border}` }}>
                    <td style={{ padding: '10px 14px', whiteSpace: 'nowrap', color: c.textFaint, fontSize: 12 }}>
                      {new Date(row.created_at).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td style={{ padding: '10px 14px', whiteSpace: 'nowrap', color: c.text }}>{row.actor}</td>
                    <td style={{ padding: '10px 14px', whiteSpace: 'nowrap', color: ACTION_COLORS[row.action] || c.text }}>
                      {ACTION_LABELS[row.action] || row.action}
                    </td>
                    <td style={{ padding: '10px 14px', color: c.textMuted }}>
                      {row.booking_id ? (
                        <Link href={`/admin/bookings/${row.booking_id}`} style={{ color: c.gold, textDecoration: 'none', marginRight: 8 }}>
                          view booking
                        </Link>
                      ) : null}
                      {formatDetails(row.action, row.details)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
