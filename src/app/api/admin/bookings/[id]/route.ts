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

  try {
    const { id } = await params
    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const supabase = createServiceRoleClient()

    const { data: before } = await supabase
      .from('bookings')
      .select('status, price_quote, assigned_driver')
      .eq('id', id)
      .single()

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

    const actor = actorFrom(request)
    if (body.status !== undefined && body.status !== before?.status) {
      await logActivity({
        actor,
        action: 'status_updated',
        bookingId: id,
        details: { from: before?.status ?? null, to: body.status },
        request,
      })
    }
    if (body.price_quote !== undefined && body.price_quote !== before?.price_quote) {
      await logActivity({
        actor,
        action: 'price_updated',
        bookingId: id,
        details: { from: before?.price_quote ?? null, to: body.price_quote },
        request,
      })
    }
    if (body.assigned_driver !== undefined && body.assigned_driver !== before?.assigned_driver) {
      await logActivity({
        actor,
        action: 'driver_assigned',
        bookingId: id,
        details: { from: before?.assigned_driver ?? null, to: body.assigned_driver },
        request,
      })
    }

    return NextResponse.json({ booking: updated })
  } catch (err) {
    console.error('Unexpected error in PATCH /api/admin/bookings/[id]:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const supabase = createServiceRoleClient()

    const { data: booking } = await supabase
      .from('bookings')
      .select('full_name, email, pickup_date')
      .eq('id', id)
      .single()

    const { error } = await supabase.from('bookings').delete().eq('id', id)

    if (error) {
      console.error(`Failed to delete booking ${id}:`, error)
      return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 })
    }

    await logActivity({
      actor: actorFrom(request),
      action: 'booking_deleted',
      bookingId: id,
      details: booking
        ? { full_name: booking.full_name, email: booking.email, pickup_date: booking.pickup_date }
        : undefined,
      request,
    })

    return NextResponse.json({ success: true, message: 'Booking deleted successfully' })
  } catch (err) {
    console.error('Unexpected error in DELETE /api/admin/bookings/[id]:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
