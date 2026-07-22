import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { logActivity } from '@/lib/admin/activity-log'
import { requireAdminSession } from '@/lib/admin/auth'

function actorFrom(request: NextRequest): string {
  return request.headers.get('x-admin-actor') || 'admin'
}

export async function GET(request: NextRequest) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const includeInactive = searchParams.get('includeInactive') === 'true'

  const supabase = createServiceRoleClient()
  let query = supabase.from('partners').select('*').order('name', { ascending: true })
  if (!includeInactive) query = query.eq('active', true)

  const { data, error } = await query
  if (error) {
    console.error('Failed to fetch partners:', error)
    return NextResponse.json({ error: 'Failed to fetch partners' }, { status: 500 })
  }

  return NextResponse.json({ partners: data || [] })
}

export async function POST(request: NextRequest) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  const name: unknown = body?.name
  if (typeof name !== 'string' || name.trim().length === 0) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 })
  }

  const supabase = createServiceRoleClient()
  const { data, error } = await supabase
    .from('partners')
    .insert({
      name: name.trim(),
      phone: typeof body?.phone === 'string' ? body.phone.trim() || null : null,
      email: typeof body?.email === 'string' ? body.email.trim() || null : null,
      notes: typeof body?.notes === 'string' ? body.notes.trim() || null : null,
    })
    .select('*')
    .single()

  if (error) {
    console.error('Failed to create partner:', error)
    return NextResponse.json({ error: 'Failed to create partner' }, { status: 500 })
  }

  await logActivity({ actor: actorFrom(request), action: 'partner_created', details: { name: data.name }, request })

  return NextResponse.json({ partner: data }, { status: 201 })
}
