import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import {
  austrianCities,
  borderCities,
  borderCrossingDestinations,
} from '@/lib/content/service-areas'
import { siteName, siteUrl } from '@/lib/content/site'
import { findRelatedPosts } from '@/lib/content/blog'

type Params = { slug: string }

type Breadcrumb = { name: string; path: string }

function findLocation(slug: string) {
  const city = austrianCities.find((c) => c.slug === slug)
  if (city) return { kind: 'city' as const, data: city }

  const borderCity = borderCities.find((c) => c.slug === slug)
  if (borderCity) return { kind: 'borderCity' as const, data: borderCity }

  const border = borderCrossingDestinations.find((d) => d.slug === slug)
  if (border) return { kind: 'border' as const, data: border }

  return null
}

export function generateStaticParams(): Params[] {
  return [
    ...austrianCities.map((c) => ({ slug: c.slug })),
    ...borderCities.map((c) => ({ slug: c.slug })),
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

  const canonical = `/service-areas/${slug}`

  if (location.kind === 'city') {
    const { city, region } = location.data
    return {
      title: `Chauffeur Service in ${city}`,
      description: `Private chauffeur transfers to and from ${city}, ${region} — airport pickups, city-to-city travel, and cross-border trips. Fixed pricing, professional drivers.`,
      alternates: { canonical },
    }
  }

  if (location.kind === 'borderCity') {
    const { city, country } = location.data
    return {
      title: `Chauffeur Transfer to ${city}, ${country}`,
      description: `Private cross-border chauffeur transfer from Austria to ${city}, ${country}. Fixed pricing, licensed driver, no vehicle switch at the border.`,
      alternates: { canonical },
    }
  }

  const { country, cities } = location.data
  return {
    title: `Cross-Border Transfers to ${country}`,
    description: `Licensed private chauffeur transfers from Austria to ${cities.join(', ')} (${country}). Fixed pricing, no vehicle switch at the border.`,
    alternates: { canonical },
  }
}

function breadcrumbJsonLd(trail: Breadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

function serviceJsonLd({
  name,
  areaServedName,
  areaServedType,
  url,
  attractions,
}: {
  name: string
  areaServedName: string
  areaServedType: 'City' | 'Country'
  url: string
  attractions?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Private Chauffeur Transfer',
    name,
    provider: {
      '@type': 'LocalBusiness',
      name: siteName,
      url: siteUrl,
    },
    areaServed: {
      '@type': areaServedType,
      name: areaServedName,
    },
    url,
    ...(attractions && attractions.length > 0
      ? {
          mentions: attractions.map((a) => ({
            '@type': 'TouristAttraction',
            name: a,
          })),
        }
      : {}),
  }
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const location = findLocation(slug)
  if (!location) notFound()

  if (location.kind === 'city') {
    const { city, region, airport, popularRoutes, note, hotels, hotelNote, attractions } =
      location.data
    const pageUrl = `${siteUrl}/service-areas/${slug}`
    const relatedPosts = findRelatedPosts([city, region])
    return (
      <>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Service Areas', path: '/service-areas' },
            { name: city, path: `/service-areas/${slug}` },
          ])}
        />
        <JsonLd
          data={serviceJsonLd({
            name: `Chauffeur Service in ${city}`,
            areaServedName: city,
            areaServedType: 'City',
            url: pageUrl,
            attractions: attractions?.map((a) => a.name),
          })}
        />

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

        <HotelsSection city={city} hotels={hotels} hotelNote={hotelNote} />
        <AttractionsSection city={city} attractions={attractions} />
        <RelatedReading posts={relatedPosts} />
        <LocationCta place={city} />
      </>
    )
  }

  if (location.kind === 'borderCity') {
    const { city, country, countrySlug, via, popularRoutes } = location.data
    const pageUrl = `${siteUrl}/service-areas/${slug}`
    const countryLabel = borderCrossingDestinations.find((d) => d.slug === countrySlug)?.country ?? country
    const relatedPosts = findRelatedPosts([city, country])
    return (
      <>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Service Areas', path: '/service-areas' },
            { name: countryLabel, path: `/service-areas/${countrySlug}` },
            { name: city, path: `/service-areas/${slug}` },
          ])}
        />
        <JsonLd
          data={serviceJsonLd({
            name: `Chauffeur Transfer to ${city}, ${country}`,
            areaServedName: city,
            areaServedType: 'City',
            url: pageUrl,
          })}
        />

        <section className="border-b border-brand-line bg-brand-ink text-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              <Link href={`/service-areas/${countrySlug}`} className="hover:underline">
                {country}
              </Link>{' '}
              · Cross-Border Transfer
            </p>
            <h1 className="font-display mt-2 text-3xl sm:text-4xl">
              Austria → {city}
            </h1>
            <p className="mt-4 max-w-xl text-brand-cream/80">
              Licensed private chauffeur transfer from Austria to {city}, {country} — no need to
              switch vehicles at the border.
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-gold">{via}</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Popular Routes</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
            {popularRoutes.map((route) => (
              <li key={route} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                {route}
              </li>
            ))}
          </ul>
        </section>

        <RelatedReading posts={relatedPosts} />
        <LocationCta place={city} />
      </>
    )
  }

  const { country, popularRoutes, note, via } = location.data
  const citiesInCountry = borderCities.filter((c) => c.countrySlug === location.data.slug)
  const pageUrl = `${siteUrl}/service-areas/${slug}`
  const relatedPosts = findRelatedPosts([country])

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: country, path: `/service-areas/${slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: `Cross-Border Transfers to ${country}`,
          areaServedName: country,
          areaServedType: 'Country',
          url: pageUrl,
        })}
      />

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Cross-Border Transfers
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            Austria → {country}
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Licensed for international pickups and drop-offs to {country} — no need to switch
            vehicles at the border.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-gold">{note} · {via}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Destinations</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {citiesInCountry.map((c) => (
                <li key={c.slug} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  <Link href={`/service-areas/${c.slug}`} className="hover:text-brand-gold">
                    {c.city}
                  </Link>
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

      <RelatedReading posts={relatedPosts} />
      <LocationCta place={country} />
    </>
  )
}

function HotelsSection({
  city,
  hotels,
  hotelNote,
}: {
  city: string
  hotels?: { name: string; area?: string }[]
  hotelNote?: string
}) {
  if ((!hotels || hotels.length === 0) && !hotelNote) return null
  return (
    <section className="border-t border-brand-line bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
          Hotel Transfers
        </p>
        <h2 className="font-display mt-2 text-2xl text-brand-ink">
          Hotel Pickup &amp; Drop-off in {city}
        </h2>
        <p className="mt-3 max-w-xl text-sm text-brand-ink-2/80">
          {hotelNote ||
            `Direct pickup and drop-off at hotels throughout ${city} — just share your hotel name and address when booking.`}
        </p>
        {hotels && hotels.length > 0 && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hotels.map((hotel) => (
              <Link
                key={hotel.name}
                href={`/booking?to=${encodeURIComponent(`${hotel.name}, ${city}`)}`}
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
                  Book →
                </span>
              </Link>
            ))}
          </div>
        )}
        <p className="mt-4 text-xs text-brand-ink-2/60">
          Staying somewhere not listed? We serve every hotel, guesthouse, and private address in{' '}
          {city} — just enter it as your pickup or drop-off.
        </p>
      </div>
    </section>
  )
}

function AttractionsSection({
  city,
  attractions,
}: {
  city: string
  attractions?: { name: string; description: string }[]
}) {
  if (!attractions || attractions.length === 0) return null
  return (
    <section className="border-t border-brand-line bg-brand-cream">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
          Places to See
        </p>
        <h2 className="font-display mt-2 text-2xl text-brand-ink">
          Top Tourist Attractions in {city}
        </h2>
        <p className="mt-3 max-w-xl text-sm text-brand-ink-2/80">
          Add a stop, book a return transfer, or arrange an hourly chauffeur to see {city}&apos;s
          landmarks at your own pace.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {attractions.map((place) => (
            <div key={place.name} className="rounded-sm border border-brand-line bg-white p-5">
              <p className="font-semibold text-brand-ink">{place.name}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{place.description}</p>
              <Link
                href={`/booking?to=${encodeURIComponent(`${place.name}, ${city}`)}`}
                className="mt-3 inline-block text-xs font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
              >
                Request a transfer here →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RelatedReading({ posts }: { posts: ReturnType<typeof findRelatedPosts> }) {
  if (posts.length === 0) return null
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
      <h2 className="font-display text-xl text-brand-ink">Related Reading</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-sm border border-brand-line p-4 text-sm transition-colors hover:border-brand-gold"
          >
            <p className="font-semibold text-brand-ink">{post.title}</p>
            <p className="mt-1 text-brand-ink-2/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
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
