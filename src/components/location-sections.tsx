import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { localizedHref } from '@/lib/i18n'

const copy: Record<
  Locale,
  {
    hotelsEyebrow: string
    hotelsHeading: (place: string) => string
    hotelsDefaultNote: (place: string) => string
    bookCta: string
    hotelsFootnote: (place: string) => string
    attractionsEyebrow: string
    attractionsHeading: (heading: string, place: string) => string
    attractionsBody: (place: string) => string
    requestTransferHere: string
  }
> = {
  en: {
    hotelsEyebrow: 'Hotel Transfers',
    hotelsHeading: (place) => `Hotel Pickup & Drop-off in ${place}`,
    hotelsDefaultNote: (place) =>
      `Direct pickup and drop-off at hotels throughout ${place} — just share your hotel name and address when booking.`,
    bookCta: 'Book →',
    hotelsFootnote: (place) =>
      `Staying somewhere not listed? We serve every hotel, chalet, and private address in ${place} — just enter it as your pickup or drop-off.`,
    attractionsEyebrow: 'Places to See',
    attractionsHeading: (heading, place) => `${heading} in ${place}`,
    attractionsBody: (place) =>
      `Add a stop, book a return transfer, or arrange an hourly chauffeur to see ${place}'s landmarks at your own pace.`,
    requestTransferHere: 'Request a transfer here →',
  },
  de: {
    hotelsEyebrow: 'Hoteltransfers',
    hotelsHeading: (place) => `Hotelabholung & -ablieferung in ${place}`,
    hotelsDefaultNote: (place) =>
      `Direkte Abholung und Ablieferung an Hotels in ganz ${place} — geben Sie einfach Ihren Hotelnamen und die Adresse bei der Buchung an.`,
    bookCta: 'Buchen →',
    hotelsFootnote: (place) =>
      `Übernachten Sie woanders? Wir bedienen jedes Hotel, Chalet und jede Privatadresse in ${place} — geben Sie es einfach als Abhol- oder Zielort an.`,
    attractionsEyebrow: 'Sehenswürdigkeiten',
    attractionsHeading: (heading, place) => `${heading} in ${place}`,
    attractionsBody: (place) =>
      `Fügen Sie einen Stopp hinzu, buchen Sie einen Rücktransfer oder einen stundenweisen Chauffeur, um die Sehenswürdigkeiten von ${place} in Ihrem eigenen Tempo zu erleben.`,
    requestTransferHere: 'Transfer hierher anfragen →',
  },
}

export function HotelsSection({
  place,
  hotels,
  hotelNote,
  locale = 'en',
}: {
  place: string
  hotels?: { name: string; area?: string }[]
  hotelNote?: string
  locale?: Locale
}) {
  if ((!hotels || hotels.length === 0) && !hotelNote) return null
  const t = copy[locale]
  return (
    <section className="border-t border-brand-line bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
          {t.hotelsEyebrow}
        </p>
        <h2 className="font-display mt-2 text-2xl text-brand-ink">{t.hotelsHeading(place)}</h2>
        <p className="mt-3 max-w-xl text-sm text-brand-ink-2/80">
          {hotelNote || t.hotelsDefaultNote(place)}
        </p>
        {hotels && hotels.length > 0 && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hotels.map((hotel) => (
              <Link
                key={hotel.name}
                href={localizedHref(`/booking?to=${encodeURIComponent(`${hotel.name}, ${place}`)}`, locale)}
                className="group flex items-center justify-between gap-3 rounded-sm border border-brand-line p-4 text-sm transition-colors hover:border-brand-gold"
              >
                <span>
                  <span className="font-semibold text-brand-ink group-hover:text-brand-gold">
                    {hotel.name}
                  </span>
                  {hotel.area && (
                    <span className="block text-xs text-brand-ink-2/60">{hotel.area}</span>
                  )}
                </span>
                <span className="shrink-0 text-xs font-semibold text-brand-ink-2/50 group-hover:text-brand-gold">
                  {t.bookCta}
                </span>
              </Link>
            ))}
          </div>
        )}
        <p className="mt-4 text-xs text-brand-ink-2/60">{t.hotelsFootnote(place)}</p>
      </div>
    </section>
  )
}

export function AttractionsSection({
  place,
  attractions,
  heading,
  locale = 'en',
}: {
  place: string
  attractions?: { name: string; description: string }[]
  heading?: string
  locale?: Locale
}) {
  if (!attractions || attractions.length === 0) return null
  const t = copy[locale]
  const resolvedHeading = heading || (locale === 'de' ? 'Top-Sehenswürdigkeiten' : 'Top Tourist Attractions')
  return (
    <section className="border-t border-brand-line bg-brand-cream">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
          {t.attractionsEyebrow}
        </p>
        <h2 className="font-display mt-2 text-2xl text-brand-ink">
          {t.attractionsHeading(resolvedHeading, place)}
        </h2>
        <p className="mt-3 max-w-xl text-sm text-brand-ink-2/80">{t.attractionsBody(place)}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {attractions.map((item) => (
            <div key={item.name} className="rounded-sm border border-brand-line bg-white p-5">
              <p className="font-semibold text-brand-ink">{item.name}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{item.description}</p>
              <Link
                href={localizedHref(`/booking?to=${encodeURIComponent(`${item.name}, ${place}`)}`, locale)}
                className="mt-3 inline-block text-xs font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
              >
                {t.requestTransferHere}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
