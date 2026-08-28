import type { Metadata } from 'next'
import Link from 'next/link'
import { testimonials } from '@/lib/content/testimonials'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'What to Expect',
  description:
    'What to expect from Austria Chauffeur Service — example scenarios across airport transfers, weddings, corporate travel, and cross-border trips.',
  alternates: { canonical: '/reviews', languages: { en: '/reviews', de: '/de/reviews', 'x-default': '/reviews' } },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/reviews`,
    title: 'What to Expect',
    description:
      'What to expect from Austria Chauffeur Service — example scenarios across airport transfers, weddings, corporate travel, and cross-border trips.',
  },
}

export default function ReviewsPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            What to Expect
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Example scenarios from real service situations
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Illustrative examples of how bookings typically play out — airport pickups, weddings,
            corporate travel, and cross-border trips across Austria.
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
          <h2 className="font-display text-2xl text-white">Ready to book your own transfer?</h2>
          <p className="mt-2 text-brand-cream/70">
            Fixed pricing, licensed partner drivers, no payment required to request a quote.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
