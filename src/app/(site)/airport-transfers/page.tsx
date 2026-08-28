import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { airports } from '@/lib/content/airports'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Airport Chauffeur Transfers in Austria | Luxury & Fixed-Price',
  description:
    'Private airport chauffeur transfers at every major Austrian airport, plus Munich and Zurich for cross-border arrivals — meet-and-greet, flight tracking, executive vehicles. Fixed price, no taxi queue.',
  alternates: {
    canonical: '/airport-transfers',
    languages: { en: '/airport-transfers', de: '/de/airport-transfers', 'x-default': '/airport-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/airport-transfers`,
    title: 'Airport Chauffeur Transfers in Austria | Luxury & Fixed-Price',
    description:
      'Private airport chauffeur transfers at every major Austrian airport, plus Munich and Zurich for cross-border arrivals — meet-and-greet, flight tracking, executive vehicles. Fixed price, no taxi queue.',
  },
}

const austrianAirports = airports.filter((a) => !a.crossBorder)
const crossBorderAirports = airports.filter((a) => a.crossBorder)

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
    title: 'Airport → Ski Resort',
    description: 'Winter-ready vehicles from Innsbruck, Salzburg, Munich, and Zurich airports to resorts across Tyrol, Salzburgerland, and Vorarlberg.',
  },
  {
    title: 'Airport → Another Austrian City',
    description: 'Continue straight to a second Austrian city in the same vehicle, rather than booking the airport leg separately.',
  },
  {
    title: 'Airport → Neighboring Country',
    description: 'Direct cross-border connections — for example Vienna Airport to Bratislava or Budapest — with no vehicle switch at the border.',
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
      'Yes. Provide your flight number when booking, and we monitor it — your pickup time adjusts automatically if the schedule changes, at no extra charge.',
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
    question: 'Can I arrange a return airport transfer?',
    answer: 'Yes — one-way and return bookings are both available; just provide your outbound flight details when booking the return leg.',
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

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Airport Transfers
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Airport Transfers in Austria
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Meet-and-greet pickup at every major Austrian airport. Flight tracking included, so we
            adjust automatically for delays. Your chauffeur waits in the arrivals hall with a name
            board — no taxi queue, no ride-share app.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Major Austrian Airports</h2>
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

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">How Our Airport Pickup Works</h2>
          <ol className="mt-6 space-y-4">
            {[
              { title: 'Tell us your flight details', body: 'Provide your arrival airport, flight number, date, and pickup destination when booking.' },
              { title: 'We track your flight', body: 'Your flight number is monitored from booking through to arrival, so timing accounts for early or delayed landings.' },
              { title: 'Meet your chauffeur', body: 'Your chauffeur waits in the arrivals hall with a name board — no searching for a taxi rank or shuttle stop.' },
              { title: 'Direct transfer', body: 'Travel straight to your hotel, residence, office, or onward destination in the same vehicle.' },
            ].map((step, i) => (
              <li key={step.title} className="flex items-start gap-4 text-sm text-brand-ink-2/90">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-ink text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="font-semibold text-brand-ink">{step.title}</span> — {step.body}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Flight Tracking &amp; Delayed Arrivals</h2>
          <p className="mt-4 max-w-2xl text-brand-ink-2/90">
            Flight tracking is included on every airport transfer at no extra charge. We monitor
            the flight number provided with your booking, and if the schedule changes, your
            pickup time adjusts automatically — you don&apos;t need to call us or rebook because
            of a delay. The same applies to an early landing.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">
            Private Airport Transfers for Business, Families &amp; Groups
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-sm border border-brand-line bg-white p-5">
                <p className="font-semibold text-brand-ink">{u.title}</p>
                <p className="mt-1.5 text-sm text-brand-ink-2/70">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-white">Cross-Border Airport Transfers to Austria</h2>
          <p className="mt-3 max-w-2xl text-brand-cream/70">
            Flying into Munich or Zurich? We arrange private chauffeur transfers from the airport
            straight into Austria — mainly Tyrol, Salzburg state, and Vorarlberg/Arlberg resorts —
            in one vehicle, with no border stop.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {crossBorderAirports.map((a) => (
              <Link
                key={a.slug}
                href={`/airport-transfers/${a.slug}`}
                className="group rounded-sm border border-white/15 bg-white/5 p-6 transition-colors hover:border-brand-gold"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {a.code} · {a.region}
                </p>
                <h3 className="font-display mt-1 text-xl text-white group-hover:text-brand-gold">
                  {a.name}
                </h3>
                <p className="mt-2 text-sm text-brand-cream/70">{a.distanceFromCity}</p>
              </Link>
            ))}
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

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">Book your airport transfer</h2>
            <p className="mt-2 text-brand-ink-2/80">
              Submit your flight details and we&apos;ll confirm availability and pricing by email.
            </p>
          </div>
          <Link
            href="/booking"
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
