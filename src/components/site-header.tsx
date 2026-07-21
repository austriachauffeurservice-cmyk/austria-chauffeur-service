'use client'

import Link from 'next/link'
import { Logo } from '@/components/logo'
import { ServiceIcon } from '@/components/service-icon'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { contactPhone } from '@/lib/content/site'
import { delocalizePath, localizedHref, type Locale } from '@/lib/i18n'

const navLinksByLocale: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: '/services', label: 'Services' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/airport-transfers', label: 'Airports' },
    { href: '/ski-transfers', label: 'Ski Transfers' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  de: [
    { href: '/services', label: 'Leistungen' },
    { href: '/service-areas', label: 'Einsatzgebiete' },
    { href: '/airport-transfers', label: 'Flughäfen' },
    { href: '/ski-transfers', label: 'Skitransfers' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'Über uns' },
    { href: '/contact', label: 'Kontakt' },
  ],
}

const strings: Record<Locale, { book: string; call: string }> = {
  en: { book: 'Book Now', call: 'Call' },
  de: { book: 'Jetzt buchen', call: 'Anrufen' },
}

export function SiteHeader({ locale = 'en' }: { locale?: Locale }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navLinks = navLinksByLocale[locale].map((link) => ({
    ...link,
    href: localizedHref(link.href, locale),
  }))
  const t = strings[locale]

  const basePath = delocalizePath(pathname)
  const switchHref = localizedHref(basePath, locale === 'en' ? 'de' : 'en')

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-brand-gold ${
                pathname === link.href ? 'text-brand-gold' : 'text-brand-ink-2'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${contactPhone.replace(/\s+/g, '')}`}
            aria-label={contactPhone}
            className="flex items-center text-brand-ink-2 transition-colors hover:text-brand-gold"
          >
            <ServiceIcon name="phone" className="h-4 w-4" />
          </a>
          <Link
            href={switchHref}
            className="shrink-0 rounded-sm border border-brand-line px-2.5 py-1.5 text-xs font-semibold text-brand-ink-2 transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            {locale === 'en' ? 'DE' : 'EN'}
          </Link>
          <Link
            href={localizedHref('/booking', locale)}
            className="shrink-0 whitespace-nowrap rounded-sm bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-gold"
          >
            {t.book}
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span className="h-0.5 w-6 bg-brand-ink" />
          <span className="h-0.5 w-6 bg-brand-ink" />
          <span className="h-0.5 w-6 bg-brand-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-line bg-white px-4 pb-4 xl:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-sm font-medium text-brand-ink-2 hover:bg-brand-cream"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${contactPhone.replace(/\s+/g, '')}`}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-sm border border-brand-line px-4 py-3 text-center text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold"
          >
            <ServiceIcon name="phone" className="h-4 w-4" />
            {t.call} {contactPhone}
          </a>
          <Link
            href={switchHref}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm border border-brand-line px-4 py-3 text-center text-sm font-semibold text-brand-ink-2 hover:border-brand-gold hover:text-brand-gold"
          >
            {locale === 'en' ? 'Deutsch (DE)' : 'English (EN)'}
          </Link>
          <Link
            href={localizedHref('/booking', locale)}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm bg-brand-ink px-4 py-3 text-center text-sm font-semibold text-white"
          >
            {t.book}
          </Link>
        </nav>
      )}
    </header>
  )
}
