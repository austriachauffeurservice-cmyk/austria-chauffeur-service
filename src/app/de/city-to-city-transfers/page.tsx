import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { austrianCities } from '@/lib/content/de/service-areas'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Stadt-zu-Stadt-Transfers in Österreich',
  description:
    'Direkte private Chauffeurtransfers zwischen beliebigen österreichischen Städten — kein Umsteigen, kein Warten, ein Fahrzeug von Tür zu Tür. Festpreise, professionelle Fahrer.',
  alternates: {
    canonical: '/de/city-to-city-transfers',
    languages: { en: '/city-to-city-transfers', de: '/de/city-to-city-transfers', 'x-default': '/city-to-city-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/city-to-city-transfers`,
    title: 'Stadt-zu-Stadt-Transfers in Österreich',
    description:
      'Direkte private Chauffeurtransfers zwischen beliebigen österreichischen Städten — kein Umsteigen, kein Warten, ein Fahrzeug von Tür zu Tür. Festpreise, professionelle Fahrer.',
  },
}

const popularPairs = [
  'Wien → Salzburg',
  'Wien → Graz',
  'Salzburg → Innsbruck',
  'Linz → Wien',
  'Graz → Klagenfurt',
  'Innsbruck → Kitzbühel',
]

export default function CityToCityTransfersPageDe() {
  const pageUrl = `${siteUrl}/de/city-to-city-transfers`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'City-to-City Chauffeur Transfer',
          name: 'Stadt-zu-Stadt-Transfers',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'Country', name: 'Austria' },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Stadt-zu-Stadt-Transfers
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            Direkte, private Fahrten zwischen österreichischen Städten
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Ein Fahrzeug, Tür zu Tür — kein Umsteigen, keine geteilten Fahrten, kein Warten am
            Bahnhof. Nur eine feste Abfahrtszeit und eine direkte Route zu Ihrem Ziel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Warum ein Privattransfer</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                Direkte Tür-zu-Tür-Route ohne Umsteigen
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                Abfahrt zur gewünschten Zeit, nicht nach festem Fahrplan
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                Platz für Gepäck, Skiausrüstung oder Gruppengrößen, die für den ÖPNV ungeeignet sind
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                Festpreis vor der Fahrt vereinbart
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Beliebte Strecken</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {popularPairs.map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Alle Einsatzgebiete</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {austrianCities.map((c) => (
            <Link
              key={c.slug}
              href={`/de/service-areas/${c.slug}`}
              className="rounded-full border border-brand-line px-3 py-1 text-xs font-semibold text-brand-ink-2 hover:border-brand-gold hover:text-brand-gold"
            >
              {c.city}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Fahrt zwischen zwei österreichischen Städten?</h2>
          <p className="mt-2 text-brand-cream/70">
            Geben Sie Abhol- und Zielort ein und wir bestätigen einen Festpreis per E-Mail.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Transfer anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
