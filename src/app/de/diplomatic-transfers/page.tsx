import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Diplomaten- & Botschaftstransport in Wien',
  description:
    'Diskreter, pünktlicher Chauffeurtransport für diplomatische Vertretungen, internationale Organisationen und Konferenzdelegationen in Wien. Mehrsprachige Fahrer, Festpreise.',
  alternates: {
    canonical: '/de/diplomatic-transfers',
    languages: { en: '/diplomatic-transfers', de: '/de/diplomatic-transfers', 'x-default': '/diplomatic-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/diplomatic-transfers`,
    title: 'Diplomaten- & Botschaftstransport in Wien',
    description:
      'Diskreter, pünktlicher Chauffeurtransport für diplomatische Vertretungen, internationale Organisationen und Konferenzdelegationen in Wien. Mehrsprachige Fahrer, Festpreise.',
  },
}

const audiences = [
  'Botschaften und diplomatische Vertretungen in Wien',
  'Delegierte bei Konferenzen im Vienna International Centre (UNO Wien), bei OPEC oder OSZE',
  'Mitarbeiter internationaler Organisationen mit wiederkehrendem Transportbedarf',
  'Besuchende Amtsträger und Delegationen mit diskretem, planmäßigem Transferbedarf',
]

const features = [
  {
    title: 'Diskretion',
    description: 'Auf Wunsch ohne Branding, direkte Streckenführung und mit vertraulichen Reiseplänen vertraute Fahrer.',
  },
  {
    title: 'Pünktlichkeit',
    description: 'Feste Abholzeiten mit Flugverfolgung bei Ankünften, damit Zeitpläne rund um Ihren Transfer halten.',
  },
  {
    title: 'Mehrsprachige Fahrer',
    description: 'Standardmäßig Englisch und Deutsch, weitere Sprachen auf Anfrage verfügbar.',
  },
  {
    title: 'Wiederkehrende Buchungen',
    description: 'Richten Sie ein Firmenkonto für Vertretungen oder Organisationen mit regelmäßigem Transportbedarf ein.',
  },
]

export default function DiplomaticTransfersPageDe() {
  const pageUrl = `${siteUrl}/de/diplomatic-transfers`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Diplomatic Chauffeur Transport',
          name: 'Diplomaten- & Botschaftstransport',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'City', name: 'Vienna' },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Diplomaten- & Botschaftstransport
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            Diskreter Transport für Wiens diplomatische Gemeinschaft
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Wien beherbergt das Vienna International Centre — einen von vier Sitzen der
            Vereinten Nationen — sowie OPEC, die OSZE und Dutzende Botschaften. Zuverlässiger,
            diskreter Transport ist hier Routine, keine Sonderanfrage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Für wen ist das geeignet</h2>
        <ul className="mt-4 space-y-2 text-sm text-brand-ink-2">
          {audiences.map((a) => (
            <li key={a} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {a}
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Was Sie erwartet</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{f.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-sm border border-brand-line bg-brand-cream p-6">
          <p className="font-semibold text-brand-ink">Buchen Sie regelmäßig für eine Vertretung oder Organisation?</p>
          <p className="mt-1.5 text-sm text-brand-ink-2/70">
            Richten Sie ein Firmenkonto für gesammelte Rechnungsstellung und einen zentralen
            Ansprechpartner ein.
          </p>
          <Link
            href="/de/corporate-accounts"
            className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            Firmenkonten ansehen →
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Transfer organisieren</h2>
          <p className="mt-2 text-brand-ink-2/80">
            Senden Sie Ihre Daten und wir bestätigen Verfügbarkeit, Routenführung und einen
            Festpreis per E-Mail.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Transfer anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
