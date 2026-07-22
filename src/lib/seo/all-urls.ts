import {
  austrianCities,
  borderCities,
  borderCrossingDestinations,
} from '@/lib/content/service-areas'
import { skiResorts } from '@/lib/content/ski-resorts'
import { airports } from '@/lib/content/airports'
import { routes } from '@/lib/content/routes'
import { vehicles } from '@/lib/content/services'
import { dayTours } from '@/lib/content/day-tours'
import { blogPosts } from '@/lib/content/blog'
import { blogPosts as blogPostsDe } from '@/lib/content/de/blog'
import { siteUrl } from '@/lib/content/site'

const staticEnPaths = [
  '',
  '/services',
  '/service-areas',
  '/airport-transfers',
  '/ski-transfers',
  '/fleet',
  '/routes',
  '/reviews',
  '/corporate-accounts',
  '/wedding-transfers',
  '/corporate-transfers',
  '/city-to-city-transfers',
  '/day-tours',
  '/diplomatic-transfers',
  '/blog',
  '/faq',
  '/about',
  '/contact',
  '/booking',
  '/impressum',
  '/datenschutz',
  '/agb',
]

const staticDePaths = [
  '',
  '/services',
  '/service-areas',
  '/airport-transfers',
  '/ski-transfers',
  '/fleet',
  '/routes',
  '/reviews',
  '/corporate-accounts',
  '/wedding-transfers',
  '/corporate-transfers',
  '/city-to-city-transfers',
  '/day-tours',
  '/diplomatic-transfers',
  '/blog',
  '/faq',
  '/about',
  '/contact',
  '/booking',
]

const locationSlugs = [
  ...austrianCities.map((c) => c.slug),
  ...borderCrossingDestinations.map((d) => d.slug),
  ...borderCities.map((c) => c.slug),
]

// Every publicly indexable URL on the site, EN + DE, as full https:// URLs.
// Used by the IndexNow cron. Keep the static path lists here in sync with
// sitemap.ts if a new top-level page is added — they're currently separate
// lists, not a shared source.
export function getAllSiteUrls(): string[] {
  const en = [
    ...staticEnPaths.map((p) => `${siteUrl}${p}`),
    ...locationSlugs.map((slug) => `${siteUrl}/service-areas/${slug}`),
    ...skiResorts.map((r) => `${siteUrl}/ski-transfers/${r.slug}`),
    ...airports.map((a) => `${siteUrl}/airport-transfers/${a.slug}`),
    ...vehicles.map((v) => `${siteUrl}/fleet/${v.type}`),
    ...routes.map((r) => `${siteUrl}/routes/${r.slug}`),
    ...dayTours.map((t) => `${siteUrl}/day-tours/${t.slug}`),
    ...blogPosts.map((post) => `${siteUrl}/blog/${post.slug}`),
  ]

  const de = [
    ...staticDePaths.map((p) => `${siteUrl}/de${p}`),
    ...locationSlugs.map((slug) => `${siteUrl}/de/service-areas/${slug}`),
    ...skiResorts.map((r) => `${siteUrl}/de/ski-transfers/${r.slug}`),
    ...airports.map((a) => `${siteUrl}/de/airport-transfers/${a.slug}`),
    ...vehicles.map((v) => `${siteUrl}/de/fleet/${v.type}`),
    ...routes.map((r) => `${siteUrl}/de/routes/${r.slug}`),
    ...dayTours.map((t) => `${siteUrl}/de/day-tours/${t.slug}`),
    ...blogPostsDe.map((post) => `${siteUrl}/de/blog/${post.slug}`),
  ]

  return [...en, ...de]
}
