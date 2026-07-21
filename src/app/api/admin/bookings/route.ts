import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { manualBookingSchema } from '@/lib/bookings/schema'
import { customerConfirmationEmail } from '@/lib/bookings/emails'
import { getResendClient } from '@/lib/resend'
import { dispatchTenantWebhookAndRecord } from '@/lib/bookings/webhook'
import { logActivity } from '@/lib/admin/activity-log'
import { requireAdminSession } from '@/lib/admin/auth'

function actorFrom(request: NextRequest): string {
  return request.headers.get('x-admin-actor') || 'admin'
}

export async function GET(request: NextRequest) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const search = searchParams.get('search')
    const dateFrom = searchParams.get('dateFrom')
    const dateTo = searchParams.get('dateTo')
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = Math.min(parseInt(searchParams.get('limit') || '20', 10), 100)
    const offset = (page - 1) * limit

    const supabase = createServiceRoleClient()

    let query = supabase.from('bookings').select('*', { count: 'exact' })

    // Default view: newest leads first. Once a date filter narrows this to
    // a dispatch-style view (e.g. "today"), chronological pickup order is
    // more useful than lead-received order.
    if (dateFrom || dateTo) {
      query = query.order('pickup_date', { ascending: true }).order('pickup_time', { ascending: true })
    } else {
      query = query.order('created_at', { ascending: false })
    }

    if (status && status !== 'all') {
      query = query.eq('status', status)
    }

    if (dateFrom) {
      query = query.gte('pickup_date', dateFrom)
    }
    if (dateTo) {
      query = query.lte('pickup_date', dateTo)
    }

    if (search) {
      query = query.or(
        `full_name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%,pickup_location.ilike.%${search}%,dropoff_location.ilike.%${search}%`
      )
    }

    query = query.range(offset, offset + limit - 1)

    const { data: bookings, count, error } = await query

    if (error) {
      console.error('Failed to fetch bookings:', error)
      return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
    }

    const total = count || 0
    const totalPages = Math.ceil(total / limit)

    return NextResponse.json({
      bookings: bookings || [],
      pagination: {
        total,
        page,
        limit,
        totalPages,
      },
    })
  } catch (err) {
    console.error('Unexpected error in GET /api/admin/bookings:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// Manual entry for leads received by phone, WhatsApp, or email — logs them
// into the same pipeline as web-form bookings (dispatch, PDFs, status).
export async function POST(request: NextRequest) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const parsed = manualBookingSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.issues },
        { status: 400 }
      )
    }

    const input = parsed.data
    const supabase = createServiceRoleClient()

    const { data: booking, error: insertError } = await supabase
      .from('bookings')
      .insert({
        full_name: input.fullName,
        email: input.email,
        phone: input.phone,
        pickup_location: input.pickupLocation,
        dropoff_location: input.dropoffLocation,
        pickup_date: input.pickupDate,
        pickup_time: input.pickupTime,
        passengers: input.passengers,
        vehicle_type: input.vehicleType,
        flight_number: input.flightNumber || null,
        notes: input.notes || null,
        source: input.source,
        status: input.status,
        price_quote: input.priceQuote || undefined,
        locale: input.locale,
      })
      .select('*')
      .single()

    if (insertError || !booking) {
      console.error('Failed to insert manual booking', insertError)
      return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 })
    }

    const actor = actorFrom(request)
    await logActivity({
      actor,
      action: 'booking_created',
      bookingId: booking.id,
      details: { source: input.source, full_name: input.fullName },
      request,
    })

    let customerEmailSent = false
    if (input.sendConfirmationEmail) {
      try {
        const resend = getResendClient()
        const fromAddress =
          process.env.RESEND_FROM_EMAIL ||
          (process.env.RESEND_EMAIL_DOMAIN
            ? `bookings@${process.env.RESEND_EMAIL_DOMAIN}`
            : 'bookings@austriachauffeurservice.com')
        const customerEmail = customerConfirmationEmail({ ...input, id: booking.id })
        const { error } = await resend.emails.send({
          from: fromAddress,
          to: input.email,
          subject: customerEmail.subject,
          html: customerEmail.html,
        })
        customerEmailSent = !error
        if (error) console.error('Failed to send manual-entry customer email', error)
      } catch (err) {
        console.error('Failed to send manual-entry customer email', err)
      }

      await supabase
        .from('bookings')
        .update({ customer_email_sent: customerEmailSent })
        .eq('id', booking.id)
    }

    // Forward to the fulfillment partner the same as a web-form lead
    dispatchTenantWebhookAndRecord({
      ...input,
      id: booking.id,
      created_at: booking.created_at,
    })

    return NextResponse.json({ booking }, { status: 201 })
  } catch (err) {
    console.error('Unexpected error in POST /api/admin/bookings:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
