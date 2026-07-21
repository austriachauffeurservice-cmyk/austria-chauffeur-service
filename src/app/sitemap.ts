import type { MetadataRoute } from 'next'
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

// Bump this whenever page content actually changes — sitemaps with a
// lastmod that's always "now" are ignored/distrusted by crawlers.
const lastModified = new Date('2026-07-21')

// Pages that exist in German at /de/<path> (mirrors the English tree below).
const germanPaths = [
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
  ...austrianCities.map((c) => `/service-areas/${c.slug}`),
  ...borderCrossingDestinations.map((d) => `/service-areas/${d.slug}`),
  ...borderCities.map((c) => `/service-areas/${c.slug}`),
  ...skiResorts.map((r) => `/ski-transfers/${r.slug}`),
  ...airports.map((a) => `/airport-transfers/${a.slug}`),
  ...vehicles.map((v) => `/fleet/${v.type}`),
  ...routes.map((r) => `/routes/${r.slug}`),
  ...dayTours.map((t) => `/day-tours/${t.slug}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routeList = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.8 },
    { path: '/service-areas', priority: 0.8 },
    { path: '/airport-transfers', priority: 0.8 },
    { path: '/ski-transfers', priority: 0.8 },
    { path: '/fleet', priority: 0.7 },
    { path: '/routes', priority: 0.8 },
    { path: '/reviews', priority: 0.6 },
    { path: '/corporate-accounts', priority: 0.5 },
    { path: '/wedding-transfers', priority: 0.7 },
    { path: '/corporate-transfers', priority: 0.7 },
    { path: '/city-to-city-transfers', priority: 0.7 },
    { path: '/day-tours', priority: 0.7 },
    { path: '/diplomatic-transfers', priority: 0.5 },
    { path: '/blog', priority: 0.7 },
    { path: '/faq', priority: 0.6 },
    { path: '/about', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
    { path: '/booking', priority: 0.9 },
    { path: '/impressum', priority: 0.3 },
    { path: '/datenschutz', priority: 0.3 },
    { path: '/agb', priority: 0.3 },
  ]
  const locationSlugs = [
    ...austrianCities.map((c) => c.slug),
    ...borderCrossingDestinations.map((d) => d.slug),
    ...borderCities.map((c) => c.slug),
  ]

  return [
    ...routeList.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority,
    })),
    ...locationSlugs.map((slug) => ({
      url: `${siteUrl}/service-areas/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...skiResorts.map((r) => ({
      url: `${siteUrl}/ski-transfers/${r.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...airports.map((a) => ({
      url: `${siteUrl}/airport-transfers/${a.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...vehicles.map((v) => ({
      url: `${siteUrl}/fleet/${v.type}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...routes.map((r) => ({
      url: `${siteUrl}/routes/${r.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...dayTours.map((t) => ({
      url: `${siteUrl}/day-tours/${t.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...blogPostsDe.map((post) => ({
      url: `${siteUrl}/de/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...germanPaths.map((path) => ({
      url: `${siteUrl}/de${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 0.9 : 0.6,
    })),
  ]
}
