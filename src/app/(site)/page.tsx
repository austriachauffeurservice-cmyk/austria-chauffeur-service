import Link from 'next/link'
import Image from 'next/image'
import { BookingForm } from '@/components/booking-form'
import { ServiceIcon } from '@/components/service-icon'
import { JsonLd } from '@/components/json-ld'
import { HeroBackground } from '@/components/hero-background'
import { TrustBadges } from '@/components/trust-badges'
import { FaqAccordion } from '@/components/faq-accordion'
import { serviceTypes, vehicles } from '@/lib/content/services'
import { faqs } from '@/lib/content/faq'
import { blogPosts } from '@/lib/content/blog'
import { austrianCities, borderCrossingDestinations } from '@/lib/content/service-areas'
import { areaServedCountries, siteName, siteUrl } from '@/lib/content/site'

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': ['LocalBusiness', 'TaxiService'],
          '@id': `${siteUrl}/#organization`,
          name: siteName,
          url: siteUrl,
          image: `${siteUrl}/logo.png`,
          description:
            'Licensed private chauffeur service covering all of Austria, including airport transfers, city-to-city travel, and cross-border transfers to neighboring countries.',
          areaServed: areaServedCountries.map((name) => ({
            '@type': 'Country',
            name,
          })),
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-line bg-brand-ink text-white">
        <HeroBackground />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Private Chauffeur Service
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              Anywhere in Austria.
              <br />
              Across the border, too.
            </h1>
            <p className="mt-5 max-w-md text-brand-cream/80">
              Licensed private transfers to every Austrian city, plus cross-border service to
              Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.
              Fixed pricing, professional drivers, flight tracking included.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
              >
                Request a Transfer
              </Link>
              <Link
                href="/service-areas"
                className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
              >
                View Coverage Area
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="text-brand-gold">9</dt>
                <dd className="text-brand-cream/70">Austrian states covered</dd>
              </div>
              <div>
                <dt className="text-brand-gold">7</dt>
                <dd className="text-brand-cream/70">Neighboring countries</dd>
              </div>
              <div>
                <dt className="text-brand-gold">24/7</dt>
                <dd className="text-brand-cream/70">Booking availability</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-sm bg-white p-6 text-brand-ink sm:p-8">
            <p className="font-display text-xl">Request a Booking</p>
            <p className="mt-1 text-sm text-brand-ink-2/70">
              No payment required now — we confirm availability first.
            </p>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Service types */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            What We Offer
          </p>
          <h2 className="font-display mt-2 text-3xl text-brand-ink">
            One service, the whole country — and beyond
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceTypes.map((s) => (
            <div key={s.title} className="rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                {/* Floating Category Icon */}
                <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur text-brand-gold shadow-sm border border-brand-line">
                  <ServiceIcon name={s.icon} />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">
                    {s.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white border-t border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left: Content Grid */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Why Choose Us
              </p>
              <h2 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                Premium reliability on every single mile
              </h2>
              <p className="mt-4 text-brand-ink-2/80 text-sm leading-relaxed max-w-xl">
                We combine the standards of a premium global business travel service with local Austrian experience to provide seamless transfers.
              </p>
              
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                    <ServiceIcon name="star" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base">Fixed, Flat Rates</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed">
                      Confirmed prices before booking. No surprise toll fees or cross-border premiums.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                    <ServiceIcon name="plane" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base font-display">Flight Tracking</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed">
                      We monitor arrival times automatically. If your flight is delayed, we adjust.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                    <ServiceIcon name="route" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base">Cross-Border License</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed">
                      Full commercial license for pickups and drop-offs across 7 European countries.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                    <ServiceIcon name="briefcase" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base font-display">Professional Drivers</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed">
                      English and German speaking professional drivers trained for luxury service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: GPS Visual Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-brand-cream shadow-md lg:col-span-5 group">
              <Image
                src="/images/why-choose-us.png"
                alt="Chauffeur navigation and luxury dashboard cockpit in Austria"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-brand-line bg-brand-cream overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left: Map Graphic */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/coverage.png"
                alt="Austria and European cross-border private transfer coverage map"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
            
            {/* Right: Domestic & Cross-Border Lists */}
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  Domestic Coverage
                </p>
                <h2 className="font-display mt-2 text-2xl text-brand-ink">
                  Every major Austrian city
                </h2>
                <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-brand-ink-2">
                  {austrianCities.map((c) => (
                    <li key={c.slug} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand-gold" />
                      <Link href={`/service-areas/${c.slug}`} className="hover:text-brand-gold">
                        {c.city}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/service-areas"
                  className="mt-6 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4"
                >
                  See full coverage map →
                </Link>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  Cross-Border
                </p>
                <h2 className="font-display mt-2 text-2xl text-brand-ink">
                  Beyond Austria&apos;s borders
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-brand-ink-2">
                  {borderCrossingDestinations.map((d) => (
                    <li key={d.slug} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                      <span>
                        <Link
                          href={`/service-areas/${d.slug}`}
                          className="font-semibold text-brand-ink hover:text-brand-gold"
                        >
                          {d.country}
                        </Link>{' '}
                        — {d.cities.join(', ')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-cream border-b border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left: Passenger Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/testimonials.png"
                alt="Client relaxing in the backseat of a luxury chauffeur driven Mercedes sedan"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>

            {/* Right: Review Quotes */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Client Testimonials
              </p>
              <h2 className="font-display mt-2 mb-8 text-3xl text-brand-ink">
                What our guests say about us
              </h2>
              
              <div className="space-y-6">
                <div className="rounded-sm border border-brand-line bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-1 text-brand-gold text-sm">
                    {"★".repeat(5)}
                  </div>
                  <p className="mt-2 text-sm italic leading-relaxed text-brand-ink-2/80">
                    &quot;Outstanding service. The driver met us at arrivals with a name board, assisted with our heavy ski bags, and took us smoothly to our resort in Lech. Truly premium!&quot;
                  </p>
                  <p className="mt-3 text-xs font-semibold text-brand-ink">
                    Sarah Jenkins · London to Lech Transfer
                  </p>
                </div>

                <div className="rounded-sm border border-brand-line bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-1 text-brand-gold text-sm">
                    {"★".repeat(5)}
                  </div>
                  <p className="mt-2 text-sm italic leading-relaxed text-brand-ink-2/80">
                    &quot;Booked an executive transfer for our business guests from Vienna to Munich. Prompt driver, immaculate Mercedes V-Class, and excellent communication throughout.&quot;
                  </p>
                  <p className="mt-3 text-xs font-semibold text-brand-ink">
                    Dr. Marcus Weber · Corporate Route (Vienna to Munich)
                  </p>
                </div>

                <div className="rounded-sm border border-brand-line bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-1 text-brand-gold text-sm">
                    {"★".repeat(5)}
                  </div>
                  <p className="mt-2 text-sm italic leading-relaxed text-brand-ink-2/80">
                    &quot;We needed a cross-border transfer from Vienna to Prague. The chauffeur was highly professional, spoke excellent English, and provided a safe, quiet, and comfortable journey.&quot;
                  </p>
                  <p className="mt-3 text-xs font-semibold text-brand-ink">
                    Elena Rostova · Cross-Border Route (Vienna to Prague)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Our Fleet
          </p>
          <h2 className="font-display mt-2 text-3xl text-brand-ink">A vehicle for every trip</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v) => (
            <div key={v.type} className="rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                <Image
                  src={`/images/fleet/${v.type}.png`}
                  alt={v.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 25vw"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-brand-gold font-medium">
                    {v.passengers} · {v.luggage}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink-2/80">
                    {v.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left: Support Graphic */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-brand-cream shadow-md lg:col-span-5 group">
              <Image
                src="/images/faq-support.png"
                alt="Frequently Asked Questions - Premium Support Graphic"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>

            {/* Right: FAQ Accordion */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Got Questions?
              </p>
              <h2 className="font-display mt-2 mb-6 text-3xl text-brand-ink">
                Frequently Asked Questions
              </h2>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="bg-brand-cream border-t border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left: Blog Cards */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Travel Insights & Guides
              </p>
              <h2 className="font-display mt-2 mb-8 text-3xl text-brand-ink">
                From our travel journal
              </h2>
              
              <div className="grid gap-6">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-sm border border-brand-line bg-white p-6 transition-all duration-300 hover:shadow-md hover:border-brand-gold"
                  >
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-cream px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-gold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display mt-3 text-lg font-semibold text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-ink-2/80 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-brand-ink-2/50">
                      {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}{' '}
                      · {post.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold transition-colors duration-300"
                >
                  View all journal entries →
                </Link>
              </div>
            </div>

            {/* Right: Journal Graphic */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/blog-section.png"
                alt="Luxury travel journals and maps of Austria"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-ink overflow-hidden border-t border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: Text & CTA Button */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Seamless Private Travel
              </p>
              <h2 className="font-display mt-2 text-3xl text-white sm:text-4xl">
                Ready to book your transfer?
              </h2>
              <p className="mt-4 text-brand-cream/70 max-w-md">
                Domestic or cross-border — tell us where, and we&apos;ll take care of the rest. No payment required now — we confirm availability first.
              </p>
              <div className="mt-8">
                <Link
                  href="/booking"
                  className="inline-block rounded-sm bg-brand-gold px-8 py-4 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light transition-colors duration-300 shadow-md"
                >
                  Request a Transfer
                </Link>
              </div>
            </div>
            
            {/* Right: Chauffeur Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/10 bg-brand-ink-2/50 shadow-2xl group">
              <Image
                src="/images/cta-chauffeur.png"
                alt="Professional chauffeur opening luxury sedan door"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
