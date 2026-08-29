import { NextRequest, NextResponse } from 'next/server'
import { getResendClient } from '@/lib/resend'

// Receives Resend's "Inbound" webhook (configured in the Resend dashboard
// under Receiving) and forwards each incoming customer email to a personal
// inbox, since Resend Receiving has no built-in "forward to an external
// address" toggle of its own — this route is that missing piece.
//
// Required env vars:
// - RESEND_API_KEY            already used by getResendClient()
// - RESEND_WEBHOOK_SECRET     the "Signing Secret" (whsec_...) shown when
//                             this webhook is created in the Resend dashboard
// - BOOKING_INBOX_FORWARD_TO  the Gmail (or other) address to forward to
export async function POST(request: NextRequest) {
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET
  const forwardTo = process.env.BOOKING_INBOX_FORWARD_TO

  if (!webhookSecret || !forwardTo) {
    console.error('Missing RESEND_WEBHOOK_SECRET or BOOKING_INBOX_FORWARD_TO environment variable')
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const svixId = request.headers.get('svix-id')
  const svixTimestamp = request.headers.get('svix-timestamp')
  const svixSignature = request.headers.get('svix-signature')

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: 'Missing signature headers' }, { status: 400 })
  }

  // Signature verification needs the exact raw bytes Resend signed — reading
  // it as text (rather than request.json()) keeps that intact.
  const payload = await request.text()
  const resend = getResendClient()

  let event
  try {
    event = resend.webhooks.verify({
      payload,
      headers: { id: svixId, timestamp: svixTimestamp, signature: svixSignature },
      webhookSecret,
    })
  } catch (err) {
    console.error('Invalid inbound-email webhook signature:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  if (event.type !== 'email.received') {
    // Only Receiving is registered on this webhook, but ignore anything else safely.
    return NextResponse.json({ received: true })
  }

  const { error } = await resend.emails.receiving.forward({
    emailId: event.data.email_id,
    to: forwardTo,
    from: 'booking@austriachauffeurservice.com',
    passthrough: true,
  })

  if (error) {
    console.error('Failed to forward inbound email:', error)
    return NextResponse.json({ error: error.message || 'Forward failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
