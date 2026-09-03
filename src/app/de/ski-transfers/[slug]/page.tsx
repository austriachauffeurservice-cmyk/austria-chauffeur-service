import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HotelsSection, AttractionsSection, PopularRoutesList } from '@/components/location-sections'
import { BookingCta } from '@/components/booking-cta'
import { HeroQuoteCard } from '@/components/hero-quote-card'
import { skiResorts } from '@/lib/content/de/ski-resorts'
import { routes } from '@/lib/content/de/routes'
import { airports } from '@/lib/content/de/airports'
import { siteName, siteUrl } from '@/lib/content/site'
import { findRelatedPosts } from '@/lib/content/de/blog'
import { matchAirportField } from '@/lib/content/link-match'
import { localizedHref } from '@/lib/i18n'

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
  const title = resort.seoTitle ?? `Skitransfer nach ${resort.name} | Privater Chauffeurservice`
  const description =
    resort.seoDescription ??
    `Privater Flughafen-zu-Resort-Chauffeurtransfer nach ${resort.name}, ${resort.region}. Wintertaugliche Fahrzeuge, Platz für Ski/Board, Festpreise ab ${resort.nearestAirports[0].name}.`
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
  // 'Skitransfers'/'Ski Transfers' (both appear in the DE data) rank above
  // the bare region name so a ski-relevant guide outranks an unrelated
  // same-region post (e.g. a cross-border article that happens to share the
  // region tag) — see the Aug 2026 Filzmoos audit.
  const relatedPosts = findRelatedPosts([resort.name, 'Skitransfers', 'Ski Transfers', resort.region])

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
      {resort.faqs && resort.faqs.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: resort.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }}
        />
      )}

      <div className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Startseite', href: '/de' },
              { label: 'Ski- & Alpintransfers', href: '/de/ski-transfers' },
              { label: resort.name },
            ]}
          />
        </div>
      </div>

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              {resort.region} · Ski- & Alpintransfer
            </p>
            <h1 className="font-display mt-2 text-3xl sm:text-4xl">
              {resort.heroHeading ?? `Privater Skitransfer nach ${resort.name}`}
            </h1>
            <p className="mt-4 max-w-xl text-brand-cream/80">
              {resort.heroSubtitle ??
                'Wintertaugliche Fahrzeuge, erfahrene Chauffeure und ausreichend Platz für Ski und Snowboards — vorab gebucht zum Festpreis.'}
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-gold">{resort.skiArea}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {resort.nearestAirports.map((a) => (
                <div key={a.name} className="rounded-sm border border-white/20 bg-white/5 px-3 py-2 text-xs">
                  <span className="text-brand-cream/70">{a.name.replace(/\s*\([A-Z]+\)$/, '')}: </span>
                  <span className="font-semibold text-white">
                    {a.distance ? `${a.distance} · ${a.driveTime}` : a.driveTime}
                  </span>
                </div>
              ))}
              <div className="rounded-sm border border-white/20 bg-white/5 px-3 py-2 text-xs">
                <span className="text-brand-cream/70">Tür zu Tür: </span>
                <span className="font-semibold text-white">Ja</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroQuoteCard
              locale="de"
              pickup={resort.nearestAirports[0]?.name}
              dropoff={resort.name}
              dropoffHint={resort.dropoffHint}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Flughafentransfers nach {resort.name}</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {resort.nearestAirports.map((a) => {
                const match = matchAirportField(a.name, airports)[0]
                return (
                  <li key={a.name} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                    {match?.href ? (
                      <Link href={localizedHref(match.href, 'de')} className="hover:text-brand-gold hover:underline">
                        {a.name}
                      </Link>
                    ) : (
                      a.name
                    )}{' '}
                    — {a.distance ? `${a.distance}, ` : ''}
                    {a.driveTime}
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Beliebte Skitransfer-Strecken</h2>
            {resort.relatedResortRoutes ? (
              <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
                {resort.relatedResortRoutes.map((r) => (
                  <li key={r.label} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                    {r.href ? (
                      <Link href={r.href} className="hover:text-brand-gold hover:underline">
                        {r.label} — {r.duration}
                      </Link>
                    ) : (
                      <span>{r.label} — {r.duration}</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <PopularRoutesList items={resort.popularRoutes} routes={routes} airports={airports} locale="de" />
            )}
          </div>
        </div>

        {resort.routeOverview && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">
              {resort.routeOverview.start} → {resort.routeOverview.destination}: Routenübersicht
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-sm">
                <tbody className="divide-y divide-brand-line">
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Start</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.start}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Ziel</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.destination}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Fahrzeit</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.driveTime}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Service</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.service}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Fahrzeuge</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.vehicles}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Gepäck</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.luggage}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-brand-ink-2/60">
              Die tatsächliche Fahrzeit hängt von Wetter, Verkehr und Straßenverhältnissen ab.
            </p>
          </div>
        )}

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
              {resort.airportGuidance.map((g) => {
                const match = matchAirportField(g.airport, airports)[0]
                return (
                  <div key={g.airport}>
                    <p className="text-sm font-semibold text-brand-ink">
                      {match?.href ? (
                        <Link href={localizedHref(match.href, 'de')} className="hover:text-brand-gold hover:underline">
                          {g.airport}
                        </Link>
                      ) : (
                        g.airport
                      )}
                    </p>
                    <p className="mt-1 text-sm text-brand-ink-2/80">{g.note}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {resort.accommodationSection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{resort.accommodationSection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{resort.accommodationSection.description}</p>
          </div>
        )}

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">Ski- &amp; Snowboardausrüstung</h2>
          <p className="mt-3 text-sm text-brand-ink-2/80">
            Reisen Sie mit Ski, Snowboard, Skischuhen oder zusätzlichem Wintergepäck? Geben Sie
            dies bei der Buchung an, damit wir ein geeignetes Fahrzeug mit ausreichend Stauraum
            einplanen können. Für Familien und Gruppen stehen Executive Vans und Kleinbusse zur
            Verfügung.
          </p>
        </div>

        {resort.transferComparison && resort.transferComparison.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">Privater Chauffeur vs. Zug vs. Mietwagen</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-line text-xs uppercase tracking-wide text-brand-ink-2/60">
                    <th className="py-2 pr-4 font-semibold">Option</th>
                    <th className="py-2 pr-4 font-semibold">Am besten für</th>
                    <th className="py-2 font-semibold">Zu bedenken</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-line">
                  {resort.transferComparison.map((c) => (
                    <tr key={c.option}>
                      <td className="py-3 pr-4 font-semibold text-brand-ink">{c.option}</td>
                      <td className="py-3 pr-4 text-brand-ink-2/80">{c.bestFor}</td>
                      <td className="py-3 text-brand-ink-2/80">{c.tradeoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {resort.familySection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{resort.familySection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{resort.familySection.description}</p>
          </div>
        )}

        {resort.groupSection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{resort.groupSection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{resort.groupSection.description}</p>
          </div>
        )}

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">Winterreise nach {resort.name}</h2>
          <p className="mt-3 text-sm text-brand-ink-2/80">
            Die Fahrzeit kann im Winter je nach Schneefall, Straßenverhältnissen und Verkehr rund
            um die Hauptan- und -abreisezeiten variieren. Wir empfehlen, rund um den
            Samstags-Wechseltag, an dem die Resortstraßen am stärksten befahren sind, zusätzliche
            Fahrzeit einzuplanen.
          </p>
        </div>

        {resort.returnSection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{resort.returnSection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{resort.returnSection.description}</p>
          </div>
        )}

        {resort.whyBookPoints && resort.whyBookPoints.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">Warum einen privaten Skitransfer buchen?</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {resort.whyBookPoints.map((point) => (
                <div key={point.title} className="rounded-sm border border-brand-line p-5">
                  <p className="font-semibold text-brand-ink">{point.title}</p>
                  <p className="mt-1.5 text-sm text-brand-ink-2/70">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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

      {resort.faqs && resort.faqs.length > 0 && (
        <section className="border-t border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Häufig gestellte Fragen</h2>
            <dl className="mt-6 divide-y divide-brand-line">
              {resort.faqs.map((f) => (
                <div key={f.question} className="py-6 first:pt-0">
                  <dt className="font-display text-base text-brand-ink">{f.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

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

      <BookingCta
        locale="de"
        pageType="ski"
        title={`Bereit für Ihren ${resort.name}-Skitransfer?`}
        description="Senden Sie uns Ihre Reisedaten und wir bestätigen Verfügbarkeit und Festpreis per E-Mail."
        pickup={resort.nearestAirports[0]?.name}
        dropoff={resort.name}
        dropoffHint={resort.dropoffHint}
      />
    </>
  )
}
