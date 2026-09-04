import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AustriaTimeWidget } from '@/components/austria-time-widget'
import { austrianCities, borderCities, borderCrossingDestinations } from '@/lib/content/de/service-areas'
import { airports } from '@/lib/content/de/airports'
import { skiResorts } from '@/lib/content/de/ski-resorts'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Einsatzgebiete in ganz Österreich',
  description:
    'Private Chauffeurabdeckung in allen neun österreichischen Bundesländern, plus lizenzierte grenzüberschreitende Transfers nach Deutschland, Tschechien, Slowakei, Ungarn, Slowenien, Italien und in die Schweiz.',
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/service-areas`,
    title: 'Einsatzgebiete in ganz Österreich',
    description:
      'Private Chauffeurabdeckung in allen neun österreichischen Bundesländern, plus lizenzierte grenzüberschreitende Transfers nach Deutschland, Tschechien, Slowakei, Ungarn, Slowenien, Italien und in die Schweiz.',
  },
  alternates: {
    canonical: '/de/service-areas',
    languages: { en: '/service-areas', de: '/de/service-areas', 'x-default': '/service-areas' },
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
  vienna: 'Private Flughafen-, Hotel-, Geschäfts- und Städtetransfers in ganz Wien.',
  salzburg: 'Flughafen- und Stadttransfers in Salzburg, mit direkten Strecken in die Alpenresorts.',
  innsbruck: 'Flughafentransfers und private Chauffeurfahrten durch Tirol und seine Skigebiete.',
  graz: 'Private Chauffeurtransfers in der Steiermark-Hauptstadt und Umgebung.',
  linz: 'Flughafen- und Stadttransfers in Oberösterreichs Donaumetropole.',
  klagenfurt: 'Private Transfers in Kärnten, mit Strecken zum Wörthersee und in die Alpen.',
  hallstatt: 'Private Transfers zu Österreichs bekanntem Seeort im Salzkammergut.',
  woerthersee: 'Chauffeurtransfers zu Kärntens Seenregion und umliegenden Resorts.',
  salzkammergut: 'Private Transfers durch die Seenregion zwischen Salzburg und der Steiermark.',
  'wachau-region': 'Chauffeurtransfers durch die Weinberge und Dörfer des Donautals.',
  'zillertal-valley': 'Private Transfers ins Zillertal, Tirols Ski- und Wandertal.',
  kufstein: 'Chauffeurtransfers in diese Tiroler Stadt nahe der bayerischen Grenze.',
  lienz: 'Private Transfers nach Osttirol, auf dem Weg zu den Dolomiten.',
  villach: 'Private Chauffeurtransfers in Kärnten, nahe der italienischen und slowenischen Grenze.',
  wels: 'Chauffeurtransfers in Oberösterreichs zweitgrößter Stadt.',
  'st-poelten': 'Private Transfers in die Landeshauptstadt von Niederösterreich.',
  'wiener-neustadt': 'Chauffeurtransfers südlich von Wien, in Niederösterreich.',
  bregenz: 'Private Transfers nach Vorarlbergs Hauptstadt am Bodensee.',
  eisenstadt: 'Chauffeurtransfers in die kompakte Landeshauptstadt des Burgenlands.',
  'baden-bei-wien': 'Private Transfers in diese Kurstadt südlich von Wien.',
  dornbirn: 'Chauffeurtransfers in Vorarlbergs größte Stadt.',
}

const categorized = {
  major: austrianCities.filter((c) => cityCategory[c.slug] === 'major'),
  regional: austrianCities.filter((c) => cityCategory[c.slug] === 'regional'),
  other: austrianCities.filter((c) => cityCategory[c.slug] === 'other'),
}

const whatWeProvide = [
  { title: 'Flughafentransfers', description: 'Persönlicher Empfang, Flugverfolgung und Festpreise zu und von österreichischen Flughäfen.', href: '/de/airport-transfers' },
  { title: 'Stadt-zu-Stadt-Transfers', description: 'Direkte, private Fahrten zwischen zwei beliebigen Orten in Österreich.', href: '/de/city-to-city-transfers' },
  { title: 'Ski- & Alpintransfers', description: 'Flughafen-zu-Resort-Transfers mit Platz für Ski und Boards.', href: '/de/ski-transfers' },
  { title: 'Geschäfts- & Stundenchauffeur', description: 'Fahrer und Fahrzeug auf Abruf für Meetings und mehrteilige Geschäftstage.', href: '/de/corporate-transfers' },
  { title: 'Tagesausflüge', description: 'Chauffeurgeführte Tagesausflüge zu Zielen wie Hallstatt und der Wachau.', href: '/de/day-tours' },
]

const austrianAirportLinks = airports.filter((a) => !a.crossBorder)

const featuredSkiResortSlugs = ['kitzbuehel', 'st-anton-am-arlberg', 'ischgl', 'soelden', 'mayrhofen', 'zell-am-see-kaprun', 'saalbach-hinterglemm']
const featuredSkiResorts = featuredSkiResortSlugs
  .map((slug) => skiResorts.find((r) => r.slug === slug))
  .filter((r): r is NonNullable<typeof r> => Boolean(r))

const faqs = [
  {
    question: 'Welche Städte in Österreich decken Sie ab?',
    answer:
      'Wien, Salzburg, Innsbruck, Graz, Linz, Klagenfurt und viele weitere Orte und Regionen — siehe die Abdeckungslisten oben. Falls Ihr Ziel nicht aufgeführt ist, fragen Sie uns direkt.',
  },
  {
    question: 'Bieten Sie Chauffeurtransfers außerhalb der großen Städte an?',
    answer:
      'Ja. Regionale Ziele und Resortgebiete werden neben den Hauptstädten abgedeckt, und weitere Orte können auf Anfrage kalkuliert werden.',
  },
  {
    question: 'Können Sie mich von einer Privatadresse abholen?',
    answer: 'Ja. Hotels, Privatadressen und Geschäftsadressen können alle als Abhol- oder Zielort genutzt werden.',
  },
  {
    question: 'Bieten Sie Flughafentransfers an?',
    answer: 'Ja — siehe unsere Flughafentransfers-Seite für die Abdeckung an allen sechs großen österreichischen Flughäfen sowie München und Zürich für grenzüberschreitende Ankünfte.',
  },
  {
    question: 'Bieten Sie Skigebiets-Transfers an?',
    answer: 'Ja — siehe unsere Ski- & Alpintransfers-Seite für Flughafen-zu-Resort-Strecken in Tirol, im Land Salzburg und darüber hinaus.',
  },
  {
    question: 'Können Sie grenzüberschreitende Transfers organisieren?',
    answer:
      'Ja, nach Deutschland, Tschechien, in die Slowakei, nach Ungarn, Slowenien, Italien und in die Schweiz/nach Liechtenstein, abhängig von Strecke, Fahrzeug und Fahrerverfügbarkeit.',
  },
  {
    question: 'Kann ich eine nicht aufgeführte Strecke anfragen?',
    answer: 'Ja. Teilen Sie uns Ihren Abhol- und Zielort mit, und wir bestätigen, ob die Fahrt organisiert werden kann.',
  },
  {
    question: 'Sind die Preise fest?',
    answer: 'Ja. Ihr Preis wird vor der Fahrt per E-Mail bestätigt, basierend auf Strecke, Fahrzeug und Personenanzahl.',
  },
]

function CityCard({ c }: { c: (typeof austrianCities)[number] }) {
  const imgSrc = cityImages[c.slug] || '/images/why-choose-us.webp'
  return (
    <Link
      href={`/de/service-areas/${c.slug}`}
      className="group rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
        <Image
          src={imgSrc}
          alt={`${c.city} privater Chauffeurtransfer`}
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

export default function ServiceAreasPageDe() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/de` },
            { '@type': 'ListItem', position: 2, name: 'Einsatzgebiete', item: `${siteUrl}/de/service-areas` },
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
          <Breadcrumbs items={[{ label: 'Startseite', href: '/de' }, { label: 'Einsatzgebiete' }]} />
        </div>
      </div>

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Einsatzgebiete
              </p>
              <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                Ganz Österreich — und über die Grenze hinaus
              </h1>
              <p className="mt-4 max-w-xl text-brand-ink-2/80 leading-relaxed">
                Wir bieten private Chauffeurtransfers in ganz Österreich, von Wien und
                Niederösterreich bis Tirol, Salzburg, Vorarlberg und Kärnten. Grenzüberschreitende
                Fahrten in die Nachbarländer Österreichs sind über unser Netzwerk lizenzierter
                Partnerfahrer ebenfalls möglich, zu Festpreisen, die vor der Fahrt bestätigt werden.
              </p>
              <p className="mt-3 max-w-xl text-sm text-brand-ink-2/60">
                Grenzüberschreitende Strecken sind abhängig von Ziel, Fahrzeug und Fahrerverfügbarkeit.
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/coverage.webp"
                alt="Private Chauffeurabdeckung in ganz Österreich"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Was wir anbieten */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Was wir in ganz Österreich anbieten</h2>
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

      {/* Inlandsabdeckung */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Große österreichische Städte</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Unsere sechs Haupt-Drehkreuze, jeweils mit eigenem Flughafen und eigener Transferseite.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categorized.major.map((c) => (
              <CityCard key={c.slug} c={c} />
            ))}
          </div>

          <h2 className="font-display mt-16 text-2xl text-brand-ink">Regionale &amp; Resort-Abdeckung</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Seenregionen, Täler und bekannte Ziele abseits der Hauptstädte.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categorized.regional.map((c) => (
              <CityCard key={c.slug} c={c} />
            ))}
          </div>

          <h2 className="font-display mt-16 text-2xl text-brand-ink">Weitere Standorte</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Weitere Orte und Städte, die wir in Österreich abdecken.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categorized.other.map((c) => (
              <CityCard key={c.slug} c={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Flughafenabdeckung */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Flughafenabdeckung</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Jeder große österreichische Flughafen ist Teil desselben Einsatzgebiete-Netzwerks.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {austrianAirportLinks.map((a) => (
              <Link
                key={a.slug}
                href={`/de/airport-transfers/${a.slug}`}
                className="rounded-full border border-brand-line bg-brand-cream px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold"
              >
                {a.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-ink-2/70">
            <Link href="/de/airport-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Alle österreichischen Flughafentransfers ansehen →
            </Link>
          </p>
        </div>
      </section>

      {/* Skigebiets-Abdeckung */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Skigebiets-Abdeckung</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Flughafen-zu-Resort-Transfers zu Österreichs wichtigsten Skidestinationen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {featuredSkiResorts.map((r) => (
              <Link
                key={r.slug}
                href={`/de/ski-transfers/${r.slug}`}
                className="rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold"
              >
                {r.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-ink-2/70">
            <Link href="/de/ski-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Alle österreichischen Skitransfers ansehen →
            </Link>
          </p>
        </div>
      </section>

      {/* Grenzüberschreitend */}
      <section className="border-t border-brand-line bg-brand-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Über Österreich hinaus
          </p>
          <h2 className="font-display mt-2 text-2xl text-white">Grenzüberschreitende Transfers</h2>
          <p className="mt-3 max-w-xl text-brand-cream/70">
            Private grenzüberschreitende Transfers mit demselben Fahrzeug während der gesamten
            Fahrt, organisiert über unser Netzwerk lizenzierter Partnerfahrer, abhängig von Strecke
            und Verfügbarkeit.
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
                      alt={`Grenzüberschreitender Transfer nach ${d.country}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <Link
                        href={`/de/service-areas/${d.slug}`}
                        className="font-display text-lg text-white hover:text-brand-gold transition-colors duration-300"
                      >
                        {d.country}
                      </Link>
                      <p className="mt-1.5 flex flex-wrap gap-x-1.5 text-xs text-brand-cream/80">
                        {cities.map((c, i) => (
                          <span key={c.slug}>
                            <Link href={`/de/service-areas/${c.slug}`} className="hover:text-brand-gold">
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

      {/* Aktuelle Uhrzeit */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <AustriaTimeWidget locale="de" />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Häufig gestellte Fragen</h2>
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

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Chauffeur für einen anderen Ort in Österreich benötigt?</h2>
        <p className="mx-auto mt-2 max-w-md text-brand-ink-2/80">
          Teilen Sie uns Abholort, Ziel, Datum und Personenanzahl mit. Wir prüfen die Strecke und
          bestätigen Verfügbarkeit und einen Festpreis.
        </p>
        <Link
          href="/de/booking"
          className="mt-6 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Transfer anfragen
        </Link>
      </section>
    </>
  )
}
