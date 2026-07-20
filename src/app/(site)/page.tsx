import Link from 'next/link'
import { BookingForm } from '@/components/booking-form'
import { ServiceIcon } from '@/components/service-icon'
import { serviceTypes, vehicles } from '@/lib/content/services'
import { austrianCities, borderCrossingDestinations } from '@/lib/content/service-areas'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Private Chauffeur Service
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              Anywhere in Austria.
              <br />
              Across the border, too.
            </h1>
            <p className="mt-5 max-w-md text-brand-cream/80">
              Licensed private transfers to every Austrian city, plus cross-border service to
              Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.
              Fixed pricing, professional drivers, flight tracking included.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
              >
                Request a Transfer
              </Link>
              <Link
                href="/service-areas"
                className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
              >
                View Coverage Area
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="text-brand-gold">9</dt>
                <dd className="text-brand-cream/70">Austrian states covered</dd>
              </div>
              <div>
                <dt className="text-brand-gold">7</dt>
                <dd className="text-brand-cream/70">Neighboring countries</dd>
              </div>
              <div>
                <dt className="text-brand-gold">24/7</dt>
                <dd className="text-brand-cream/70">Booking availability</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-sm bg-white p-6 text-brand-ink sm:p-8">
            <p className="font-display text-xl">Request a Booking</p>
            <p className="mt-1 text-sm text-brand-ink-2/70">
              No payment required now — we confirm availability first.
            </p>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service types */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            What We Offer
          </p>
          <h2 className="font-display mt-2 text-3xl text-brand-ink">
            One service, the whole country — and beyond
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Coverage */}
      <section className="border-y border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Domestic Coverage
              </p>
              <h2 className="font-display mt-2 text-2xl text-brand-ink">
                Every major Austrian city
              </h2>
              <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-brand-ink-2">
                {austrianCities.map((c) => (
                  <li key={c.slug} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-gold" />
                    <Link href={`/service-areas/${c.slug}`} className="hover:text-brand-gold">
                      {c.city}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/service-areas"
                className="mt-6 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4"
              >
                See full coverage map →
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Cross-Border Transfers
              </p>
              <h2 className="font-display mt-2 text-2xl text-brand-ink">
                Licensed beyond Austria&apos;s borders
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-brand-ink-2">
                {borderCrossingDestinations.map((d) => (
                  <li key={d.slug} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                    <span>
                      <Link
                        href={`/service-areas/${d.slug}`}
                        className="font-semibold text-brand-ink hover:text-brand-gold"
                      >
                        {d.country}
                      </Link>{' '}
                      — {d.cities.join(', ')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Our Fleet
          </p>
          <h2 className="font-display mt-2 text-3xl text-brand-ink">A vehicle for every trip</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v) => (
            <div key={v.type} className="rounded-sm border border-brand-line p-6">
              <h3 className="font-display text-lg text-brand-ink">{v.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-brand-gold">
                {v.passengers} · {v.luggage}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-2/80">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              Ready to book your transfer?
            </h2>
            <p className="mt-2 text-brand-cream/70">
              Domestic or cross-border — tell us where, and we&apos;ll take care of the rest.
            </p>
          </div>
          <Link
            href="/booking"
            className="shrink-0 rounded-sm bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
