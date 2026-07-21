import type { CreateBookingInput } from './schema'

type BookingEmailData = CreateBookingInput & { id: string }
type Locale = 'en' | 'de'

function loc(booking: { locale?: string }): Locale {
  return booking.locale === 'de' ? 'de' : 'en'
}

export function customerConfirmationEmail(booking: BookingEmailData) {
  if (loc(booking) === 'de') {
    const subject = 'Buchungsanfrage erhalten — Austria Chauffeur Service'
    const html = `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Vielen Dank, ${escapeHtml(booking.fullName)}!</h2>
        <p>Wir haben Ihre Chauffeur-Buchungsanfrage erhalten. Unser Team bestätigt in Kürze Verfügbarkeit und Preis.</p>
        <table cellpadding="4">
          <tr><td><strong>Abholung</strong></td><td>${escapeHtml(booking.pickupLocation)}</td></tr>
          <tr><td><strong>Ablieferung</strong></td><td>${escapeHtml(booking.dropoffLocation)}</td></tr>
          <tr><td><strong>Datum</strong></td><td>${escapeHtml(booking.pickupDate)}</td></tr>
          <tr><td><strong>Uhrzeit</strong></td><td>${escapeHtml(booking.pickupTime)}</td></tr>
          <tr><td><strong>Fahrgäste</strong></td><td>${booking.passengers}</td></tr>
          <tr><td><strong>Fahrzeug</strong></td><td>${escapeHtml(booking.vehicleType)}</td></tr>
          ${booking.flightNumber ? `<tr><td><strong>Flug</strong></td><td>${escapeHtml(booking.flightNumber)}</td></tr>` : ''}
        </table>
        <p>Referenz: ${booking.id}</p>
        <p>— Austria Chauffeur Service</p>
      </div>
    `
    return { subject, html }
  }

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

type StatusEmailBooking = {
  locale?: string
  fullName: string
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  pickupTime: string
  id: string
}

export function statusConfirmedEmail(booking: StatusEmailBooking) {
  if (loc(booking) === 'de') {
    return {
      subject: `Buchung bestätigt — Austria Chauffeur Service (${booking.pickupDate})`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Ihre Buchung ist bestätigt</h2>
          <p>Liebe/r ${escapeHtml(booking.fullName)},</p>
          <p>Ihre Chauffeur-Reservierung wurde <strong>bestätigt</strong> für ${escapeHtml(booking.pickupDate)} um ${escapeHtml(booking.pickupTime)}.</p>
          <p><strong>Von:</strong> ${escapeHtml(booking.pickupLocation)}<br /><strong>Nach:</strong> ${escapeHtml(booking.dropoffLocation)}</p>
          <p>Fahrer- und Fahrzeugdetails erhalten Sie kurz vor der Abholzeit.</p>
          <p>Referenz: ${booking.id}</p>
          <p>— Austria Chauffeur Service</p>
        </div>
      `,
    }
  }
  return {
    subject: `Booking Confirmed — Austria Chauffeur Service (${booking.pickupDate})`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Your booking is confirmed</h2>
        <p>Dear ${escapeHtml(booking.fullName)},</p>
        <p>Your chauffeur reservation has been <strong>confirmed</strong> for ${escapeHtml(booking.pickupDate)} at ${escapeHtml(booking.pickupTime)}.</p>
        <p><strong>Pickup:</strong> ${escapeHtml(booking.pickupLocation)}<br /><strong>Drop-off:</strong> ${escapeHtml(booking.dropoffLocation)}</p>
        <p>Driver and vehicle details will be sent shortly before your pickup time.</p>
        <p>Reference: ${booking.id}</p>
        <p>— Austria Chauffeur Service</p>
      </div>
    `,
  }
}

export function statusCancelledEmail(booking: StatusEmailBooking) {
  if (loc(booking) === 'de') {
    return {
      subject: `Buchung storniert — Austria Chauffeur Service (${booking.pickupDate})`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Ihre Buchung wurde storniert</h2>
          <p>Liebe/r ${escapeHtml(booking.fullName)},</p>
          <p>Ihre Buchung für ${escapeHtml(booking.pickupDate)} um ${escapeHtml(booking.pickupTime)} (${escapeHtml(booking.pickupLocation)} → ${escapeHtml(booking.dropoffLocation)}) wurde storniert.</p>
          <p>Falls dies unerwartet kommt oder Sie erneut buchen möchten, kontaktieren Sie uns bitte direkt.</p>
          <p>Referenz: ${booking.id}</p>
          <p>— Austria Chauffeur Service</p>
        </div>
      `,
    }
  }
  return {
    subject: `Booking Cancelled — Austria Chauffeur Service (${booking.pickupDate})`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Your booking has been cancelled</h2>
        <p>Dear ${escapeHtml(booking.fullName)},</p>
        <p>Your booking for ${escapeHtml(booking.pickupDate)} at ${escapeHtml(booking.pickupTime)} (${escapeHtml(booking.pickupLocation)} → ${escapeHtml(booking.dropoffLocation)}) has been cancelled.</p>
        <p>If this wasn't expected or you'd like to rebook, please contact us directly.</p>
        <p>Reference: ${booking.id}</p>
        <p>— Austria Chauffeur Service</p>
      </div>
    `,
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
