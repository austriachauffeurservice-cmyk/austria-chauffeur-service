import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { austrianCities, borderCities, borderCrossingDestinations } from '@/lib/content/service-areas'

export const metadata: Metadata = {
  title: 'Service Areas — All of Austria & Cross-Border Transfers',
  description:
    'Private chauffeur coverage across all nine Austrian states, plus licensed cross-border transfers to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.',
  alternates: { canonical: '/service-areas', languages: { en: '/service-areas', de: '/de/service-areas' } },
}

const cityImages: Record<string, string> = {
  vienna: '/images/hero/vienna-palace.webp',
  salzburg: '/images/hero/alpine-road.webp',
  innsbruck: '/images/hero/ski-resort.webp',
  graz: '/images/why-choose-us.webp',
  linz: '/images/hero/airport-transfer.webp',
  klagenfurt: '/images/testimonials.webp',
  villach: '/images/cta-chauffeur.webp',
  bregenz: '/images/blog-section.webp',
}

const borderImages: Record<string, string> = {
  germany: '/images/hero/alpine-road.webp',
  'czech-republic': '/images/blog-section.webp',
  slovakia: '/images/cta-chauffeur.webp',
  hungary: '/images/hero/vienna-palace.webp',
  slovenia: '/images/why-choose-us.webp',
  italy: '/images/testimonials.webp',
  'switzerland-liechtenstein': '/images/hero/ski-resort.webp',
}

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Header Banner with Coverage Graphic */}
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Service Areas
              </p>
              <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                All of Austria — and across the border
              </h1>
              <p className="mt-4 max-w-xl text-brand-ink-2/80 leading-relaxed">
                We cover the country nationwide, from Vorarlberg to Burgenland, through a network
                of licensed partner drivers cleared for cross-border trips into all seven of
                Austria&apos;s neighboring countries, with fixed transparent rates.
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/coverage.webp"
                alt="Austria private chauffeur coverage map"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domestic Coverage */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Austria — Domestic Coverage</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {austrianCities.map((c) => {
            const imgSrc = cityImages[c.slug] || '/images/why-choose-us.webp'
            return (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="group rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                  <Image
                    src={imgSrc}
                    alt={`${c.city} private chauffeur transfer`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="font-display text-lg text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                      {c.city}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-brand-gold font-medium mt-0.5">
                      {c.region}
                    </p>
                    {c.airport && (
                      <p className="mt-2 text-xs text-brand-ink-2/70">
                        ✈️ {c.airport}
                      </p>
                    )}
                  </div>
                  {c.note && (
                    <p className="mt-3 text-xs font-semibold text-brand-gold">
                      {c.note}
                    </p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Cross Border */}
      <section className="border-t border-brand-line bg-brand-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Beyond Austria
          </p>
          <h2 className="font-display mt-2 text-2xl text-white">Cross-Border Transfers</h2>
          <p className="mt-3 max-w-xl text-brand-cream/70">
            Licensed for international pickups and drop-offs — no need to switch vehicles at the
            border.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {borderCrossingDestinations.map((d) => {
              const cities = borderCities.filter((c) => c.countrySlug === d.slug)
              const imgSrc = borderImages[d.slug] || '/images/coverage.webp'
              return (
                <div
                  key={d.slug}
                  className="group rounded-sm border border-white/15 bg-white/5 overflow-hidden flex flex-col hover:border-brand-gold transition-colors duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10">
                    <Image
                      src={imgSrc}
                      alt={`Cross-border transfer to ${d.country}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <Link
                        href={`/service-areas/${d.slug}`}
                        className="font-display text-lg text-white hover:text-brand-gold transition-colors duration-300"
                      >
                        {d.country}
                      </Link>
                      <p className="mt-1.5 flex flex-wrap gap-x-1.5 text-xs text-brand-cream/80">
                        {cities.map((c, i) => (
                          <span key={c.slug}>
                            <Link href={`/service-areas/${c.slug}`} className="hover:text-brand-gold">
                              {c.city}
                            </Link>
                            {i < cities.length - 1 && ','}
                          </span>
                        ))}
                      </p>
                    </div>
                    <p className="mt-3 text-xs font-semibold text-brand-gold">{d.note}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Don&apos;t see your route listed?</h2>
        <p className="mx-auto mt-2 max-w-md text-brand-ink-2/80">
          Tell us your pickup and destination — if it&apos;s reachable by road, we can likely
          drive it.
        </p>
        <Link
          href="/booking"
          className="mt-6 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Request a Transfer
        </Link>
      </section>
    </>
  )
}
