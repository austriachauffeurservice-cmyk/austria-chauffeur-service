import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { HotelsSection, AttractionsSection } from '@/components/location-sections'
import { skiResorts } from '@/lib/content/ski-resorts'
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

  return {
    title: `Ski Transfer to ${resort.name} — Private Chauffeur`,
    description: `Private airport-to-resort chauffeur transfer to ${resort.name}, ${resort.region}. Winter-ready vehicles, ski/board space, fixed pricing from ${resort.nearestAirports[0].name}.`,
    alternates: { canonical: `/ski-transfers/${slug}` },
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
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
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
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {resort.popularRoutes.map((route) => (
                <li key={route} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {route}
                </li>
              ))}
            </ul>
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
      </section>

      <HotelsSection place={resort.name} hotels={resort.hotels} hotelNote={resort.hotelNote} />
      <AttractionsSection
        place={resort.name}
        attractions={resort.attractions}
        heading="On the Mountain"
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

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">
              Book your transfer to {resort.name}
            </h2>
            <p className="mt-2 text-brand-ink-2/80">
              Submit your trip details and we&apos;ll confirm availability and pricing by email.
            </p>
          </div>
          <Link
            href={`/booking?to=${encodeURIComponent(resort.name)}`}
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
