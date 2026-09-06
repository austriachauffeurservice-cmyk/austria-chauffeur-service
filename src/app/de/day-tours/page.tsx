import type { Metadata } from 'next'
import Link from 'next/link'
import { dayTours } from '@/lib/content/de/day-tours'
import { vehicles } from '@/lib/content/de/services'
import { defaultOgImage, siteName, siteUrl, whatsappLink } from '@/lib/content/site'
import { JsonLd } from '@/components/json-ld'
import { FaqAccordion } from '@/components/faq-accordion'

export const metadata: Metadata = {
  title: 'Private Tagesausflüge in Österreich | Wien & Salzburg',
  description:
    'Private Chauffeur-Tagesausflüge nach Hallstatt, in die Wachau und nach Salzburg ab Wien und Salzburg — Hotelabholung, flexible Route, Festpreis vor der Fahrt.',
  alternates: { canonical: '/de/day-tours', languages: { en: '/day-tours', de: '/de/day-tours', 'x-default': '/day-tours' } },
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/day-tours`,
    title: 'Private Tagesausflüge in Österreich | Wien & Salzburg',
    description:
      'Private Chauffeur-Tagesausflüge nach Hallstatt, in die Wachau und nach Salzburg ab Wien und Salzburg — Hotelabholung, flexible Route, Festpreis vor der Fahrt.',
  },
}

const whyChoose = [
  'Privates Fahrzeug nur für Ihre Gruppe',
  'Professioneller Chauffeur, kein geteilter Reisebus',
  'Abholung im Hotel oder an der Privatadresse',
  'Flexible Route — halten Sie an, wo und wann Sie möchten',
  'Ihr Chauffeur wartet, während Sie erkunden',
  'Festpreis vor der Fahrt bestätigt',
]

const included = [
  'Privates Fahrzeug und professioneller Chauffeur',
  'Abholung im Hotel, in der Ferienwohnung oder an der Privatadresse',
  'Rückfahrt am Ende des Tages',
  'Flexible Zwischenstopps unterwegs',
  'Ihr Chauffeur wartet, während Sie erkunden',
  'Festpreis vor der Fahrt bestätigt',
]

const notIncluded = [
  'Eintrittskarten (z. B. Salzbergwerk, Stift, Festung)',
  'Speisen und Getränke',
  'Ein eigener Reiseführer (Ihr Chauffeur übernimmt die Fahrt, nicht die Führung — siehe FAQ unten)',
]

const viennaDayTrips = [
  { label: 'Wien → Hallstatt', href: '/de/day-tours/hallstatt', note: 'Langer Tag — früher Aufbruch empfohlen' },
  { label: 'Wien → Wachau (inkl. Melk)', href: '/de/day-tours/wachau-valley', note: 'Bequem an einem Tag machbar' },
  { label: 'Wien → Salzburg', href: '/de/day-tours/salzburg-day-trip', note: 'Langer Tag — Übernachtung überlegenswert' },
]

const customExamples = [
  'Wien → Melk → Wachau → Wien',
  'Wien → Hallstatt → Wien',
  'Salzburg → Hallstatt → Salzburg',
  'Wien → Hallstatt → Salzburg (einfache Fahrt, Ende in Salzburg)',
  'Wien → Bratislava → Wien',
]

const howItWorks = [
  { title: 'Teilen Sie uns Ihren Plan mit', description: 'Wählen Sie eines unserer Ziele, oder sagen Sie uns, was Sie sehen möchten und wo Sie starten.' },
  { title: 'Erhalten Sie Ihren Festpreis', description: 'Wir prüfen die Verfügbarkeit und bestätigen den Gesamtpreis per E-Mail, bevor etwas gebucht wird.' },
  { title: 'Genießen Sie Ihren Tag', description: 'Ihr Chauffeur holt Sie ab, bleibt während Ihrer Erkundung verfügbar und bringt Sie zurück, wenn Sie bereit sind.' },
]

const faqs = [
  {
    question: 'Sind Ihre Tagesausflüge geführt?',
    answer:
      'Unsere Tagesausflüge sind private Chauffeurdienste, keine geführten Touren — Ihr Chauffeur übernimmt die Fahrt und bleibt verfügbar, während Sie jedes Ziel erkunden, bietet aber keine förmliche Reiseführung. Wenn Sie einen eigenen Reiseführer wünschen, erwähnen Sie dies bei der Anfrage — wir besprechen dann, was möglich ist.',
  },
  {
    question: 'Was kostet ein privater Tagesausflug?',
    answer:
      'Ihr Festpreis hängt von Strecke, Personenanzahl, Fahrzeug und Tagesdauer ab. Teilen Sie uns mit, wohin Sie möchten, und wir bestätigen den Gesamtpreis per E-Mail, bevor Sie buchen.',
  },
  {
    question: 'Wartet der Chauffeur, während wir erkunden, oder müssen wir eine Abholzeit vereinbaren?',
    answer: 'Ihr Chauffeur wartet und bleibt den ganzen Tag über verfügbar — es gibt keine feste Abholzeit, die Sie an jedem Stopp einplanen müssten.',
  },
  {
    question: 'Kann ich zwei Ziele an einem Tag kombinieren, z. B. Hallstatt und Salzburg?',
    answer:
      'Ja — mehrstufige Routen und einfache Fahrten sind möglich. Teilen Sie uns Ihre geplante Route bei der Anfrage mit, und wir bestätigen, ob sie an einem Tag machbar ist oder besser auf zwei Tage aufgeteilt wird.',
  },
  {
    question: 'Welche Fahrzeuge stehen für einen Tagesausflug zur Verfügung?',
    answer:
      'Business-Limousine und Luxus-Limousine (bis zu 3 Personen), Executive-Van (bis zu 7 Personen) und Kleinbus (bis zu 16 Personen) — die passende Wahl hängt von Ihrer Gruppengröße und Ihrem Gepäck ab.',
  },
  {
    question: 'Ist die Hotelabholung inklusive?',
    answer: 'Ja. Wir holen Sie von Ihrem Hotel, Ihrer Ferienwohnung oder Privatadresse ab und bringen Sie am Ende des Tages zu Ihrem gewünschten Ziel zurück.',
  },
]

export default function DayToursPageDe() {
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
            Tagesausflüge
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Private Tagesausflüge in Österreich
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Private Chauffeur-Tagesausflüge ab Wien und Salzburg. Erkunden Sie Österreich in
            Ihrem eigenen Tempo mit privatem Fahrzeug und Fahrer — kein fester Reisebus-Fahrplan,
            keine Gruppengröße zum Abstimmen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/de/booking"
              className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
            >
              Festpreis anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Warum ein privater Tagesausflug?</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
              <span className="mt-0.5 text-brand-gold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Beliebte private Tagesausflüge</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dayTours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/de/day-tours/${tour.slug}`}
                className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {tour.region}
                </p>
                <h3 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                  {tour.name}
                </h3>
                <p className="mt-2 text-sm text-brand-ink-2/70">{tour.tagline}</p>
                <p className="mt-4 text-xs font-semibold text-brand-ink-2/60">
                  Ab {tour.startingPoints[0].from} — {tour.startingPoints[0].driveTime} Fahrzeit
                </p>
                <p className="mt-1 text-xs text-brand-ink-2/60">{tour.duration}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-ink group-hover:text-brand-gold">
                  Tour ansehen →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Beliebte Tagesausflüge ab Wien</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Wien ist der Ausgangspunkt für alle drei Touren oben — hier aus dieser Perspektive
            dargestellt, falls Ihre Reise dort beginnt.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {viennaDayTrips.map((trip) => (
              <Link
                key={trip.href}
                href={trip.href}
                className="rounded-sm border border-brand-line bg-white p-5 transition-colors hover:border-brand-gold hover:shadow-sm"
              >
                <p className="font-semibold text-brand-ink">{trip.label}</p>
                <p className="mt-1.5 text-xs text-brand-ink-2/60">{trip.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Stellen Sie sich Ihren eigenen Tagesausflug zusammen</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Auch Kombinationen oder ein ganz anderer Ausgangspunkt sind möglich — dies sind
            Beispielrouten, keine feste Liste. Teilen Sie uns Ihren Plan bei der Anfrage mit.
          </p>
          <ul className="mt-5 space-y-2">
            {customExamples.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl text-brand-ink">Was ist inklusive</h2>
              <ul className="mt-4 space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                    <span className="mt-0.5 text-brand-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl text-brand-ink">Was ist nicht inklusive</h2>
              <ul className="mt-4 space-y-2">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                    <span className="mt-0.5 text-brand-ink-2/40">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Fahrzeuge &amp; Gruppengrößen</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Reisen Sie als Paar, Familie oder Gruppe? Wir empfehlen das passende Fahrzeug je nach
            Personenanzahl und Gepäck.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-line text-xs uppercase tracking-wide text-brand-ink-2/60">
                  <th className="py-2 pr-4 font-semibold">Fahrzeug</th>
                  <th className="py-2 pr-4 font-semibold">Passagiere</th>
                  <th className="py-2 font-semibold">Gepäck</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {vehicles.map((v) => (
                  <tr key={v.name}>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">{v.name}</td>
                    <td className="py-3 pr-4 text-brand-ink-2/80">{v.passengers}</td>
                    <td className="py-3 text-brand-ink-2/80">{v.luggage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/de/fleet" className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
            Gesamten Fuhrpark ansehen →
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">So funktioniert&apos;s</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {howItWorks.map((step, i) => (
              <li key={step.title} className="rounded-sm border border-brand-line bg-white p-5">
                <span className="font-display text-xs font-semibold text-brand-gold">
                  {String(i + 1).padStart(2, '0')} — {step.title}
                </span>
                <p className="mt-1.5 text-sm text-brand-ink-2/80">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Häufige Fragen zu Tagesausflügen</h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Bereit, Ihren Tag zu planen?</h2>
          <p className="mt-2 text-brand-cream/70">
            Haben Sie ein anderes Ziel im Sinn oder möchten Ziele kombinieren? Teilen Sie uns
            Ihren Plan mit — wir bestätigen eine Route und einen Festpreis.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/de/booking"
              className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
            >
              Festpreis anfragen
            </Link>
            <a
              href={whatsappLink('Hallo, ich möchte einen privaten Tagesausflug in Österreich planen.')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
            >
              Per WhatsApp anfragen
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
