import 'server-only'
import { createServiceRoleClient } from '@/lib/supabase/server'

export type AdminAction =
  | 'login'
  | 'login_failed'
  | 'logout'
  | 'status_updated'
  | 'price_updated'
  | 'driver_assigned'
  | 'booking_deleted'
  | 'booking_created'
  | 'email_sent'

type LogEntry = {
  actor?: string
  action: AdminAction
  bookingId?: string
  details?: Record<string, unknown>
  request?: Request
}

function getIp(request?: Request): string | null {
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
      ip_address: getIp(entry.request),
    })
    if (error) {
      console.warn('Failed to write admin activity log (non-fatal):', error.message)
    }
  } catch (err) {
    console.warn('Failed to write admin activity log (non-fatal):', err)
  }
}
