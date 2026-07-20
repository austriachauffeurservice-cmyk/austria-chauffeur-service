import type { Metadata } from 'next'
import Link from 'next/link'
import { ServiceIcon } from '@/components/service-icon'
import { serviceTypes, vehicles } from '@/lib/content/services'

export const metadata: Metadata = {
  title: 'Services & Fleet',
  description:
    'Airport transfers, city-to-city travel, cross-border transfers, hourly hire, and event transport across Austria — with a fleet from business sedans to minibuses.',
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
            <div key={s.title} className="rounded-sm border border-brand-line p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream text-brand-gold">
                <ServiceIcon name={s.icon} />
              </div>
              <h3 className="mt-4 font-semibold text-brand-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Fleet</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.map((v) => (
              <div key={v.type} className="rounded-sm border border-brand-line bg-white p-6">
                <h3 className="font-display text-lg text-brand-ink">{v.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-brand-gold">
                  {v.passengers} · {v.luggage}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-2/80">{v.description}</p>
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
