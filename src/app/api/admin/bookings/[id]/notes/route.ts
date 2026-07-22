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

export async function GET(request: NextRequest, { params }: RouteParams) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const supabase = createServiceRoleClient()
  const { data, error } = await supabase
    .from('booking_internal_notes')
    .select('*')
    .eq('booking_id', id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Failed to fetch internal notes:', error)
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 })
  }

  return NextResponse.json({ notes: data || [] })
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json().catch(() => null)
  const note: unknown = body?.note

  if (typeof note !== 'string' || note.trim().length === 0) {
    return NextResponse.json({ error: 'note is required' }, { status: 400 })
  }
  if (note.length > 4000) {
    return NextResponse.json({ error: 'note is too long (max 4000 chars)' }, { status: 400 })
  }

  const actor = actorFrom(request)
  const supabase = createServiceRoleClient()
  const { data, error } = await supabase
    .from('booking_internal_notes')
    .insert({ booking_id: id, author: actor, note: note.trim() })
    .select('*')
    .single()

  if (error) {
    console.error('Failed to add internal note:', error)
    return NextResponse.json({ error: 'Failed to add note' }, { status: 500 })
  }

  await logActivity({ actor, action: 'note_added', bookingId: id, details: { note: note.trim() }, request })

  return NextResponse.json({ note: data }, { status: 201 })
}
