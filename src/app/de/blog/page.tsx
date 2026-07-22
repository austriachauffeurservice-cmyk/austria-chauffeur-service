import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/content/de/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Leitfäden zu Flughafentransfers, grenzüberschreitenden Strecken und privatem Chauffeurreisen in Österreich und den Nachbarländern.',
  alternates: { canonical: '/de/blog', languages: { en: '/blog', de: '/de/blog' } },
}

export default function BlogIndexPageDe() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))

  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Blog
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Leitfäden für unterwegs in Österreich
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Praktische Notizen zu Flughafentransfers, grenzüberschreitenden Strecken und privatem
            Reisen — geschrieben aus den Strecken, die wir tatsächlich fahren.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/de/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-sm border border-brand-line p-6 transition-colors hover:border-brand-gold"
            >
              {post.image && (
                <div className="-mx-6 -mt-6 mb-4 overflow-hidden border-b border-brand-line">
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    width={600}
                    height={338}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-cream px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-display mt-4 text-lg text-brand-ink">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink-2/80">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs text-brand-ink-2/60">
                {new Date(post.publishedAt).toLocaleDateString('de-AT', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}{' '}
                · {post.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
