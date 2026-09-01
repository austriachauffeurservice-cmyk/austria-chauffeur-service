import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PopularRoutesList } from '@/components/location-sections'
import { BookingCta } from '@/components/booking-cta'
import { airports } from '@/lib/content/airports'
import { austrianCities } from '@/lib/content/service-areas'
import { routes } from '@/lib/content/routes'
import { vehicles } from '@/lib/content/services'
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
  const title = airport.seoTitle ?? `${airport.name} (${airport.code}) Transfer`
  const description =
    airport.seoDescription ??
    `Private meet-and-greet chauffeur pickup at ${airport.name} (${airport.code}). Flight tracking, fixed pricing, professional drivers.`
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
  const isEnriched = Boolean(airport.intro && airport.intro.length > 0)

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
              { label: 'Home', href: '/' },
              { label: 'Airport Transfers', href: '/airport-transfers' },
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
                Private pickup and drop-off at {airport.name}, arranged through our licensed
                partner network. Flight tracking included — we monitor your flight and adjust the
                pickup timing if it's early or delayed.
              </>
            )}
          </p>
          {airport.note && (
            <p className="mt-3 text-sm font-semibold text-brand-gold">{airport.note}</p>
          )}
          <div className="mt-8">
            <Link
              href="#quote"
              className="inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
            >
              Request a Fixed Quote
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
            <h2 className="font-display text-xl text-brand-ink">{airport.name} Transfer Service</h2>
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
            <h2 className="font-display text-xl text-brand-ink">Distance to the City</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">{airport.distanceFromCity}</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Popular Routes</h2>
            <PopularRoutesList
              items={airport.popularRoutes}
              routes={routes}
              airports={airports}
              currentAirportSlug={airport.slug}
              locale="en"
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">How Pickup Works</h2>
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
                We track your flight and adjust your pickup timing for early or delayed arrivals —
                no extra charge.
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
                    <th className="pb-2 pr-4">Vehicle</th>
                    <th className="pb-2 pr-4">Passengers</th>
                    <th className="pb-2">Luggage</th>
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
              <Link href="/fleet" className="underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
                See full vehicle details on the fleet page →
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
            <h2 className="font-display text-xl text-brand-ink">Private Transfer vs Taxi &amp; Public Transport</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                    <th className="pb-2 pr-4">Option</th>
                    <th className="pb-2 pr-4">Best for</th>
                    <th className="pb-2">Trade-off</th>
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

      {isEnriched && airport.useCases && airport.useCases.length > 0 && (
        <section className="border-y border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Transfers for Every Type of Journey</h2>
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
            <h2 className="font-display text-xl text-brand-ink">Why Choose Our {airport.code} Chauffeur?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {airport.whyChooseUsPoints.map((point) => (
                <div key={point.title} className="rounded-sm border border-brand-line p-5">
                  <p className="font-semibold text-brand-ink">{point.title}</p>
                  <p className="mt-1.5 text-sm text-brand-ink-2/70">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isEnriched && airport.faqs && airport.faqs.length > 0 && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Frequently Asked Questions</h2>
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

      <BookingCta
        id="quote"
        pageType="airport"
        title={`Book Your ${airport.name} Transfer`}
        description="Submit your flight details and we'll confirm availability and pricing by email."
        pickup={airport.name}
        dropoffHint={airport.dropoffHint}
      />
    </>
  )
}
