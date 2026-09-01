import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { LocationMap } from '@/components/location-map'
import { siteName, contactAddress, contactEmail, siteUrl, whatsappLink, whatsappNumber } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Contact Austria Chauffeur Service | Book a Private Transfer',
  description:
    'Contact Austria Chauffeur Service for private airport, city-to-city, ski and cross-border transfers. Request availability and a fixed price by email or WhatsApp.',
  alternates: { canonical: '/contact', languages: { en: '/contact', de: '/de/contact', 'x-default': '/contact' } },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/contact`,
    title: 'Contact Austria Chauffeur Service | Book a Private Transfer',
    description:
      'Contact Austria Chauffeur Service for private airport, city-to-city, ski and cross-border transfers. Request availability and a fixed price by email or WhatsApp.',
  },
}

export default function ContactPage() {
  const pageUrl = `${siteUrl}/contact`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: pageUrl,
          about: {
            '@type': 'Organization',
            name: siteName,
            url: siteUrl,
            address: { '@type': 'PostalAddress', streetAddress: contactAddress },
            contactPoint: [
              { '@type': 'ContactPoint', contactType: 'customer service', email: contactEmail },
              { '@type': 'ContactPoint', contactType: 'customer service', telephone: whatsappNumber },
            ],
          },
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <div className="mt-6 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Contact
              </p>
              <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                Get in touch with our dispatch team
              </h1>
              <p className="mt-4 max-w-xl text-brand-ink-2/80 leading-relaxed">
                For the fastest response, use our booking form — your request goes directly to our
                dispatch team. For general questions, reach us directly below.
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-brand-ink shadow-md lg:col-span-5 group">
              <Image
                src="/images/cta-chauffeur.webp"
                alt="Professional chauffeur ready for service in Austria"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white hover:border-brand-gold transition-colors duration-300">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Booking &amp; General Enquiries</h2>
            <a href={`mailto:${contactEmail}`} className="mt-2 block text-sm font-semibold text-brand-gold hover:underline">
              {contactEmail}
            </a>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white hover:border-[#25D366] transition-colors duration-300">
            <h2 className="font-semibold text-brand-ink font-display text-lg">WhatsApp</h2>
            <a
              href={whatsappLink("Hi, I'd like to request a private chauffeur transfer in Austria.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm font-semibold text-[#25D366] hover:underline"
            >
              {whatsappNumber}
            </a>
            <p className="mt-2 text-xs text-brand-ink-2/60">
              For quick questions — booking requests are best submitted through the form so
              nothing gets missed.
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Registered Address</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              {contactAddress}
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Service Area</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              All of Austria, plus cross-border transfers to Germany, Czech Republic, Slovakia,
              Hungary, Slovenia, Italy, and Switzerland &amp; Liechtenstein.
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Response Time</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              For booking requests, we review your journey details and confirm availability and
              pricing by email.
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Need a Transfer Today?</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              Send your pickup, destination, travel time, and passenger count by WhatsApp or
              email, and we&apos;ll check availability.
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">About Our Service</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              Austria Chauffeur Service coordinates private chauffeur transfers across Austria and
              selected cross-border routes through a network of independently licensed chauffeur
              partners. Booking requests are reviewed by our team, with vehicle and driver details
              confirmed by email before travel.
            </p>
          </div>
        </div>
      </section>

      <LocationMap query={contactAddress} label="Find Us" caption={contactAddress} />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-sm bg-brand-cream p-6 text-center sm:p-10 border border-brand-line">
          <h2 className="font-display text-2xl text-brand-ink">Ready to book your transfer?</h2>
          <p className="mt-2 text-sm text-brand-ink-2/80">
            Submit your trip details and we&apos;ll confirm by email with a fixed transparent rate.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-block rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold transition-colors duration-300"
          >
            Request a Fixed Quote
          </Link>
        </div>
      </section>
    </>
  )
}
