import 'server-only'
import { Resend } from 'resend'

let client: Resend | null = null

export function getResendClient() {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('Missing RESEND_API_KEY environment variable')
    }
    client = new Resend(apiKey)
  }
  return client
}

// The single address all booking-related mail sends from and, by default,
// notifies — kept in one place so it can't drift out of sync across the
// booking, cron, and admin routes that each send email.
export function getBookingFromAddress() {
  return (
    process.env.RESEND_FROM_EMAIL ||
    (process.env.RESEND_EMAIL_DOMAIN
      ? `booking@${process.env.RESEND_EMAIL_DOMAIN}`
      : 'booking@austriachauffeurservice.com')
  )
}

export function getAdminNotificationAddress() {
  return (
    process.env.ADMIN_NOTIFICATION_EMAIL ||
    process.env.ADMIN_GMAIL ||
    'booking@austriachauffeurservice.com'
  )
}
