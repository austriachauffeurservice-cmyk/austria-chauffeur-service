import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceIcon } from '@/components/service-icon'
import { serviceTypes, vehicles } from '@/lib/content/services'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Services & Fleet',
  description:
    'Airport transfers, city-to-city travel, cross-border transfers, hourly hire, and event transport across Austria — with a fleet from business sedans to minibuses.',
  alternates: { canonical: '/services', languages: { en: '/services', de: '/de/services', 'x-default': '/services' } },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/services`,
    title: 'Services & Fleet',
    description:
      'Airport transfers, city-to-city travel, cross-border transfers, hourly hire, and event transport across Austria — with a fleet from business sedans to minibuses.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Services & Fleet
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Every kind of private transfer, one provider
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            From a single airport pickup to a full cross-border itinerary, we plan and drive the
            trip so you don&apos;t have to.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceTypes.map((s) => (
            <div key={s.title} className="rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                {/* Floating Category Icon */}
                <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur text-brand-gold shadow-sm border border-brand-line">
                  <ServiceIcon name={s.icon} />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">
                    {s.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Our Premium Fleet</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.map((v) => (
              <div key={v.type} className="rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                  <Image
                    src={`/images/fleet/${v.type}.webp`}
                    alt={v.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                      {v.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-brand-gold font-medium">
                      {v.passengers} · {v.luggage}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-ink-2/80">
                      {v.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Need something specific?</h2>
        <p className="mx-auto mt-2 max-w-md text-brand-ink-2/80">
          Multi-stop itineraries, roadshows, and recurring corporate transfers can all be arranged.
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
