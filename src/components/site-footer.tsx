import Link from 'next/link'
import { Logo } from '@/components/logo'
import { austrianCities, borderCrossingDestinations } from '@/lib/content/service-areas'
import { contactAddress, contactEmail, contactPhone, licensingInfo } from '@/lib/content/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-line bg-brand-ink text-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Logo lightText={true} />
          <p className="mt-4 text-sm leading-relaxed text-brand-cream/70">
            Private chauffeur transfers across all of Austria, with licensed cross-border
            service to neighboring countries.
          </p>
          <div className="mt-6 space-y-3 text-xs text-brand-cream/60">
            <p className="flex items-start gap-2">
              <span className="text-brand-gold shrink-0 mt-0.5">📍</span>
              <span>{contactAddress}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brand-gold shrink-0">📞</span>
              <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors duration-300">
                {contactPhone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brand-gold shrink-0">✉️</span>
              <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors duration-300">
                {contactEmail}
              </a>
            </p>
            <p className="mt-4 pt-4 border-t border-white/10 text-[10px] tracking-wide text-brand-gold uppercase font-semibold">
              {licensingInfo}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/80">
            <li><Link href="/services" className="hover:text-white">Services & Fleet</Link></li>
            <li><Link href="/service-areas" className="hover:text-white">Service Areas</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/booking" className="hover:text-white">Book a Transfer</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Austria Coverage
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-brand-cream/80">
            {austrianCities.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="hover:text-white">
                  {c.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Cross-Border Transfers
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/80">
            {borderCrossingDestinations.map((d) => (
              <li key={d.slug}>
                <Link href={`/service-areas/${d.slug}`} className="hover:text-white">
                  {d.country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-brand-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {year} Austria Chauffeur Service. All rights reserved.</p>
          <p>austriachauffeurservice.com</p>
        </div>
      </div>
    </footer>
  )
}
