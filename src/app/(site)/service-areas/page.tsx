import type { Metadata } from 'next'
import Link from 'next/link'
import { austrianCities, borderCities, borderCrossingDestinations } from '@/lib/content/service-areas'

export const metadata: Metadata = {
  title: 'Service Areas — All of Austria & Cross-Border Transfers',
  description:
    'Private chauffeur coverage across all nine Austrian states, plus licensed cross-border transfers to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.',
  alternates: { canonical: '/service-areas' },
}

export default function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Service Areas
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            All of Austria — and across the border
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            We drive nationwide, from Vorarlberg to Burgenland, and hold the licensing to cross
            into all seven of Austria&apos;s neighboring countries.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Austria — Domestic Coverage</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {austrianCities.map((c) => (
            <Link
              key={c.slug}
              href={`/service-areas/${c.slug}`}
              className="rounded-sm border border-brand-line p-5 transition-colors hover:border-brand-gold"
            >
              <p className="font-semibold text-brand-ink">{c.city}</p>
              <p className="text-sm text-brand-ink-2/70">{c.region}</p>
              {c.note && <p className="mt-1 text-xs text-brand-gold">{c.note}</p>}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Beyond Austria
          </p>
          <h2 className="font-display mt-2 text-2xl text-white">Cross-Border Transfers</h2>
          <p className="mt-3 max-w-xl text-brand-cream/70">
            Licensed for international pickups and drop-offs — no need to switch vehicles at the
            border.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {borderCrossingDestinations.map((d) => {
              const cities = borderCities.filter((c) => c.countrySlug === d.slug)
              return (
                <div
                  key={d.slug}
                  className="rounded-sm border border-white/15 bg-white/5 p-5"
                >
                  <Link
                    href={`/service-areas/${d.slug}`}
                    className="font-display text-lg text-white hover:text-brand-gold"
                  >
                    {d.country}
                  </Link>
                  <p className="mt-1 flex flex-wrap gap-x-1.5 text-sm text-brand-cream/80">
                    {cities.map((c, i) => (
                      <span key={c.slug}>
                        <Link href={`/service-areas/${c.slug}`} className="hover:text-brand-gold">
                          {c.city}
                        </Link>
                        {i < cities.length - 1 && ','}
                      </span>
                    ))}
                  </p>
                  <p className="mt-2 text-xs text-brand-gold">{d.note}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Don&apos;t see your route listed?</h2>
        <p className="mx-auto mt-2 max-w-md text-brand-ink-2/80">
          Tell us your pickup and destination — if it&apos;s reachable by road, we can likely
          drive it.
        </p>
        <Link
          href="/booking"
          className="mt-6 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Request a Transfer
        </Link>
      </section>
    </>
  )
}
