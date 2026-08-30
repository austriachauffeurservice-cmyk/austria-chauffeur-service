import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { HotelsSection, AttractionsSection, PopularRoutesList } from '@/components/location-sections'
import { BookingCta } from '@/components/booking-cta'
import { HeroQuoteCard } from '@/components/hero-quote-card'
import { skiResorts } from '@/lib/content/ski-resorts'
import { routes } from '@/lib/content/routes'
import { airports } from '@/lib/content/airports'
import { siteName, siteUrl } from '@/lib/content/site'
import { findRelatedPosts } from '@/lib/content/blog'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return skiResorts.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const resort = skiResorts.find((r) => r.slug === slug)
  if (!resort) return {}

  const canonical = `/ski-transfers/${slug}`
  const title = `Ski Transfer to ${resort.name}`
  const description = `Private airport-to-resort chauffeur transfer to ${resort.name}, ${resort.region}. Winter-ready vehicles, ski/board space, fixed pricing from ${resort.nearestAirports[0].name}.`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: { en: canonical, de: `/de/ski-transfers/${slug}`, 'x-default': canonical },
    },
    openGraph: { type: 'website', siteName, locale: 'en_US', url: `${siteUrl}${canonical}`, title, description },
  }
}

export default async function SkiResortPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const resort = skiResorts.find((r) => r.slug === slug)
  if (!resort) notFound()

  const pageUrl = `${siteUrl}/ski-transfers/${slug}`
  const relatedPosts = findRelatedPosts([resort.name, resort.region])

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Ski & Alpine Transfers', item: `${siteUrl}/ski-transfers` },
            { '@type': 'ListItem', position: 3, name: resort.name, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Private Ski Resort Chauffeur Transfer',
          name: `Ski Transfer to ${resort.name}`,
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'City', name: resort.name },
          url: pageUrl,
          ...(resort.attractions && resort.attractions.length > 0
            ? {
                mentions: resort.attractions.map((a) => ({
                  '@type': 'TouristAttraction',
                  name: a.name,
                })),
              }
            : {}),
        }}
      />

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              {resort.region} · Ski & Alpine Transfer
            </p>
            <h1 className="font-display mt-2 text-3xl sm:text-4xl">
              Private Ski Transfer to {resort.name}
            </h1>
            <p className="mt-4 max-w-xl text-brand-cream/80">
              Winter-ready vehicles, experienced alpine drivers, and space for skis and boards —
              booked in advance with fixed pricing.
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-gold">{resort.skiArea}</p>
          </div>
          <div className="lg:col-span-5">
            <HeroQuoteCard pickup={resort.nearestAirports[0]?.name} dropoff={resort.name} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Nearest Airports</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {resort.nearestAirports.map((a) => (
                <li key={a.name} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {a.name} — {a.driveTime}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Popular Routes</h2>
            <PopularRoutesList items={resort.popularRoutes} routes={routes} airports={airports} locale="en" />
          </div>
        </div>

        {resort.highlights.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">Resort Highlights</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {resort.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {resort.airportGuidance && resort.airportGuidance.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">
              Which Airport Is Best for {resort.name}?
            </h2>
            <div className="mt-4 space-y-4">
              {resort.airportGuidance.map((g) => (
                <div key={g.airport}>
                  <p className="text-sm font-semibold text-brand-ink">{g.airport}</p>
                  <p className="mt-1 text-sm text-brand-ink-2/80">{g.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">Ski Equipment &amp; Luggage</h2>
          <p className="mt-3 text-sm text-brand-ink-2/80">
            Traveling with skis, snowboards, or extra winter luggage? Mention it when requesting
            your transfer so we can assign a vehicle with enough space — the Executive Van and
            Minibus both carry ski and board racks in addition to standard luggage.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">Winter Travel to {resort.name}</h2>
          <p className="mt-3 text-sm text-brand-ink-2/80">
            Travel times can vary during winter depending on snowfall, road conditions, and
            traffic around peak arrival and departure periods. We recommend allowing extra time
            either side of a Saturday changeover, when resort roads are busiest.
          </p>
        </div>

        <p className="mt-10 text-sm text-brand-ink-2/70">
          <Link
            href="/ski-transfers"
            className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            View all Austrian ski transfers →
          </Link>
        </p>
      </section>

      <HotelsSection place={resort.name} hotels={resort.hotels} hotelNote={resort.hotelNote} />
      <AttractionsSection
        place={resort.name}
        attractions={resort.attractions}
        heading="Highlights"
        showBookingCta={false}
      />

      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Related Reading</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedPosts.map((post) => (
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
      )}

      <BookingCta
        pageType="ski"
        title={`Ready to book your ${resort.name} ski transfer?`}
        description="Submit your trip details and we'll confirm availability and pricing by email."
        pickup={resort.nearestAirports[0]?.name}
        dropoff={resort.name}
      />
    </>
  )
}
