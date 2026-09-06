import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { FaqAccordion } from '@/components/faq-accordion'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'

export const metadata: Metadata = {
  title: 'Event Transportation Austria | Private Chauffeur Service',
  description:
    'Private chauffeur transportation for conferences, exhibitions, corporate events and private functions across Austria. Coordinated vehicles, fixed-price quotes.',
  alternates: {
    canonical: '/event-transportation',
    languages: { en: '/event-transportation', de: '/de/event-transportation', 'x-default': '/event-transportation' },
  },
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/event-transportation`,
    title: 'Event Transportation Austria | Private Chauffeur Service',
    description:
      'Private chauffeur transportation for conferences, exhibitions, corporate events and private functions across Austria. Coordinated vehicles, fixed-price quotes.',
  },
}

const serviceHighlights = [
  { title: 'Door-to-Door Service', description: 'Direct pickup and drop-off at the airport, hotel, or venue — no shared stops.' },
  { title: 'Professional Chauffeurs', description: 'Experienced drivers who plan around your schedule, not a fixed timetable.' },
  { title: 'Coordinated Pickups', description: 'Multiple arrivals, hotels, or pickup points planned as a single itinerary.' },
  { title: 'Return Transportation', description: 'The same service works in reverse at the end of the event.' },
]

const eventTypes = [
  { title: 'Conferences', description: 'Delegate transport between airports, hotels, and the conference venue.' },
  { title: 'Corporate Events', description: 'Product launches, company celebrations, and one-off business events — for ongoing business travel instead, see Corporate & Hourly Chauffeur Hire.' },
  { title: 'Exhibitions & Trade Shows', description: 'Exhibitor and visitor transport to trade fair and exhibition venues.' },
  { title: 'Concerts & Festivals', description: 'Group and individual transport to venues and festival sites.' },
  { title: 'Sporting Events', description: 'Coordinated transport for spectators, teams, or officials.' },
  { title: 'VIP Events', description: 'Premium vehicles for guests where presentation matters.' },
  { title: 'Private Functions', description: 'Milestone celebrations and private parties — for weddings specifically, see Wedding Transfers.' },
  { title: 'Cultural & Business Events', description: 'Gallery openings, award ceremonies, and similar scheduled occasions.' },
]

const fleetTable = [
  { name: 'Business Sedan', passengers: 'Up to 3', luggage: '2–3 bags', href: '/fleet/sedan' },
  { name: 'Luxury Sedan', passengers: 'Up to 3', luggage: '2–3 bags', href: '/fleet/luxury' },
  { name: 'Executive Van', passengers: 'Up to 7', luggage: '6–7 bags', href: '/fleet/van' },
  { name: 'Minibus', passengers: 'Up to 16', luggage: 'Large capacity', href: '/fleet/minibus' },
]

const planningPoints = [
  'Event date and pickup time',
  'Pickup location (airport, hotel, or address)',
  'Event venue or destination',
  'Number of passengers',
  'Luggage or equipment',
  'Return time, if needed',
  'How many vehicles you need, if more than one',
  'Any special requirements, noted in your request',
]

const whyChauffeur = [
  'A direct route to your venue, with no shared stops along the way',
  'A professional chauffeur assigned to your schedule',
  'A private vehicle for your group, not shared with other passengers',
  'Pickup times built around your event, not a fixed timetable',
  'Coordinated pickups when several people are arriving separately',
  'The same service arranged again for your return journey',
]

const faqs = [
  {
    question: 'What is event transportation?',
    answer:
      'Private chauffeur transport arranged around a specific scheduled event — a conference, exhibition, concert, or private function — covering airport pickups, hotel-to-venue transfers, and the return journey.',
  },
  {
    question: 'Can you provide transportation for conferences in Austria?',
    answer: 'Yes. We arrange delegate transport between airports, hotels, and conference venues, including coordinated pickups for guests arriving at different times.',
  },
  {
    question: 'Can you arrange airport transfers for event guests?',
    answer: 'Yes. Guests can be picked up directly from any of the airports we serve and taken to their hotel or the event venue.',
  },
  {
    question: 'Can you transport groups to an event?',
    answer: 'Yes. Executive Vans (up to 7) and Minibuses (up to 16) are available for groups, alongside sedans for smaller parties.',
  },
  {
    question: 'Can multiple vehicles be arranged for one event?',
    answer: 'Yes. Multiple vehicles can be coordinated under a single request — mention how many you need and passenger counts when requesting a quote.',
  },
  {
    question: 'Can you provide hotel-to-venue transfers?',
    answer: 'Yes. We plan transport between hotels, conference or exhibition venues, and other event locations as part of the booking.',
  },
  {
    question: 'Do you provide event transportation in Vienna and Salzburg?',
    answer: 'Yes, along with Innsbruck, Graz, Linz, Klagenfurt, and other cities we serve — see our full service-area coverage for details.',
  },
  {
    question: 'Can I book a chauffeur for a private event?',
    answer: 'Yes. Private functions and similar scheduled occasions are covered — for a wedding specifically, see our dedicated Wedding Transfers service.',
  },
  {
    question: 'What information is needed for an event transportation quote?',
    answer: 'Your event date, pickup location, venue, passenger count, and luggage — plus how many vehicles you need and any special requirements, noted in your request.',
  },
  {
    question: 'Can you arrange return transportation after an event?',
    answer: 'Yes. Return transfers are booked the same way as the outbound journey — share your expected finish time when requesting a quote.',
  },
]

export default function EventTransportationPage() {
  const pageUrl = `${siteUrl}/event-transportation`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Event Chauffeur Transportation',
          name: 'Event Transportation',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'Country', name: 'Austria' },
          url: pageUrl,
        }}
      />
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
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Event Transportation
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            Event Transportation in Austria
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Private chauffeur transportation for events across Austria, with coordinated airport,
            hotel, venue and return transfers for individuals, VIP guests and groups.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Professional Event Transportation</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          A private chauffeur and vehicle arranged around your event schedule — pickup at the
          airport or hotel, a direct drive to the venue, and the same service again for the
          return journey.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {serviceHighlights.map((s) => (
            <div key={s.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{s.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{s.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Events We Can Support</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {eventTypes.map((e) => (
            <div key={e.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{e.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">
                {e.title === 'Corporate Events' ? (
                  <>
                    Product launches, company celebrations, and one-off business events. For
                    ongoing business travel instead, see{' '}
                    <Link href="/corporate-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
                      Corporate &amp; Hourly Chauffeur Hire
                    </Link>
                    .
                  </>
                ) : e.title === 'Private Functions' ? (
                  <>
                    Milestone celebrations and private parties. For a wedding specifically, see{' '}
                    <Link href="/wedding-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
                      Wedding Transfers
                    </Link>
                    .
                  </>
                ) : (
                  e.description
                )}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Airport Transfers for Events</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Guests arriving in Austria can be picked up directly from the airport and driven to
          their hotel, the conference centre, or the event venue — with the same private vehicle
          used for onward hotel-to-venue transfers during the event itself.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/airport-transfers/vienna-airport" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Vienna Airport
          </Link>
          <Link href="/airport-transfers/salzburg-airport" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Salzburg Airport
          </Link>
          <Link href="/airport-transfers/innsbruck-airport" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Innsbruck Airport
          </Link>
        </div>
        <Link href="/airport-transfers" className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
          All Airport Transfers →
        </Link>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Hotel-to-Venue Transfers</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Between a hotel and a conference venue, exhibition hall, restaurant, or meeting location,
          a scheduled private transfer removes the need to arrange a taxi for every leg. Pickup
          times are planned around the event&apos;s actual schedule rather than requested on the day.
        </p>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Group Event Transportation</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Vehicle choice depends on passenger count, luggage or equipment, and whether one vehicle
          is enough or several are needed for a larger group.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="border-b border-brand-line text-xs uppercase tracking-wide text-brand-ink-2/60">
                <th className="py-2 pr-4 font-semibold">Vehicle</th>
                <th className="py-2 pr-4 font-semibold">Passengers</th>
                <th className="py-2 font-semibold">Luggage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-line">
              {fleetTable.map((v) => (
                <tr key={v.name}>
                  <td className="py-3 pr-4 font-semibold text-brand-ink">
                    <Link href={v.href} className="hover:text-brand-gold hover:underline">
                      {v.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-brand-ink-2/80">{v.passengers}</td>
                  <td className="py-3 text-brand-ink-2/80">{v.luggage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/fleet" className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
          View the Full Fleet →
        </Link>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Multiple Vehicle &amp; Coordinated Transfers</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Larger events often need more than one pickup planned together — this is transportation
          coordination, arranging vehicles and timing around your event, not full event-planning
          or on-site event management.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            'Guests arriving on different flights or at different times',
            'Pickups from more than one hotel',
            'Different pickup points for the same event',
            'Transfers to the venue timed around the schedule',
            'Return journeys for the whole group at the end of the event',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-sm border border-brand-line bg-brand-cream p-6">
          <p className="font-semibold text-brand-ink">Coordinating transport for a larger event?</p>
          <p className="mt-1.5 text-sm text-brand-ink-2/70">
            Share your guest list, arrival times, and pickup points, and we&apos;ll put together a
            vehicle plan and a fixed price by email.
          </p>
          <Link
            href="/booking"
            className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            Request an Event Transportation Quote →
          </Link>
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">VIP Event Transportation</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          For executives, speakers, performers, or other guests where presentation matters, a{' '}
          <Link href="/fleet/luxury" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
            Luxury Sedan
          </Link>{' '}
          can be arranged with the same door-to-door, professionally driven service. For
          diplomatic missions, embassies, or official delegations specifically, see our dedicated{' '}
          <Link href="/diplomatic-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
            Diplomatic &amp; Embassy Transport
          </Link>{' '}
          service.
        </p>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Event Transportation Across Austria</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Coverage extends across the cities and regions we already serve, including Vienna,
          Salzburg, Innsbruck, Graz, Linz, and Klagenfurt.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/service-areas/vienna" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Vienna</Link>
          <Link href="/service-areas/salzburg" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Salzburg</Link>
          <Link href="/service-areas/innsbruck" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Innsbruck</Link>
          <Link href="/service-areas/graz" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Graz</Link>
          <Link href="/service-areas/linz" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Linz</Link>
          <Link href="/service-areas/klagenfurt" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Klagenfurt</Link>
        </div>
        <Link href="/service-areas" className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
          All Service Areas →
        </Link>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Event Transportation Planning</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          A few details are enough to get a fixed quote back by email:
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {planningPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {point}
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Why Choose a Private Chauffeur for Your Event?</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {whyChauffeur.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {point}
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-12 mb-6 text-xl text-brand-ink">Event Transportation FAQs</h2>
        <FaqAccordion items={faqs} />
      </section>

      <BookingCta
        pageType="event"
        title="Plan Your Event Transfers"
        description="Share your event date, venue, and guest details, and we'll confirm a vehicle plan and fixed price by email."
      />
    </>
  )
}
