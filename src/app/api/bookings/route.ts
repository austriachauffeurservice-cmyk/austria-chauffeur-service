import { NextRequest, NextResponse } from 'next/server'
import { createBookingSchema } from '@/lib/bookings/schema'
import { adminNotificationEmail, customerConfirmationEmail } from '@/lib/bookings/emails'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { getResendClient } from '@/lib/resend'
import { dispatchTenantWebhookAndRecord } from '@/lib/bookings/webhook'

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = createBookingSchema.safeParse(body)
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
      locale: input.locale,
    })
    .select('id')
    .single()

  if (insertError || !booking) {
    console.error('Failed to insert booking', insertError)
    return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 })
  }

  const emailData = { ...input, id: booking.id as string }
  const fromAddress =
    process.env.RESEND_FROM_EMAIL ||
    (process.env.RESEND_EMAIL_DOMAIN
      ? `bookings@${process.env.RESEND_EMAIL_DOMAIN}`
      : 'bookings@austriachauffeurservice.com')
  const adminAddress = process.env.ADMIN_NOTIFICATION_EMAIL || process.env.ADMIN_GMAIL

  let customerEmailSent = false
  let adminEmailSent = false

  try {
    const resend = getResendClient()
    const customerEmail = customerConfirmationEmail(emailData)
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: input.email,
      subject: customerEmail.subject,
      html: customerEmail.html,
    })
    customerEmailSent = !error
    if (error) console.error('Failed to send customer email', error)
  } catch (err) {
    console.error('Failed to send customer email', err)
  }

  if (adminAddress) {
    try {
      const resend = getResendClient()
      const adminEmail = adminNotificationEmail(emailData)
      const { error } = await resend.emails.send({
        from: fromAddress,
        to: adminAddress,
        subject: adminEmail.subject,
        html: adminEmail.html,
      })
      adminEmailSent = !error
      if (error) console.error('Failed to send admin email', error)
    } catch (err) {
      console.error('Failed to send admin email', err)
    }
  }

  // Asynchronously dispatch lead to tenant webhook if configured
  dispatchTenantWebhookAndRecord({
    ...input,
    id: booking.id,
    created_at: new Date().toISOString(),
  })

  await supabase
    .from('bookings')
    .update({
      customer_email_sent: customerEmailSent,
      admin_email_sent: adminEmailSent,
    })
    .eq('id', booking.id)

  return NextResponse.json({ id: booking.id }, { status: 201 })
}
