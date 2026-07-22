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

export function pickupReminderEmail(booking: StatusEmailBooking) {
  if (loc(booking) === 'de') {
    return {
      subject: `Erinnerung: Ihre Abholung morgen — ${booking.pickupTime}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Ihre Abholung ist morgen</h2>
          <p>Liebe/r ${escapeHtml(booking.fullName)},</p>
          <p>Kurze Erinnerung an Ihren bevorstehenden Chauffeurtransfer:</p>
          <p><strong>Datum:</strong> ${escapeHtml(booking.pickupDate)}<br /><strong>Uhrzeit:</strong> ${escapeHtml(booking.pickupTime)}<br />
          <strong>Von:</strong> ${escapeHtml(booking.pickupLocation)}<br /><strong>Nach:</strong> ${escapeHtml(booking.dropoffLocation)}</p>
          <p>Bei Fragen antworten Sie einfach auf diese E-Mail.</p>
          <p>Referenz: ${booking.id}</p>
          <p>— Austria Chauffeur Service</p>
        </div>
      `,
    }
  }
  return {
    subject: `Reminder: Your pickup is tomorrow at ${booking.pickupTime}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Your pickup is tomorrow</h2>
        <p>Dear ${escapeHtml(booking.fullName)},</p>
        <p>A quick reminder about your upcoming chauffeur transfer:</p>
        <p><strong>Date:</strong> ${escapeHtml(booking.pickupDate)}<br /><strong>Time:</strong> ${escapeHtml(booking.pickupTime)}<br />
        <strong>Pickup:</strong> ${escapeHtml(booking.pickupLocation)}<br /><strong>Drop-off:</strong> ${escapeHtml(booking.dropoffLocation)}</p>
        <p>If you have any questions, just reply to this email.</p>
        <p>Reference: ${booking.id}</p>
        <p>— Austria Chauffeur Service</p>
      </div>
    `,
  }
}

export function reviewRequestEmail(booking: StatusEmailBooking) {
  if (loc(booking) === 'de') {
    return {
      subject: `Wie war Ihre Fahrt, ${booking.fullName.split(' ')[0]}?`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Danke, dass Sie mit uns gefahren sind</h2>
          <p>Liebe/r ${escapeHtml(booking.fullName)},</p>
          <p>Wir hoffen, Ihre Fahrt von ${escapeHtml(booking.pickupLocation)} nach ${escapeHtml(booking.dropoffLocation)} war angenehm.</p>
          <p>Wir würden uns sehr über eine kurze Bewertung freuen — sie hilft uns, unseren Service weiter zu verbessern.</p>
          <p>Referenz: ${booking.id}</p>
          <p>— Austria Chauffeur Service</p>
        </div>
      `,
    }
  }
  return {
    subject: `How was your trip, ${booking.fullName.split(' ')[0]}?`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Thank you for travelling with us</h2>
        <p>Dear ${escapeHtml(booking.fullName)},</p>
        <p>We hope your trip from ${escapeHtml(booking.pickupLocation)} to ${escapeHtml(booking.dropoffLocation)} was a pleasant one.</p>
        <p>We'd really appreciate a quick review — it helps us keep improving the service.</p>
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
