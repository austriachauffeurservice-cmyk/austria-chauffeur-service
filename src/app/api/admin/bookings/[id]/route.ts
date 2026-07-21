import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params
    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const supabase = createServiceRoleClient()

    const { data: updated, error } = await supabase
      .from('bookings')
      .update({
        ...(body.status !== undefined && { status: body.status }),
        ...(body.price_quote !== undefined && { price_quote: body.price_quote }),
        ...(body.assigned_driver !== undefined && { assigned_driver: body.assigned_driver }),
        ...(body.notes !== undefined && { notes: body.notes }),
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select('*')
      .single()

    if (error) {
      console.error(`Failed to update booking ${id}:`, error)
      return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 })
    }

    return NextResponse.json({ booking: updated })
  } catch (err) {
    console.error('Unexpected error in PATCH /api/admin/bookings/[id]:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params
    const supabase = createServiceRoleClient()

    const { error } = await supabase.from('bookings').delete().eq('id', id)

    if (error) {
      console.error(`Failed to delete booking ${id}:`, error)
      return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Booking deleted successfully' })
  } catch (err) {
    console.error('Unexpected error in DELETE /api/admin/bookings/[id]:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
