import Link from 'next/link'

// Visible breadcrumb trail to accompany the BreadcrumbList JSON-LD each page
// already renders separately — the schema alone has no on-page UI today.
// Last item has no href (current page, not a link).
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-brand-ink-2/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-gold hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-brand-ink-2/80">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
