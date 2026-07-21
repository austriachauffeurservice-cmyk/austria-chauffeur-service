import Link from 'next/link'
import { Logo } from '@/components/logo'
import { austrianCities, borderCrossingDestinations } from '@/lib/content/service-areas'
import { contactAddress, contactEmail, contactWhatsApp, licensingInfo } from '@/lib/content/site'
import { localizedHref, type Locale } from '@/lib/i18n'

const copy: Record<
  Locale,
  {
    tagline: string
    servicesHeading: string
    companyHeading: string
    coverageHeading: string
    borderHeading: string
    serviceLinks: { href: string; label: string }[]
    companyLinks: { href: string; label: string }[]
    rights: string
  }
> = {
  en: {
    tagline:
      'Private chauffeur transfers across all of Austria, with licensed cross-border service to neighboring countries.',
    servicesHeading: 'Services',
    companyHeading: 'Company',
    coverageHeading: 'Austria Coverage',
    borderHeading: 'Cross-Border Transfers',
    serviceLinks: [
      { href: '/services', label: 'Services & Fleet' },
      { href: '/fleet', label: 'Our Fleet' },
      { href: '/airport-transfers', label: 'Airport Transfers' },
      { href: '/ski-transfers', label: 'Ski & Alpine Transfers' },
      { href: '/day-tours', label: 'Day Tours' },
      { href: '/city-to-city-transfers', label: 'City-to-City Transfers' },
      { href: '/corporate-transfers', label: 'Corporate & Hourly Hire' },
      { href: '/wedding-transfers', label: 'Wedding Transfers' },
      { href: '/diplomatic-transfers', label: 'Diplomatic & Embassy Transport' },
    ],
    companyLinks: [
      { href: '/service-areas', label: 'Service Areas' },
      { href: '/routes', label: 'Popular Routes' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/blog', label: 'Blog' },
      { href: '/faq', label: 'FAQ' },
      { href: '/about', label: 'About Us' },
      { href: '/corporate-accounts', label: 'Corporate Accounts' },
      { href: '/booking', label: 'Book a Transfer' },
      { href: '/contact', label: 'Contact' },
    ],
    rights: 'All rights reserved.',
  },
  de: {
    tagline:
      'Private Chauffeurtransfers in ganz Österreich, mit lizenziertem grenzüberschreitendem Service in die Nachbarländer.',
    servicesHeading: 'Leistungen',
    companyHeading: 'Unternehmen',
    coverageHeading: 'Einsatzgebiete Österreich',
    borderHeading: 'Grenzüberschreitende Transfers',
    serviceLinks: [
      { href: '/services', label: 'Leistungen & Fahrzeuge' },
      { href: '/fleet', label: 'Unser Fuhrpark' },
      { href: '/airport-transfers', label: 'Flughafentransfers' },
      { href: '/ski-transfers', label: 'Ski- & Alpintransfers' },
      { href: '/day-tours', label: 'Tagesausflüge' },
      { href: '/city-to-city-transfers', label: 'Stadt-zu-Stadt-Transfers' },
      { href: '/corporate-transfers', label: 'Firmen- & Stundenbuchung' },
      { href: '/wedding-transfers', label: 'Hochzeitstransfers' },
      { href: '/diplomatic-transfers', label: 'Diplomaten- & Botschaftstransport' },
    ],
    companyLinks: [
      { href: '/service-areas', label: 'Einsatzgebiete' },
      { href: '/routes', label: 'Beliebte Strecken' },
      { href: '/reviews', label: 'Bewertungen' },
      { href: '/blog', label: 'Blog' },
      { href: '/faq', label: 'FAQ' },
      { href: '/about', label: 'Über uns' },
      { href: '/corporate-accounts', label: 'Firmenkonten' },
      { href: '/booking', label: 'Transfer buchen' },
      { href: '/contact', label: 'Kontakt' },
    ],
    rights: 'Alle Rechte vorbehalten.',
  },
}

export function SiteFooter({ locale = 'en' }: { locale?: Locale }) {
  const year = new Date().getFullYear()
  const t = copy[locale]

  return (
    <footer className="border-t border-brand-line bg-brand-ink text-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo lightText={true} />
          <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">{t.tagline}</p>
          <div className="mt-6 space-y-3 text-xs text-brand-cream/60">
            <p className="flex items-start gap-2">
              <span className="text-brand-gold shrink-0 mt-0.5">📍</span>
              <span>{contactAddress}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brand-gold shrink-0">✉️</span>
              <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors duration-300">
                {contactEmail}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brand-gold shrink-0">💬</span>
              <a
                href={`https://wa.me/${contactWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                WhatsApp
              </a>
            </p>
            <p className="mt-4 pt-4 border-t border-white/10 text-[10px] tracking-wide text-brand-gold uppercase font-semibold">
              {licensingInfo}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            {t.servicesHeading}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/80">
            {t.serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={localizedHref(link.href, locale)} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            {t.companyHeading}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/80">
            {t.companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={localizedHref(link.href, locale)} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            {t.coverageHeading}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-brand-cream/80">
            {austrianCities.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link
                  href={localizedHref(`/service-areas/${c.slug}`, locale)}
                  className="hover:text-white"
                >
                  {c.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            {t.borderHeading}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/80">
            {borderCrossingDestinations.map((d) => (
              <li key={d.slug}>
                <Link
                  href={localizedHref(`/service-areas/${d.slug}`, locale)}
                  className="hover:text-white"
                >
                  {d.country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-brand-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {year} Austria Chauffeur Service. {t.rights}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
            <Link href="/agb" className="hover:text-white">AGB</Link>
            <span>austriachauffeurservice.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
