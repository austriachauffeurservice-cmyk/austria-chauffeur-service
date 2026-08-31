import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { routes } from '@/lib/content/routes'
import { airports } from '@/lib/content/airports'
import { austrianCities } from '@/lib/content/service-areas'
import { skiResorts } from '@/lib/content/ski-resorts'
import { matchLocationText, matchSkiResortText } from '@/lib/content/link-match'
import { siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'
import { HeroQuoteCard } from '@/components/hero-quote-card'

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

  const canonical = `/routes/${slug}`
  const title = route.seoTitle ?? `${route.from} to ${route.to} Transfer`
  const description =
    route.seoDescription ??
    `Private chauffeur transfer from ${route.from} to ${route.to}. ${route.distance}, ${route.driveTime} drive time, fixed pricing.`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: { en: canonical, de: `/de/routes/${slug}`, 'x-default': canonical },
    },
    openGraph: { type: 'website', siteName, locale: 'en_US', url: `${siteUrl}${canonical}`, title, description },
  }
}

export default async function RoutePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const route = routes.find((r) => r.slug === slug)
  if (!route) notFound()

  const pageUrl = `${siteUrl}/routes/${slug}`
  const origin = matchLocationText(route.from, airports, austrianCities)
  const destination = matchLocationText(route.to, airports, austrianCities) ?? matchSkiResortText(route.to, skiResorts)
  const relatedRoutes = routes
    .filter((r) => r.slug !== route.slug && (r.from === route.from || r.to === route.to))
    .slice(0, 3)
  const showCrossBorderHint = Boolean(route.crossBorder)

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
      {route.faqs && route.faqs.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: route.faqs.map((f) => ({
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
              { label: 'Home', href: '/' },
              { label: 'Routes', href: '/routes' },
              { label: `${route.from} to ${route.to}` },
            ]}
          />
        </div>
      </div>

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
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
          <div className="lg:col-span-5">
            <HeroQuoteCard
              pickup={route.from}
              dropoff={route.to}
              showCrossBorderHint={showCrossBorderHint}
              dropoffHint={route.dropoffHint}
            />
          </div>
        </div>
      </section>

      {route.routeOverview && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Route Overview</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-sm">
                <tbody className="divide-y divide-brand-line">
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Airport</td>
                    <td className="py-3 text-brand-ink-2/80">{route.from}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Destination</td>
                    <td className="py-3 text-brand-ink-2/80">{route.to}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Distance</td>
                    <td className="py-3 text-brand-ink-2/80">{route.distance}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Typical drive time</td>
                    <td className="py-3 text-brand-ink-2/80">{route.driveTime}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Route</td>
                    <td className="py-3 text-brand-ink-2/80">{route.routeOverview.road}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Transfer type</td>
                    <td className="py-3 text-brand-ink-2/80">{route.routeOverview.transferType}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Vehicle</td>
                    <td className="py-3 text-brand-ink-2/80">{route.routeOverview.vehicleNote}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-brand-ink-2/60">
              Journey times are approximate and can vary with traffic, weather, and your exact pickup or hotel location.
            </p>
          </div>
        </section>
      )}

      {route.routeExplanation && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.routeExplanation.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.routeExplanation.description}</p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">
          {route.whyBookPoints ? `Why Book an ${route.from} to ${route.to} Transfer?` : 'Why Book This Route Privately'}
        </h2>
        {route.whyBookPoints ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {route.whyBookPoints.map((point) => (
              <div key={point.title} className="rounded-sm border border-brand-line p-5">
                <p className="font-semibold text-brand-ink">{point.title}</p>
                <p className="mt-1.5 text-sm text-brand-ink-2/70">{point.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul className="mt-4 space-y-2 text-sm text-brand-ink-2">
            {route.whyBook.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </section>

      {route.originComparison && (
        <section className="border-y border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.originComparison.heading}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {route.originComparison.options.map((opt) => (
                <div key={opt.label} className="rounded-sm border border-brand-line bg-white p-5">
                  <p className="font-semibold text-brand-ink">{opt.label}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-gold">
                    {opt.distance} · {opt.driveTime}
                  </p>
                  <p className="mt-2 text-sm text-brand-ink-2/70">{opt.bestFor}</p>
                  {opt.href && (
                    <Link
                      href={opt.href}
                      className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
                    >
                      View this route →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {route.destinationCoverage && (
        <section className="border-y border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.destinationCoverage.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.destinationCoverage.intro}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {route.destinationCoverage.items.map((item) => (
                <span key={item} className="rounded-full border border-brand-line bg-white px-3 py-1 text-xs font-semibold text-brand-ink-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {route.flightTrackingSection && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.flightTrackingSection.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.flightTrackingSection.description}</p>
          </div>
        </section>
      )}

      {route.winterSection && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.winterSection.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.winterSection.description}</p>
            <Link
              href={route.winterSection.linkHref}
              className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              {route.winterSection.linkLabel}
            </Link>
          </div>
        </section>
      )}

      {route.returnSection && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.returnSection.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.returnSection.description}</p>
          </div>
        </section>
      )}

      {route.borderSection && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.borderSection.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.borderSection.description}</p>
          </div>
        </section>
      )}

      {route.luggageNote && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.luggageNote.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.luggageNote.description}</p>
          </div>
        </section>
      )}

      {route.familySection && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.familySection.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.familySection.description}</p>
          </div>
        </section>
      )}

      {route.groupSection && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.groupSection.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.groupSection.description}</p>
          </div>
        </section>
      )}

      {route.transferComparison && route.transferComparison.length > 0 && (
        <section className="border-b border-brand-line bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Private Transfer vs Train</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-line text-xs uppercase tracking-wide text-brand-ink-2/60">
                    <th className="py-2 pr-4 font-semibold">Option</th>
                    <th className="py-2 pr-4 font-semibold">Best for</th>
                    <th className="py-2 font-semibold">Trade-off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-line">
                  {route.transferComparison.map((c) => (
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
        </section>
      )}

      {route.originAlternative && (
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">{route.originAlternative.heading}</h2>
            <p className="mt-4 max-w-2xl text-brand-ink-2/90">{route.originAlternative.description}</p>
          </div>
        </section>
      )}

      {(origin || destination || relatedRoutes.length > 0 || route.relatedAirportRoutes) && (
        <section className="border-t border-brand-line">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            {origin && (
              <p className="text-sm text-brand-ink-2/80">
                More about your starting point:{' '}
                <Link href={origin.href} className="font-semibold text-brand-ink hover:text-brand-gold hover:underline">
                  {origin.label}
                </Link>
              </p>
            )}
            {destination && (
              <p className={origin ? 'mt-2 text-sm text-brand-ink-2/80' : 'text-sm text-brand-ink-2/80'}>
                More about your destination:{' '}
                <Link href={destination.href} className="font-semibold text-brand-ink hover:text-brand-gold hover:underline">
                  {destination.label}
                </Link>
              </p>
            )}
            {route.relatedAirportRoutes ? (
              <div className={origin || destination ? 'mt-6' : ''}>
                <h2 className="font-display text-xl text-brand-ink">{route.relatedRoutesHeading ?? `More ${route.from} Transfers`}</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {route.relatedAirportRoutes.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="rounded-sm border border-brand-line p-4 text-sm transition-colors hover:border-brand-gold"
                    >
                      <p className="font-semibold text-brand-ink">{r.label}</p>
                      <p className="mt-1 text-brand-ink-2/70">{r.distance} · {r.duration}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              relatedRoutes.length > 0 && (
                <div className={origin || destination ? 'mt-6' : ''}>
                  <h2 className="font-display text-xl text-brand-ink">Related Routes</h2>
                  <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
                    {relatedRoutes.map((r) => (
                      <li key={r.slug} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                        <Link href={`/routes/${r.slug}`} className="hover:text-brand-gold hover:underline">
                          {r.from} → {r.to}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {route.faqs && route.faqs.length > 0 && (
        <section className="border-t border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Frequently Asked Questions</h2>
            <dl className="mt-6 divide-y divide-brand-line">
              {route.faqs.map((f) => (
                <div key={f.question} className="py-6 first:pt-0">
                  <dt className="font-display text-base text-brand-ink">{f.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <BookingCta
        pageType="route"
        title={`Request your fixed-price ${route.from} → ${route.to} transfer`}
        description="Submit your trip details and we'll confirm availability and pricing by email."
        pickup={route.from}
        dropoff={route.to}
        showCrossBorderHint={showCrossBorderHint}
        dropoffHint={route.dropoffHint}
      />
    </>
  )
}
