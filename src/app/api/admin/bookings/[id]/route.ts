import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { logActivity } from '@/lib/admin/activity-log'
import { requireAdminSession } from '@/lib/admin/auth'
import { statusConfirmedEmail, statusCancelledEmail } from '@/lib/bookings/emails'
import { getResendClient } from '@/lib/resend'

interface RouteParams {
  params: Promise<{ id: string }>
}

function actorFrom(request: NextRequest): string {
  return request.headers.get('x-admin-actor') || 'admin'
}

// Trip details a customer might get wrong or that dispatch needs to correct
// after the fact — separate from status/price/driver which already had
// their own dedicated activity-log entries below.
const EDITABLE_TRIP_FIELDS = [
  'full_name',
  'email',
  'phone',
  'pickup_location',
  'dropoff_location',
  'pickup_date',
  'pickup_time',
  'passengers',
  'vehicle_type',
  'flight_number',
] as const

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

    // Written as a literal (not a computed join of EDITABLE_TRIP_FIELDS) so
    // supabase-js can statically parse the select string for typing —
    // keep this list in sync with EDITABLE_TRIP_FIELDS above.
    const { data: before } = await supabase
      .from('bookings')
      .select(
        'status, price_quote, assigned_driver, full_name, email, phone, pickup_location, dropoff_location, pickup_date, pickup_time, passengers, vehicle_type, flight_number'
      )
      .eq('id', id)
      .single()

    const tripFieldUpdates: Record<string, unknown> = {}
    const changedTripFields: string[] = []
    for (const field of EDITABLE_TRIP_FIELDS) {
      if (body[field] === undefined) continue
      tripFieldUpdates[field] = body[field]
      // Loose equality: passengers arrives as a number from the form but
      // Postgres may return it as either — avoid false-positive log noise.
      if (before && body[field] != (before as unknown as Record<string, unknown>)[field]) {
        changedTripFields.push(field)
      }
    }

    const { data: updated, error } = await supabase
      .from('bookings')
      .update({
        ...(body.status !== undefined && { status: body.status }),
        ...(body.price_quote !== undefined && { price_quote: body.price_quote }),
        ...(body.assigned_driver !== undefined && { assigned_driver: body.assigned_driver }),
        ...(body.notes !== undefined && { notes: body.notes }),
        ...tripFieldUpdates,
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
    const statusChanged = body.status !== undefined && body.status !== before?.status
    if (changedTripFields.length > 0) {
      await logActivity({
        actor,
        action: 'trip_details_updated',
        bookingId: id,
        details: { fields: changedTripFields },
        request,
      })
    }
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

    // Auto-notify the customer when dispatch confirms or cancels their trip.
    // Other statuses (pending, completed) don't have a customer-facing email
    // defined yet — a failure here must never fail the status update itself.
    if (statusChanged && (updated.status === 'confirmed' || updated.status === 'cancelled')) {
      try {
        const resend = getResendClient()
        const fromAddress =
          process.env.RESEND_FROM_EMAIL ||
          (process.env.RESEND_EMAIL_DOMAIN
            ? `bookings@${process.env.RESEND_EMAIL_DOMAIN}`
            : 'bookings@austriachauffeurservice.com')
        const email =
          updated.status === 'confirmed' ? statusConfirmedEmail(updated) : statusCancelledEmail(updated)
        const { error: sendError } = await resend.emails.send({
          from: fromAddress,
          to: updated.email,
          subject: email.subject,
          html: email.html,
        })
        if (sendError) {
          console.error('Failed to send status-change email:', sendError)
        } else {
          await logActivity({
            actor,
            action: 'email_sent',
            bookingId: id,
            details: { subject: email.subject, to: updated.email, trigger: `status_${updated.status}` },
            request,
          })
        }
      } catch (err) {
        console.error('Failed to send status-change email:', err)
      }
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
