import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PopularRoutesList } from '@/components/location-sections'
import { BookingCta } from '@/components/booking-cta'
import { airports } from '@/lib/content/de/airports'
import { austrianCities } from '@/lib/content/de/service-areas'
import { routes } from '@/lib/content/de/routes'
import { vehicles } from '@/lib/content/de/services'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'
import { findRelatedPosts } from '@/lib/content/de/blog'

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

  const canonical = `/de/airport-transfers/${slug}`
  const title = airport.seoTitle ?? `${airport.name} (${airport.code}) Transfer`
  const description =
    airport.seoDescription ??
    `Privater Empfangsservice-Abholung am ${airport.name} (${airport.code}). Flugverfolgung, Festpreise, professionelle Fahrer.`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: { en: `/airport-transfers/${slug}`, de: canonical, 'x-default': `/airport-transfers/${slug}` },
    },
    openGraph: { type: 'website', siteName, locale: 'de_AT', url: `${siteUrl}${canonical}`, title, description, images: [defaultOgImage] },
  }
}

export default async function AirportPageDe({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const airport = airports.find((a) => a.slug === slug)
  if (!airport) notFound()

  const cityMatch = austrianCities.find((c) => c.city === airport.city)
  const pageUrl = `${siteUrl}/de/airport-transfers/${slug}`
  const relatedPosts = findRelatedPosts([airport.city, airport.region])
  const isEnriched = Boolean(airport.intro && airport.intro.length > 0)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/de` },
            { '@type': 'ListItem', position: 2, name: 'Flughafentransfers', item: `${siteUrl}/de/airport-transfers` },
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
      {airport.faqs && airport.faqs.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: airport.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }}
        />
      )}

      <div className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Startseite', href: '/de' },
              { label: 'Flughafentransfers', href: '/de/airport-transfers' },
              { label: airport.name },
            ]}
          />
        </div>
      </div>

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            {airport.code} · {airport.region}
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            {airport.name} Transfer
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            {airport.heroSubtitle ?? (
              <>
                Private Abholung und Ablieferung am {airport.name}, organisiert über unser
                lizenziertes Partnernetzwerk. Inklusive Flugverfolgung — wir beobachten Ihren Flug
                und passen die Abholzeit bei Früh- oder Verspätung an.
              </>
            )}
          </p>
          {airport.note && (
            <p className="mt-3 text-sm font-semibold text-brand-gold">{airport.note}</p>
          )}
          <div className="mt-8">
            <Link
              href="#angebot"
              className="inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
            >
              Festpreis anfragen
            </Link>
          </div>
          {isEnriched && airport.quickFacts && airport.quickFacts.length > 0 && (
            <div className="mt-10 overflow-x-auto rounded-sm border border-brand-line bg-white">
              <table className="w-full min-w-[420px] text-left text-sm">
                <tbody className="divide-y divide-brand-line">
                  {airport.quickFacts.map((f) => (
                    <tr key={f.label}>
                      <td className="py-2.5 px-4 font-semibold text-brand-ink">{f.label}</td>
                      <td className="py-2.5 px-4 text-brand-ink-2/80">{f.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {isEnriched && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{airport.name} Transferservice</h2>
            <div className="mt-4 space-y-4 text-brand-ink-2/90">
              {airport.intro!.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Entfernung zur Stadt</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">{airport.distanceFromCity}</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Beliebte Strecken</h2>
            <PopularRoutesList
              items={airport.popularRoutes}
              routes={routes}
              airports={airports}
              currentAirportSlug={airport.slug}
              locale="de"
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">So funktioniert die Abholung</h2>
          {airport.pickupSteps && airport.pickupSteps.length > 0 ? (
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {airport.pickupSteps.map((step, i) => (
                <li key={step.title} className="rounded-sm border border-brand-line bg-brand-cream p-5">
                  <span className="font-display text-xs font-semibold text-brand-gold">
                    {String(i + 1).padStart(2, '0')} — {step.title}
                  </span>
                  <p className="mt-1.5 text-sm text-brand-ink-2/80">{step.description}</p>
                </li>
              ))}
            </ol>
          ) : (
            <ol className="mt-3 space-y-3 text-sm text-brand-ink-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                Wir verfolgen Ihren Flug und passen die Abholzeit bei Früh- oder Verspätung an —
                ohne Aufpreis.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                Ihr Chauffeur wartet in der Ankunftshalle mit einem Namensschild.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                Festpreis im Voraus vereinbart — kein Taxameter, keine versteckten Gebühren.
              </li>
            </ol>
          )}
        </div>

        {isEnriched && airport.destinationSections && airport.destinationSections.length > 0 && (
          <div className="mt-10 divide-y divide-brand-line border-y border-brand-line">
            {airport.destinationSections.map((d) => (
              <div key={d.heading} className="py-8 first:pt-0 last:pb-0">
                <h2 className="font-display text-xl text-brand-ink">{d.heading}</h2>
                <p className="mt-3 text-sm text-brand-ink-2/80">{d.description}</p>
                {d.linkHref && (
                  <Link
                    href={d.linkHref}
                    className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
                  >
                    {d.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}

        {isEnriched && airport.businessSection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{airport.businessSection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{airport.businessSection.description}</p>
          </div>
        )}

        {isEnriched && airport.familyLuggageSection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{airport.familyLuggageSection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{airport.familyLuggageSection.description}</p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                    <th className="pb-2 pr-4">Fahrzeug</th>
                    <th className="pb-2 pr-4">Passagiere</th>
                    <th className="pb-2">Gepäck</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-line">
                  {vehicles.map((v) => (
                    <tr key={v.type}>
                      <td className="py-2.5 pr-4 font-semibold text-brand-ink">{v.name}</td>
                      <td className="py-2.5 pr-4 text-brand-ink-2/80">{v.passengers}</td>
                      <td className="py-2.5 text-brand-ink-2/80">{v.luggage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-brand-ink-2/60">
              <Link href="/de/fleet" className="underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
                Alle Fahrzeugdetails auf der Fuhrpark-Seite →
              </Link>
            </p>
          </div>
        )}

        {isEnriched && airport.flightTrackingSection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{airport.flightTrackingSection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{airport.flightTrackingSection.description}</p>
          </div>
        )}

        {isEnriched && airport.meetGreetSection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{airport.meetGreetSection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{airport.meetGreetSection.description}</p>
          </div>
        )}

        {isEnriched && airport.winterSection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{airport.winterSection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{airport.winterSection.description}</p>
            {airport.winterSection.linkHref && (
              <Link
                href={airport.winterSection.linkHref}
                className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
              >
                {airport.winterSection.linkLabel}
              </Link>
            )}
          </div>
        )}

        {isEnriched && airport.transferComparison && airport.transferComparison.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">Privater Transfer vs. Taxi &amp; öffentliche Verkehrsmittel</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                    <th className="pb-2 pr-4">Option</th>
                    <th className="pb-2 pr-4">Am besten für</th>
                    <th className="pb-2">Zu bedenken</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-line">
                  {airport.transferComparison.map((c) => (
                    <tr key={c.option}>
                      <td className="py-2.5 pr-4 font-semibold text-brand-ink">{c.option}</td>
                      <td className="py-2.5 pr-4 text-brand-ink-2/80">{c.bestFor}</td>
                      <td className="py-2.5 text-brand-ink-2/80">{c.tradeoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {cityMatch && (
          <p className="mt-10 text-sm text-brand-ink-2/70">
            Reisen Sie nach {airport.city}? Siehe unsere vollständige{' '}
            <Link
              href={`/de/service-areas/${cityMatch.slug}`}
              className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              {airport.city}-Abdeckung, Hotels und Sehenswürdigkeiten
            </Link>
            .
          </p>
        )}
      </section>

      {isEnriched && airport.useCases && airport.useCases.length > 0 && (
        <section className="border-y border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Transfers für jede Art von Reise</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {airport.useCases.map((u) => (
                <div key={u.title} className="rounded-sm border border-brand-line bg-white p-5">
                  <p className="font-semibold text-brand-ink">{u.title}</p>
                  <p className="mt-1.5 text-sm text-brand-ink-2/70">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isEnriched && airport.whyChooseUsPoints && airport.whyChooseUsPoints.length > 0 && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">
              Warum unseren {airport.code}-Chauffeur wählen?
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {airport.whyChooseUsPoints.map((p) => (
                <div key={p.title} className="rounded-sm border border-brand-line bg-brand-cream p-5">
                  <p className="font-semibold text-brand-ink">{p.title}</p>
                  <p className="mt-1.5 text-sm text-brand-ink-2/70">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isEnriched && airport.faqs && airport.faqs.length > 0 && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Häufig gestellte Fragen</h2>
            <dl className="mt-6 divide-y divide-brand-line">
              {airport.faqs.map((f) => (
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
        <section className="border-t border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Weiterführende Artikel</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/de/blog/${post.slug}`}
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

      <BookingCta
        id="angebot"
        locale="de"
        pageType="airport"
        title={`Buchen Sie Ihren ${airport.name}-Transfer`}
        description="Senden Sie Ihre Flugdaten und wir bestätigen Verfügbarkeit und Preis per E-Mail."
        pickup={airport.name}
        dropoffHint={airport.dropoffHint}
      />
    </>
  )
}
