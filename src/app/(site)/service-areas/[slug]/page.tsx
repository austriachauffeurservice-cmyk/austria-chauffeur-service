import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { austrianCities, borderCrossingDestinations } from '@/lib/content/service-areas'

type Params = { slug: string }

function findLocation(slug: string) {
  const city = austrianCities.find((c) => c.slug === slug)
  if (city) return { kind: 'city' as const, data: city }

  const border = borderCrossingDestinations.find((d) => d.slug === slug)
  if (border) return { kind: 'border' as const, data: border }

  return null
}

export function generateStaticParams(): Params[] {
  return [
    ...austrianCities.map((c) => ({ slug: c.slug })),
    ...borderCrossingDestinations.map((d) => ({ slug: d.slug })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const location = findLocation(slug)
  if (!location) return {}

  if (location.kind === 'city') {
    const { city, region } = location.data
    return {
      title: `Chauffeur Service in ${city}`,
      description: `Private chauffeur transfers to and from ${city}, ${region} — airport pickups, city-to-city travel, and cross-border trips. Fixed pricing, professional drivers.`,
    }
  }

  const { country, cities } = location.data
  return {
    title: `Cross-Border Transfers to ${country}`,
    description: `Licensed private chauffeur transfers from Austria to ${cities.join(', ')} (${country}). Fixed pricing, no vehicle switch at the border.`,
  }
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const location = findLocation(slug)
  if (!location) notFound()

  if (location.kind === 'city') {
    const { city, region, airport, popularRoutes, note } = location.data
    return (
      <>
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              {region} · Austria
            </p>
            <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
              Chauffeur Service in {city}
            </h1>
            <p className="mt-4 max-w-xl text-brand-ink-2/80">
              Private, licensed transfers to and from {city}. Airport pickups, direct city-to-city
              travel, and cross-border trips to neighboring countries — booked in advance with
              fixed pricing.
            </p>
            {note && <p className="mt-3 text-sm font-semibold text-brand-gold">{note}</p>}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2">
            {airport && (
              <div>
                <h2 className="font-display text-xl text-brand-ink">Nearest Airport</h2>
                <p className="mt-2 text-sm text-brand-ink-2/80">{airport}</p>
              </div>
            )}
            <div>
              <h2 className="font-display text-xl text-brand-ink">Popular Routes</h2>
              <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
                {popularRoutes.map((route) => (
                  <li key={route} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                    {route}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <LocationCta place={city} />
      </>
    )
  }

  const { country, cities, via, popularRoutes, note } = location.data
  return (
    <>
      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Cross-Border Transfers
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            Austria → {country}
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Licensed for international pickups and drop-offs to {cities.join(', ')} — no need to
            switch vehicles at the border.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-gold">{note} · {via}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Destinations</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {cities.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Popular Routes</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {popularRoutes.map((route) => (
                <li key={route} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {route}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <LocationCta place={country} />
    </>
  )
}

function LocationCta({ place }: { place: string }) {
  return (
    <section className="border-t border-brand-line bg-brand-cream">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="font-display text-2xl text-brand-ink">
            Book your transfer to {place}
          </h2>
          <p className="mt-2 text-brand-ink-2/80">
            Submit your trip details and we&apos;ll confirm availability and pricing by email.
          </p>
        </div>
        <Link
          href={`/booking?to=${encodeURIComponent(place)}`}
          className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Request a Transfer
        </Link>
      </div>
    </section>
  )
}
