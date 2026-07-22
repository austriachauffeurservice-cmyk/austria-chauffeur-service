import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { contactAddress, contactEmail } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie Austria Chauffeur Service für Buchungen und Anfragen.',
  alternates: {
    canonical: '/de/contact',
    languages: { en: '/contact', de: '/de/contact' },
  },
}

export default function ContactPageDe() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Kontakt
              </p>
              <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                Kontaktieren Sie unser Dispositionsteam
              </h1>
              <p className="mt-4 max-w-xl text-brand-ink-2/80 leading-relaxed">
                Für die schnellste Antwort nutzen Sie das Buchungsformular — es geht direkt in
                unser Dispositionssystem. Für allgemeine Fragen erreichen Sie uns direkt unten.
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-brand-ink shadow-md lg:col-span-5 group">
              <Image
                src="/images/cta-chauffeur.webp"
                alt="Professioneller Chauffeur bereit für den Einsatz in Österreich"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white hover:border-brand-gold transition-colors duration-300">
            <h2 className="font-semibold text-brand-ink font-display text-lg">E-Mail-Anfrage</h2>
            <a href={`mailto:${contactEmail}`} className="mt-2 block text-sm font-semibold text-brand-gold hover:underline">
              {contactEmail}
            </a>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Büroadresse</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              {contactAddress}
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Einsatzgebiet</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              Ganz Österreich, plus grenzüberschreitende Transfers nach Deutschland, Tschechien,
              Slowakei, Ungarn, Slowenien, Italien und in die Schweiz/Liechtenstein.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-sm bg-brand-cream p-6 text-center sm:p-10 border border-brand-line">
          <h2 className="font-display text-2xl text-brand-ink">Bereit für Ihre Transferbuchung?</h2>
          <p className="mt-2 text-sm text-brand-ink-2/80">
            Senden Sie Ihre Reisedaten und wir bestätigen per E-Mail mit einem festen, transparenten Preis.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold transition-colors duration-300"
          >
            Transfer anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
