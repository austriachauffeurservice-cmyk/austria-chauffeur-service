import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { HotelsSection, AttractionsSection } from '@/components/location-sections'
import { LocationMap } from '@/components/location-map'
import {
  austrianCities,
  borderCities,
  borderCrossingDestinations,
} from '@/lib/content/de/service-areas'
import { siteName, siteUrl } from '@/lib/content/site'

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

  const canonical = `/de/service-areas/${slug}`
  const enPath = `/service-areas/${slug}`
  const languages = { en: enPath, de: canonical, 'x-default': enPath }
  const url = `${siteUrl}${canonical}`

  if (location.kind === 'city') {
    const { city, region } = location.data
    const title = `Chauffeurservice in ${city}`
    const description = `Private Chauffeurtransfers von und nach ${city}, ${region} — Flughafenabholungen, Stadt-zu-Stadt-Fahrten und grenzüberschreitende Reisen. Festpreise, professionelle Fahrer.`
    return {
      title,
      description,
      alternates: { canonical, languages },
      openGraph: { type: 'website', siteName, locale: 'de_AT', url, title, description },
    }
  }

  if (location.kind === 'borderCity') {
    const { city, country } = location.data
    const title = `Chauffeurtransfer nach ${city}, ${country}`
    const description = `Privater grenzüberschreitender Chauffeurtransfer von Österreich nach ${city}, ${country}. Festpreise, lizenzierter Fahrer, kein Fahrzeugwechsel an der Grenze.`
    return {
      title,
      description,
      alternates: { canonical, languages },
      openGraph: { type: 'website', siteName, locale: 'de_AT', url, title, description },
    }
  }

  const { country, cities } = location.data
  const title = `Grenzüberschreitende Transfers nach ${country}`
  const description = `Lizenzierte private Chauffeurtransfers von Österreich nach ${cities.join(', ')} (${country}). Festpreise, kein Fahrzeugwechsel an der Grenze.`
  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: { type: 'website', siteName, locale: 'de_AT', url, title, description },
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
    provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
    areaServed: { '@type': areaServedType, name: areaServedName },
    url,
    ...(attractions && attractions.length > 0
      ? { mentions: attractions.map((a) => ({ '@type': 'TouristAttraction', name: a })) }
      : {}),
  }
}

export default async function LocationPageDe({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const location = findLocation(slug)
  if (!location) notFound()

  if (location.kind === 'city') {
    const { city, region, airport, popularRoutes, note, hotels, hotelNote, attractions } =
      location.data
    const pageUrl = `${siteUrl}/de/service-areas/${slug}`
    return (
      <>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: 'Home', path: '/de' },
            { name: 'Einsatzgebiete', path: '/de/service-areas' },
            { name: city, path: `/de/service-areas/${slug}` },
          ])}
        />
        <JsonLd
          data={serviceJsonLd({
            name: `Chauffeurservice in ${city}`,
            areaServedName: city,
            areaServedType: 'City',
            url: pageUrl,
            attractions: attractions?.map((a) => a.name),
          })}
        />

        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              {region} · Österreich
            </p>
            <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
              Chauffeurservice in {city}
            </h1>
            <p className="mt-4 max-w-xl text-brand-ink-2/80">
              Private, lizenzierte Transfers von und nach {city}. Flughafenabholungen, direkte
              Stadt-zu-Stadt-Fahrten und grenzüberschreitende Reisen in Nachbarländer — im Voraus
              gebucht mit Festpreisen.
            </p>
            {note && <p className="mt-3 text-sm font-semibold text-brand-gold">{note}</p>}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2">
            {airport && (
              <div>
                <h2 className="font-display text-xl text-brand-ink">Nächstgelegener Flughafen</h2>
                <p className="mt-2 text-sm text-brand-ink-2/80">{airport}</p>
              </div>
            )}
            <div>
              <h2 className="font-display text-xl text-brand-ink">Beliebte Strecken</h2>
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

        <HotelsSection place={city} hotels={hotels} hotelNote={hotelNote} locale="de" />
        <AttractionsSection place={city} attractions={attractions} locale="de" />
        <LocationMap query={`${city}, ${region}, Österreich`} label={`${city} auf der Karte`} />
        <LocationCtaDe place={city} />
      </>
    )
  }

  if (location.kind === 'borderCity') {
    const { city, country, countrySlug, via, popularRoutes } = location.data
    const pageUrl = `${siteUrl}/de/service-areas/${slug}`
    const countryLabel =
      borderCrossingDestinations.find((d) => d.slug === countrySlug)?.country ?? country
    return (
      <>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: 'Home', path: '/de' },
            { name: 'Einsatzgebiete', path: '/de/service-areas' },
            { name: countryLabel, path: `/de/service-areas/${countrySlug}` },
            { name: city, path: `/de/service-areas/${slug}` },
          ])}
        />
        <JsonLd
          data={serviceJsonLd({
            name: `Chauffeurtransfer nach ${city}, ${country}`,
            areaServedName: city,
            areaServedType: 'City',
            url: pageUrl,
          })}
        />

        <section className="border-b border-brand-line bg-brand-ink text-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              <Link href={`/de/service-areas/${countrySlug}`} className="hover:underline">
                {country}
              </Link>{' '}
              · Grenzüberschreitender Transfer
            </p>
            <h1 className="font-display mt-2 text-3xl sm:text-4xl">Österreich → {city}</h1>
            <p className="mt-4 max-w-xl text-brand-cream/80">
              Lizenzierter privater Chauffeurtransfer von Österreich nach {city}, {country} — kein
              Fahrzeugwechsel an der Grenze notwendig.
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-gold">{via}</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Beliebte Strecken</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
            {popularRoutes.map((route) => (
              <li key={route} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                {route}
              </li>
            ))}
          </ul>
        </section>

        <LocationCtaDe place={city} />
      </>
    )
  }

  const { country, popularRoutes, note, via } = location.data
  const citiesInCountry = borderCities.filter((c) => c.countrySlug === location.data.slug)
  const pageUrl = `${siteUrl}/de/service-areas/${slug}`

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/de' },
          { name: 'Einsatzgebiete', path: '/de/service-areas' },
          { name: country, path: `/de/service-areas/${slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: `Grenzüberschreitende Transfers nach ${country}`,
          areaServedName: country,
          areaServedType: 'Country',
          url: pageUrl,
        })}
      />

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Grenzüberschreitende Transfers
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">Österreich → {country}</h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Lizenziert für internationale Abholungen und Ablieferungen nach {country} — kein
            Fahrzeugwechsel an der Grenze notwendig.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-gold">{note} · {via}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Ziele</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {citiesInCountry.map((c) => (
                <li key={c.slug} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  <Link href={`/de/service-areas/${c.slug}`} className="hover:text-brand-gold">
                    {c.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Beliebte Strecken</h2>
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

      <LocationCtaDe place={country} />
    </>
  )
}

function LocationCtaDe({ place }: { place: string }) {
  return (
    <section className="border-t border-brand-line bg-brand-cream">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="font-display text-2xl text-brand-ink">
            Buchen Sie Ihren Transfer nach {place}
          </h2>
          <p className="mt-2 text-brand-ink-2/80">
            Senden Sie Ihre Reisedaten und wir bestätigen Verfügbarkeit und Preis per E-Mail.
          </p>
        </div>
        <Link
          href={`/de/booking?to=${encodeURIComponent(place)}`}
          className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Transfer anfragen
        </Link>
      </div>
    </section>
  )
}
