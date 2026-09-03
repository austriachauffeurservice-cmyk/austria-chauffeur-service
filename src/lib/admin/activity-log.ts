import 'server-only'
import { createServiceRoleClient } from '@/lib/supabase/server'

export type AdminAction =
  | 'login'
  | 'login_failed'
  | 'logout'
  | 'status_updated'
  | 'price_updated'
  | 'driver_assigned'
  | 'trip_details_updated'
  | 'tags_updated'
  | 'booking_deleted'
  | 'booking_restored'
  | 'booking_purged'
  | 'booking_created'
  | 'email_sent'
  | 'note_added'
  | 'bulk_status_updated'
  | 'bulk_deleted'
  | 'partner_created'
  | 'partner_updated'
  | 'partner_deactivated'

type LogEntry = {
  actor?: string
  action: AdminAction
  bookingId?: string
  details?: Record<string, unknown>
  request?: Request
}

export function getRequestIp(request?: Request): string | null {
  if (!request) return null
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    null
  )
}

// Best-effort: a failure to log must never break the admin action it's
// describing (e.g. a booking update should still succeed even if the
// admin_activity_log table doesn't exist yet — see supabase/002_activity_log.sql).
export async function logActivity(entry: LogEntry): Promise<void> {
  try {
    const supabase = createServiceRoleClient()
    const { error } = await supabase.from('admin_activity_log').insert({
      actor: entry.actor || 'admin',
      action: entry.action,
      booking_id: entry.bookingId || null,
      details: entry.details || null,
      ip_address: getRequestIp(entry.request),
    })
    if (error) {
      console.warn('Failed to write admin activity log (non-fatal):', error.message)
    }
  } catch (err) {
    console.warn('Failed to write admin activity log (non-fatal):', err)
  }
}

// Best-effort brute-force guard for /api/admin/login: counts recent failed
// attempts from this IP in the activity log (already written on every
// failure) rather than adding new state — fails open (returns 0, i.e. "not
// rate limited") if the query itself fails, since a logging outage must
// never lock out a legitimate admin.
const LOGIN_LOCKOUT_THRESHOLD = 5
const LOGIN_LOCKOUT_WINDOW_MS = 15 * 60 * 1000

export async function countRecentFailedLogins(request: Request): Promise<number> {
  const ip = getRequestIp(request)
  if (!ip) return 0
  try {
    const supabase = createServiceRoleClient()
    const since = new Date(Date.now() - LOGIN_LOCKOUT_WINDOW_MS).toISOString()
    const { count, error } = await supabase
      .from('admin_activity_log')
      .select('id', { count: 'exact', head: true })
      .eq('action', 'login_failed')
      .eq('ip_address', ip)
      .gte('created_at', since)
    if (error) {
      console.warn('Failed to check recent login failures (non-fatal, failing open):', error.message)
      return 0
    }
    return count || 0
  } catch (err) {
    console.warn('Failed to check recent login failures (non-fatal, failing open):', err)
    return 0
  }
}

export function isLoginLockedOut(recentFailures: number): boolean {
  return recentFailures >= LOGIN_LOCKOUT_THRESHOLD
}
