import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Hochzeits-Chauffeur & Transferservice',
  description:
    'Koordinierter Hochzeitstransport in ganz Österreich — Brautauto, Gästeshuttle und mehrstufige Zeitplanung zwischen Trauung, Fotos und Feier. Festpreise, professionelle Fahrer.',
  alternates: {
    canonical: '/de/wedding-transfers',
    languages: { en: '/wedding-transfers', de: '/de/wedding-transfers' },
  },
}

const features = [
  {
    title: 'Brautauto',
    description: 'Eine Luxus-Limousine für das Brautpaar, präzise auf Ihren Trauungsablauf abgestimmt.',
  },
  {
    title: 'Gästeshuttle',
    description: 'Vans oder Kleinbusse, um Gäste zwischen den Locations zu bewegen, ohne eine Kolonne von Einzelfahrzeugen.',
  },
  {
    title: 'Koordination mehrerer Stopps',
    description: 'Ein Ansprechpartner für die Abfolge von Trauung, Fotolocations und Abholung zur Feier.',
  },
  {
    title: 'Formelles Auftreten',
    description: 'Professionelle, formell gekleidete Fahrer und makellos präsentierte Fahrzeuge.',
  },
]

export default function WeddingTransfersPageDe() {
  const pageUrl = `${siteUrl}/de/wedding-transfers`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Wedding Chauffeur Transport',
          name: 'Hochzeitstransfers',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'Country', name: 'Austria' },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Hochzeitstransfers
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            Koordinierter Hochzeitstransport, von Anfang bis Ende
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Vom Brautauto bis zum letzten Gästeshuttle planen wir die Zeitabstimmung zwischen
            Trauung, Fotos und Feier, damit Sie sich am großen Tag um nichts kümmern müssen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Das ist inklusive</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{f.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{f.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Locations, die wir abdecken</h2>
        <p className="mt-3 text-sm text-brand-ink-2/80">
          Historische Schlösser, Weingüter, Locations am See und Landgüter in ganz Österreich —
          wenn Trauung und Feier an unterschiedlichen Orten stattfinden, planen wir Route und
          Zeitabstimmung dazwischen als Teil der Buchung.
        </p>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Empfohlene Fahrzeuge</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/de/fleet/luxury" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Luxus-Limousine — Brautauto
          </Link>
          <Link href="/de/fleet/van" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Executive Van — kleine Gästegruppen
          </Link>
          <Link href="/de/fleet/minibus" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Kleinbus — komplettes Gästeshuttle
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Planen Sie eine Hochzeit?</h2>
          <p className="mt-2 text-brand-cream/70">
            Teilen Sie uns die Details zu Trauung und Feier mit — wir erstellen einen Transportplan
            und ein Festpreisangebot.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Hochzeitstransport anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
