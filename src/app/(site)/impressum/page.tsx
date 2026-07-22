import type { Metadata } from 'next'
import { contactAddress, contactEmail, siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum gemäß § 5 ECG und § 25 Mediengesetz.',
  alternates: { canonical: '/impressum' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/impressum`,
    title: 'Impressum',
    description: 'Impressum gemäß § 5 ECG und § 25 Mediengesetz.',
  },
}

export default function ImpressumPage() {
  return (
    <section lang="de" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
        Impressum
      </p>
      <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">Impressum</h1>
      <p className="mt-4 text-sm text-brand-ink-2/70">Angaben gemäß § 5 ECG und § 25 Mediengesetz.</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-brand-ink-2/90">
        <div>
          <h2 className="font-display text-lg text-brand-ink">Unternehmensangaben</h2>
          <p className="mt-2">
            {siteName}
            <br />
            Gesellschaft bürgerlichen Rechts (GesbR)
          </p>
          <p className="mt-3">
            Gesellschafter:
            <br />
            Zumer [Nachname]
            <br />
            Tehreem [Nachname]
            <br />
            Muhammad Ismail [Nachname]
          </p>
          <p className="mt-3 text-xs text-brand-ink-2/60">
            Hinweis: Vollständige Nachnamen aller drei Gesellschafter bitte ergänzen — eine GesbR
            muss mit den vollständigen Namen aller Gesellschafter ausgewiesen werden.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">Kontakt</h2>
          <p className="mt-2">
            Anschrift: {contactAddress}
            <br />
            E-Mail:{' '}
            <a href={`mailto:${contactEmail}`} className="text-brand-gold hover:underline">
              {contactEmail}
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">Unternehmensgegenstand</h2>
          <p className="mt-2">
            Betrieb eines Online-Buchungsportals zur Vermittlung von privaten
            Chauffeur- und Transferdienstleistungen. Die tatsächliche Beförderung wird nicht von
            uns selbst durchgeführt, sondern von unabhängigen, eigenständig gewerberechtlich
            befugten Chauffeurunternehmen als Vertragspartner der Kundinnen und Kunden erbracht.
          </p>
          <p className="mt-3 text-xs text-brand-ink-2/60">
            Hinweis: Bitte ergänzen Sie hier Ihre tatsächliche Gewerbeberechtigung (z. B.
            Handelsgewerbe / Vermittlung von Dienstleistungen) samt zuständiger Gewerbebehörde,
            sobald diese vorliegt.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">UID-Nummer</h2>
          <p className="mt-2 text-brand-ink-2/60">[UID-Nummer wird ergänzt]</p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">Online-Streitbeilegung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit, die unter{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              ec.europa.eu/consumers/odr
            </a>{' '}
            abrufbar ist. Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">Haftungshinweis</h2>
          <p className="mt-2">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
            Betreiber verantwortlich.
          </p>
        </div>
      </div>
    </section>
  )
}
