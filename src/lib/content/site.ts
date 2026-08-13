export const siteUrl = 'https://austriachauffeurservice.com'
export const siteName = 'Austria Chauffeur Service'
export const homeTitle = 'Private Chauffeur Service Austria | Fixed-Price Airport & City Transfers'
export const siteDescription =
  'Private chauffeur service across Austria — airport pickups, city-to-city transfers, and cross-border trips to 7 neighboring countries. Fixed pricing, licensed drivers, booked in minutes.'

export const contactEmail = 'booking@austriachauffeurservice.com'
export const contactAddress = 'Kärntner Straße 51, 1010 Wien, Austria'

export const whatsappNumber = '+973 3442 7708'
const whatsappDigits = whatsappNumber.replace(/[^\d]/g, '')
export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`
}
// Trust badge shown site-wide. We broker bookings to independently licensed
// chauffeur partners — we do not hold the Mietwagen-Gewerbe ourselves, so
// this must describe the partner network, not our own trade registration.
export const licensingInfo = 'Fahrten durch lizenzierte Chauffeurpartner · Licensed Partner Network'
export const businessHours = '24/7 Availability'

export const areaServedCountries = [
  'Austria',
  'Germany',
  'Czech Republic',
  'Slovakia',
  'Hungary',
  'Slovenia',
  'Italy',
  'Switzerland',
  'Liechtenstein',
]
