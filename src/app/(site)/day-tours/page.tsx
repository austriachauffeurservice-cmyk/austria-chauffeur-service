import type { Metadata } from 'next'
import Link from 'next/link'
import { dayTours } from '@/lib/content/day-tours'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Private Day Tours from Vienna & Salzburg',
  description:
    'Chauffeur-driven day trips to Hallstatt, the Wachau Valley, and Salzburg — private vehicle, flexible itinerary, fixed pricing agreed in advance.',
  alternates: { canonical: '/day-tours', languages: { en: '/day-tours', de: '/de/day-tours', 'x-default': '/day-tours' } },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/day-tours`,
    title: 'Private Day Tours from Vienna & Salzburg',
    description:
      'Chauffeur-driven day trips to Hallstatt, the Wachau Valley, and Salzburg — private vehicle, flexible itinerary, fixed pricing agreed in advance.',
  },
}

export default function DayToursPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Day Tours
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            See more of Austria in a single day
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            A private vehicle and driver for the whole day — no fixed tour bus schedule, no
            group size to coordinate with. We wait while you explore and drive you back when
            you&apos;re ready.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dayTours.map((tour) => (
            <Link
              key={tour.slug}
              href={`/day-tours/${tour.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {tour.region}
              </p>
              <h2 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                {tour.name}
              </h2>
              <p className="mt-2 text-sm text-brand-ink-2/70">{tour.tagline}</p>
              <p className="mt-4 text-xs font-semibold text-brand-ink-2/60">
                From {tour.startingPoints[0].from} — {tour.startingPoints[0].driveTime}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Have somewhere else in mind?</h2>
          <p className="mt-2 text-brand-cream/70">
            Tell us where you&apos;d like to go and how long you&apos;d like — we&apos;ll put together a day
            itinerary and a fixed price.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Request a Day Tour
          </Link>
        </div>
      </section>
    </>
  )
}
