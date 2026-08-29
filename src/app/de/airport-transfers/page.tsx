import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { airports } from '@/lib/content/de/airports'
import { siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'

export const metadata: Metadata = {
  title: 'Flughafen-Chauffeurtransfers in Österreich | Luxus & Festpreis',
  description:
    'Private Flughafen-Chauffeurtransfers an jedem großen österreichischen Flughafen sowie München und Zürich für grenzüberschreitende Ankünfte — Empfangsservice, Flugverfolgung, Executive-Fahrzeuge. Festpreis, keine Taxischlange.',
  alternates: {
    canonical: '/de/airport-transfers',
    languages: { en: '/airport-transfers', de: '/de/airport-transfers', 'x-default': '/airport-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/airport-transfers`,
    title: 'Flughafen-Chauffeurtransfers in Österreich | Luxus & Festpreis',
    description:
      'Private Flughafen-Chauffeurtransfers an jedem großen österreichischen Flughafen sowie München und Zürich für grenzüberschreitende Ankünfte — Empfangsservice, Flugverfolgung, Executive-Fahrzeuge. Festpreis, keine Taxischlange.',
  },
}

const austrianAirports = airports.filter((a) => !a.crossBorder)
const crossBorderAirports = airports.filter((a) => a.crossBorder)

const useCases = [
  {
    title: 'Flughafen → Hotel oder Privatadresse',
    description: 'Direkte Ablieferung an jedem Hotel, Chalet oder jeder Privatadresse — geben Sie den Ort einfach bei der Buchung an.',
  },
  {
    title: 'Flughafen → Geschäftsadresse',
    description: 'Festpreis-Transfers für Führungskräfte und Kundentermine, mit Firmenkonten für Unternehmen, die regelmäßig reisen.',
  },
  {
    title: 'Flughafen → Skigebiet',
    description: 'Winterfeste Fahrzeuge ab den Flughäfen Innsbruck, Salzburg, München und Zürich zu Resorts in Tirol, Salzburger Land und Vorarlberg.',
  },
  {
    title: 'Flughafen → Andere österreichische Stadt',
    description: 'Direkte Weiterfahrt in eine zweite österreichische Stadt im selben Fahrzeug, statt die Flughafenstrecke separat zu buchen.',
  },
  {
    title: 'Flughafen → Nachbarland',
    description: 'Direkte grenzüberschreitende Verbindungen — etwa vom Flughafen Wien nach Bratislava oder Budapest — ohne Fahrzeugwechsel an der Grenze.',
  },
  {
    title: 'Familien- und Gruppenreisen',
    description: 'Executive Vans und Kleinbusse für größere Gruppen und mehr Gepäck, mit Kindersitzen auf Anfrage ohne Aufpreis.',
  },
]

const faqs = [
  {
    question: 'Welche Flughäfen in Österreich decken Sie ab?',
    answer:
      'Wien, Salzburg, Innsbruck, Graz, Linz und Klagenfurt — Österreichs sechs große Flughäfen, jeweils mit Empfangsservice und einer eigenen Transferseite.',
  },
  {
    question: 'Bieten Sie Flughafentransfers ab dem Flughafen Wien an?',
    answer:
      'Ja — der Flughafen Wien-Schwechat (VIE) ist unser Hauptsitz und der Flughafen, an dem wir die meisten Abholungen durchführen, mit direkten Transfers in die Stadt und weiter durch Österreich oder über die Grenze.',
  },
  {
    question: 'Verfolgen Sie Flüge bei Verspätung oder frühzeitiger Landung?',
    answer:
      'Ja. Geben Sie Ihre Flugnummer bei der Buchung an, und wir verfolgen sie — Ihre Abholzeit passt sich bei Planänderungen automatisch an, ohne Aufpreis.',
  },
  {
    question: 'Wo trifft mich mein Chauffeur am Flughafen?',
    answer: 'In der Ankunftshalle, mit einem Namensschild — derselbe Ablauf an jedem von uns bedienten Flughafen.',
  },
  {
    question: 'Kann ich einen Flughafentransfer in eine andere österreichische Stadt buchen?',
    answer:
      'Ja — eine Flughafenabholung kann direkt in eine zweite Stadt oder Region weitergehen, im selben Fahrzeug, statt als separate Etappe gebucht zu werden.',
  },
  {
    question: 'Bieten Sie Transfers vom Flughafen München oder Zürich nach Österreich an?',
    answer:
      'Ja — München und Zürich sind beides etablierte grenzüberschreitende Abholpunkte, hauptsächlich für Tirol, das Land Salzburg sowie Vorarlberg/Arlberg-Resorts.',
  },
  {
    question: 'Kann ich einen Flughafentransfer für eine Familie oder Gruppe buchen?',
    answer:
      'Ja. Der Executive Van (bis zu 7) und der Kleinbus (bis zu 16) eignen sich für größere Gruppen und mehr Gepäck, und Kindersitze oder Sitzerhöhungen sind auf Anfrage ohne Aufpreis verfügbar.',
  },
  {
    question: 'Kann ich einen Rücktransfer zum Flughafen buchen?',
    answer: 'Ja — einfache Fahrten und Hin- und Rückfahrten sind beide buchbar; geben Sie einfach Ihre Abflugdaten bei der Buchung der Rückfahrt an.',
  },
]

export default function AirportTransfersPageDe() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Flughafentransfers
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Flughafentransfers in Österreich
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Persönlicher Empfang an jedem großen österreichischen Flughafen. Inklusive
            Flugverfolgung, sodass wir uns automatisch an Verspätungen anpassen. Ihr Chauffeur
            wartet in der Ankunftshalle mit einem Namensschild — keine Taxischlange, keine
            Mitfahr-App.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Große österreichische Flughäfen</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {austrianAirports.map((a) => (
            <Link
              key={a.slug}
              href={`/de/airport-transfers/${a.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {a.code} · {a.region}
              </p>
              <h3 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                {a.name}
              </h3>
              <p className="mt-2 text-sm text-brand-ink-2/70">{a.distanceFromCity}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">So funktioniert die Flughafenabholung</h2>
          <ol className="mt-6 space-y-4">
            {[
              { title: 'Teilen Sie uns Ihre Flugdaten mit', body: 'Geben Sie bei der Buchung Ihren Ankunftsflughafen, Ihre Flugnummer, das Datum und den Zielort an.' },
              { title: 'Wir verfolgen Ihren Flug', body: 'Ihre Flugnummer wird von der Buchung bis zur Ankunft verfolgt, sodass das Timing frühe oder verspätete Landungen berücksichtigt.' },
              { title: 'Treffen Sie Ihren Chauffeur', body: 'Ihr Chauffeur wartet in der Ankunftshalle mit einem Namensschild — kein Suchen nach Taxistand oder Shuttle.' },
              { title: 'Direkter Transfer', body: 'Fahren Sie direkt zu Ihrem Hotel, Ihrer Wohnadresse, Ihrem Büro oder Ihrem Anschlussziel im selben Fahrzeug.' },
            ].map((step, i) => (
              <li key={step.title} className="flex items-start gap-4 text-sm text-brand-ink-2/90">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-ink text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="font-semibold text-brand-ink">{step.title}</span> — {step.body}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Flugverfolgung &amp; Verspätete Ankünfte</h2>
          <p className="mt-4 max-w-2xl text-brand-ink-2/90">
            Die Flugverfolgung ist bei jedem Flughafentransfer ohne Aufpreis inbegriffen. Wir
            verfolgen die bei Ihrer Buchung angegebene Flugnummer, und wenn sich der Flugplan
            ändert, passt sich Ihre Abholzeit automatisch an — Sie müssen uns wegen einer
            Verspätung nicht anrufen oder neu buchen. Dasselbe gilt für eine frühzeitige Landung.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">
            Private Flughafentransfers für Geschäft, Familien &amp; Gruppen
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-sm border border-brand-line bg-white p-5">
                <p className="font-semibold text-brand-ink">{u.title}</p>
                <p className="mt-1.5 text-sm text-brand-ink-2/70">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-white">Grenzüberschreitende Flughafentransfers nach Österreich</h2>
          <p className="mt-3 max-w-2xl text-brand-cream/70">
            Ankunft in München oder Zürich? Wir organisieren private Chauffeurtransfers vom
            Flughafen direkt nach Österreich — hauptsächlich nach Tirol, ins Land Salzburg und
            nach Vorarlberg/Arlberg — in einem Fahrzeug, ohne Grenzstopp.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {crossBorderAirports.map((a) => (
              <Link
                key={a.slug}
                href={`/de/airport-transfers/${a.slug}`}
                className="group rounded-sm border border-white/15 bg-white/5 p-6 transition-colors hover:border-brand-gold"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {a.code} · {a.region}
                </p>
                <h3 className="font-display mt-1 text-xl text-white group-hover:text-brand-gold">
                  {a.name}
                </h3>
                <p className="mt-2 text-sm text-brand-cream/70">{a.distanceFromCity}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-brand-cream/70">
            Ankunft am Flughafen{' '}
            <Link href="/de/service-areas/bratislava" className="font-semibold text-white underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Bratislava
            </Link>{' '}
            oder{' '}
            <Link href="/de/service-areas/budapest" className="font-semibold text-white underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Budapest
            </Link>
            ? Geben Sie Ihre Abholdaten im Buchungsformular an — wir prüfen dann, ob ein
            grenzüberschreitender Transfer nach Österreich arrangiert werden kann.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Häufig gestellte Fragen</h2>
          <dl className="mt-6 divide-y divide-brand-line">
            {faqs.map((f) => (
              <div key={f.question} className="py-6 first:pt-0">
                <dt className="font-display text-base text-brand-ink">{f.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <BookingCta
        locale="de"
        pageType="airport"
        title="Bereit für Ihre Flughafenabholung?"
        description="Senden Sie Ihre Flugdaten und wir bestätigen Verfügbarkeit und Preis per E-Mail."
      />
    </>
  )
}
