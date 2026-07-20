import type { MetadataRoute } from 'next'
import { austrianCities, borderCrossingDestinations } from '@/lib/content/service-areas'

const siteUrl = 'https://austriachauffeurservice.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/service-areas', '/about', '/contact', '/booking']
  const locationSlugs = [
    ...austrianCities.map((c) => c.slug),
    ...borderCrossingDestinations.map((d) => d.slug),
  ]

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...locationSlugs.map((slug) => ({
      url: `${siteUrl}/service-areas/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ]
}
