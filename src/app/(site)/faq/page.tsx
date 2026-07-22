import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/json-ld'
import { faqs } from '@/lib/content/faq'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about booking, pricing, cross-border transfers, and vehicles at Austria Chauffeur Service.',
  alternates: { canonical: '/faq', languages: { en: '/faq', de: '/de/faq', 'x-default': '/faq' } },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/faq`,
    title: 'Frequently Asked Questions',
    description:
      'Answers to common questions about booking, pricing, cross-border transfers, and vehicles at Austria Chauffeur Service.',
  },
}

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">FAQ</p>
              <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 max-w-xl text-brand-ink-2/80 leading-relaxed">
                Answers to what travelers and executives usually ask before booking a domestic or cross-border private transfer in Austria.
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/faq-support.webp"
                alt="Frequently Asked Questions Support Graphic"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <dl className="divide-y divide-brand-line">
          {faqs.map((f) => (
            <div key={f.question} className="py-6 first:pt-0">
              <dt className="font-display text-lg text-brand-ink">{f.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">Still have a question?</h2>
            <p className="mt-2 text-brand-ink-2/80">We&apos;re happy to help before you book.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
