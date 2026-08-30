import type { ReactNode } from 'react'
import { BookingForm } from '@/components/booking-form'
import { contactEmail } from '@/lib/content/site'
import type { Locale } from '@/lib/i18n'

// The final booking section used across commercial pages (service areas,
// routes, airports, ski resorts, and the standalone service pages). Shared
// UI, not shared copy: callers always pass their own page-specific title and
// description — only the short email line below the form is picked from a
// small set of variants keyed by page type, so the phrasing matches what a
// visitor on that kind of page actually wants to say in an email, without
// hand-writing bespoke prose on every single templated page.
export type BookingCtaPageType =
  | 'airport'
  | 'ski'
  | 'route'
  | 'service-area'
  | 'country'
  | 'corporate'
  | 'wedding'
  | 'general'

const emailLink = (locale: Locale) => (
  <a
    href={`mailto:${contactEmail}`}
    className="font-semibold text-white underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
  >
    {contactEmail}
  </a>
)

const emailBlurbs: Record<Locale, Record<BookingCtaPageType, (email: ReactNode) => ReactNode>> = {
  en: {
    airport: (email) => <>Prefer email? Send your flight details to {email} and we&apos;ll confirm your pickup.</>,
    ski: (email) => <>Traveling with ski or snowboard equipment? Mention it when you email {email} so we can assign a vehicle with enough space.</>,
    route: (email) => <>Prefer to book by email? Send your pickup and destination to {email}.</>,
    'service-area': (email) => <>Questions before booking? Email {email}.</>,
    country: (email) => <>Planning a cross-border trip? Email your pickup, destination, and travel dates to {email}.</>,
    corporate: (email) => <>Need a multi-stop itinerary or recurring booking? Email the details to {email} and we&apos;ll put together a plan.</>,
    wedding: (email) => <>Planning a wedding? Send your ceremony and reception details to {email}.</>,
    general: (email) => <>Prefer to book by email? Send your trip details to {email}.</>,
  },
  de: {
    airport: (email) => <>Lieber per E-Mail? Senden Sie Ihre Flugdaten an {email} und wir bestätigen Ihre Abholung.</>,
    ski: (email) => <>Reisen Sie mit Ski- oder Snowboardausrüstung? Erwähnen Sie das per E-Mail an {email}, damit wir ein passendes Fahrzeug einplanen.</>,
    route: (email) => <>Lieber per E-Mail buchen? Senden Sie Abholort und Ziel an {email}.</>,
    'service-area': (email) => <>Fragen vor der Buchung? Schreiben Sie an {email}.</>,
    country: (email) => <>Planen Sie eine grenzüberschreitende Fahrt? Senden Sie Abholort, Ziel und Reisedaten an {email}.</>,
    corporate: (email) => <>Mehrstufige Reiseroute oder wiederkehrende Buchung? Senden Sie die Details an {email} — wir erstellen einen Plan.</>,
    wedding: (email) => <>Planen Sie eine Hochzeit? Senden Sie Ihre Trauungs- und Feierdetails an {email}.</>,
    general: (email) => <>Lieber per E-Mail buchen? Senden Sie Ihre Reisedaten an {email}.</>,
  },
}

export function BookingCta({
  locale = 'en',
  pageType,
  title,
  description,
  pickup,
  dropoff,
  id,
  showCrossBorderHint = true,
  dropoffHint,
}: {
  locale?: Locale
  pageType: BookingCtaPageType
  title: string
  description?: string
  pickup?: string
  dropoff?: string
  id?: string
  showCrossBorderHint?: boolean
  dropoffHint?: string
}) {
  const t = emailBlurbs[locale]
  return (
    <section id={id} className="border-t border-brand-line bg-brand-ink scroll-mt-16">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl text-white sm:text-3xl">{title}</h2>
        {description && <p className="mt-3 text-brand-cream/70">{description}</p>}
      </div>
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6">
        <div className="rounded-sm border border-brand-line bg-white p-6 sm:p-8">
          <BookingForm
            locale={locale}
            defaultPickup={pickup}
            defaultDropoff={dropoff}
            showCrossBorderHint={showCrossBorderHint}
            dropoffHint={dropoffHint}
          />
        </div>
        <p className="mt-6 text-center text-sm text-brand-cream/70">{t[pageType](emailLink(locale))}</p>
      </div>
    </section>
  )
}
