import Link from 'next/link'
import { austrianCities } from '@/lib/content/service-areas'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="font-display text-6xl text-brand-gold">404</p>
      <h1 className="font-display mt-4 text-2xl text-brand-ink sm:text-3xl">
        This page took a wrong turn
      </h1>
      <p className="mt-3 max-w-md text-sm text-brand-ink-2/80">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one of these instead.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Back to Home
        </Link>
        <Link
          href="/booking"
          className="rounded-sm border border-brand-line px-6 py-3 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold"
        >
          Request a Transfer
        </Link>
      </div>

      <div className="mt-12 border-t border-brand-line pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
          Popular Destinations
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-brand-ink-2">
          {austrianCities.slice(0, 6).map((c) => (
            <Link key={c.slug} href={`/service-areas/${c.slug}`} className="hover:text-brand-gold">
              {c.city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
