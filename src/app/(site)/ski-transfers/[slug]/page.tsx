import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { HotelsSection, AttractionsSection, PopularRoutesList } from '@/components/location-sections'
import { BookingCta } from '@/components/booking-cta'
import { HeroQuoteCard } from '@/components/hero-quote-card'
import { skiResorts } from '@/lib/content/ski-resorts'
import { routes } from '@/lib/content/routes'
import { airports } from '@/lib/content/airports'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'
import { findRelatedPosts } from '@/lib/content/blog'
import { matchAirportField, normalizeLabel } from '@/lib/content/link-match'

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

  const canonical = `/ski-transfers/${slug}`
  const title = resort.seoTitle ?? `Ski Transfer to ${resort.name} | Private Chauffeur Service`
  const description =
    resort.seoDescription ??
    `Private airport-to-resort chauffeur transfer to ${resort.name}, ${resort.region}. Winter-ready vehicles, ski/board space, fixed pricing from ${resort.nearestAirports[0].name}.`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: { en: canonical, de: `/de/ski-transfers/${slug}`, 'x-default': canonical },
    },
    openGraph: { type: 'website', siteName, locale: 'en_US', url: `${siteUrl}${canonical}`, title, description, images: [defaultOgImage] },
  }
}

export default async function SkiResortPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const resort = skiResorts.find((r) => r.slug === slug)
  if (!resort) notFound()

  const pageUrl = `${siteUrl}/ski-transfers/${slug}`
  // 'Ski Transfers' ranks above the bare region name so a ski-relevant guide
  // outranks an unrelated same-region post (e.g. a cross-border article that
  // happens to share the region tag) — see the Aug 2026 Filzmoos audit.
  const relatedPosts = findRelatedPosts([resort.name, 'Ski Transfers', resort.region])

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Ski & Alpine Transfers', item: `${siteUrl}/ski-transfers` },
            { '@type': 'ListItem', position: 3, name: resort.name, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Private Ski Resort Chauffeur Transfer',
          name: `Ski Transfer to ${resort.name}`,
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
              { label: 'Home', href: '/' },
              { label: 'Ski & Alpine Transfers', href: '/ski-transfers' },
              { label: resort.name },
            ]}
          />
        </div>
      </div>

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              {resort.region} · Ski & Alpine Transfer
            </p>
            <h1 className="font-display mt-2 text-3xl sm:text-4xl">
              {resort.heroHeading ?? `Private Ski Transfer to ${resort.name}`}
            </h1>
            <p className="mt-4 max-w-xl text-brand-cream/80">
              {resort.heroSubtitle ??
                'Winter-ready vehicles, experienced alpine drivers, and space for skis and boards — booked in advance with fixed pricing.'}
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
                <span className="text-brand-cream/70">Door-to-door: </span>
                <span className="font-semibold text-white">Yes</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroQuoteCard
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
            <h2 className="font-display text-xl text-brand-ink">Nearest Airports</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {resort.nearestAirports.map((a) => {
                const match = matchAirportField(a.name, airports)[0]
                return (
                  <li key={a.name} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                    {match?.href ? (
                      <Link href={match.href} className="hover:text-brand-gold hover:underline">
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
            <h2 className="font-display text-xl text-brand-ink">Popular Ski Transfer Routes</h2>
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
              <PopularRoutesList items={resort.popularRoutes} routes={routes} airports={airports} locale="en" />
            )}
          </div>
        </div>

        {resort.routeOverview && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">
              {resort.routeOverview.start} → {resort.routeOverview.destination}: Route Overview
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-sm">
                <tbody className="divide-y divide-brand-line">
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Start</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.start}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Destination</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.destination}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Drive time</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.driveTime}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Service</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.service}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Vehicles</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.vehicles}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">Luggage</td>
                    <td className="py-3 text-brand-ink-2/80">{resort.routeOverview.luggage}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-brand-ink-2/60">
              Actual drive time depends on weather, traffic, and road conditions.
            </p>
          </div>
        )}

        {resort.highlights.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">Resort Highlights</h2>
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
              {resort.airportGuidance.length === 1
                ? `Getting to ${resort.name} from ${normalizeLabel(resort.airportGuidance[0].airport)}`
                : `Which Airport Is Best for ${resort.name}?`}
            </h2>
            <div className="mt-4 space-y-4">
              {resort.airportGuidance.map((g) => {
                const match = matchAirportField(g.airport, airports)[0]
                return (
                  <div key={g.airport}>
                    <p className="text-sm font-semibold text-brand-ink">
                      {match?.href ? (
                        <Link href={match.href} className="hover:text-brand-gold hover:underline">
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
            {resort.nearbyResorts && resort.nearbyResorts.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {resort.nearbyResorts.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {resort.accommodationSection && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">{resort.accommodationSection.heading}</h2>
            <p className="mt-3 text-sm text-brand-ink-2/80">{resort.accommodationSection.description}</p>
          </div>
        )}

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">Ski Equipment &amp; Luggage</h2>
          <p className="mt-3 text-sm text-brand-ink-2/80">
            Traveling with skis, snowboards, or extra winter luggage? Mention it when requesting
            your transfer so we can assign a vehicle with enough space — the Executive Van and
            Minibus both offer extra luggage and ski/board space in addition to standard capacity.
          </p>
        </div>

        {resort.transferComparison && resort.transferComparison.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-brand-ink">Private Chauffeur vs Train vs Rental Car</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-line text-xs uppercase tracking-wide text-brand-ink-2/60">
                    <th className="py-2 pr-4 font-semibold">Option</th>
                    <th className="py-2 pr-4 font-semibold">Best for</th>
                    <th className="py-2 font-semibold">Trade-off</th>
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
          <h2 className="font-display text-xl text-brand-ink">Winter Travel to {resort.name}</h2>
          <p className="mt-3 text-sm text-brand-ink-2/80">
            Travel times can vary during winter depending on snowfall, road conditions, and
            traffic around peak arrival and departure periods. We recommend allowing extra time
            either side of a Saturday changeover, when resort roads are busiest.
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
            <h2 className="font-display text-xl text-brand-ink">Why Book a Private Ski Transfer?</h2>
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
            href="/ski-transfers"
            className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            View all Austrian ski transfers →
          </Link>
        </p>
      </section>

      <HotelsSection place={resort.name} hotels={resort.hotels} hotelNote={resort.hotelNote} />
      <AttractionsSection
        place={resort.name}
        attractions={resort.attractions}
        heading="Highlights"
        showBookingCta={false}
      />

      {resort.faqs && resort.faqs.length > 0 && (
        <section className="border-t border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Frequently Asked Questions</h2>
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
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Related Reading</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-sm border border-brand-line p-4 text-sm transition-colors hover:border-brand-gold"
              >
                <p className="font-semibold text-brand-ink">{post.title}</p>
                <p className="mt-1 text-brand-ink-2/70">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <BookingCta
        pageType="ski"
        title={`Ready to book your ${resort.name} ski transfer?`}
        description="Submit your trip details and we'll confirm availability and pricing by email."
        pickup={resort.nearestAirports[0]?.name}
        dropoff={resort.name}
        dropoffHint={resort.dropoffHint}
      />
    </>
  )
}
