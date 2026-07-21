import type { MetadataRoute } from 'next'
import {
  austrianCities,
  borderCities,
  borderCrossingDestinations,
} from '@/lib/content/service-areas'
import { blogPosts } from '@/lib/content/blog'
import { siteUrl } from '@/lib/content/site'

// Bump this whenever page content actually changes — sitemaps with a
// lastmod that's always "now" are ignored/distrusted by crawlers.
const lastModified = new Date('2026-07-21')

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.8 },
    { path: '/service-areas', priority: 0.8 },
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
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
