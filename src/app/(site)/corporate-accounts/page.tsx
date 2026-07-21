import type { Metadata } from 'next'
import Link from 'next/link'
import { contactEmail } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Corporate Accounts & Travel Partners',
  description:
    'Corporate accounts for companies, travel agencies, and hotel concierges — consolidated invoicing, priority dispatch, and negotiated rates for recurring chauffeur bookings across Austria.',
  alternates: {
    canonical: '/corporate-accounts',
    languages: { en: '/corporate-accounts', de: '/de/corporate-accounts' },
  },
}

const benefits = [
  {
    title: 'Consolidated Invoicing',
    description: 'One monthly invoice for all trips instead of paying per booking.',
  },
  {
    title: 'Priority Dispatch',
    description: 'Faster confirmation turnaround for recurring and time-sensitive bookings.',
  },
  {
    title: 'Negotiated Rates',
    description: 'Volume-based pricing for companies and agencies with regular travel needs.',
  },
  {
    title: 'Dedicated Contact',
    description: 'A single point of contact for account setup, changes, and support.',
  },
]

const audiences = [
  'Companies booking regular employee or client transfers',
  'Travel agencies arranging ground transport for clients',
  'Hotel concierges booking airport and city transfers for guests',
  'Event and wedding planners coordinating group transport',
]

export default function CorporateAccountsPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Corporate Accounts
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            Built for companies, agencies, and concierge teams
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            If you&apos;re booking chauffeur transfers regularly — for a company, a travel agency, or
            a hotel front desk — a corporate account gets you consolidated billing, priority
            handling, and a single point of contact instead of booking one trip at a time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Account Benefits</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{b.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{b.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Who This Is For</h2>
        <ul className="mt-4 space-y-2 text-sm text-brand-ink-2">
          {audiences.map((a) => (
            <li key={a} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {a}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 text-center">
          <h2 className="font-display text-2xl text-brand-ink">Set up a corporate account</h2>
          <p className="mx-auto mt-2 max-w-md text-brand-ink-2/80">
            Email us your company name, expected booking volume, and billing preference — we&apos;ll
            follow up with account terms and rates.
          </p>
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent('Corporate Account Inquiry')}`}
            className="mt-6 inline-block rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Email {contactEmail}
          </a>
          <p className="mt-4 text-sm text-brand-ink-2/60">
            Booking a single trip instead?{' '}
            <Link href="/booking" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Use the standard booking form
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
