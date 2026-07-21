import type { Metadata } from 'next'
import Link from 'next/link'
import { airports } from '@/lib/content/airports'

export const metadata: Metadata = {
  title: 'Airport Transfers — Private Chauffeur Pickup Across Austria',
  description:
    'Private meet-and-greet chauffeur pickup at Vienna, Salzburg, Innsbruck, Graz, Linz, and Klagenfurt airports. Flight tracking, fixed pricing, no waiting in taxi lines.',
  alternates: { canonical: '/airport-transfers', languages: { en: '/airport-transfers', de: '/de/airport-transfers' } },
}

export default function AirportTransfersPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Airport Transfers
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Meet-and-greet pickup at every major Austrian airport
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Flight tracking included, so we adjust automatically for delays. Your chauffeur waits
            in the arrivals hall with a name board — no taxi queue, no ride-share app.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {airports.map((a) => (
            <Link
              key={a.slug}
              href={`/airport-transfers/${a.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {a.code} · {a.region}
              </p>
              <h2 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                {a.name}
              </h2>
              <p className="mt-2 text-sm text-brand-ink-2/70">{a.distanceFromCity}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Flying into somewhere else?</h2>
          <p className="mt-2 text-brand-cream/70">
            We also pick up from Munich, Zurich, Bratislava, and Budapest airports for
            cross-border trips into Austria.
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
