import { BookingForm } from '@/components/booking-form'
import type { Locale } from '@/lib/i18n'

// Compact quote-request card meant to sit inside a page hero (side-by-side
// with the H1/intro), so above-the-fold visitors can start a booking
// immediately instead of scrolling to the bottom BookingCta.
export function HeroQuoteCard({
  locale = 'en',
  title,
  pickup,
  dropoff,
  showCrossBorderHint = true,
  dropoffHint,
}: {
  locale?: Locale
  title?: string
  pickup?: string
  dropoff?: string
  showCrossBorderHint?: boolean
  dropoffHint?: string
}) {
  const heading = title ?? (locale === 'de' ? 'Festpreisangebot anfragen' : 'Request a Fixed Quote')
  const noPaymentNote =
    locale === 'de'
      ? 'Für die Anfrage ist keine Zahlung erforderlich.'
      : 'No payment required to request a quote.'
  return (
    <div className="rounded-sm border border-brand-line bg-white p-6 shadow-xl sm:p-7">
      <p className="font-display text-lg text-brand-ink">{heading}</p>
      <div className="mt-4">
        <BookingForm
          locale={locale}
          defaultPickup={pickup}
          defaultDropoff={dropoff}
          showCrossBorderHint={showCrossBorderHint}
          dropoffHint={dropoffHint}
        />
      </div>
      <p className="mt-4 text-center text-xs text-brand-ink-2/60">{noPaymentNote}</p>
    </div>
  )
}
