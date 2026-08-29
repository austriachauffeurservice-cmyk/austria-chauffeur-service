import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { HotelsSection, AttractionsSection, PopularRoutesList } from '@/components/location-sections'
import { skiResorts } from '@/lib/content/de/ski-resorts'
import { routes } from '@/lib/content/de/routes'
import { airports } from '@/lib/content/de/airports'
import { siteName, siteUrl } from '@/lib/content/site'
import { findRelatedPosts } from '@/lib/content/de/blog'

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

  const canonical = `/de/ski-transfers/${slug}`
  const title = `Skitransfer nach ${resort.name}`
  const description = `Privater Flughafen-zu-Resort-Chauffeurtransfer nach ${resort.name}, ${resort.region}. Winterfeste Fahrzeuge, Platz für Ski/Board, Festpreise ab ${resort.nearestAirports[0].name}.`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: { en: `/ski-transfers/${slug}`, de: canonical, 'x-default': `/ski-transfers/${slug}` },
    },
    openGraph: { type: 'website', siteName, locale: 'de_AT', url: `${siteUrl}${canonical}`, title, description },
  }
}

export default async function SkiResortPageDe({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const resort = skiResorts.find((r) => r.slug === slug)
  if (!resort) notFound()

  const pageUrl = `${siteUrl}/de/ski-transfers/${slug}`
  const relatedPosts = findRelatedPosts([resort.name, resort.region])

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/de` },
            { '@type': 'ListItem', position: 2, name: 'Ski- & Alpintransfers', item: `${siteUrl}/de/ski-transfers` },
            { '@type': 'ListItem', position: 3, name: resort.name, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Private Ski Resort Chauffeur Transfer',
          name: `Skitransfer nach ${resort.name}`,
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
            {resort.region} · Ski- & Alpintransfer
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            Privater Skitransfer nach {resort.name}
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Winterfeste Fahrzeuge, erfahrene Alpinfahrer und Platz für Ski und Snowboards — im
            Voraus gebucht mit Festpreisen.
          </p>
          <p className="mt-3 text-sm font-semibold text-brand-gold">{resort.skiArea}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Nächstgelegene Flughäfen</h2>
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
            <h2 className="font-display text-xl text-brand-ink">Beliebte Strecken</h2>
            <PopularRoutesList items={resort.popularRoutes} routes={routes} airports={airports} locale="de" />
          </div>
        </div>

        {resort.highlights.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">Resort-Highlights</h2>
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
              Welcher Flughafen eignet sich am besten für {resort.name}?
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
          <h2 className="font-display text-xl text-brand-ink">Skiausrüstung &amp; Gepäck</h2>
          <p className="mt-3 text-sm text-brand-ink-2/80">
            Reisen Sie mit Ski, Snowboards oder zusätzlichem Wintergepäck? Geben Sie dies bei der
            Buchung an, damit wir ein Fahrzeug mit ausreichend Platz zuweisen können — sowohl der
            Executive Van als auch der Kleinbus bieten zusätzlich zum normalen Gepäck Platz für
            Ski und Boards.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">Winterreise nach {resort.name}</h2>
          <p className="mt-3 text-sm text-brand-ink-2/80">
            Die Fahrzeit kann im Winter je nach Schneefall, Straßenverhältnissen und Verkehr rund
            um die Hauptan- und -abreisezeiten variieren. Wir empfehlen, rund um den
            Samstags-Wechseltag, an dem die Resortstraßen am stärksten befahren sind, zusätzliche
            Zeit einzuplanen.
          </p>
        </div>

        <p className="mt-10 text-sm text-brand-ink-2/70">
          <Link
            href="/de/ski-transfers"
            className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            Alle österreichischen Skitransfers ansehen →
          </Link>
        </p>
      </section>

      <HotelsSection place={resort.name} hotels={resort.hotels} hotelNote={resort.hotelNote} locale="de" />
      <AttractionsSection
        place={resort.name}
        attractions={resort.attractions}
        heading="Höhepunkte"
        locale="de"
        showBookingCta={false}
      />

      {relatedPosts.length > 0 && (
        <section className="border-t border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Weiterführende Artikel</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((post) => (
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
          </div>
        </section>
      )}

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">
              Buchen Sie Ihren Transfer nach {resort.name}
            </h2>
            <p className="mt-2 text-brand-ink-2/80">
              Senden Sie Ihre Reisedaten und wir bestätigen Verfügbarkeit und Preis per E-Mail.
            </p>
          </div>
          <Link
            href={`/de/booking?to=${encodeURIComponent(resort.name)}`}
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Transfer anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
