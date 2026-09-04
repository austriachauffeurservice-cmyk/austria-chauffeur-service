import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { BookingForm } from '@/components/booking-form'
import { BookingTrustStrip } from '@/components/booking-trust-strip'
import { defaultOgImage, siteName, siteUrl, contactEmail } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Transfer buchen',
  description:
    'Fordern Sie einen privaten Chauffeurtransfer überall in Österreich an, oder grenzüberschreitend nach Deutschland, Tschechien, Slowakei, Ungarn, Slowenien, Italien und in die Schweiz.',
  alternates: {
    canonical: '/de/booking',
    languages: { en: '/booking', de: '/de/booking', 'x-default': '/booking' },
  },
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/booking`,
    title: 'Transfer buchen',
    description:
      'Fordern Sie einen privaten Chauffeurtransfer überall in Österreich an, oder grenzüberschreitend nach Deutschland, Tschechien, Slowakei, Ungarn, Slowenien, Italien und in die Schweiz.',
  },
}

const steps = [
  { title: 'Wir prüfen Ihre Anfrage', description: 'Wir prüfen Strecke, Datum, Personenanzahl und Fahrzeuganforderungen.' },
  { title: 'Wir bestätigen die Verfügbarkeit', description: 'Wir bestätigen, ob ein passender Chauffeur und Fahrzeug verfügbar sind.' },
  { title: 'Sie erhalten den Festpreis', description: 'Wir senden Ihnen den bestätigten Preis vor Ihrer Reise per E-Mail.' },
  { title: 'Ihr Transfer wird organisiert', description: 'Nach der Bestätigung erhalten Sie die relevanten Abhol- und Fahrerdetails.' },
]

const whyBook = [
  { title: 'Festpreise', description: 'Kennen Sie Ihren bestätigten Preis vor der Reise.' },
  { title: 'Privates Fahrzeug', description: 'Keine Mitfahrgelegenheit und keine fremden Mitfahrer.' },
  { title: 'Flugüberwachung', description: 'Flughafenabholungen werden bei Verspätung oder früher Ankunft angepasst.' },
  { title: 'Tür zu Tür', description: 'Hotel, Wohnadresse, Flughafen oder Geschäftsadresse.' },
]

export default function BookingPageDe() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Breadcrumbs items={[{ label: 'Startseite', href: '/de' }, { label: 'Buchung' }]} />
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
        Buchungsanfrage
      </p>
      <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
        Festpreis-Chauffeurtransfer anfragen
      </h1>
      <p className="mt-3 max-w-xl text-brand-ink-2/80">
        Teilen Sie uns Abholort, Ziel und Reisedetails mit. Wir bestätigen Verfügbarkeit und Ihren
        Festpreis per E-Mail — Inlandsfahrten in Österreich und grenzüberschreitende Transfers sind
        beide willkommen.
      </p>
      <p className="mt-2 max-w-xl text-sm text-brand-ink-2/70">
        Benötigen Sie Hilfe vor dem Absenden Ihrer Anfrage? Schreiben Sie an{' '}
        <a href={`mailto:${contactEmail}`} className="font-semibold text-brand-gold hover:underline">
          {contactEmail}
        </a>
        .
      </p>

      <div className="mt-8 rounded-sm border border-brand-line bg-white p-6 sm:p-8">
        <BookingForm locale="de" />
        <div className="mt-6">
          <BookingTrustStrip locale="de" />
        </div>
        <p className="mt-5 text-xs text-brand-ink-2/60">
          Wir antworten in der Regel so schnell wie möglich per E-Mail mit Verfügbarkeit und Preis.
          Wir nehmen Anfragen für Inlandsfahrten in ganz Österreich sowie grenzüberschreitende
          Fahrten nach Deutschland, Tschechien, in die Slowakei, nach Ungarn, Slowenien, Italien und
          in die Schweiz/nach Liechtenstein entgegen.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl text-brand-ink">Wie geht es weiter?</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-sm border border-brand-line bg-brand-cream p-5">
              <span className="font-display text-xs font-semibold text-brand-gold">
                {String(i + 1).padStart(2, '0')} — {step.title}
              </span>
              <p className="mt-1.5 text-sm text-brand-ink-2/80">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl text-brand-ink">Warum direkt buchen?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {whyBook.map((item) => (
            <div key={item.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{item.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-16 text-sm text-brand-ink-2/70">
        <Link
          href="/de/fleet"
          className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
        >
          Zur vollständigen Flotte →
        </Link>
      </p>
    </section>
  )
}
