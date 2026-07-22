import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { vehicles } from '@/lib/content/services'
import { siteName, siteUrl } from '@/lib/content/site'

type Params = { type: string }

export function generateStaticParams(): Params[] {
  return vehicles.map((v) => ({ type: v.type }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { type } = await params
  const vehicle = vehicles.find((v) => v.type === type)
  if (!vehicle) return {}

  const canonical = `/fleet/${type}`
  const title = `${vehicle.name} — Chauffeur Vehicle`
  const description = `${vehicle.description} ${vehicle.passengers} passengers, ${vehicle.luggage}. Book with a professional chauffeur across Austria.`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { en: canonical, de: `/de/fleet/${type}`, 'x-default': canonical },
    },
    openGraph: { type: 'website', siteName, locale: 'en_US', url: `${siteUrl}${canonical}`, title, description },
  }
}

export default async function VehiclePage({ params }: { params: Promise<Params> }) {
  const { type } = await params
  const vehicle = vehicles.find((v) => v.type === type)
  if (!vehicle) notFound()

  const pageUrl = `${siteUrl}/fleet/${type}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Fleet', item: `${siteUrl}/fleet` },
            { '@type': 'ListItem', position: 3, name: vehicle.name, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: `Private Chauffeur Transfer — ${vehicle.name}`,
          name: vehicle.name,
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Our Fleet
            </p>
            <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
              {vehicle.name}
            </h1>
            <p className="mt-4 text-brand-ink-2/80">{vehicle.description}</p>
            <p className="mt-4 text-sm font-semibold text-brand-gold">
              {vehicle.passengers} passengers · {vehicle.luggage}
            </p>
            <Link
              href={`/booking?to=${encodeURIComponent(vehicle.name)}`}
              className="mt-6 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
            >
              Request This Vehicle
            </Link>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md">
            <Image
              src={`/images/fleet/${vehicle.type}.webp`}
              alt={vehicle.alt}
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          {vehicle.idealFor && vehicle.idealFor.length > 0 && (
            <div>
              <h2 className="font-display text-xl text-brand-ink">Ideal For</h2>
              <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
                {vehicle.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {vehicle.features && vehicle.features.length > 0 && (
            <div>
              <h2 className="font-display text-xl text-brand-ink">Included Features</h2>
              <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
                {vehicle.features.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Other Vehicles</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {vehicles
              .filter((v) => v.type !== type)
              .map((v) => (
                <Link
                  key={v.type}
                  href={`/fleet/${v.type}`}
                  className="rounded-sm border border-brand-line p-5 transition-colors hover:border-brand-gold"
                >
                  <p className="font-semibold text-brand-ink">{v.name}</p>
                  <p className="mt-1 text-xs text-brand-ink-2/60">{v.passengers} · {v.luggage}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">
              Book a {vehicle.name}
            </h2>
            <p className="mt-2 text-brand-ink-2/80">
              Submit your trip details and we&apos;ll confirm availability and pricing by email.
            </p>
          </div>
          <Link
            href={`/booking?to=${encodeURIComponent(vehicle.name)}`}
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
