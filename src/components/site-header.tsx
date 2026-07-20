'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-semibold tracking-wide text-brand-ink">
            Austria Chauffeur Service
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold">
            Private Transfers · All of Austria
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                pathname === link.href ? 'text-brand-gold' : 'text-brand-ink-2'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-sm bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-gold"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-brand-ink" />
          <span className="h-0.5 w-6 bg-brand-ink" />
          <span className="h-0.5 w-6 bg-brand-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-line bg-white px-4 pb-4 md:hidden">
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
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm bg-brand-ink px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  )
}
