import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { routes } from '@/lib/content/routes'
import { siteName, siteUrl } from '@/lib/content/site'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return routes.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const route = routes.find((r) => r.slug === slug)
  if (!route) return {}

  return {
    title: { absolute: `${route.from} to ${route.to} Transfer` },
    description: `Private chauffeur transfer from ${route.from} to ${route.to}. ${route.distance}, ${route.driveTime} drive time, fixed pricing.`,
    alternates: {
      canonical: `/routes/${slug}`,
      languages: { en: `/routes/${slug}`, de: `/de/routes/${slug}` },
    },
  }
}

export default async function RoutePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const route = routes.find((r) => r.slug === slug)
  if (!route) notFound()

  const pageUrl = `${siteUrl}/routes/${slug}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Routes', item: `${siteUrl}/routes` },
            { '@type': 'ListItem', position: 3, name: `${route.from} to ${route.to}`, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Private Chauffeur Transfer',
          name: `${route.from} to ${route.to} Transfer`,
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            {route.crossBorder ? 'Cross-Border Route' : 'Popular Route'}
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            {route.from} → {route.to}
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">{route.routeDescription}</p>
          <p className="mt-3 text-sm font-semibold text-brand-gold">
            {route.distance} · {route.driveTime}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Why Book This Route Privately</h2>
        <ul className="mt-4 space-y-2 text-sm text-brand-ink-2">
          {route.whyBook.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">
              Book {route.from} to {route.to}
            </h2>
            <p className="mt-2 text-brand-ink-2/80">
              Submit your trip details and we&apos;ll confirm availability and pricing by email.
            </p>
          </div>
          <Link
            href={`/booking?to=${encodeURIComponent(route.to)}`}
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
