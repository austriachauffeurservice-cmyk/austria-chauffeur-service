'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/images/hero/alpine-road.png',
    alt: 'Luxury sedan on scenic Austrian alpine road',
  },
  {
    src: '/images/hero/vienna-palace.png',
    alt: 'Private chauffeur at historic Vienna palace',
  },
  {
    src: '/images/hero/ski-resort.png',
    alt: 'Premium transfer at Austrian Alps ski resort',
  },
  {
    src: '/images/hero/airport-transfer.png',
    alt: 'VIP transfer at Vienna International Airport tarmac',
  },
]

export function HeroBackground() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Images Slider */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1200ms' }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Luxury Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-ink/80 to-brand-ink/65" />
    </div>
  )
}
