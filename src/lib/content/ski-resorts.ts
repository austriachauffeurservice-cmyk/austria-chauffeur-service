import type { Attraction, Hotel } from '@/lib/content/service-areas'

export type SkiResort = {
  slug: string
  name: string
  region: string
  skiArea: string
  nearestAirports: { name: string; driveTime: string }[]
  popularRoutes: string[]
  highlights: string[]
  hotels?: Hotel[]
  hotelNote?: string
  attractions?: Attraction[]
}

export const skiResorts: SkiResort[] = [
  {
    slug: 'kitzbuehel',
    name: 'Kitzbühel',
    region: 'Tyrol',
    skiArea: 'Kitzbüheler Alpen (SkiWelt / KitzSki)',
    nearestAirports: [
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h' },
      { name: 'Salzburg Airport (SZG)', driveTime: '~1h 30m' },
      { name: 'Munich Airport (MUC)', driveTime: '~1h 45m' },
    ],
    popularRoutes: [
      'Innsbruck Airport → Kitzbühel',
      'Salzburg Airport → Kitzbühel',
      'Munich Airport → Kitzbühel (cross-border)',
    ],
    highlights: [
      'Home to the Hahnenkamm downhill race and the famous Streif piste',
      'Medieval old town with colorful facades at the base of the slopes',
    ],
    hotelNote: 'Pickup and drop-off at chalets and hotels throughout Kitzbühel and neighboring Kirchberg.',
    attractions: [
      {
        name: 'Streif (Hahnenkamm Piste)',
        description: 'The legendary World Cup downhill course, one of the most demanding in ski racing.',
      },
      {
        name: 'Kitzbühel Old Town',
        description: 'A pedestrian medieval center with Gothic architecture at the foot of the mountains.',
      },
    ],
  },
  {
    slug: 'st-anton-am-arlberg',
    name: 'St. Anton am Arlberg',
    region: 'Tyrol',
    skiArea: 'Ski Arlberg',
    nearestAirports: [
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h 10m' },
      { name: 'Zurich Airport (ZRH, cross-border)', driveTime: '~2h' },
      { name: 'Munich Airport (MUC)', driveTime: '~2h 30m' },
    ],
    popularRoutes: [
      'Innsbruck Airport → St. Anton am Arlberg',
      'Zurich Airport → St. Anton am Arlberg (cross-border)',
      'Munich Airport → St. Anton am Arlberg (cross-border)',
    ],
    highlights: [
      'Part of Ski Arlberg, one of the largest connected ski areas in Austria',
      'Renowned for off-piste terrain and a lively après-ski scene',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout St. Anton, St. Christoph, and Stuben.',
    attractions: [
      {
        name: 'Valluga Cable Car',
        description: 'A cable car to one of the highest viewpoints in the Arlberg, above 2,800m.',
      },
      {
        name: 'St. Anton Village Center',
        description: 'The heart of the Arlberg\'s après-ski scene, lined with bars and restaurants.',
      },
    ],
  },
  {
    slug: 'lech-zuers',
    name: 'Lech-Zürs am Arlberg',
    region: 'Vorarlberg',
    skiArea: 'Ski Arlberg',
    nearestAirports: [
      { name: 'Zurich Airport (ZRH, cross-border)', driveTime: '~2h' },
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h 30m' },
      { name: 'Friedrichshafen Airport (FDH, cross-border)', driveTime: '~1h 30m' },
    ],
    popularRoutes: [
      'Zurich Airport → Lech-Zürs (cross-border)',
      'Innsbruck Airport → Lech-Zürs',
      'Bregenz → Lech-Zürs',
    ],
    highlights: [
      "One of Austria's most exclusive alpine resorts, favored by royalty and VIPs",
      'Connected to the wider Ski Arlberg network via the Flexenbahn',
    ],
    hotelNote: 'Pickup and drop-off at Lech, Zürs, and Oberlech chalets and five-star hotels.',
    attractions: [
      {
        name: 'Flexenbahn',
        description: 'A modern cable car linking Lech-Zürs directly into the Ski Arlberg network.',
      },
      {
        name: 'Oberlech',
        description: 'A car-free, ski-in/ski-out hamlet above Lech reached by cable car.',
      },
    ],
  },
  {
    slug: 'ischgl',
    name: 'Ischgl',
    region: 'Tyrol',
    skiArea: 'Silvretta Arena',
    nearestAirports: [
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h 15m' },
      { name: 'Zurich Airport (ZRH, cross-border)', driveTime: '~2h 15m' },
      { name: 'Munich Airport (MUC)', driveTime: '~2h 30m' },
    ],
    popularRoutes: [
      'Innsbruck Airport → Ischgl',
      'Zurich Airport → Ischgl (cross-border)',
      'Munich Airport → Ischgl (cross-border)',
    ],
    highlights: [
      'The Silvretta Arena ski area crosses the border into Samnaun, Switzerland',
      'Known for its season-opening and closing concerts and lively après-ski',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Ischgl and neighboring Galtür.',
    attractions: [
      {
        name: 'Silvretta Arena',
        description: 'A high-altitude ski area linking Ischgl (Austria) and Samnaun (Switzerland).',
      },
      {
        name: 'Idalp',
        description: "Ischgl's main mid-mountain hub, reached by gondola from the village.",
      },
    ],
  },
  {
    slug: 'zell-am-see-kaprun',
    name: 'Zell am See - Kaprun',
    region: 'Salzburg',
    skiArea: 'Zell am See-Kaprun (Schmittenhöhe / Kitzsteinhorn)',
    nearestAirports: [
      { name: 'Salzburg Airport (SZG)', driveTime: '~1h' },
      { name: 'Munich Airport (MUC)', driveTime: '~2h' },
    ],
    popularRoutes: [
      'Salzburg Airport → Zell am See-Kaprun',
      'Munich Airport → Zell am See-Kaprun (cross-border)',
      'Salzburg → Zell am See-Kaprun',
    ],
    highlights: [
      'Skiing on the Schmittenhöhe overlooking the Zeller See lake',
      'Year-round glacier skiing on the Kitzsteinhorn',
    ],
    hotelNote: 'Pickup and drop-off at hotels around the Zeller See lakefront and in Kaprun village.',
    attractions: [
      {
        name: 'Kitzsteinhorn Glacier',
        description: 'A glacier ski area open year-round, with a summit viewing platform above 3,000m.',
      },
      {
        name: 'Zeller See',
        description: "Zell am See's lake, framed by mountains, with a lakeside promenade in town.",
      },
    ],
  },
  {
    slug: 'saalbach-hinterglemm',
    name: 'Saalbach-Hinterglemm',
    region: 'Salzburg',
    skiArea: 'Skicircus Saalbach-Hinterglemm-Leogang-Fieberbrunn',
    nearestAirports: [
      { name: 'Salzburg Airport (SZG)', driveTime: '~1h 15m' },
      { name: 'Munich Airport (MUC)', driveTime: '~2h 15m' },
    ],
    popularRoutes: [
      'Salzburg Airport → Saalbach-Hinterglemm',
      'Munich Airport → Saalbach-Hinterglemm (cross-border)',
    ],
    highlights: [
      'One of the largest interconnected ski circuits in Austria (Skicircus)',
      'A traditional Salzburg-state village with an active summer and winter season',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Saalbach, Hinterglemm, and Leogang.',
    attractions: [
      {
        name: 'Skicircus Saalbach-Hinterglemm-Leogang-Fieberbrunn',
        description: 'A large interconnected ski circuit spanning four resort villages.',
      },
    ],
  },
  {
    slug: 'soelden',
    name: 'Sölden',
    region: 'Tyrol',
    skiArea: 'Ötztal (Rettenbach / Tiefenbach Glaciers)',
    nearestAirports: [
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h 10m' },
      { name: 'Munich Airport (MUC)', driveTime: '~2h 45m' },
    ],
    popularRoutes: [
      'Innsbruck Airport → Sölden',
      'Munich Airport → Sölden (cross-border)',
    ],
    highlights: [
      'Season-opening World Cup races on the Rettenbach glacier each October',
      'Home to the "007 Elements" installation at the Ice Q restaurant, a James Bond filming location',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Sölden village and along the Ötztal valley.',
    attractions: [
      {
        name: 'Rettenbach & Tiefenbach Glaciers',
        description: 'Year-round glacier skiing above Sölden, connected by the highest road tunnel in the Alps.',
      },
      {
        name: 'Ice Q & 007 Elements',
        description: 'A mountaintop restaurant and James Bond "Spectre" exhibit at 3,048m.',
      },
    ],
  },
]
