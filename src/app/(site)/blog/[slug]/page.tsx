import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { blogPosts } from '@/lib/content/blog'
import { renderRichText } from '@/lib/content/rich-text'
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

  const canonical = `/blog/${slug}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical,
      languages: { en: canonical, de: `/de/blog/${slug}`, 'x-default': canonical },
    },
    openGraph: {
      type: 'article',
      siteName,
      locale: 'en_US',
      url: `${siteUrl}${canonical}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: post.image ? [{ url: `${siteUrl}${post.image}` }] : undefined,
    },
  }
}

function wordCount(post: (typeof blogPosts)[number]): number {
  return post.blocks.reduce((sum, block) => {
    const text =
      block.type === 'list'
        ? block.items.join(' ')
        : block.type === 'table'
          ? [...block.headers, ...block.rows.flat()].join(' ')
          : block.type === 'image'
            ? ''
            : block.text
    return sum + text.split(/\s+/).filter(Boolean).length
  }, 0)
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
          image: post.image ? `${siteUrl}${post.image}` : `${siteUrl}/opengraph-image`,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          url: pageUrl,
          inLanguage: 'en',
          keywords: post.tags.join(', '),
          wordCount: wordCount(post),
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
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }}
        />
      )}

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
            <Link
              href="/booking"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-gold"
            >
              Request a Transfer
            </Link>

            {post.image && (
              <div className="mt-8 overflow-hidden rounded-sm border border-brand-line shadow-sm">
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  width={1200}
                  height={675}
                  priority
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}
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
              if (block.type === 'subheading') {
                return (
                  <h3 key={i} className="font-display pt-2 text-lg text-brand-ink">
                    {block.text}
                  </h3>
                )
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="space-y-2 text-sm leading-relaxed text-brand-ink-2/90">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                        <span>{renderRichText(item)}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              if (block.type === 'image') {
                return (
                  <figure key={i} className="my-8">
                    <div className="overflow-hidden rounded-sm border border-brand-line shadow-sm">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        width={1200}
                        height={675}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="mt-2 text-center text-xs text-brand-ink-2/70">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                )
              }
              if (block.type === 'table') {
                return (
                  <div key={i} className="overflow-x-auto rounded-sm border border-brand-line">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-brand-cream">
                          {block.headers.map((h) => (
                            <th key={h} className="whitespace-nowrap px-4 py-2.5 font-display text-brand-ink">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, ri) => (
                          <tr key={ri} className="border-t border-brand-line">
                            {row.map((cell, ci) => (
                              <td key={ci} className="px-4 py-2.5 text-brand-ink-2/90">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }
              return (
                <p key={i} className="text-sm leading-relaxed text-brand-ink-2/90">
                  {renderRichText(block.text)}
                </p>
              )
            })}
          </div>
        </section>

        {post.faqs && post.faqs.length > 0 && (
          <section className="border-t border-brand-line bg-brand-cream">
            <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
              <h2 className="font-display text-xl text-brand-ink">Frequently Asked Questions</h2>
              <dl className="mt-6 divide-y divide-brand-line">
                {post.faqs.map((f) => (
                  <div key={f.question} className="py-5 first:pt-0">
                    <dt className="font-display text-base text-brand-ink">{f.question}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{f.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {post.relatedPages && post.relatedPages.length > 0 && (
          <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-xl text-brand-ink">Related Pages</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {post.relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-sm border border-brand-line p-4 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-gold hover:text-brand-gold"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </section>
        )}

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
