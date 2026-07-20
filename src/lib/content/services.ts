export type VehicleType = 'sedan' | 'van' | 'luxury' | 'minibus'

export const vehicles: {
  type: VehicleType
  name: string
  passengers: string
  luggage: string
  description: string
}[] = [
  {
    type: 'sedan',
    name: 'Business Sedan',
    passengers: 'Up to 3',
    luggage: '2–3 bags',
    description:
      'Mercedes E-Class or equivalent. The default choice for airport transfers and city travel — quiet, comfortable, on time.',
  },
  {
    type: 'luxury',
    name: 'Luxury Sedan',
    passengers: 'Up to 3',
    luggage: '2–3 bags',
    description:
      'Mercedes S-Class or BMW 7 Series. For clients, VIP guests, and occasions where first impressions matter.',
  },
  {
    type: 'van',
    name: 'Executive Van',
    passengers: 'Up to 7',
    luggage: '6–7 bags',
    description:
      'Mercedes V-Class. Ideal for families, small groups, and longer cross-border journeys with extra luggage.',
  },
  {
    type: 'minibus',
    name: 'Minibus',
    passengers: 'Up to 16',
    luggage: 'Large capacity',
    description:
      'Mercedes Sprinter. For larger groups, corporate teams, and event transport across Austria and beyond.',
  },
]

export const serviceTypes = [
  {
    title: 'Airport Transfers',
    description:
      'Flight tracking, meet & greet, and fixed pricing to and from Vienna, Salzburg, Graz, Linz, Innsbruck, and nearby international airports.',
    icon: 'plane',
    image: '/images/hero/airport-transfer.png',
  },
  {
    title: 'City-to-City Transfers',
    description:
      'Direct, private transfers between any two points in Austria — no transfers, no shared rides.',
    icon: 'route',
    image: '/images/hero/alpine-road.png',
  },
  {
    title: 'Cross-Border Transfers',
    description:
      'Licensed for international pickups and drop-offs to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland/Liechtenstein.',
    icon: 'border',
    image: '/images/why-choose-us.png',
  },
  {
    title: 'Hourly & Corporate Hire',
    description:
      'A driver and vehicle on standby for meetings, roadshows, and multi-stop business days — billed by the hour.',
    icon: 'briefcase',
    image: '/images/cta-chauffeur.png',
  },
  {
    title: 'Events & Weddings',
    description:
      'Punctual, discreet transport for weddings, conferences, and private events across the country.',
    icon: 'star',
    image: '/images/hero/vienna-palace.png',
  },
  {
    title: 'Ski & Alpine Transfers',
    description:
      'Winter-ready vehicles and experienced drivers for transfers to Tyrol, Salzburgerland, and Vorarlberg resorts.',
    icon: 'mountain',
    image: '/images/hero/ski-resort.png',
  },
]
