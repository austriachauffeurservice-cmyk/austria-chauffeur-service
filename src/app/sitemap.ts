import type { MetadataRoute } from 'next'
import {
  austrianCities,
  borderCities,
  borderCrossingDestinations,
} from '@/lib/content/service-areas'
import { skiResorts } from '@/lib/content/ski-resorts'
import { airports } from '@/lib/content/airports'
import { blogPosts } from '@/lib/content/blog'
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
  '/faq',
  '/about',
  '/contact',
  '/booking',
  ...austrianCities.map((c) => `/service-areas/${c.slug}`),
  ...borderCrossingDestinations.map((d) => `/service-areas/${d.slug}`),
  ...borderCities.map((c) => `/service-areas/${c.slug}`),
  ...skiResorts.map((r) => `/ski-transfers/${r.slug}`),
  ...airports.map((a) => `/airport-transfers/${a.slug}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.8 },
    { path: '/service-areas', priority: 0.8 },
    { path: '/airport-transfers', priority: 0.8 },
    { path: '/ski-transfers', priority: 0.8 },
    { path: '/blog', priority: 0.7 },
    { path: '/faq', priority: 0.6 },
    { path: '/about', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
    { path: '/booking', priority: 0.9 },
  ]
  const locationSlugs = [
    ...austrianCities.map((c) => c.slug),
    ...borderCrossingDestinations.map((d) => d.slug),
    ...borderCities.map((c) => c.slug),
  ]

  return [
    ...routes.map(({ path, priority }) => ({
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
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
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
