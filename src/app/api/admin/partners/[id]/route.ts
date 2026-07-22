import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { logActivity } from '@/lib/admin/activity-log'
import { requireAdminSession } from '@/lib/admin/auth'

interface RouteParams {
  params: Promise<{ id: string }>
}

function actorFrom(request: NextRequest): string {
  return request.headers.get('x-admin-actor') || 'admin'
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json().catch(() => null)
  const supabase = createServiceRoleClient()

  const updates: Record<string, unknown> = {}
  if (typeof body?.name === 'string') updates.name = body.name.trim()
  if (typeof body?.phone === 'string') updates.phone = body.phone.trim() || null
  if (typeof body?.email === 'string') updates.email = body.email.trim() || null
  if (typeof body?.notes === 'string') updates.notes = body.notes.trim() || null
  if (typeof body?.active === 'boolean') updates.active = body.active

  const { data, error } = await supabase.from('partners').update(updates).eq('id', id).select('*').single()

  if (error) {
    console.error(`Failed to update partner ${id}:`, error)
    return NextResponse.json({ error: 'Failed to update partner' }, { status: 500 })
  }

  await logActivity({
    actor: actorFrom(request),
    action: updates.active === false ? 'partner_deactivated' : 'partner_updated',
    details: { name: data.name },
    request,
  })

  return NextResponse.json({ partner: data })
}
