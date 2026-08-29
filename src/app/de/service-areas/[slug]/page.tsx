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
} from '@/lib/content/de/service-areas'
import { siteName, siteUrl } from '@/lib/content/site'
import { routes } from '@/lib/content/de/routes'
import { airports } from '@/lib/content/de/airports'
import { vehicles } from '@/lib/content/de/services'
import { findRelatedPosts } from '@/lib/content/de/blog'

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
    const { city, region, seoTitle, seoDescription } = location.data
    const regionSuffix = region === city ? '' : `, ${region}`
    const title = seoTitle ?? `Chauffeurservice in ${city}`
    const description =
      seoDescription ??
      `Private Chauffeurtransfers von und nach ${city}${regionSuffix} — Flughafenabholungen, Stadt-zu-Stadt-Fahrten und grenzüberschreitende Reisen. Festpreise, professionelle Fahrer.`
    return {
      title,
      description,
      alternates: { canonical, languages },
      openGraph: { type: 'website', siteName, locale: 'de_AT', url, title, description },
    }
  }

  if (location.kind === 'borderCity') {
    const { city, country, seoTitle, seoDescription } = location.data
    const title = seoTitle ?? `Chauffeurtransfer nach ${city}, ${country}`
    const description =
      seoDescription ??
      `Privater grenzüberschreitender Chauffeurtransfer von Österreich nach ${city}, ${country}. Festpreise, lizenzierter Fahrer, kein Fahrzeugwechsel an der Grenze.`
    return {
      title,
      description,
      alternates: { canonical, languages },
      openGraph: { type: 'website', siteName, locale: 'de_AT', url, title, description },
    }
  }

  const { country, cities, seoTitle, seoDescription } = location.data
  const title = seoTitle ?? `Grenzüberschreitende Transfers nach ${country}`
  const description =
    seoDescription ??
    `Lizenzierte private Chauffeurtransfers von Österreich nach ${cities.join(', ')} (${country}). Festpreise, kein Fahrzeugwechsel an der Grenze.`
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
    const { city, region, airport, popularRoutes, note, hotels, hotelNote, attractions, relatedDayTour } =
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
                <AirportField text={airport} airports={airports} locale="de" />
              </div>
            )}
            <div>
              <h2 className="font-display text-xl text-brand-ink">Beliebte Strecken</h2>
              <PopularRoutesList items={popularRoutes} routes={routes} airports={airports} locale="de" />
            </div>
          </div>
          {relatedDayTour && (
            <p className="mt-8 text-sm text-brand-ink-2/80">
              Nur für einen Tag zu Besuch statt einer Übernachtung?{' '}
              <Link href={`/de/day-tours/${relatedDayTour.slug}`} className="font-semibold text-brand-ink hover:text-brand-gold hover:underline">
                Unser {relatedDayTour.label}
              </Link>
              .
            </p>
          )}
        </section>

        <HotelsSection place={city} hotels={hotels} hotelNote={hotelNote} locale="de" />
        <AttractionsSection place={city} attractions={attractions} locale="de" />
        <LocationMap query={`${city}, ${region}, Österreich`} label={`${city} auf der Karte`} />
        <BookingCta
          locale="de"
          pageType="service-area"
          title={`Buchen Sie Ihren Transfer nach ${city}`}
          description="Senden Sie Ihre Reisedaten und wir bestätigen Verfügbarkeit und Preis per E-Mail."
          dropoff={city}
        />
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
          <PopularRoutesList items={popularRoutes} routes={routes} airports={airports} locale="de" />
        </section>

        <BookingCta
          locale="de"
          pageType="country"
          title={`Buchen Sie Ihren Transfer nach ${city}`}
          description="Senden Sie Ihre Reisedaten und wir bestätigen Verfügbarkeit und Preis per E-Mail."
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
  const pageUrl = `${siteUrl}/de/service-areas/${slug}`
  const relatedPosts = findRelatedPosts([country])
  const isEnriched = Boolean(intro && intro.length > 0)

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
            Grenzüberschreitende Transfers
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            {isEnriched ? `Private Chauffeurtransfers Österreich – ${country}` : `Österreich → ${country}`}
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Lizenziert für internationale Abholungen und Ablieferungen nach {country} — kein
            Fahrzeugwechsel an der Grenze notwendig.
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
              Private Transfers Österreich – {country}
            </h2>
            <p className="mt-4 text-brand-ink-2/90">{serviceIntro}</p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">
              {isEnriched ? `${country}: Beliebte Reiseziele` : 'Ziele'}
            </h2>
            {isEnriched && destinationsIntro && (
              <p className="mt-3 text-sm text-brand-ink-2/80">{destinationsIntro}</p>
            )}
            {citiesInCountry.some((c) => c.description) ? (
              <div className="mt-4 space-y-4">
                {citiesInCountry.map((c) => (
                  <div key={c.slug} className="rounded-sm border border-brand-line p-4">
                    <Link
                      href={`/de/service-areas/${c.slug}`}
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
                    <Link href={`/de/service-areas/${c.slug}`} className="hover:text-brand-gold">
                      {c.city}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Beliebte Strecken</h2>
            <PopularRoutesList items={popularRoutes} routes={routes} airports={airports} locale="de" />
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
                  Zur vollständigen Strecke →
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
              Grenzübertritt Österreich–{country}
            </h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{borderInfo}</p>
          </div>
        </section>
      )}

      {isEnriched && whyChauffeur && whyChauffeur.length > 0 && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Warum ein privater Chauffeur?</h2>
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
            <h2 className="font-display text-xl text-brand-ink">Fahrzeuge &amp; Passagierkapazität</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                    <th className="pb-3 pr-4">Fahrzeug</th>
                    <th className="pb-3 pr-4">Passagiere</th>
                    <th className="pb-3">Gepäck</th>
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
              <Link href="/de/fleet" className="underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
                Alle Fahrzeugdetails auf der Fuhrpark-Seite →
              </Link>
            </p>
          </div>
        </section>
      )}

      {isEnriched && bookingSteps && bookingSteps.length > 0 && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">
              So buchen Sie Ihren Transfer Österreich → {country}
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
              Ein lizenzierter grenzüberschreitender Chauffeurservice
            </h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{trust}</p>
          </div>
        </section>
      )}

      {isEnriched && faqs && faqs.length > 0 && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Häufig gestellte Fragen</h2>
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
        locale="de"
        pageType="country"
        title={`Transfer Österreich → ${country} anfragen`}
        description="Senden Sie Ihre Reisedaten und wir bestätigen Verfügbarkeit und Preis per E-Mail."
        dropoff={country}
      />
    </>
  )
}

function RelatedReading({ posts }: { posts: ReturnType<typeof findRelatedPosts> }) {
  if (posts.length === 0) return null
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
      <h2 className="font-display text-xl text-brand-ink">Weiterführende Artikel</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/de/blog/${post.slug}`}
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
