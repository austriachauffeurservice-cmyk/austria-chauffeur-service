import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { blogPosts } from '@/lib/content/blog'
import { siteName, siteUrl } from '@/lib/content/site'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const pageUrl = `${siteUrl}/blog/${slug}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          url: pageUrl,
          author: {
            '@type': 'Organization',
            name: siteName,
            url: siteUrl,
          },
          publisher: {
            '@type': 'Organization',
            name: siteName,
            url: siteUrl,
          },
          mainEntityOfPage: pageUrl,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
          ],
        }}
      />

      <article>
        <section className="border-b border-brand-line bg-brand-cream">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display mt-4 text-3xl text-brand-ink sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-xl text-brand-ink-2/80">{post.excerpt}</p>
            <p className="mt-4 text-xs text-brand-ink-2/60">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>{' '}
              · {post.readingTime}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <div className="space-y-6">
            {post.blocks.map((block, i) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={i} className="font-display pt-4 text-xl text-brand-ink">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="space-y-2 text-sm leading-relaxed text-brand-ink-2/90">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-sm leading-relaxed text-brand-ink-2/90">
                  {block.text}
                </p>
              )
            })}
          </div>
        </section>

        <section className="border-t border-brand-line bg-brand-cream">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="font-display text-xl text-brand-ink">Ready to book this route?</h2>
              <p className="mt-1 text-sm text-brand-ink-2/80">
                Submit your trip details and we&apos;ll confirm by email.
              </p>
            </div>
            <Link
              href="/booking"
              className="shrink-0 rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
            >
              Request a Transfer
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4"
          >
            ← Back to all posts
          </Link>
        </section>
      </article>
    </>
  )
}
