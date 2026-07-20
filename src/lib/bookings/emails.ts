import type { CreateBookingInput } from './schema'

type BookingEmailData = CreateBookingInput & { id: string }

export function customerConfirmationEmail(booking: BookingEmailData) {
  const subject = 'Booking received — Austria Chauffeur Service'
  const html = `
    <div style="font-family: sans-serif; line-height: 1.6;">
      <h2>Thank you, ${escapeHtml(booking.fullName)}!</h2>
      <p>We've received your chauffeur booking request. Our team will confirm availability and pricing shortly.</p>
      <table cellpadding="4">
        <tr><td><strong>Pickup</strong></td><td>${escapeHtml(booking.pickupLocation)}</td></tr>
        <tr><td><strong>Drop-off</strong></td><td>${escapeHtml(booking.dropoffLocation)}</td></tr>
        <tr><td><strong>Date</strong></td><td>${escapeHtml(booking.pickupDate)}</td></tr>
        <tr><td><strong>Time</strong></td><td>${escapeHtml(booking.pickupTime)}</td></tr>
        <tr><td><strong>Passengers</strong></td><td>${booking.passengers}</td></tr>
        <tr><td><strong>Vehicle</strong></td><td>${escapeHtml(booking.vehicleType)}</td></tr>
        ${booking.flightNumber ? `<tr><td><strong>Flight</strong></td><td>${escapeHtml(booking.flightNumber)}</td></tr>` : ''}
      </table>
      <p>Reference: ${booking.id}</p>
      <p>— Austria Chauffeur Service</p>
    </div>
  `
  return { subject, html }
}

export function adminNotificationEmail(booking: BookingEmailData) {
  const subject = `New booking request — ${booking.fullName}`
  const html = `
    <div style="font-family: sans-serif; line-height: 1.6;">
      <h2>New booking request</h2>
      <table cellpadding="4">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(booking.fullName)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(booking.email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(booking.phone)}</td></tr>
        <tr><td><strong>Pickup</strong></td><td>${escapeHtml(booking.pickupLocation)}</td></tr>
        <tr><td><strong>Drop-off</strong></td><td>${escapeHtml(booking.dropoffLocation)}</td></tr>
        <tr><td><strong>Date</strong></td><td>${escapeHtml(booking.pickupDate)}</td></tr>
        <tr><td><strong>Time</strong></td><td>${escapeHtml(booking.pickupTime)}</td></tr>
        <tr><td><strong>Passengers</strong></td><td>${booking.passengers}</td></tr>
        <tr><td><strong>Vehicle</strong></td><td>${escapeHtml(booking.vehicleType)}</td></tr>
        ${booking.flightNumber ? `<tr><td><strong>Flight</strong></td><td>${escapeHtml(booking.flightNumber)}</td></tr>` : ''}
        ${booking.notes ? `<tr><td><strong>Notes</strong></td><td>${escapeHtml(booking.notes)}</td></tr>` : ''}
      </table>
      <p>Booking id: ${booking.id}</p>
    </div>
  `
  return { subject, html }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
