import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AustriaTimeWidget } from '@/components/austria-time-widget'
import { austrianCities, borderCities, borderCrossingDestinations } from '@/lib/content/service-areas'
import { airports } from '@/lib/content/airports'
import { skiResorts } from '@/lib/content/ski-resorts'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Service Areas Across Austria',
  description:
    'Private chauffeur coverage across all nine Austrian states, plus licensed cross-border transfers to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.',
  alternates: { canonical: '/service-areas', languages: { en: '/service-areas', de: '/de/service-areas', 'x-default': '/service-areas' } },
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/service-areas`,
    title: 'Service Areas Across Austria',
    description:
      'Private chauffeur coverage across all nine Austrian states, plus licensed cross-border transfers to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.',
  },
}

const cityImages: Record<string, string> = {
  vienna: '/images/hero/vienna-palace.webp',
  salzburg: '/images/hero/alpine-road.webp',
  innsbruck: '/images/hero/ski-resort.webp',
  graz: '/images/why-choose-us.webp',
  linz: '/images/hero/airport-transfer.webp',
  klagenfurt: '/images/testimonials.webp',
  villach: '/images/cta-chauffeur.webp',
  wels: '/images/blog-section.webp',
  'st-poelten': '/images/coverage.webp',
  'wiener-neustadt': '/images/hero/vienna-palace.webp',
  bregenz: '/images/blog-section.webp',
  eisenstadt: '/images/testimonials.webp',
  'baden-bei-wien': '/images/hero/vienna-palace.webp',
  hallstatt: '/images/hero/alpine-road.webp',
  woerthersee: '/images/hero/ski-resort.webp',
  salzkammergut: '/images/hero/alpine-road.webp',
  'wachau-region': '/images/coverage.webp',
  'zillertal-valley': '/images/hero/ski-resort.webp',
  kufstein: '/images/cta-chauffeur.webp',
  lienz: '/images/why-choose-us.webp',
  dornbirn: '/images/blog-section.webp',
}

const borderImages: Record<string, string> = {
  germany: '/images/hero/alpine-road.webp',
  'czech-republic': '/images/blog-section.webp',
  slovakia: '/images/cta-chauffeur.webp',
  hungary: '/images/hero/vienna-palace.webp',
  slovenia: '/images/why-choose-us.webp',
  italy: '/images/testimonials.webp',
  'switzerland-liechtenstein': '/images/hero/ski-resort.webp',
}

type Category = 'major' | 'regional' | 'other'

const cityCategory: Record<string, Category> = {
  vienna: 'major',
  salzburg: 'major',
  innsbruck: 'major',
  graz: 'major',
  linz: 'major',
  klagenfurt: 'major',
  hallstatt: 'regional',
  woerthersee: 'regional',
  salzkammergut: 'regional',
  'wachau-region': 'regional',
  'zillertal-valley': 'regional',
  kufstein: 'regional',
  lienz: 'regional',
  villach: 'other',
  wels: 'other',
  'st-poelten': 'other',
  'wiener-neustadt': 'other',
  bregenz: 'other',
  eisenstadt: 'other',
  'baden-bei-wien': 'other',
  dornbirn: 'other',
}

const cityBlurb: Record<string, string> = {
  vienna: 'Private airport, hotel, business, and intercity chauffeur transfers across Vienna.',
  salzburg: 'Airport and city transfers across Salzburg, with direct routes into the Alpine resorts.',
  innsbruck: 'Airport transfers and private chauffeur journeys across Tyrol and its ski resorts.',
  graz: "Private chauffeur transfers across Styria's capital and surrounding region.",
  linz: "Airport and city transfers across Upper Austria's Danube capital.",
  klagenfurt: 'Private transfers across Carinthia, with routes to Wörthersee and the Alps.',
  hallstatt: "Private transfers to Austria's well-known lakeside village in the Salzkammergut.",
  woerthersee: "Chauffeur transfers to Carinthia's lake district and surrounding resorts.",
  salzkammergut: 'Private transfers across the lake region between Salzburg and Styria.',
  'wachau-region': "Chauffeur transfers through the Danube valley's vineyards and villages.",
  'zillertal-valley': "Private transfers to Tyrol's Zillertal ski and hiking valley.",
  kufstein: 'Chauffeur transfers to this Tyrolean town near the Bavarian border.',
  lienz: 'Private transfers to East Tyrol, on the way toward the Dolomites.',
  villach: 'Private chauffeur transfers in Carinthia, near the Italian and Slovenian borders.',
  wels: "Chauffeur transfers across Upper Austria's second-largest city.",
  'st-poelten': "Private transfers to Lower Austria's state capital.",
  'wiener-neustadt': 'Chauffeur transfers south of Vienna, in Lower Austria.',
  bregenz: "Private transfers to Vorarlberg's capital on Lake Constance.",
  eisenstadt: "Chauffeur transfers to Burgenland's compact state capital.",
  'baden-bei-wien': 'Private transfers to this spa town just south of Vienna.',
  dornbirn: "Chauffeur transfers across Vorarlberg's largest city.",
}

const categorized = {
  major: austrianCities.filter((c) => cityCategory[c.slug] === 'major'),
  regional: austrianCities.filter((c) => cityCategory[c.slug] === 'regional'),
  other: austrianCities.filter((c) => cityCategory[c.slug] === 'other'),
}

const whatWeProvide = [
  { title: 'Airport Transfers', description: 'Meet & greet, flight tracking, and fixed pricing to and from Austrian airports.', href: '/airport-transfers' },
  { title: 'City-to-City Transfers', description: 'Direct, private transfers between any two points in Austria.', href: '/city-to-city-transfers' },
  { title: 'Ski & Alpine Transfers', description: 'Airport-to-resort transfers with space for skis and boards.', href: '/ski-transfers' },
  { title: 'Business & Hourly Chauffeur', description: 'A driver and vehicle on standby for meetings and multi-stop business days.', href: '/corporate-transfers' },
  { title: 'Day Tours', description: 'Chauffeur-driven day trips to destinations like Hallstatt and the Wachau valley.', href: '/day-tours' },
]

const austrianAirportLinks = airports.filter((a) => !a.crossBorder)

const featuredSkiResortSlugs = ['kitzbuehel', 'st-anton-am-arlberg', 'ischgl', 'soelden', 'mayrhofen', 'zell-am-see-kaprun', 'saalbach-hinterglemm']
const featuredSkiResorts = featuredSkiResortSlugs
  .map((slug) => skiResorts.find((r) => r.slug === slug))
  .filter((r): r is NonNullable<typeof r> => Boolean(r))

const faqs = [
  {
    question: 'Which cities in Austria do you cover?',
    answer:
      'Vienna, Salzburg, Innsbruck, Graz, Linz, Klagenfurt, and a wide range of additional towns and regions — see the coverage lists above. If your destination isn\'t listed, ask us directly.',
  },
  {
    question: 'Do you provide chauffeur transfers outside major cities?',
    answer:
      'Yes. Regional destinations and resort areas are covered alongside the major cities, and additional locations can be quoted on request.',
  },
  {
    question: 'Can you pick me up from a private address?',
    answer: 'Yes. Hotels, private residences, and business addresses can all be used as pickup or drop-off points.',
  },
  {
    question: 'Do you offer airport transfers?',
    answer: 'Yes — see our Airport Transfers page for coverage at all six major Austrian airports, plus Munich and Zurich for cross-border arrivals.',
  },
  {
    question: 'Do you provide ski resort transfers?',
    answer: 'Yes — see our Ski & Alpine Transfers page for airport-to-resort routes across Tyrol, Salzburg state, and beyond.',
  },
  {
    question: 'Can you arrange cross-border transfers?',
    answer:
      'Yes, into Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland/Liechtenstein, subject to route, vehicle, and driver availability.',
  },
  {
    question: "Can I request a route that isn't listed?",
    answer: "Yes. Submit your pickup and destination and we'll confirm whether the journey can be arranged.",
  },
  {
    question: 'Are prices fixed?',
    answer: 'Yes. Your price is confirmed by email before travel, based on your route, vehicle, and passenger details.',
  },
]

function CityCard({ c }: { c: (typeof austrianCities)[number] }) {
  const imgSrc = cityImages[c.slug] || '/images/why-choose-us.webp'
  return (
    <Link
      href={`/service-areas/${c.slug}`}
      className="group rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
        <Image
          src={imgSrc}
          alt={`${c.city} private chauffeur transfer`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-w-768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <p className="font-display text-lg text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
            {c.city}
          </p>
          <p className="text-xs uppercase tracking-wide text-brand-gold font-medium mt-0.5">{c.region}</p>
          {c.airport && <p className="mt-2 text-xs text-brand-ink-2/70">✈️ {c.airport}</p>}
          {cityBlurb[c.slug] && <p className="mt-2 text-xs text-brand-ink-2/80">{cityBlurb[c.slug]}</p>}
        </div>
        {c.note && <p className="mt-3 text-xs font-semibold text-brand-gold">{c.note}</p>}
      </div>
    </Link>
  )
}

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${siteUrl}/service-areas` },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />

      <div className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]} />
        </div>
      </div>

      {/* Hero Header Banner with Coverage Graphic */}
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Service Areas
              </p>
              <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                All of Austria — and across the border
              </h1>
              <p className="mt-4 max-w-xl text-brand-ink-2/80 leading-relaxed">
                We provide private chauffeur transfers across Austria, from Vienna and Lower Austria
                to Tyrol, Salzburg, Vorarlberg, and Carinthia. Cross-border journeys into
                Austria&apos;s neighboring countries are also available through our network of
                licensed partner drivers, with fixed pricing confirmed before travel.
              </p>
              <p className="mt-3 max-w-xl text-sm text-brand-ink-2/60">
                Cross-border routes are subject to destination, vehicle, and driver availability.
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/coverage.webp"
                alt="Private chauffeur service coverage across Austria"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">What We Provide Across Austria</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeProvide.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-sm border border-brand-line bg-white p-5 transition-colors hover:border-brand-gold"
            >
              <p className="font-semibold text-brand-ink group-hover:text-brand-gold">{item.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Domestic Coverage */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Major Austrian Cities</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Our six primary hubs, each with its own airport and dedicated transfer page.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categorized.major.map((c) => (
              <CityCard key={c.slug} c={c} />
            ))}
          </div>

          <h2 className="font-display mt-16 text-2xl text-brand-ink">Regional &amp; Resort Coverage</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Lake districts, valleys, and well-known destinations beyond the main cities.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categorized.regional.map((c) => (
              <CityCard key={c.slug} c={c} />
            ))}
          </div>

          <h2 className="font-display mt-16 text-2xl text-brand-ink">Additional Locations</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Further towns and cities we cover across Austria.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categorized.other.map((c) => (
              <CityCard key={c.slug} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Airport Coverage */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Airport Coverage</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Every major Austrian airport connects into this same service-area network.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {austrianAirportLinks.map((a) => (
              <Link
                key={a.slug}
                href={`/airport-transfers/${a.slug}`}
                className="rounded-full border border-brand-line bg-brand-cream px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold"
              >
                {a.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-ink-2/70">
            <Link href="/airport-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              View all Austrian airport transfers →
            </Link>
          </p>
        </div>
      </section>

      {/* Ski Resort Coverage */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Ski Resort Coverage</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Airport-to-resort transfers to Austria&apos;s major ski destinations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {featuredSkiResorts.map((r) => (
              <Link
                key={r.slug}
                href={`/ski-transfers/${r.slug}`}
                className="rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold"
              >
                {r.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-ink-2/70">
            <Link href="/ski-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              View all Austrian ski transfers →
            </Link>
          </p>
        </div>
      </section>

      {/* Cross Border */}
      <section className="border-t border-brand-line bg-brand-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Beyond Austria
          </p>
          <h2 className="font-display mt-2 text-2xl text-white">Cross-Border Transfers</h2>
          <p className="mt-3 max-w-xl text-brand-cream/70">
            Private cross-border transfers with the same vehicle throughout, arranged through our
            network of licensed partner drivers, subject to route and availability.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {borderCrossingDestinations.map((d) => {
              const cities = borderCities.filter((c) => c.countrySlug === d.slug)
              const imgSrc = borderImages[d.slug] || '/images/coverage.webp'
              return (
                <div
                  key={d.slug}
                  className="group rounded-sm border border-white/15 bg-white/5 overflow-hidden flex flex-col hover:border-brand-gold transition-colors duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10">
                    <Image
                      src={imgSrc}
                      alt={`Cross-border transfer to ${d.country}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <Link
                        href={`/service-areas/${d.slug}`}
                        className="font-display text-lg text-white hover:text-brand-gold transition-colors duration-300"
                      >
                        {d.country}
                      </Link>
                      <p className="mt-1.5 flex flex-wrap gap-x-1.5 text-xs text-brand-cream/80">
                        {cities.map((c, i) => (
                          <span key={c.slug}>
                            <Link href={`/service-areas/${c.slug}`} className="hover:text-brand-gold">
                              {c.city}
                            </Link>
                            {i < cities.length - 1 && ','}
                          </span>
                        ))}
                      </p>
                    </div>
                    <p className="mt-3 text-xs font-semibold text-brand-gold">{d.note}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Time */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <AustriaTimeWidget />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Frequently Asked Questions</h2>
          <dl className="mt-6 divide-y divide-brand-line">
            {faqs.map((f) => (
              <div key={f.question} className="py-6 first:pt-0">
                <dt className="font-display text-base text-brand-ink">{f.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Need a Chauffeur Somewhere Else in Austria?</h2>
        <p className="mx-auto mt-2 max-w-md text-brand-ink-2/80">
          Tell us your pickup location, destination, date, and passenger count. We&apos;ll check
          the route and confirm availability and a fixed price.
        </p>
        <Link
          href="/booking"
          className="mt-6 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Request a Transfer
        </Link>
      </section>
    </>
  )
}
