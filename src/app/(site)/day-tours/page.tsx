import type { Metadata } from 'next'
import Link from 'next/link'
import { dayTours } from '@/lib/content/day-tours'
import { vehicles } from '@/lib/content/services'
import { defaultOgImage, siteName, siteUrl, whatsappLink } from '@/lib/content/site'
import { JsonLd } from '@/components/json-ld'
import { FaqAccordion } from '@/components/faq-accordion'

export const metadata: Metadata = {
  title: 'Private Day Tours in Austria | Vienna & Salzburg',
  description:
    'Private chauffeur day trips to Hallstatt, the Wachau Valley, and Salzburg from Vienna and Salzburg — hotel pickup, flexible itinerary, fixed price confirmed before travel.',
  alternates: { canonical: '/day-tours', languages: { en: '/day-tours', de: '/de/day-tours', 'x-default': '/day-tours' } },
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/day-tours`,
    title: 'Private Day Tours in Austria | Vienna & Salzburg',
    description:
      'Private chauffeur day trips to Hallstatt, the Wachau Valley, and Salzburg from Vienna and Salzburg — hotel pickup, flexible itinerary, fixed price confirmed before travel.',
  },
}

const whyChoose = [
  'Private vehicle for your group only',
  'Professional chauffeur, not a shared tour bus',
  'Hotel or private-address pickup',
  'Flexible itinerary — stop where and when you like',
  'Your chauffeur waits while you explore',
  'Fixed price confirmed before travel',
]

const included = [
  'Private vehicle and professional chauffeur',
  'Hotel, apartment, or private-address pickup',
  'Return transportation at the end of the day',
  'Flexible sightseeing stops along the way',
  'Your chauffeur waiting while you explore',
  'Fixed price confirmed before travel',
]

const notIncluded = [
  'Entrance tickets (e.g. salt mine, abbey, fortress)',
  'Meals and drinks',
  'A dedicated sightseeing guide (your chauffeur provides transportation, not guided commentary — see FAQ below)',
]

const viennaDayTrips = [
  { label: 'Vienna → Hallstatt', href: '/day-tours/hallstatt', note: 'Long day — early departure recommended' },
  { label: 'Vienna → Wachau Valley (incl. Melk)', href: '/day-tours/wachau-valley', note: 'A comfortable single day' },
  { label: 'Vienna → Salzburg', href: '/day-tours/salzburg-day-trip', note: 'Long day — an overnight stay is worth considering' },
]

const customExamples = [
  'Vienna → Melk → Wachau Valley → Vienna',
  'Vienna → Hallstatt → Vienna',
  'Salzburg → Hallstatt → Salzburg',
  'Vienna → Hallstatt → Salzburg (one-way, ending in Salzburg)',
  'Vienna → Bratislava → Vienna',
]

const howItWorks = [
  { title: 'Tell us your plan', description: 'Choose one of our destinations, or tell us what you’d like to see and where you’re starting from.' },
  { title: 'Get your fixed price', description: 'We check availability and confirm your total price by email before anything is booked.' },
  { title: 'Enjoy your day', description: 'Your chauffeur picks you up, stays available while you explore, and drives you back when you’re ready.' },
]

const faqs = [
  {
    question: 'Are your day tours guided?',
    answer:
      'Our day tours are private chauffeur services, not guided tours — your chauffeur provides the transportation and stays available while you explore each destination, but doesn’t provide formal guided commentary. If you’re looking for a dedicated sightseeing guide, mention it when requesting your quote and we can discuss what’s possible.',
  },
  {
    question: 'How much does a private day tour cost?',
    answer:
      'Your fixed price depends on the route, number of passengers, vehicle, and tour duration. Tell us where you’d like to go and we’ll confirm the total price by email before you book.',
  },
  {
    question: 'Does the chauffeur wait while we explore, or do we need to arrange a pickup time?',
    answer:
      'Your chauffeur waits and stays available throughout the day — there’s no fixed pickup time to plan around at each stop.',
  },
  {
    question: 'Can I combine two destinations in one day, like Hallstatt and Salzburg?',
    answer:
      'Yes — multi-stop and one-way itineraries can be arranged. Tell us your planned route when requesting a quote and we’ll confirm whether it fits comfortably into a single day or is better split across two.',
  },
  {
    question: 'What vehicles are available for a day tour?',
    answer:
      'Business Sedan and Luxury Sedan (up to 3 passengers), Executive Van (up to 7 passengers), and Minibus (up to 16 passengers) — the right choice depends on your group size and luggage.',
  },
  {
    question: 'Is hotel pickup included?',
    answer:
      'Yes. We pick you up from your hotel, apartment, or private address and return you to your chosen destination at the end of the day.',
  },
]

export default function DayToursPage() {
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
            Day Tours
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Private Day Tours in Austria
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Private chauffeur day trips from Vienna and Salzburg. Explore Austria at your own
            pace with a private vehicle and driver — no fixed tour-bus schedule, no group size to
            coordinate with.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
            >
              Get a Fixed Price
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Why Choose a Private Day Tour?</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
              <span className="mt-0.5 text-brand-gold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Popular Private Day Tours</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dayTours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/day-tours/${tour.slug}`}
                className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {tour.region}
                </p>
                <h3 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                  {tour.name}
                </h3>
                <p className="mt-2 text-sm text-brand-ink-2/70">{tour.tagline}</p>
                <p className="mt-4 text-xs font-semibold text-brand-ink-2/60">
                  From {tour.startingPoints[0].from} — {tour.startingPoints[0].driveTime} drive
                </p>
                <p className="mt-1 text-xs text-brand-ink-2/60">{tour.duration}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-ink group-hover:text-brand-gold">
                  View Tour →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Popular Day Trips from Vienna</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Vienna is the starting point for all three tours above — here they are framed from
            that angle, if that&apos;s where your trip begins.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {viennaDayTrips.map((trip) => (
              <Link
                key={trip.href}
                href={trip.href}
                className="rounded-sm border border-brand-line bg-white p-5 transition-colors hover:border-brand-gold hover:shadow-sm"
              >
                <p className="font-semibold text-brand-ink">{trip.label}</p>
                <p className="mt-1.5 text-xs text-brand-ink-2/60">{trip.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Build Your Own Austria Day Tour</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Combining destinations or starting somewhere else entirely also works — these are
            example itineraries, not a fixed list. Tell us your plan when requesting a quote.
          </p>
          <ul className="mt-5 space-y-2">
            {customExamples.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl text-brand-ink">What&apos;s Included</h2>
              <ul className="mt-4 space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                    <span className="mt-0.5 text-brand-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl text-brand-ink">What&apos;s Not Included</h2>
              <ul className="mt-4 space-y-2">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                    <span className="mt-0.5 text-brand-ink-2/40">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Vehicles &amp; Group Sizes</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Traveling as a couple, family, or group? We can recommend the right vehicle based on
            your passenger count and luggage.
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
                {vehicles.map((v) => (
                  <tr key={v.name}>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">{v.name}</td>
                    <td className="py-3 pr-4 text-brand-ink-2/80">{v.passengers}</td>
                    <td className="py-3 text-brand-ink-2/80">{v.luggage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/fleet" className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
            View the full fleet →
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">How It Works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {howItWorks.map((step, i) => (
              <li key={step.title} className="rounded-sm border border-brand-line bg-white p-5">
                <span className="font-display text-xs font-semibold text-brand-gold">
                  {String(i + 1).padStart(2, '0')} — {step.title}
                </span>
                <p className="mt-1.5 text-sm text-brand-ink-2/80">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Day Tour FAQs</h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Ready to Plan Your Day?</h2>
          <p className="mt-2 text-brand-cream/70">
            Have somewhere else in mind, or want to combine destinations? Tell us your plan and
            we&apos;ll confirm an itinerary and a fixed price.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
            >
              Get a Fixed Price
            </Link>
            <a
              href={whatsappLink("Hi, I'd like to plan a private day tour in Austria.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
