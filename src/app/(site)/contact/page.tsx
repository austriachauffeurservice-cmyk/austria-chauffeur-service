import type { Metadata } from 'next'
import Link from 'next/link'
import { contactAddress, contactEmail, contactPhone } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Austria Chauffeur Service for bookings and inquiries.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">Contact</p>
      <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">Get in touch</h1>
      <p className="mt-4 max-w-xl text-brand-ink-2/80">
        For the fastest response, use the booking form — it goes straight into our dispatch
        system. For general questions, reach us directly below.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-sm border border-brand-line p-6">
          <h2 className="font-semibold text-brand-ink font-display text-lg">Email Inquiry</h2>
          <a href={`mailto:${contactEmail}`} className="mt-2 block text-sm font-semibold text-brand-gold hover:underline">
            {contactEmail}
          </a>
        </div>

        <div className="rounded-sm border border-brand-line p-6">
          <h2 className="font-semibold text-brand-ink font-display text-lg">Phone Support</h2>
          <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="mt-2 block text-sm font-semibold text-brand-gold hover:underline">
            {contactPhone}
          </a>
        </div>

        <div className="rounded-sm border border-brand-line p-6 sm:col-span-2">
          <h2 className="font-semibold text-brand-ink font-display text-lg">Office Location</h2>
          <p className="mt-2 text-sm text-brand-ink-2/80">
            {contactAddress}
          </p>
        </div>

        <div className="rounded-sm border border-brand-line p-6 sm:col-span-2">
          <h2 className="font-semibold text-brand-ink font-display text-lg">Service Area</h2>
          <p className="mt-2 text-sm text-brand-ink-2/80">
            All of Austria, plus cross-border transfers to Germany, Czech Republic, Slovakia,
            Hungary, Slovenia, Italy, and Switzerland/Liechtenstein.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-sm bg-brand-cream p-6 text-center sm:p-8">
        <h2 className="font-display text-xl text-brand-ink">Ready to book?</h2>
        <p className="mt-1 text-sm text-brand-ink-2/80">
          Submit your trip details and we&apos;ll confirm by email.
        </p>
        <Link
          href="/booking"
          className="mt-5 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Request a Transfer
        </Link>
      </div>
    </section>
  )
}
