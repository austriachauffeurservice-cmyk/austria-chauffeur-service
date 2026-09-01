import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { WeatherWidget } from '@/components/weather-widget'
import { AustriaTimeWidget } from '@/components/austria-time-widget'
import { airports } from '@/lib/content/airports'
import { routes } from '@/lib/content/routes'
import { skiResorts } from '@/lib/content/ski-resorts'
import { vehicles } from '@/lib/content/services'
import { siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'
import { matchPopularRoute, normalizeLabel } from '@/lib/content/link-match'

export const metadata: Metadata = {
  title: 'Airport Transfers in Austria | Private Chauffeur Service',
  description:
    'Private airport transfers across Austria with meet & greet, flight tracking, and fixed pricing. Vienna, Salzburg, Innsbruck, Graz, Linz, and Klagenfurt, plus Munich and Zurich for cross-border arrivals.',
  alternates: {
    canonical: '/airport-transfers',
    languages: { en: '/airport-transfers', de: '/de/airport-transfers', 'x-default': '/airport-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/airport-transfers`,
    title: 'Airport Transfers in Austria | Private Chauffeur Service',
    description:
      'Private airport transfers across Austria with meet & greet, flight tracking, and fixed pricing. Vienna, Salzburg, Innsbruck, Graz, Linz, and Klagenfurt, plus Munich and Zurich for cross-border arrivals.',
  },
}

const austrianAirports = airports.filter((a) => !a.crossBorder)
const crossBorderAirports = airports.filter((a) => a.crossBorder)
const munichAirport = crossBorderAirports.find((a) => a.slug === 'munich-airport')
const zurichAirport = crossBorderAirports.find((a) => a.slug === 'zurich-airport')

function destinationLabel(route: string, city: string): string {
  const destination = route.split('→')[1]?.trim() ?? route
  const clean = normalizeLabel(destination)
  return clean.toLowerCase() === 'city center' ? `${city} City Centre` : clean
}

function resortsNearest(airportFragment: string) {
  return skiResorts.filter((r) => r.nearestAirports[0]?.name.includes(airportFragment))
}
function resortsAlsoServedBy(airportFragment: string) {
  return skiResorts.filter(
    (r) => !r.nearestAirports[0]?.name.includes(airportFragment) && r.nearestAirports.some((a) => a.name.includes(airportFragment))
  )
}

const innsbruckResorts = resortsNearest('Innsbruck').slice(0, 5)
const salzburgResorts = resortsNearest('Salzburg').slice(0, 5)
const zurichResorts = resortsNearest('Zurich').slice(0, 4)
const munichResorts = resortsAlsoServedBy('Munich').slice(0, 5)

const whyChooseUs = [
  {
    icon: '🤝',
    title: 'Meet & Greet',
    description: 'Your chauffeur waits in the arrivals hall with your name board — no searching for a taxi rank.',
  },
  {
    icon: '✈️',
    title: 'Flight Tracking',
    description: 'We monitor your flight and adjust pickup timing for delays or early arrivals, at no extra charge.',
  },
  {
    icon: '💶',
    title: 'Fixed Pricing',
    description: 'Your price is confirmed by email before the journey — no meter, no surprise charges.',
  },
  {
    icon: '🚪',
    title: 'Door-to-Door Service',
    description: 'Go directly from the airport to your hotel, residence, office, or resort in the same vehicle.',
  },
  {
    icon: '🚗',
    title: 'Premium Vehicles',
    description: 'Choose from Business Sedan, Luxury Sedan, Executive Van, or Minibus depending on your group and luggage.',
  },
  {
    icon: '🌍',
    title: 'Cross-Border Travel',
    description: 'Continue directly into Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, or Switzerland — no vehicle switch at the border.',
  },
]

const airportComparison = [
  { code: 'VIE', name: 'Vienna Airport', bestFor: 'Vienna and eastern Austria' },
  { code: 'SZG', name: 'Salzburg Airport', bestFor: 'Salzburg and the northern Alpine resorts' },
  { code: 'INN', name: 'Innsbruck Airport', bestFor: 'Tyrol ski resorts' },
  { code: 'GRZ', name: 'Graz Airport', bestFor: 'Styria' },
  { code: 'LNZ', name: 'Linz Airport', bestFor: 'Upper Austria' },
  { code: 'KLU', name: 'Klagenfurt Airport', bestFor: 'Carinthia' },
]

const bookingChecklist = [
  'Airport and flight number',
  'Travel date and arrival time',
  'Number of passengers',
  'Destination — hotel, resort, or exact address',
  'Luggage, including ski or snowboard bags',
  'Child seat requirements, if any',
  'Whether you also need a return transfer',
]

const useCases = [
  {
    title: 'Airport → Hotel or Private Residence',
    description: 'Direct drop-off at any hotel, chalet, or private address — just share the location when booking.',
  },
  {
    title: 'Airport → Business Address',
    description: 'Fixed-price transfers for executives and client meetings, with corporate accounts available for regular travel.',
  },
  {
    title: 'Airport → Another Austrian City',
    description: 'Continue straight to a second Austrian city in the same vehicle, rather than booking the airport leg separately.',
  },
  {
    title: 'Family & Group Travel',
    description: 'Executive Vans and Minibuses for larger groups and extra luggage, with child seats available on request at no extra charge.',
  },
]

const faqs = [
  {
    question: 'Which airports in Austria do you cover?',
    answer:
      'Vienna, Salzburg, Innsbruck, Graz, Linz, and Klagenfurt — Austria’s six major airports, each with meet-and-greet pickup and its own transfer page.',
  },
  {
    question: 'Do you offer airport transfers from Vienna Airport?',
    answer:
      'Yes — Vienna International Airport (VIE) is our head-office base and the airport we handle the most pickups from, with direct transfers into the city and onward across Austria or the border.',
  },
  {
    question: 'Do you track flights for delayed or early arrivals?',
    answer:
      'Yes. Provide your flight number when booking, and we monitor it — your pickup timing adjusts if the schedule changes, at no extra charge.',
  },
  {
    question: 'Where will my chauffeur meet me at the airport?',
    answer: 'In the arrivals hall, holding a name board — the same meeting process at every airport we cover.',
  },
  {
    question: 'Can I book an airport transfer to another Austrian city?',
    answer:
      'Yes — an airport pickup can continue straight to a second city or region in the same vehicle, rather than being booked as a separate leg.',
  },
  {
    question: 'Do you provide transfers from Munich or Zurich Airport into Austria?',
    answer:
      'Yes — Munich and Zurich are both established cross-border pickup points, mainly for Tyrol, Salzburg state, and Vorarlberg/Arlberg resorts.',
  },
  {
    question: 'Can I book an airport transfer for a family or group?',
    answer:
      'Yes. The Executive Van (up to 7) and Minibus (up to 16) handle larger groups and extra luggage, and child seats or booster seats are available on request at no extra charge.',
  },
  {
    question: 'How much does an airport transfer in Austria cost?',
    answer:
      'It depends on the airport, destination, vehicle, and number of passengers. Send us your flight and destination details and we\'ll confirm a fixed price before your journey.',
  },
  {
    question: 'How far in advance should I book an airport transfer?',
    answer:
      'We recommend at least 24 hours where possible, especially for larger vehicles or cross-border routes — but same-day requests are worth submitting too.',
  },
  {
    question: 'What vehicle should I choose for luggage or ski equipment?',
    answer:
      'Vehicle selection depends on your passenger count, luggage, and ski or snowboard equipment together — passenger capacity alone doesn\'t guarantee enough luggage space. Tell us what you\'re carrying when booking and we\'ll recommend a suitable vehicle.',
  },
  {
    question: 'Can you take me directly from the airport to a ski resort?',
    answer:
      'Yes. Many of our airport transfers continue directly to Austria\'s ski resorts — see our ski transfer routes for specific airport-to-resort journeys.',
  },
  {
    question: 'Can I book a return airport transfer?',
    answer:
      'Yes. One-way and return transfers are both available — provide your airport and accommodation details for both legs when requesting your quote.',
  },
]

export default function AirportTransfersPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />

      <div className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Airport Transfers' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-line">
        <Image
          src="/images/hero/airport-transfer.webp"
          alt="Private chauffeur airport transfer in Austria"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-ink/80 to-brand-ink/55" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Airport Transfers
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-white sm:text-4xl">
            Airport Transfers in Austria
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Private airport chauffeur transfers across Austria, with meet &amp; greet, flight
            tracking, and fixed pricing confirmed before your journey. Your chauffeur waits in the
            arrivals hall with a name board and takes you directly to your hotel, residence,
            business address, or onward destination.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {['Meet & Greet', 'Flight Tracking', 'Fixed Price', 'Private Vehicle', 'Door-to-Door'].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-brand-cream/90">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#quote"
              className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
            >
              Request a Transfer
            </Link>
            <Link
              href="#airports"
              className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
            >
              Explore Austrian Airports
            </Link>
          </div>
        </div>
      </section>

      {/* Major Austrian Airports */}
      <section id="airports" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Major Austrian Airports</h2>
        <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/70">
          Our Austrian airport network covers Vienna, Salzburg, Innsbruck, Graz, Linz, and Klagenfurt.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {austrianAirports.map((a) => (
            <Link
              key={a.slug}
              href={`/airport-transfers/${a.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {a.code} · {a.region}
              </p>
              <h3 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                {a.name}
              </h3>
              <p className="mt-2 text-sm text-brand-ink-2/70">{a.distanceFromCity}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Which Austrian Airport Is Right for You */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Which Austrian Airport Is Right for Your Journey?</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            If you have a choice of airports, the closest one to your final destination is usually
            the most convenient — but flight availability and connections often matter just as much.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                  <th className="pb-3 pr-4">Airport</th>
                  <th className="pb-3">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {airportComparison.map((a) => (
                  <tr key={a.code}>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">{a.name} ({a.code})</td>
                    <td className="py-3 text-brand-ink-2/80">{a.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Why Book a Private Airport Transfer?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-sm border border-brand-line bg-white p-5">
                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                <p className="mt-3 font-semibold text-brand-ink">{item.title}</p>
                <p className="mt-1.5 text-sm text-brand-ink-2/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">How Our Airport Pickup Works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Book', body: 'Tell us your flight, destination, date, and passenger count.' },
              { title: 'We Track', body: 'Your flight number is monitored from booking through to arrival.' },
              { title: 'Meet', body: 'Your chauffeur waits in the arrivals hall with a name board.' },
              { title: 'Drive', body: 'Direct, door-to-door — no shared rides, no vehicle changes.' },
            ].map((step, i) => (
              <li key={step.title} className="rounded-sm border border-brand-line bg-brand-cream p-5">
                <span className="font-display text-xs font-semibold text-brand-gold">
                  {String(i + 1).padStart(2, '0')} — {step.title}
                </span>
                <p className="mt-1.5 text-sm text-brand-ink-2/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Flight Tracking */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Flight Tracking &amp; Delayed Arrivals</h2>
          <p className="mt-4 max-w-2xl text-brand-ink-2/90">
            Flight tracking is included on every airport transfer at no extra charge. We monitor
            your flight and adjust the pickup timing for delays or early arrivals, so you
            don&apos;t need to rebook because your flight schedule changes.
          </p>
        </div>
      </section>

      {/* Popular Airport Transfer Routes */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Popular Airport Transfer Routes in Austria</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Where our airport transfers actually go — the most-requested destinations from each
            Austrian airport.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                  <th className="pb-3 pr-4">Airport</th>
                  <th className="pb-3">Popular Destinations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {austrianAirports.map((a) => (
                  <tr key={a.slug}>
                    <td className="py-4 pr-4 align-top">
                      <Link href={`/airport-transfers/${a.slug}`} className="font-semibold text-brand-ink hover:text-brand-gold hover:underline">
                        {a.name}
                      </Link>
                    </td>
                    <td className="py-4 text-brand-ink-2/80">
                      {a.popularRoutes.map((route, i) => {
                        const match = matchPopularRoute(route, routes, airports, a.slug)
                        const label = destinationLabel(route, a.city)
                        return (
                          <span key={route}>
                            {match ? (
                              <Link href={match.href} className="hover:text-brand-gold hover:underline">
                                {label}
                              </Link>
                            ) : (
                              label
                            )}
                            {i < a.popularRoutes.length - 1 ? ', ' : ''}
                          </span>
                        )
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ski Airport Transfers */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Airport Transfers to Austrian Ski Resorts</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Winter-ready vehicles with ski and board space, direct from the airport to the resort —
            no train changes, no village shuttle. From Austrian airports, plus the international
            airports at Munich and Zurich that also serve Austrian resorts.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { heading: 'From Innsbruck Airport (Austria)', resorts: innsbruckResorts },
              { heading: 'From Salzburg Airport (Austria)', resorts: salzburgResorts },
              { heading: 'From Munich Airport (Germany)', resorts: munichResorts },
              { heading: 'From Zurich Airport (Switzerland)', resorts: zurichResorts },
            ].map((group) => (
              <div key={group.heading}>
                <h3 className="font-display text-sm text-brand-ink">{group.heading}</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-ink-2/80">
                  {group.resorts.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/ski-transfers/${r.slug}`} className="hover:text-brand-gold hover:underline">
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-ink-2/70">
            <Link href="/ski-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              View all Austrian ski transfers →
            </Link>
          </p>
        </div>
      </section>

      {/* Business, Families & Groups */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">
            Private Airport Transfers for Business, Families &amp; Groups
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-sm border border-brand-line bg-brand-cream p-5">
                <p className="font-semibold text-brand-ink">{u.title}</p>
                <p className="mt-1.5 text-sm text-brand-ink-2/70">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle & Luggage Guide */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Vehicle &amp; Luggage Guide</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Passenger capacity and luggage capacity aren&apos;t the same thing — tell us what
            you&apos;re carrying, including ski or snowboard bags, and we&apos;ll recommend the
            right vehicle.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                  <th className="pb-3 pr-4">Vehicle</th>
                  <th className="pb-3 pr-4">Passengers</th>
                  <th className="pb-3">Luggage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {vehicles.map((v) => (
                  <tr key={v.type}>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">{v.name}</td>
                    <td className="py-3 pr-4 text-brand-ink-2/80">{v.passengers}</td>
                    <td className="py-3 text-brand-ink-2/80">{v.luggage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-brand-ink-2/70">
            <Link href="/fleet" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              View the full fleet →
            </Link>
          </p>
        </div>
      </section>

      {/* What to Tell Us When Booking */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">What to Tell Us When Booking</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            The more we know upfront, the more accurately we can quote and assign the right
            vehicle:
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-brand-ink-2 sm:grid-cols-2">
            {bookingChecklist.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Munich & Zurich into Austria */}
      <section className="border-t border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-white">Munich &amp; Zurich: International Airports Serving Austrian Destinations</h2>
          <p className="mt-3 max-w-2xl text-brand-cream/70">
            Munich (Germany) and Zurich (Switzerland) aren&apos;t Austrian airports, but both are
            established cross-border pickup points. Flying into either one? We arrange private
            chauffeur transfers from the airport straight into Austria in one vehicle, with no
            border stop.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {munichAirport && (
              <Link
                href={`/airport-transfers/${munichAirport.slug}`}
                className="group rounded-sm border border-white/15 bg-white/5 p-6 transition-colors hover:border-brand-gold"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {munichAirport.code} · {munichAirport.region}
                </p>
                <h3 className="font-display mt-1 text-xl text-white group-hover:text-brand-gold">
                  Munich Airport → Austria
                </h3>
                <p className="mt-2 text-sm text-brand-cream/70">
                  Direct chauffeur transfers into Tyrol, Salzburg state, and surrounding Alpine
                  destinations.
                </p>
              </Link>
            )}
            {zurichAirport && (
              <Link
                href={`/airport-transfers/${zurichAirport.slug}`}
                className="group rounded-sm border border-white/15 bg-white/5 p-6 transition-colors hover:border-brand-gold"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {zurichAirport.code} · {zurichAirport.region}
                </p>
                <h3 className="font-display mt-1 text-xl text-white group-hover:text-brand-gold">
                  Zurich Airport → Austria
                </h3>
                <p className="mt-2 text-sm text-brand-cream/70">
                  Private transfers into Vorarlberg, Arlberg, and western Austria.
                </p>
              </Link>
            )}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-brand-cream/70">
            Flying into{' '}
            <Link href="/service-areas/bratislava" className="font-semibold text-white underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Bratislava
            </Link>{' '}
            or{' '}
            <Link href="/service-areas/budapest" className="font-semibold text-white underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Budapest
            </Link>{' '}
            Airport instead? Submit your pickup details on the booking form and we&apos;ll confirm
            whether a cross-border transfer into Austria can be arranged.
          </p>
        </div>
      </section>

      {/* Current Conditions */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <WeatherWidget />
            <AustriaTimeWidget />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Frequently Asked Questions</h2>
          <dl className="mt-6 divide-y divide-brand-line">
            {faqs.map((f) => (
              <div key={f.question} className="py-6 first:pt-0">
                <dt className="font-display text-base text-brand-ink">{f.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <BookingCta
        id="quote"
        pageType="airport"
        title="Ready to arrange your airport pickup?"
        description="Request a fixed quote — submit your flight details and we'll confirm availability and pricing by email."
      />
    </>
  )
}
