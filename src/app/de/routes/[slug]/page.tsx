import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { routes } from '@/lib/content/de/routes'
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
    title: `Transfer ${route.from} nach ${route.to} — Privater Chauffeur`,
    description: `Privater Chauffeurtransfer von ${route.from} nach ${route.to}. ${route.distance}, ${route.driveTime} Fahrzeit, Festpreise.`,
    alternates: {
      canonical: `/de/routes/${slug}`,
      languages: { en: `/routes/${slug}`, de: `/de/routes/${slug}` },
    },
  }
}

export default async function RoutePageDe({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const route = routes.find((r) => r.slug === slug)
  if (!route) notFound()

  const pageUrl = `${siteUrl}/de/routes/${slug}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/de` },
            { '@type': 'ListItem', position: 2, name: 'Strecken', item: `${siteUrl}/de/routes` },
            { '@type': 'ListItem', position: 3, name: `${route.from} nach ${route.to}`, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Private Chauffeur Transfer',
          name: `Transfer ${route.from} nach ${route.to}`,
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            {route.crossBorder ? 'Grenzüberschreitende Strecke' : 'Beliebte Strecke'}
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
        <h2 className="font-display text-xl text-brand-ink">Warum diese Strecke privat buchen</h2>
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
              {route.from} nach {route.to} buchen
            </h2>
            <p className="mt-2 text-brand-ink-2/80">
              Senden Sie Ihre Reisedaten und wir bestätigen Verfügbarkeit und Preis per E-Mail.
            </p>
          </div>
          <Link
            href={`/de/booking?to=${encodeURIComponent(route.to)}`}
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Transfer anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
