import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { airports } from '@/lib/content/airports'
import { austrianCities } from '@/lib/content/service-areas'
import { siteName, siteUrl } from '@/lib/content/site'
import { findRelatedPosts } from '@/lib/content/blog'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return airports.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const airport = airports.find((a) => a.slug === slug)
  if (!airport) return {}

  const canonical = `/airport-transfers/${slug}`
  const title = `${airport.name} (${airport.code}) Transfer`
  const description = `Private meet-and-greet chauffeur pickup at ${airport.name} (${airport.code}). Flight tracking, fixed pricing, professional drivers.`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: { en: canonical, de: `/de/airport-transfers/${slug}`, 'x-default': canonical },
    },
    openGraph: { type: 'website', siteName, locale: 'en_US', url: `${siteUrl}${canonical}`, title, description },
  }
}

export default async function AirportPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const airport = airports.find((a) => a.slug === slug)
  if (!airport) notFound()

  const cityMatch = austrianCities.find((c) => c.city === airport.city)
  const pageUrl = `${siteUrl}/airport-transfers/${slug}`
  const relatedPosts = findRelatedPosts([airport.city, airport.region])

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Airport Transfers', item: `${siteUrl}/airport-transfers` },
            { '@type': 'ListItem', position: 3, name: airport.name, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Private Airport Chauffeur Transfer',
          name: `${airport.name} Transfer`,
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'City', name: airport.city },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            {airport.code} · {airport.region}
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            {airport.name} Transfer
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Private, licensed pickup and drop-off at {airport.name}. Flight tracking included, so
            we adjust automatically if your flight is early or delayed.
          </p>
          {airport.note && (
            <p className="mt-3 text-sm font-semibold text-brand-gold">{airport.note}</p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Distance to the City</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">{airport.distanceFromCity}</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Popular Routes</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {airport.popularRoutes.map((route) => (
                <li key={route} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {route}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">How Pickup Works</h2>
          <ol className="mt-3 space-y-3 text-sm text-brand-ink-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              We track your flight and adjust your pickup time automatically for early or delayed
              arrivals — no extra charge.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              Your chauffeur waits in the arrivals hall with a name board.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              Fixed price agreed in advance — no metered fare, no surprise fees.
            </li>
          </ol>
        </div>

        {cityMatch && (
          <p className="mt-10 text-sm text-brand-ink-2/70">
            Traveling into {airport.city}? See our full{' '}
            <Link
              href={`/service-areas/${cityMatch.slug}`}
              className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              {airport.city} coverage, hotels, and attractions
            </Link>
            .
          </p>
        )}
      </section>

      {relatedPosts.length > 0 && (
        <section className="border-t border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Related Reading</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-sm border border-brand-line bg-white p-4 text-sm transition-colors hover:border-brand-gold"
                >
                  <p className="font-semibold text-brand-ink">{post.title}</p>
                  <p className="mt-1 text-brand-ink-2/70">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">
              Book your {airport.code} transfer
            </h2>
            <p className="mt-2 text-brand-ink-2/80">
              Submit your flight details and we&apos;ll confirm availability and pricing by email.
            </p>
          </div>
          <Link
            href={`/booking?to=${encodeURIComponent(airport.city)}`}
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
