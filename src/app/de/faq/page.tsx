import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/json-ld'
import { faqs } from '@/lib/content/de/faq'

export const metadata: Metadata = {
  title: 'Häufig gestellte Fragen',
  description:
    'Antworten auf häufige Fragen zu Buchung, Preisen, grenzüberschreitenden Transfers und Fahrzeugen bei Austria Chauffeur Service.',
  alternates: {
    canonical: '/de/faq',
    languages: { en: '/faq', de: '/de/faq' },
  },
}

export default function FaqPageDe() {
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
                Häufig gestellte Fragen
              </h1>
              <p className="mt-4 max-w-xl text-brand-ink-2/80 leading-relaxed">
                Antworten auf das, was Reisende und Führungskräfte üblicherweise vor der Buchung
                eines privaten Inlands- oder grenzüberschreitenden Transfers in Österreich fragen.
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/faq-support.webp"
                alt="Grafik zum FAQ-Support"
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
            <h2 className="font-display text-2xl text-brand-ink">Noch eine Frage?</h2>
            <p className="mt-2 text-brand-ink-2/80">Wir helfen gerne, bevor Sie buchen.</p>
          </div>
          <Link
            href="/de/contact"
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold transition-colors duration-300"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  )
}
