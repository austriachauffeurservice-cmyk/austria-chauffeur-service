import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { vehicles } from '@/lib/content/services'
import { routes } from '@/lib/content/routes'
import { borderCrossingDestinations } from '@/lib/content/service-areas'
import { skiResorts } from '@/lib/content/ski-resorts'
import { siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'

export const metadata: Metadata = {
  title: 'Austria Transfer Services | Airport, City & Cross-Border',
  description:
    'Every Austria transfer service in one place — airport pickups, city-to-city travel, cross-border trips, and hourly hire. Fixed pricing, professional drivers, fleet from sedan to minibus.',
  alternates: { canonical: '/services', languages: { en: '/services', de: '/de/services', 'x-default': '/services' } },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/services`,
    title: 'Austria Transfer Services | Airport, City & Cross-Border',
    description:
      'Every Austria transfer service in one place — airport pickups, city-to-city travel, cross-border trips, and hourly hire. Fixed pricing, professional drivers, fleet from sedan to minibus.',
  },
}

const featuredAirports = [
  { label: 'Vienna Airport', href: '/airport-transfers/vienna-airport' },
  { label: 'Salzburg Airport', href: '/airport-transfers/salzburg-airport' },
  { label: 'Innsbruck Airport', href: '/airport-transfers/innsbruck-airport' },
  { label: 'Graz Airport', href: '/airport-transfers/graz-airport' },
]

const featuredRouteSlugs = ['vienna-to-salzburg', 'vienna-to-graz', 'salzburg-to-innsbruck']

const corporateUseCases = [
  'A driver and vehicle on standby all day, moving between meetings on your schedule',
  'One booking covering airport pickup, waiting time at the meeting, and the return airport run',
  'Luxury Sedan options for client-facing trips where presentation matters',
  'Vans and minibuses for moving teams between offices, hotels, and event venues',
]

const weddingFeatures = [
  'A Luxury Sedan for the wedding couple, timed precisely to your ceremony schedule',
  'Vans or minibuses to move guests between venues without a fleet of individual cars',
  'One point of contact to sequence ceremony, photo locations, and reception pickups',
  'Professional, formally dressed drivers and immaculately presented vehicles',
]

const featuredResortSlugs = ['kitzbuehel', 'st-anton-am-arlberg', 'lech-zuers', 'ischgl']

const decisionTable = [
  { trip: 'Flying into an Austrian airport', service: 'Airport Transfers', href: '/airport-transfers' },
  { trip: 'Traveling between Austrian cities', service: 'City-to-City Transfers', href: '/city-to-city-transfers' },
  { trip: 'Vienna → Bratislava, Budapest, or beyond', service: 'Cross-Border Transfers', href: '/service-areas' },
  { trip: 'Multiple meetings in one day', service: 'Corporate Hire', href: '/corporate-transfers' },
  { trip: 'Wedding transportation', service: 'Events & Weddings', href: '/wedding-transfers' },
  { trip: 'Airport → ski resort', service: 'Ski & Alpine Transfers', href: '/ski-transfers' },
]

export default function ServicesPage() {
  const featuredRoutes = featuredRouteSlugs
    .map((slug) => routes.find((r) => r.slug === slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))
  const featuredResorts = featuredResortSlugs
    .map((slug) => skiResorts.find((r) => r.slug === slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))

  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Our Services
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Private Chauffeur Services in Austria
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Airport transfers, city-to-city journeys, cross-border trips, corporate hire, events
            and weddings, and ski transfers across Austria and neighboring countries — one
            provider, one fixed price, no matter which service you need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-14">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">Airport Transfers</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Meet-and-greet pickup at every major Austrian airport, with flight tracking included
              and direct transportation to your hotel, residence, or onward destination — no taxi
              queue, no ride-share app.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Popular airport services
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredAirports.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                >
                  {a.label}
                </Link>
              ))}
            </div>
            <Link
              href="/airport-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              All airport transfers →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">City-to-City Transfers</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Travel directly between Austrian cities in one private vehicle — no changing
              vehicles, no sharing the journey with other passengers, and no fixed timetable to
              work around.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Popular routes
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/routes/${r.slug}`}
                  className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                >
                  {r.from} → {r.to}
                </Link>
              ))}
            </div>
            <Link
              href="/city-to-city-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              All city-to-city routes →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">Cross-Border Transfers</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Licensed pickups and drop-offs to Austria&apos;s neighboring countries, in the same
              vehicle the whole way — no switching vehicles at the border.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Countries served
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {borderCrossingDestinations.map((d) => (
                <Link
                  key={d.slug}
                  href={`/service-areas/${d.slug}`}
                  className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                >
                  {d.country}
                </Link>
              ))}
            </div>
            <Link
              href="/service-areas"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Full coverage map →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">Hourly &amp; Corporate Chauffeur Hire</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Keep a professional chauffeur and vehicle available throughout your business day —
              meetings, airport pickups, client visits, and multiple stops on one booking. Hourly
              hire can be arranged for a single day or a recurring corporate requirement.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {corporateUseCases.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/corporate-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Corporate &amp; hourly hire details →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">Events &amp; Wedding Transportation</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Punctual, discreet transport for weddings, conferences, and private events, with one
              point of contact coordinating every vehicle.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {weddingFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/wedding-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Wedding transfer details →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">Ski &amp; Alpine Transfers</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Winter-ready vehicles and experienced alpine drivers, direct from Innsbruck,
              Salzburg, Munich, or Zurich airport to your resort — with space for skis and boards.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Popular resorts
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredResorts.map((r) => (
                <Link
                  key={r.slug}
                  href={`/ski-transfers/${r.slug}`}
                  className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                >
                  {r.name}
                </Link>
              ))}
            </div>
            <Link
              href="/ski-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              All ski resorts →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Choose the Right Service</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                  <th className="pb-3 pr-4">Your Trip</th>
                  <th className="pb-3">Best Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {decisionTable.map((row) => (
                  <tr key={row.trip}>
                    <td className="py-3 pr-4 text-brand-ink-2/80">{row.trip}</td>
                    <td className="py-3">
                      <Link href={row.href} className="font-semibold text-brand-ink hover:text-brand-gold hover:underline">
                        {row.service}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
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

      <BookingCta
        pageType="general"
        title="Need a Custom Journey?"
        description="Multi-stop itineraries, roadshows, recurring corporate transfers, and other tailored requests can all be arranged. Not sure which service fits your trip? Tell us your pickup, destination, and travel details, and we'll recommend the right vehicle and service."
      />
    </>
  )
}
