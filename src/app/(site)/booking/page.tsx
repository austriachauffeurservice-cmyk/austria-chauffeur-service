import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { BookingForm } from '@/components/booking-form'
import { BookingTrustStrip } from '@/components/booking-trust-strip'
import { defaultOgImage, siteName, siteUrl, contactEmail } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Book a Transfer',
  description:
    'Request a private chauffeur transfer anywhere in Austria, or cross-border to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.',
  // Canonical points to the clean path — every /service-areas/* page links here
  // with a ?to= query param to prefill the form, which must not be indexed
  // as separate near-duplicate pages.
  alternates: { canonical: '/booking', languages: { en: '/booking', de: '/de/booking', 'x-default': '/booking' } },
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/booking`,
    title: 'Book a Transfer',
    description:
      'Request a private chauffeur transfer anywhere in Austria, or cross-border to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.',
  },
}

const steps = [
  { title: 'We review your request', description: 'We check your route, date, passengers, and vehicle requirements.' },
  { title: 'We confirm availability', description: 'We confirm whether a suitable chauffeur and vehicle are available.' },
  { title: 'You receive the fixed price', description: 'We email you the confirmed price before your journey.' },
  { title: 'Your transfer is arranged', description: 'Once confirmed, we provide the relevant pickup and driver details.' },
]

const whyBook = [
  { title: 'Fixed pricing', description: 'Know your confirmed price before travel.' },
  { title: 'Private vehicle', description: 'No shared rides or unrelated passengers.' },
  { title: 'Flight tracking', description: 'Airport pickups are adjusted for flight delays and early arrivals.' },
  { title: 'Door-to-door', description: 'Hotel, residence, airport, or business address.' },
]

export default function BookingPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Booking' }]} />
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
        Booking Request
      </p>
      <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
        Request a Fixed-Price Chauffeur Transfer
      </h1>
      <p className="mt-3 max-w-xl text-brand-ink-2/80">
        Tell us your pickup, destination, and travel details. We&apos;ll confirm availability and
        your fixed price by email — domestic Austrian trips and cross-border transfers both
        welcome.
      </p>
      <p className="mt-2 max-w-xl text-sm text-brand-ink-2/70">
        There&apos;s no generic rate card, since a short city transfer and a long cross-border or
        Alpine trip are priced very differently — that&apos;s why we confirm a fixed price for your
        specific route and vehicle rather than publish a number that wouldn&apos;t apply to your trip.
      </p>
      <p className="mt-2 max-w-xl text-sm text-brand-ink-2/70">
        Need help before submitting your request? Email{' '}
        <a href={`mailto:${contactEmail}`} className="font-semibold text-brand-gold hover:underline">
          {contactEmail}
        </a>
        .
      </p>

      <div className="mt-8 rounded-sm border border-brand-line bg-white p-6 sm:p-8">
        <BookingForm />
        <div className="mt-6">
          <BookingTrustStrip />
        </div>
        <p className="mt-5 text-xs text-brand-ink-2/60">
          We usually respond by email with availability and pricing as soon as possible. We accept
          requests for domestic transfers throughout Austria and cross-border journeys to Germany,
          Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland/Liechtenstein.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl text-brand-ink">What Happens Next?</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-sm border border-brand-line bg-brand-cream p-5">
              <span className="font-display text-xs font-semibold text-brand-gold">
                {String(i + 1).padStart(2, '0')} — {step.title}
              </span>
              <p className="mt-1.5 text-sm text-brand-ink-2/80">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl text-brand-ink">Why Book Direct?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {whyBook.map((item) => (
            <div key={item.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{item.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-16 text-sm text-brand-ink-2/70">
        <Link
          href="/fleet"
          className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
        >
          View the full fleet →
        </Link>
      </p>
    </section>
  )
}
