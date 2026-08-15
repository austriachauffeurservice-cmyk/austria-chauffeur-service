import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { austrianCities } from '@/lib/content/service-areas'
import { routes } from '@/lib/content/routes'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'City-to-City Transfers in Austria',
  description:
    'Direct private chauffeur transfers between any two Austrian cities — no ride-sharing, no layovers, one vehicle door to door. Fixed pricing, professional drivers.',
  alternates: {
    canonical: '/city-to-city-transfers',
    languages: { en: '/city-to-city-transfers', de: '/de/city-to-city-transfers', 'x-default': '/city-to-city-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/city-to-city-transfers`,
    title: 'City-to-City Transfers in Austria',
    description:
      'Direct private chauffeur transfers between any two Austrian cities — no ride-sharing, no layovers, one vehicle door to door. Fixed pricing, professional drivers.',
  },
}

// Domestic, non-airport, non-cross-border routes only — this page is a
// filtered front door into the full /routes catalog (which also covers
// airport and cross-border pairs), not a competing set of thin pages. See
// the internal-linking audit for why this was repositioned rather than
// left as a handful of hardcoded, unlinked route names.
const cityToCityRoutes = routes.filter(
  (r) => !r.crossBorder && !r.from.includes('Airport') && !r.to.includes('Airport')
)

export default function CityToCityTransfersPage() {
  const pageUrl = `${siteUrl}/city-to-city-transfers`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'City-to-City Chauffeur Transfer',
          name: 'City-to-City Transfers',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'Country', name: 'Austria' },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            City-to-City Transfers
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            Direct, private travel between Austrian cities
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            One vehicle, door to door — no train changes, no shared rides, no waiting at stations.
            Just a fixed departure time and a direct route to your destination.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Why Choose a Private Transfer</h2>
        <ul className="mt-3 grid gap-2 text-sm text-brand-ink-2 sm:grid-cols-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
            Direct door-to-door route with no changes or layovers
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
            Depart at your chosen time, not a fixed timetable
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
            Fits luggage, ski equipment, or group sizes that don&apos;t suit public transport
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
            Fixed price agreed before travel
          </li>
        </ul>

        <div className="mt-12 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-xl text-brand-ink">Popular City-to-City Routes</h2>
          <Link href="/routes" className="shrink-0 text-xs font-semibold text-brand-gold hover:underline">
            Browse all routes →
          </Link>
        </div>
        <p className="mt-2 text-sm text-brand-ink-2/70">
          Domestic routes between Austrian cities. Flying in, heading to a ski resort, or crossing
          a border? The{' '}
          <Link href="/routes" className="font-semibold text-brand-gold hover:underline">
            full route catalog
          </Link>{' '}
          covers airport and cross-border pairs too.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cityToCityRoutes.map((r) => (
            <Link
              key={r.slug}
              href={`/routes/${r.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-5 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <h3 className="font-semibold text-brand-ink group-hover:text-brand-gold text-sm">
                {r.from} → {r.to}
              </h3>
              <p className="mt-1 text-xs font-mono text-brand-ink-2/60">
                {r.distance} · {r.driveTime}
              </p>
            </Link>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">All Coverage</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {austrianCities.map((c) => (
            <Link
              key={c.slug}
              href={`/service-areas/${c.slug}`}
              className="rounded-full border border-brand-line px-3 py-1 text-xs font-semibold text-brand-ink-2 hover:border-brand-gold hover:text-brand-gold"
            >
              {c.city}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Going between two Austrian cities?</h2>
          <p className="mt-2 text-brand-cream/70">
            Enter your pickup and destination and we&apos;ll confirm a fixed price by email.
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
