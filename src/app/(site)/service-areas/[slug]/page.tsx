import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { HotelsSection, AttractionsSection, AirportField, PopularRoutesList } from '@/components/location-sections'
import { LocationMap } from '@/components/location-map'
import { BookingCta } from '@/components/booking-cta'
import {
  austrianCities,
  borderCities,
  borderCrossingDestinations,
} from '@/lib/content/service-areas'
import { siteName, siteUrl } from '@/lib/content/site'
import { findRelatedPosts } from '@/lib/content/blog'
import { routes } from '@/lib/content/routes'
import { airports } from '@/lib/content/airports'
import { vehicles } from '@/lib/content/services'

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
  const languages = { en: canonical, de: `/de/service-areas/${slug}`, 'x-default': canonical }
  const url = `${siteUrl}${canonical}`

  if (location.kind === 'city') {
    const { city, region, seoTitle, seoDescription } = location.data
    const regionSuffix = region === city ? '' : `, ${region}`
    const title = seoTitle ?? `Chauffeur Service in ${city}`
    const description =
      seoDescription ??
      `Private chauffeur transfers to and from ${city}${regionSuffix} — airport pickups, city-to-city travel, and cross-border trips. Fixed pricing, professional drivers.`
    return {
      title,
      description,
      alternates: { canonical, languages },
      openGraph: { type: 'website', siteName, locale: 'en_US', url, title, description },
    }
  }

  if (location.kind === 'borderCity') {
    const { city, country, seoTitle, seoDescription } = location.data
    const title = seoTitle ?? `Chauffeur Transfer to ${city}, ${country}`
    const description =
      seoDescription ??
      `Private cross-border chauffeur transfer from Austria to ${city}, ${country}. Fixed pricing, licensed driver, no vehicle switch at the border.`
    return {
      title,
      description,
      alternates: { canonical, languages },
      openGraph: { type: 'website', siteName, locale: 'en_US', url, title, description },
    }
  }

  const { country, cities, seoTitle, seoDescription } = location.data
  const title = seoTitle ?? `Cross-Border Transfers to ${country}`
  const description =
    seoDescription ??
    `Licensed private chauffeur transfers from Austria to ${cities.join(', ')} (${country}). Fixed pricing, no vehicle switch at the border.`
  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: { type: 'website', siteName, locale: 'en_US', url, title, description },
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
    const { city, region, airport, popularRoutes, note, hotels, hotelNote, attractions, relatedDayTour } =
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
                <AirportField text={airport} airports={airports} locale="en" />
              </div>
            )}
            <div>
              <h2 className="font-display text-xl text-brand-ink">Popular Routes</h2>
              <PopularRoutesList items={popularRoutes} routes={routes} airports={airports} locale="en" />
            </div>
          </div>
          {relatedDayTour && (
            <p className="mt-8 text-sm text-brand-ink-2/80">
              Visiting for the day rather than staying overnight?{' '}
              <Link href={`/day-tours/${relatedDayTour.slug}`} className="font-semibold text-brand-ink hover:text-brand-gold hover:underline">
                See our {relatedDayTour.label}
              </Link>
              .
            </p>
          )}
        </section>

        <HotelsSection place={city} hotels={hotels} hotelNote={hotelNote} />
        <AttractionsSection place={city} attractions={attractions} />
        <LocationMap query={`${city}, ${region}, Austria`} label={`${city} on the Map`} />
        <RelatedReading posts={relatedPosts} />
        <BookingCta
          pageType="service-area"
          title={`Book your transfer to ${city}`}
          description="Submit your trip details and we'll confirm availability and pricing by email."
          dropoff={city}
        />
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
          <PopularRoutesList items={popularRoutes} routes={routes} airports={airports} locale="en" />
        </section>

        <RelatedReading posts={relatedPosts} />
        <BookingCta
          pageType="country"
          title={`Book your transfer to ${city}`}
          description="Submit your trip details and we'll confirm availability and pricing by email."
          dropoff={city}
        />
      </>
    )
  }

  const {
    country,
    popularRoutes,
    note,
    via,
    intro,
    serviceIntro,
    destinationsIntro,
    borderInfo,
    whyChauffeur,
    journeys,
    bookingSteps,
    trust,
    faqs,
  } = location.data
  const citiesInCountry = borderCities.filter((c) => c.countrySlug === location.data.slug)
  const pageUrl = `${siteUrl}/service-areas/${slug}`
  const relatedPosts = findRelatedPosts([country])
  const isEnriched = Boolean(intro && intro.length > 0)

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
      {faqs && faqs.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }}
        />
      )}

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Cross-Border Transfers
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            {isEnriched ? `Austria to ${country} Private Chauffeur Transfers` : `Austria → ${country}`}
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Licensed for international pickups and drop-offs to {country} — no need to switch
            vehicles at the border.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-gold">{note} · {via}</p>
        </div>
      </section>

      {isEnriched && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <div className="space-y-4 text-brand-ink-2/90">
              {intro!.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {isEnriched && serviceIntro && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">
              Private Transfers from Austria to {country}
            </h2>
            <p className="mt-4 text-brand-ink-2/90">{serviceIntro}</p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">
              {isEnriched ? `Popular ${country} Destinations` : 'Destinations'}
            </h2>
            {isEnriched && destinationsIntro && (
              <p className="mt-3 text-sm text-brand-ink-2/80">{destinationsIntro}</p>
            )}
            {citiesInCountry.some((c) => c.description) ? (
              <div className="mt-4 space-y-4">
                {citiesInCountry.map((c) => (
                  <div key={c.slug} className="rounded-sm border border-brand-line p-4">
                    <Link
                      href={`/service-areas/${c.slug}`}
                      className="font-semibold text-brand-ink hover:text-brand-gold hover:underline"
                    >
                      {c.city}
                    </Link>
                    {c.description && (
                      <p className="mt-1.5 text-sm text-brand-ink-2/70">{c.description}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
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
            )}
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Popular Routes</h2>
            <PopularRoutesList items={popularRoutes} routes={routes} airports={airports} locale="en" />
          </div>
        </div>
      </section>

      {isEnriched && journeys && journeys.length > 0 && (
        <section className="border-y border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl divide-y divide-brand-line px-4 sm:px-6">
            {journeys.map((journey) => (
              <div key={journey.heading} className="py-12 first:pt-16 last:pb-16">
                <h2 className="font-display text-xl text-brand-ink">{journey.heading}</h2>
                <p className="mt-2 text-sm font-semibold text-brand-gold">
                  {journey.distance} · {journey.duration}
                </p>
                <p className="mt-3 max-w-2xl text-brand-ink-2/90">{journey.description}</p>
                <Link
                  href={journey.routeHref}
                  className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
                >
                  See the full route →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {isEnriched && borderInfo && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">
              Crossing the Austria–{country} Border
            </h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{borderInfo}</p>
          </div>
        </section>
      )}

      {isEnriched && whyChauffeur && whyChauffeur.length > 0 && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Why Book a Private Chauffeur</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {whyChauffeur.map((point) => (
                <div key={point.title} className="rounded-sm border border-brand-line bg-white p-5">
                  <p className="font-semibold text-brand-ink">{point.title}</p>
                  <p className="mt-1.5 text-sm text-brand-ink-2/70">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isEnriched && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Vehicles &amp; Passenger Capacity</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                    <th className="pb-3 pr-4">Vehicle</th>
                    <th className="pb-3 pr-4">Passengers</th>
                    <th className="pb-3">Luggage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-line">
                  {vehicles.map((v) => (
                    <tr key={v.name}>
                      <td className="py-3 pr-4 font-semibold text-brand-ink">{v.name}</td>
                      <td className="py-3 pr-4 text-brand-ink-2/80">{v.passengers}</td>
                      <td className="py-3 text-brand-ink-2/80">{v.luggage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-brand-ink-2/60">
              <Link href="/fleet" className="underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
                See full vehicle details on the fleet page →
              </Link>
            </p>
          </div>
        </section>
      )}

      {isEnriched && bookingSteps && bookingSteps.length > 0 && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">
              Booking Your Austria → {country} Transfer
            </h2>
            <ol className="mt-6 space-y-3">
              {bookingSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-brand-ink-2/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-ink text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {isEnriched && trust && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">
              A Licensed Cross-Border Chauffeur Service
            </h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{trust}</p>
          </div>
        </section>
      )}

      {isEnriched && faqs && faqs.length > 0 && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Frequently Asked Questions</h2>
            <dl className="mt-6 divide-y divide-brand-line">
              {faqs.map((f) => (
                <div key={f.question} className="py-6 first:pt-0">
                  <dt className="font-display text-base text-brand-ink">{f.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <RelatedReading posts={relatedPosts} />
      <BookingCta
        pageType="country"
        title={`Request your Austria → ${country} transfer`}
        description="Submit your trip details and we'll confirm availability and pricing by email."
        dropoff={country}
      />
    </>
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
