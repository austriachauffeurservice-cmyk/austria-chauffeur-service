'use client'

import { useEffect, useState } from 'react'

// Live current conditions for Vienna via Open-Meteo (no API key required).
// Fails silently (renders nothing) if the request doesn't succeed — never
// shows a fabricated or stale temperature.
const WEATHER_CODES_EN: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Rime fog',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Dense drizzle',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Snow',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Rain showers',
  81: 'Rain showers',
  82: 'Heavy rain showers',
  85: 'Snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with hail',
  99: 'Thunderstorm with hail',
}

const WEATHER_CODES_DE: Record<number, string> = {
  0: 'Klarer Himmel',
  1: 'Überwiegend klar',
  2: 'Teilweise bewölkt',
  3: 'Bedeckt',
  45: 'Nebel',
  48: 'Reifnebel',
  51: 'Leichter Nieselregen',
  53: 'Nieselregen',
  55: 'Starker Nieselregen',
  61: 'Leichter Regen',
  63: 'Regen',
  65: 'Starker Regen',
  71: 'Leichter Schneefall',
  73: 'Schneefall',
  75: 'Starker Schneefall',
  77: 'Schneekörner',
  80: 'Regenschauer',
  81: 'Regenschauer',
  82: 'Heftige Regenschauer',
  85: 'Schneeschauer',
  86: 'Starke Schneeschauer',
  95: 'Gewitter',
  96: 'Gewitter mit Hagel',
  99: 'Gewitter mit Hagel',
}

export function WeatherWidget({ locale = 'en' }: { locale?: 'en' | 'de' }) {
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch('https://api.open-meteo.com/v1/forecast?latitude=48.2082&longitude=16.3738&current_weather=true')
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled && json?.current_weather) {
          setWeather({ temp: json.current_weather.temperature, code: json.current_weather.weathercode })
        } else if (!cancelled) {
          setFailed(true)
        }
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (failed) return null

  const codes = locale === 'de' ? WEATHER_CODES_DE : WEATHER_CODES_EN
  const label = locale === 'de' ? 'Wetter in Wien' : 'Vienna Weather'
  const loading = locale === 'de' ? 'Wird geladen…' : 'Loading…'

  return (
    <div className="inline-flex items-center gap-2 rounded-sm border border-brand-line bg-white px-4 py-2.5 text-sm">
      <span aria-hidden="true">🌤️</span>
      <span className="font-semibold text-brand-ink">{label}:</span>
      <span className="text-brand-ink-2/80">
        {weather ? `${Math.round(weather.temp)}°C · ${codes[weather.code] ?? '—'}` : loading}
      </span>
    </div>
  )
}
