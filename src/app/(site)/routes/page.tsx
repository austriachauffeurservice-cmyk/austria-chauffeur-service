import type { Metadata } from 'next'
import Link from 'next/link'
import { routes } from '@/lib/content/routes'

export const metadata: Metadata = {
  title: 'Popular Chauffeur Routes',
  description:
    'Distance, drive time, and route details for the most-booked private chauffeur routes across Austria and cross-border to neighboring countries.',
  alternates: { canonical: '/routes', languages: { en: '/routes', de: '/de/routes' } },
}

export default function RoutesPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Popular Routes
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Distance, drive time, and route details
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            The most-requested chauffeur routes across Austria and into neighboring countries —
            with real distances, drive times, and what to expect on the road.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r) => (
            <Link
              key={r.slug}
              href={`/routes/${r.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-5 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <h2 className="font-semibold text-brand-ink group-hover:text-brand-gold text-sm">
                {r.from} → {r.to}
              </h2>
              <p className="mt-1 text-xs font-mono text-brand-ink-2/60">
                {r.distance} · {r.driveTime}
              </p>
              {r.crossBorder && (
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-brand-gold">
                  Cross-Border
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Don&apos;t see your route?</h2>
          <p className="mt-2 text-brand-cream/70">
            Tell us your pickup and destination — if it&apos;s reachable by road, we can likely drive it.
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
