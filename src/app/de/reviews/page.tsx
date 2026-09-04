import type { Metadata } from 'next'
import Link from 'next/link'
import { testimonials } from '@/lib/content/de/testimonials'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Was Sie erwarten können',
  description:
    'Was Sie von Austria Chauffeur Service erwarten können — Beispielszenarien zu Flughafentransfers, Hochzeiten, Geschäftsreisen und grenzüberschreitenden Fahrten.',
  alternates: { canonical: '/de/reviews', languages: { en: '/reviews', de: '/de/reviews', 'x-default': '/reviews' } },
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/reviews`,
    title: 'Was Sie erwarten können',
    description:
      'Was Sie von Austria Chauffeur Service erwarten können — Beispielszenarien zu Flughafentransfers, Hochzeiten, Geschäftsreisen und grenzüberschreitenden Fahrten.',
  },
}

export default function ReviewsPageDe() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Was Sie erwarten können
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            So könnte Ihr Transfer aussehen
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Illustrative Beispiele, wie Buchungen typischerweise ablaufen — Flughafenabholungen,
            Hochzeiten, Geschäftsreisen und grenzüberschreitende Fahrten in ganz Österreich.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.context} className="rounded-sm border border-brand-line bg-white p-6 shadow-sm">
              <p className="text-sm italic leading-relaxed text-brand-ink-2/80">
                &quot;{t.quote}&quot;
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {t.context}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Bereit für Ihre eigene Buchung?</h2>
          <p className="mt-2 text-brand-cream/70">
            Festpreise, lizenzierte Partnerfahrer, keine Zahlung für eine Anfrage erforderlich.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Transfer anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
