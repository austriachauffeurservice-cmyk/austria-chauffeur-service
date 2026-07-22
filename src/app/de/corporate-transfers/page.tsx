import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Firmen- & Stunden-Chauffeurbuchung',
  description:
    'Stunden- und Tagesbuchung für Meetings, Roadshows und mehrteilige Geschäftstage in ganz Österreich. Festpreise, professionelle Fahrer, Firmenkonten verfügbar.',
  alternates: {
    canonical: '/de/corporate-transfers',
    languages: { en: '/corporate-transfers', de: '/de/corporate-transfers', 'x-default': '/corporate-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/corporate-transfers`,
    title: 'Firmen- & Stunden-Chauffeurbuchung',
    description:
      'Stunden- und Tagesbuchung für Meetings, Roadshows und mehrteilige Geschäftstage in ganz Österreich. Festpreise, professionelle Fahrer, Firmenkonten verfügbar.',
  },
}

const useCases = [
  {
    title: 'Roadshows & Tage mit mehreren Stopps',
    description: 'Fahrer und Fahrzeug den ganzen Tag auf Abruf, zwischen Meetings nach Ihrem Zeitplan.',
  },
  {
    title: 'Flughafen–Meeting–Flughafen',
    description: 'Eine Buchung deckt Abholung, Wartezeit beim Meeting und die Rückfahrt zum Flughafen ab.',
  },
  {
    title: 'Executive- & Kundenreisen',
    description: 'Luxus-Limousine für kundenorientierte Fahrten, bei denen das Auftreten zählt.',
  },
  {
    title: 'Team- & Konferenztransport',
    description: 'Vans und Kleinbusse für Teams zwischen Büros, Hotels und Veranstaltungsorten.',
  },
]

export default function CorporateTransfersPageDe() {
  const pageUrl = `${siteUrl}/de/corporate-transfers`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Corporate Chauffeur Hire',
          name: 'Firmen- & Stunden-Chauffeurbuchung',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'Country', name: 'Austria' },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Firmen- & Stundenbuchung
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            Ein Fahrer auf Abruf für Ihren Geschäftstag
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Stundenweise statt pro Fahrt abgerechnet — ideal, wenn Ihr Zeitplan mehrere Stopps,
            Wartezeiten oder kurzfristige Änderungen enthält.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Typische Anwendungsfälle</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {useCases.map((u) => (
            <div key={u.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{u.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{u.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Empfohlene Fahrzeuge</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/de/fleet/sedan" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Business-Limousine
          </Link>
          <Link href="/de/fleet/luxury" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Luxus-Limousine
          </Link>
          <Link href="/de/fleet/minibus" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Kleinbus für Teams
          </Link>
        </div>

        <div className="mt-10 rounded-sm border border-brand-line bg-brand-cream p-6">
          <p className="font-semibold text-brand-ink">Buchen Sie regelmäßig für Ihr Unternehmen?</p>
          <p className="mt-1.5 text-sm text-brand-ink-2/70">
            Richten Sie ein Firmenkonto für gesammelte Rechnungsstellung und priorisierte
            Disposition ein.
          </p>
          <Link
            href="/de/corporate-accounts"
            className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            Firmenkonten ansehen →
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Brauchen Sie einen Fahrer für den Tag?</h2>
          <p className="mt-2 text-brand-cream/70">
            Vermerken Sie Ihren Stundenbedarf im Buchungsformular — wir erstellen ein separates Angebot.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Stundenbuchung anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
