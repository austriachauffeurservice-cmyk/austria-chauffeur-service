export type VehicleType = 'sedan' | 'van' | 'luxury' | 'minibus'

export const vehicles: {
  type: VehicleType
  name: string
  passengers: string
  luggage: string
  description: string
  alt: string
  idealFor?: string[]
  features?: string[]
}[] = [
  {
    type: 'sedan',
    name: 'Business Sedan',
    passengers: 'Up to 3',
    luggage: '2–3 bags',
    description:
      'Mercedes E-Class or equivalent. The default choice for airport transfers and city travel — quiet, comfortable, on time.',
    alt: 'Mercedes E-Class business sedan chauffeur service in Austria',
    idealFor: ['Solo and two-passenger airport transfers', 'Point-to-point city travel', 'Standard business trips'],
    features: ['Bottled water on board', 'Free WiFi where available', 'Phone charging cable', 'Climate control'],
  },
  {
    type: 'luxury',
    name: 'Luxury Sedan',
    passengers: 'Up to 3',
    luggage: '2–3 bags',
    description:
      'Mercedes S-Class or BMW 7 Series. For clients, VIP guests, and occasions where first impressions matter.',
    alt: 'Mercedes S-Class luxury sedan chauffeur service in Vienna, Austria',
    idealFor: ['VIP and executive arrivals', 'Client-facing business travel', 'Weddings and special occasions'],
    features: ['Premium leather interior', 'Extended legroom', 'Bottled water & refreshments', 'Free WiFi where available'],
  },
  {
    type: 'van',
    name: 'Executive Van',
    passengers: 'Up to 7',
    luggage: '6–7 bags',
    description:
      'Mercedes V-Class. Ideal for families, small groups, and longer cross-border journeys with extra luggage.',
    alt: 'Mercedes V-Class executive van for group chauffeur transfers across Austria',
    idealFor: ['Families with luggage or ski equipment', 'Small group airport transfers', 'Cross-border trips'],
    features: ['Extra luggage & ski/board space', 'Captain-style rear seating', 'Climate control', 'Child seats on request'],
  },
  {
    type: 'minibus',
    name: 'Minibus',
    passengers: 'Up to 16',
    luggage: 'Large capacity',
    description:
      'Mercedes Sprinter. For larger groups, corporate teams, and event transport across Austria and beyond.',
    alt: 'Mercedes Sprinter minibus for corporate and group transfers in Austria',
    idealFor: ['Corporate teams and roadshows', 'Wedding parties and group events', 'Large family or group transfers'],
    features: ['Large luggage capacity', 'Group seating for up to 16', 'Climate control', 'Available for multi-stop hire'],
  },
]

export const serviceTypes = [
  {
    title: 'Airport Transfers',
    description:
      'Flight tracking, meet & greet, and fixed pricing to and from Vienna, Salzburg, Graz, Linz, Innsbruck, and nearby international airports.',
    icon: 'plane',
    image: '/images/hero/airport-transfer.webp',
    alt: 'Vienna International Airport (VIE) private chauffeur transfer, Austria',
  },
  {
    title: 'City-to-City Transfers',
    description:
      'Direct, private transfers between any two points in Austria — no transfers, no shared rides.',
    icon: 'route',
    image: '/images/hero/alpine-road.webp',
    alt: 'Private city-to-city chauffeur transfer on an Austrian alpine road',
  },
  {
    title: 'Cross-Border Transfers',
    description:
      'Licensed for international pickups and drop-offs to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland/Liechtenstein.',
    icon: 'border',
    image: '/images/why-choose-us.webp',
    alt: 'Cross-border chauffeur service from Austria to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy and Switzerland',
  },
  {
    title: 'Hourly & Corporate Hire',
    description:
      'A driver and vehicle on standby for meetings, roadshows, and multi-stop business days — billed by the hour.',
    icon: 'briefcase',
    image: '/images/cta-chauffeur.webp',
    alt: 'Hourly corporate chauffeur hire in Vienna, Austria',
  },
  {
    title: 'Events & Weddings',
    description:
      'Punctual, discreet transport for weddings, conferences, and private events across the country.',
    icon: 'star',
    image: '/images/hero/vienna-palace.webp',
    alt: 'Wedding and event chauffeur transport at a historic Vienna palace, Austria',
  },
  {
    title: 'Ski & Alpine Transfers',
    description:
      'Winter-ready vehicles and experienced drivers for transfers to Tyrol, Salzburgerland, and Vorarlberg resorts.',
    icon: 'mountain',
    image: '/images/hero/ski-resort.webp',
    alt: 'Ski transfer chauffeur service to Tyrol, Salzburgerland and Vorarlberg, Austria',
  },
]
