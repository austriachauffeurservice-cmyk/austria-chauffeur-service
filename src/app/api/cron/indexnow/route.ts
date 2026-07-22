import { NextRequest, NextResponse } from 'next/server'
import { isAuthorizedCronRequest } from '@/lib/admin/cron-auth'
import { getAllSiteUrls } from '@/lib/seo/all-urls'
import { siteUrl } from '@/lib/content/site'

export const dynamic = 'force-dynamic'

const BATCH_SIZE = 100
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow'

// Per the IndexNow protocol spec.
const STATUS_REASONS: Record<number, string> = {
  200: 'URL submitted successfully',
  400: 'Bad request — invalid format',
  403: 'Forbidden — key not valid (not found, or file found but key not in it)',
  422: "Unprocessable — URLs don't belong to the host, or key doesn't match the schema",
  429: 'Too many requests — potential spam',
}

// Runs once daily. IndexNow itself has no real per-request cap (it accepts
// up to 10,000 URLs per call), but Bing Webmaster Tools tracks and displays
// a smaller daily submission allowance per site, so we self-throttle to a
// batch of 100 and rotate through the full URL list day by day. Re-submitting
// a URL is expected/harmless in this protocol (it just tells Bing "please
// recheck this"), so the rotation needs no persisted state — it's derived
// purely from the day of year.
export async function GET(request: NextRequest) {
  if (!isAuthorizedCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const key = process.env.INDEXNOW_KEY
  if (!key) {
    return NextResponse.json({ error: 'INDEXNOW_KEY not configured' }, { status: 500 })
  }

  const allUrls = getAllSiteUrls()
  const totalBatches = Math.ceil(allUrls.length / BATCH_SIZE)
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86_400_000
  )
  const batchIndex = dayOfYear % totalBatches
  const urlList = allUrls.slice(batchIndex * BATCH_SIZE, batchIndex * BATCH_SIZE + BATCH_SIZE)

  const host = new URL(siteUrl).hostname

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `${siteUrl}/${key}.txt`,
        urlList,
      }),
    })

    return NextResponse.json({
      batch: `${batchIndex + 1}/${totalBatches}`,
      submitted: urlList.length,
      totalUrls: allUrls.length,
      status: response.status,
      reason: STATUS_REASONS[response.status] ?? 'Unrecognized status code',
      ok: response.ok,
    })
  } catch (err) {
    console.error('IndexNow submission failed:', err)
    return NextResponse.json({ error: 'Submission failed' }, { status: 502 })
  }
}
