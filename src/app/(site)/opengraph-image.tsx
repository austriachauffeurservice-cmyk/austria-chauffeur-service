import { ImageResponse } from 'next/og'
import { siteName } from '@/lib/content/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          backgroundColor: '#0e131a',
          color: '#f6f3ee',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 64,
            height: 6,
            backgroundColor: '#b8934a',
            marginBottom: 40,
          }}
        />
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, lineHeight: 1.15 }}>
          {siteName}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            fontSize: 32,
            color: '#b8934a',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          Private Transfers · All of Austria &amp; Beyond
        </div>
      </div>
    ),
    { ...size }
  )
}
