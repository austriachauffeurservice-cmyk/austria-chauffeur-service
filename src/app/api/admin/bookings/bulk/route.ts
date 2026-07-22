import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { logActivity } from '@/lib/admin/activity-log'
import { requireAdminSession } from '@/lib/admin/auth'

function actorFrom(request: NextRequest): string {
  return request.headers.get('x-admin-actor') || 'admin'
}

const VALID_STATUSES = ['pending', 'confirmed', 'completed', 'cancelled']

// Bulk operations on a set of booking ids selected in the dashboard table.
// Deliberately narrow: status changes and soft-delete only. Anything more
// destructive (permanent delete) stays a one-at-a-time action from Trash.
export async function PATCH(request: NextRequest) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json().catch(() => null)
    const ids: unknown = body?.ids
    const action: unknown = body?.action

    if (!Array.isArray(ids) || ids.length === 0 || ids.some((id) => typeof id !== 'string')) {
      return NextResponse.json({ error: 'ids must be a non-empty array of strings' }, { status: 400 })
    }
    if (ids.length > 200) {
      return NextResponse.json({ error: 'Too many ids in one request (max 200)' }, { status: 400 })
    }

    const supabase = createServiceRoleClient()
    const actor = actorFrom(request)

    if (action === 'delete') {
      const { error } = await supabase
        .from('bookings')
        .update({ deleted_at: new Date().toISOString() })
        .in('id', ids)

      if (error) {
        console.error('Bulk delete failed:', error)
        return NextResponse.json({ error: 'Bulk delete failed' }, { status: 500 })
      }

      await logActivity({ actor, action: 'bulk_deleted', details: { ids }, request })
      return NextResponse.json({ success: true, count: ids.length })
    }

    const status: unknown = body?.status
    if (typeof status !== 'string' || !VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: `status must be one of ${VALID_STATUSES.join(', ')}` }, { status: 400 })
    }

    const { error } = await supabase
      .from('bookings')
      .update({ status, updated_at: new Date().toISOString() })
      .in('id', ids)

    if (error) {
      console.error('Bulk status update failed:', error)
      return NextResponse.json({ error: 'Bulk status update failed' }, { status: 500 })
    }

    await logActivity({ actor, action: 'bulk_status_updated', details: { ids, status }, request })
    return NextResponse.json({ success: true, count: ids.length })
  } catch (err) {
    console.error('Unexpected error in PATCH /api/admin/bookings/bulk:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
