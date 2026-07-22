import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Austria Chauffeur Service vermittelt Reisenden lizenzierte, professionelle Chauffeurpartner für Privattransfers in ganz Österreich und über die Grenzen hinaus.',
  alternates: {
    canonical: '/de/about',
    languages: { en: '/about', de: '/de/about', 'x-default': '/about' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/about`,
    title: 'Über uns',
    description:
      'Austria Chauffeur Service vermittelt Reisenden lizenzierte, professionelle Chauffeurpartner für Privattransfers in ganz Österreich und über die Grenzen hinaus.',
  },
}

const values = [
  {
    title: 'Lizenzierte Chauffeurpartner',
    description:
      'Jede Fahrt wird von einem eigenständig lizenzierten Chauffeurunternehmen durchgeführt, dessen gewerbliche Zulassung für den Personentransport vor Aufnahme in unser Netzwerk geprüft wird.',
    image: '/images/faq-support.webp',
  },
  {
    title: 'Standardmäßig pünktlich',
    description:
      'Flüge werden bei Flughafentransfers automatisch verfolgt, und Fahrer planen Routen anhand von Echtzeit-Verkehrsdaten.',
    image: '/images/hero/airport-transfer.webp',
  },
  {
    title: 'Feste, transparente Preise',
    description:
      'Sie kennen den Preis vor der Fahrt — kein Taxameter, keine überraschenden Grenzzuschläge.',
    image: '/images/why-choose-us.webp',
  },
  {
    title: 'Mehrsprachige Fahrer',
    description:
      'Deutsch und Englisch werden auf jeder Strecke gesprochen, weitere Sprachen sind auf Anfrage verfügbar.',
    image: '/images/testimonials.webp',
  },
]

export default function AboutPageDe() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Über uns
            </p>
            <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
              Gemacht für Österreich, bereit für die Grenze
            </h1>
            <p className="mt-5 text-brand-ink-2/80 leading-relaxed">
              Austria Chauffeur Service wurde gegründet, um Reisenden, Führungskräften und
              Veranstaltungsorganisatoren eine verlässliche Möglichkeit zu geben, einen
              Privattransfer im Land — und in die Nachbarländer — zu buchen, ohne den Anbieter zu
              wechseln.
            </p>
            <p className="mt-4 text-brand-ink-2/70 text-sm leading-relaxed">
              Wir arbeiten mit einem geprüften Netzwerk eigenständig lizenzierter
              Chauffeurunternehmen zusammen, die winterfeste Fuhrparks mit professionellen
              Fahrern betreiben, die Englisch und Deutsch sprechen — damit jede von uns
              vermittelte Fahrt demselben Standard an Sicherheit, Komfort und Luxus entspricht.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-lg group">
            <Image
              src="/images/hero/vienna-palace.webp"
              alt="Premium Privatchauffeur in Wien, Österreich"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-w-768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Unsere Grundsätze
          </p>
          <h2 className="font-display mt-2 text-3xl text-brand-ink">Werte & Standards</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="group rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              Fragen vor der Buchung?
            </h2>
            <p className="mt-2 text-brand-cream/70">Wir planen die Route gerne mit Ihnen.</p>
          </div>
          <Link
            href="/de/contact"
            className="shrink-0 rounded-sm bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light transition-colors duration-300"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  )
}
