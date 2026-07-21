import Link from 'next/link'
import { createServiceRoleClient } from '@/lib/supabase/server'

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
  booking_deleted: 'Deleted booking',
  email_sent: 'Sent email to client',
}

const ACTION_COLORS: Record<string, string> = {
  login: '#4ade80',
  login_failed: '#f87171',
  logout: 'rgba(255,255,255,0.5)',
  status_updated: '#818cf8',
  price_updated: '#D4AF37',
  driver_assigned: '#60a5fa',
  booking_deleted: '#f87171',
  email_sent: '#4ade80',
}

function formatDetails(action: string, details: Record<string, unknown> | null): string {
  if (!details) return ''
  if (action === 'status_updated') return `${details.from ?? '—'} → ${details.to ?? '—'}`
  if (action === 'price_updated') return `€${details.from ?? '—'} → €${details.to ?? '—'}`
  if (action === 'driver_assigned') return `${details.from || '(none)'} → ${details.to || '(none)'}`
  if (action === 'booking_deleted') return `${details.full_name || ''} (${details.email || ''})`
  if (action === 'email_sent') return `"${details.subject || ''}" to ${details.to || ''}`
  if (action === 'login_failed') return details.email ? `attempted email: ${details.email}` : ''
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
    <main style={{ minHeight: '100vh', background: '#0d0d0d', color: '#e5e5e5', fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); * { box-sizing: border-box; }`}</style>

      <nav style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/admin/bookings" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
          ← Back to Admin Bookings
        </Link>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Activity Log</span>
      </nav>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>Activity Log</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 24px' }}>
          Logins, status changes, price changes, driver assignments, deletions, and client emails — most recent first.
        </p>

        {tableMissing ? (
          <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.3)', borderRadius: 12, padding: 24 }}>
            <p style={{ margin: 0, color: '#facc15', fontWeight: 600, fontSize: 14 }}>Activity log table not set up yet</p>
            <p style={{ margin: '8px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Run <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4 }}>supabase/002_activity_log.sql</code> in
              your Supabase SQL Editor to create it. Everything else keeps working in the meantime — logging is best-effort and never blocks an action.
            </p>
          </div>
        ) : rows.length === 0 ? (
          <div style={{ padding: 64, textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}>
            No activity recorded yet.
          </div>
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  {['When', 'Who', 'Action', 'Details'].map((h) => (
                    <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
                      {new Date(row.created_at).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td style={{ padding: '10px 14px', whiteSpace: 'nowrap', color: '#fff' }}>{row.actor}</td>
                    <td style={{ padding: '10px 14px', whiteSpace: 'nowrap', color: ACTION_COLORS[row.action] || '#e5e5e5' }}>
                      {ACTION_LABELS[row.action] || row.action}
                    </td>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.6)' }}>
                      {row.booking_id ? (
                        <Link href={`/admin/bookings/${row.booking_id}`} style={{ color: '#D4AF37', textDecoration: 'none', marginRight: 8 }}>
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
