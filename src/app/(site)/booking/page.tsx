import type { Metadata } from 'next'
import { BookingForm } from '@/components/booking-form'

export const metadata: Metadata = {
  title: 'Book a Transfer',
  description:
    'Request a private chauffeur transfer anywhere in Austria, or cross-border to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.',
  // Canonical points to the clean path — every /service-areas/* page links here
  // with a ?to= query param to prefill the form, which must not be indexed
  // as separate near-duplicate pages.
  alternates: { canonical: '/booking' },
}

export default function BookingPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
        Booking Request
      </p>
      <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
        Tell us where you&apos;re going
      </h1>
      <p className="mt-3 max-w-xl text-brand-ink-2/80">
        Fill in the details below and we&apos;ll confirm availability and pricing by email —
        domestic Austrian trips and cross-border transfers both welcome.
      </p>

      <div className="mt-10 rounded-sm border border-brand-line bg-white p-6 sm:p-8">
        <BookingForm />
      </div>
    </section>
  )
}
