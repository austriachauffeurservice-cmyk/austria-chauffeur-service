import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/content/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides on airport transfers, cross-border routes, and private chauffeur travel across Austria and neighboring countries.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))

  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Blog
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Guides for getting around Austria
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Practical notes on airport transfers, cross-border routes, and private travel —
            written from the routes we actually drive.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-sm border border-brand-line p-6 transition-colors hover:border-brand-gold"
            >
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
      </section>
    </>
  )
}
