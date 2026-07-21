import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { vehicles } from '@/lib/content/services'

export const metadata: Metadata = {
  title: 'Our Fleet',
  description:
    'Business Sedan, Luxury Sedan, Executive Van, and Minibus — private chauffeur vehicles for every trip size across Austria.',
  alternates: { canonical: '/fleet', languages: { en: '/fleet', de: '/de/fleet' } },
}

export default function FleetPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Our Fleet
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            A vehicle for every trip
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            From a single business traveler to a full wedding party, our partner network runs the
            right vehicle for the job — every one licensed for commercial passenger transport.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v) => (
            <Link
              key={v.type}
              href={`/fleet/${v.type}`}
              className="group rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                <Image
                  src={`/images/fleet/${v.type}.webp`}
                  alt={v.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 25vw"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-lg text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                    {v.name}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-wide text-brand-gold font-medium">
                    {v.passengers} · {v.luggage}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink-2/80">
                    {v.description}
                  </p>
                </div>
                <p className="mt-4 text-xs font-semibold text-brand-ink group-hover:text-brand-gold">
                  View details →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Not sure which vehicle you need?</h2>
          <p className="mt-2 text-brand-cream/70">
            Tell us your group size and luggage when booking — we&apos;ll recommend the right fit.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
