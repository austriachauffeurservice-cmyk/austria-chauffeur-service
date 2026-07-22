import type { Metadata } from 'next'
import { BookingForm } from '@/components/booking-form'
import { BookingTrustStrip } from '@/components/booking-trust-strip'
import { siteName, siteUrl } from '@/lib/content/site'

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
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/booking`,
    title: 'Transfer buchen',
    description:
      'Fordern Sie einen privaten Chauffeurtransfer überall in Österreich an, oder grenzüberschreitend nach Deutschland, Tschechien, Slowakei, Ungarn, Slowenien, Italien und in die Schweiz.',
  },
}

export default function BookingPageDe() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
        Buchungsanfrage
      </p>
      <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
        Sagen Sie uns, wohin es geht
      </h1>
      <p className="mt-3 max-w-xl text-brand-ink-2/80">
        Füllen Sie die Angaben unten aus und wir bestätigen Verfügbarkeit und Preis per E-Mail —
        sowohl Inlandsfahrten in Österreich als auch grenzüberschreitende Transfers sind willkommen.
      </p>

      <div className="mt-10 rounded-sm border border-brand-line bg-white p-6 sm:p-8">
        <BookingForm locale="de" />
        <div className="mt-6">
          <BookingTrustStrip locale="de" />
        </div>
      </div>
    </section>
  )
}
