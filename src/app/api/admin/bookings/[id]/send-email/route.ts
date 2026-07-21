import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { getResendClient } from '@/lib/resend'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params
    let body: { subject?: string; message?: string; priceQuote?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const { subject, message, priceQuote } = body

    if (!subject || !message) {
      return NextResponse.json({ error: 'Subject and message are required' }, { status: 400 })
    }

    const supabase = createServiceRoleClient()

    // Fetch booking details
    const { data: booking, error: fetchError } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', id)
      .single()

    if (fetchError || !booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
    }

    // If price quote provided, update in DB
    if (priceQuote) {
      await supabase
        .from('bookings')
        .update({ price_quote: priceQuote, updated_at: new Date().toISOString() })
        .eq('id', id)
    }

    const resend = getResendClient()
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      (process.env.RESEND_EMAIL_DOMAIN
        ? `bookings@${process.env.RESEND_EMAIL_DOMAIN}`
        : 'bookings@austriachauffeurservice.com')

    const formattedHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 24px; color: #18181b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e4e4e7; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #0d0d0d; padding: 32px 24px; text-align: center; color: #ffffff; border-bottom: 3px solid #D4AF37; }
          .logo { font-size: 20px; font-weight: 700; color: #D4AF37; letter-spacing: 0.05em; text-transform: uppercase; }
          .subtitle { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 4px; }
          .content { padding: 32px 24px; }
          .message-box { font-size: 15px; line-height: 1.6; color: #27272a; white-space: pre-wrap; margin-bottom: 24px; }
          .details-card { background: #fafafa; border: 1px solid #f4f4f5; border-radius: 8px; padding: 16px; margin-bottom: 24px; font-size: 13px; }
          .details-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px border #f4f4f5; }
          .label { color: #71717a; font-weight: 500; }
          .value { color: #09090b; font-weight: 600; text-align: right; }
          .price-badge { background: #fef08a; color: #854d0e; padding: 12px 16px; border-radius: 8px; font-size: 16px; font-weight: 700; text-align: center; margin: 20px 0; }
          .footer { background: #fafafa; padding: 20px 24px; text-align: center; font-size: 12px; color: #a1a1aa; border-top: 1px solid #f4f4f5; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Austria Chauffeur Service</div>
            <div class="subtitle">Executive Airport & Intercity Transfers</div>
          </div>
          <div class="content">
            <div class="message-box">${escapeHtml(message)}</div>

            ${
              priceQuote
                ? `<div class="price-badge">Official Quoted Rate: €${escapeHtml(priceQuote)} EUR</div>`
                : ''
            }

            <div class="details-card">
              <div style="font-weight: 700; margin-bottom: 10px; color: #09090b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Reservation Summary (Ref: ${booking.id.slice(0, 8)})</div>
              <div class="details-row"><span class="label">Passenger:</span> <span class="value">${escapeHtml(booking.full_name)}</span></div>
              <div class="details-row"><span class="label">Pickup Location:</span> <span class="value">${escapeHtml(booking.pickup_location)}</span></div>
              <div class="details-row"><span class="label">Dropoff Location:</span> <span class="value">${escapeHtml(booking.dropoff_location)}</span></div>
              <div class="details-row"><span class="label">Date & Time:</span> <span class="value">${booking.pickup_date} at ${booking.pickup_time}</span></div>
              <div class="details-row"><span class="label">Vehicle Class:</span> <span class="value">${escapeHtml(booking.vehicle_type).toUpperCase()} (${booking.passengers} Pax)</span></div>
            </div>

            <p style="font-size: 13px; color: #71717a; text-align: center;">
              Should you have any questions, please reply directly to this email or call our 24/7 concierge team.
            </p>
          </div>
          <div class="footer">
            Austria Chauffeur Service · Vienna · Salzburg · Innsbruck<br/>
            Premium Luxury Mobility Solutions
          </div>
        </div>
      </body>
      </html>
    `

    const { data: emailRes, error: sendError } = await resend.emails.send({
      from: fromAddress,
      to: booking.email,
      subject: subject,
      html: formattedHtml,
    })

    if (sendError) {
      console.error('Failed to send custom email:', sendError)
      return NextResponse.json({ error: sendError.message || 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, emailId: emailRes?.id })
  } catch (err) {
    console.error('Error sending custom client email:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
