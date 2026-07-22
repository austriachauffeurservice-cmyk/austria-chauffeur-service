import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/content/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
      // Google's special-case crawlers (AdsBot, AdSense, push-notification
      // delivery) ignore the `*` group entirely, so /admin and /api need an
      // explicit rule addressed to them too.
      {
        userAgent: ['AdsBot-Google', 'AdsBot-Google-Mobile', 'Mediapartners-Google', 'APIs-Google'],
        disallow: ['/admin', '/api'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
