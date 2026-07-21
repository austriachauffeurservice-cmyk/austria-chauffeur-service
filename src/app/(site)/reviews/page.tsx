import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { testimonials } from '@/lib/content/testimonials'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Client Reviews',
  description:
    'What clients say about Austria Chauffeur Service — airport transfers, weddings, corporate travel, and cross-border trips.',
  alternates: { canonical: '/reviews', languages: { en: '/reviews', de: '/de/reviews' } },
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: siteName,
          url: siteUrl,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: String(testimonials.length),
          },
          review: testimonials.map((t) => ({
            '@type': 'Review',
            reviewRating: { '@type': 'Rating', ratingValue: '5' },
            author: { '@type': 'Person', name: t.author },
            reviewBody: t.quote,
          })),
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Client Reviews
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            What our guests say about us
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Real feedback from airport pickups, weddings, corporate travel, and cross-border
            trips across Austria.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-sm border border-brand-line bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-brand-gold text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="mt-3 text-sm italic leading-relaxed text-brand-ink-2/80">
                &quot;{t.quote}&quot;
              </p>
              <p className="mt-4 text-xs font-semibold text-brand-ink">
                {t.author} · {t.context}
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
