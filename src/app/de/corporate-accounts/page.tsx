import type { Metadata } from 'next'
import Link from 'next/link'
import { contactEmail } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Firmenkonten & Reisepartner',
  description:
    'Firmenkonten für Unternehmen, Reisebüros und Hotelrezeptionen — gesammelte Rechnungsstellung, priorisierte Disposition und Sonderkonditionen für wiederkehrende Chauffeurbuchungen in Österreich.',
  alternates: {
    canonical: '/de/corporate-accounts',
    languages: { en: '/corporate-accounts', de: '/de/corporate-accounts' },
  },
}

const benefits = [
  {
    title: 'Gesammelte Rechnungsstellung',
    description: 'Eine monatliche Rechnung für alle Fahrten statt Einzelzahlung pro Buchung.',
  },
  {
    title: 'Priorisierte Disposition',
    description: 'Schnellere Bestätigung bei wiederkehrenden und zeitkritischen Buchungen.',
  },
  {
    title: 'Sonderkonditionen',
    description: 'Volumenbasierte Preise für Unternehmen und Agenturen mit regelmäßigem Reisebedarf.',
  },
  {
    title: 'Fester Ansprechpartner',
    description: 'Ein zentraler Kontakt für Kontoeinrichtung, Änderungen und Support.',
  },
]

const audiences = [
  'Unternehmen, die regelmäßig Mitarbeiter- oder Kundentransfers buchen',
  'Reisebüros, die Bodentransport für Kunden organisieren',
  'Hotelrezeptionen, die Flughafen- und Stadttransfers für Gäste buchen',
  'Event- und Hochzeitsplaner, die Gruppentransporte koordinieren',
]

export default function CorporateAccountsPageDe() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Firmenkonten
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            Gemacht für Unternehmen, Agenturen und Concierge-Teams
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Wenn Sie regelmäßig Chauffeurtransfers buchen — für ein Unternehmen, ein Reisebüro
            oder eine Hotelrezeption — bietet Ihnen ein Firmenkonto gesammelte Rechnungsstellung,
            priorisierte Bearbeitung und einen zentralen Ansprechpartner statt einzelner Buchungen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Vorteile des Firmenkontos</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{b.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{b.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Für wen ist das geeignet</h2>
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
          <h2 className="font-display text-2xl text-brand-ink">Firmenkonto einrichten</h2>
          <p className="mx-auto mt-2 max-w-md text-brand-ink-2/80">
            Senden Sie uns per E-Mail Ihren Firmennamen, das erwartete Buchungsvolumen und Ihre
            Zahlungspräferenz — wir melden uns mit Kontokonditionen und Preisen.
          </p>
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent('Anfrage Firmenkonto')}`}
            className="mt-6 inline-block rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            E-Mail an {contactEmail}
          </a>
          <p className="mt-4 text-sm text-brand-ink-2/60">
            Nur eine einzelne Fahrt buchen?{' '}
            <Link href="/de/booking" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Standard-Buchungsformular verwenden
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
