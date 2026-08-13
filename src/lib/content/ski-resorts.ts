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
  {
    slug: 'mayrhofen',
    name: 'Mayrhofen',
    region: 'Tyrol',
    skiArea: 'Zillertal (Penken / Ahorn) & Hintertux Glacier',
    nearestAirports: [
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h 10m' },
      { name: 'Salzburg Airport (SZG)', driveTime: '~2h 30m' },
      { name: 'Munich Airport (MUC)', driveTime: '~2h 30m' },
    ],
    popularRoutes: [
      'Innsbruck Airport → Mayrhofen',
      'Munich Airport → Mayrhofen (cross-border)',
      'Salzburg Airport → Mayrhofen',
    ],
    highlights: [
      'Gateway to the Zillertal ski area, including year-round glacier skiing at Hintertux',
      'The Harakiri black run is the steepest groomed piste in Austria, with a 78% gradient',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Mayrhofen village and along the Zillertal valley.',
    attractions: [
      {
        name: 'Hintertux Glacier',
        description: 'Austria\'s only year-round ski glacier, open every day of the year at the head of the Zillertal.',
      },
      {
        name: 'Penken Mountain',
        description: 'The main ski area above Mayrhofen, connected to the wider Zillertal Arena by lift.',
      },
      {
        name: 'Harakiri Piste',
        description: 'The steepest groomed ski run in Austria, an iconic challenge for advanced skiers.',
      },
    ],
  },
  {
    slug: 'seefeld',
    name: 'Seefeld in Tirol',
    region: 'Tyrol',
    skiArea: 'Seefeld Olympic Region',
    nearestAirports: [
      { name: 'Innsbruck Airport (INN)', driveTime: '~25m' },
      { name: 'Munich Airport (MUC)', driveTime: '~1h 45m' },
    ],
    popularRoutes: [
      'Innsbruck Airport → Seefeld',
      'Munich Airport → Seefeld (cross-border)',
    ],
    highlights: [
      'Twice an Olympic host venue (1964 and 1976) for Nordic skiing and biathlon events',
      'A car-free, spa-focused resort combining cross-country skiing with a luxury village atmosphere',
    ],
    hotelNote: 'Pickup and drop-off at hotels and chalets throughout Seefeld village.',
    attractions: [
      {
        name: 'Olympic Nordic Arena',
        description: 'The historic cross-country and biathlon venue used in two Winter Olympics.',
      },
      {
        name: 'Seefeld Village',
        description: 'An elegant pedestrian resort village with luxury boutiques, spas, and mountain views.',
      },
    ],
  },
  {
    slug: 'bad-gastein',
    name: 'Bad Gastein',
    region: 'Salzburg',
    skiArea: 'Ski Amadé — Gastein Valley (Stubnerkogel / Schlossalm)',
    nearestAirports: [
      { name: 'Salzburg Airport (SZG)', driveTime: '~1h 20m' },
      { name: 'Innsbruck Airport (INN)', driveTime: '~2h 15m' },
    ],
    popularRoutes: [
      'Salzburg Airport → Bad Gastein',
      'Salzburg → Bad Gastein',
    ],
    highlights: [
      'A grand Belle Époque spa town built on a thermal waterfall, attracting royalty since the 19th century',
      'Part of the Ski Amadé network, one of the largest linked ski areas in the Alps',
    ],
    hotelNote: 'Pickup and drop-off at grand hotels and spa resorts in Bad Gastein and neighboring Bad Hofgastein.',
    attractions: [
      {
        name: 'Bad Gastein Waterfall',
        description: 'A dramatic alpine waterfall thundering through the center of the historic spa town.',
      },
      {
        name: 'Stubnerkogel & Felsentherme',
        description: 'The main ski mountain above Bad Gastein, paired with the famous thermal spa at its base.',
      },
      {
        name: 'Gastein Valley Radon Thermal Galleries',
        description: 'Unique underground thermal galleries used for therapeutic treatment, a Gastein speciality.',
      },
    ],
  },
  {
    slug: 'obertauern',
    name: 'Obertauern',
    region: 'Salzburg',
    skiArea: 'Obertauern (Tauern Circuit)',
    nearestAirports: [
      { name: 'Salzburg Airport (SZG)', driveTime: '~1h 20m' },
      { name: 'Klagenfurt Airport (KLU)', driveTime: '~1h 30m' },
    ],
    popularRoutes: [
      'Salzburg Airport → Obertauern',
      'Salzburg → Obertauern',
    ],
    highlights: [
      'One of Austria\'s snowiest resorts, reliably open from late November to early May',
      'The Tauern Circuit allows skiers to ski back to any point in the village from any direction',
    ],
    hotelNote: 'Pickup and drop-off at ski-in/ski-out hotels throughout Obertauern — the village is built around the pistes.',
    attractions: [
      {
        name: 'Tauern Circuit',
        description: 'A circular ski route around the entire resort, allowing skiers to loop the mountain in any direction.',
      },
      {
        name: 'Seekareck & Gamskogel',
        description: 'The two main summit peaks of the Obertauern ski area, with panoramic views.',
      },
    ],
  },
  {
    slug: 'schladming',
    name: 'Schladming',
    region: 'Styria',
    skiArea: 'Ski Amadé — Planai / Hochwurzen / Dachstein-Glacier / Hauser Kaibling',
    nearestAirports: [
      { name: 'Salzburg Airport (SZG)', driveTime: '~1h 30m' },
      { name: 'Graz Airport (GRZ)', driveTime: '~1h 30m' },
      { name: 'Innsbruck Airport (INN)', driveTime: '~2h 15m' },
    ],
    popularRoutes: [
      'Salzburg Airport → Schladming',
      'Graz Airport → Schladming',
      'Salzburg → Schladming',
    ],
    highlights: [
      'Host of the FIS Alpine World Ski Championships and a regular Hahnenkamm-level night slalom on the Planai',
      'The four-mountain ski area Ski Amadé connects Planai, Hochwurzen, Hauser Kaibling and the Dachstein glacier',
    ],
    hotelNote: 'Pickup and drop-off at hotels in Schladming town and across the Ski Amadé resort villages.',
    attractions: [
      {
        name: 'Planai Night Slalom',
        description: 'The famous night race on the Planai World Cup piste, held under floodlights before 45,000 spectators.',
      },
      {
        name: 'Dachstein Glacier & Sky Walk',
        description: 'A year-round glacier with an iconic glass-floored Sky Walk viewing platform above 2,700m.',
      },
      {
        name: 'Schladming Old Town',
        description: 'A traditional Styrian market town with a Gothic church and lively après-ski restaurants.',
      },
    ],
  },
  {
    slug: 'flachau-wagrain',
    name: 'Flachau / Wagrain',
    region: 'Salzburg',
    skiArea: 'Snow Space Salzburg (Ski Amadé)',
    nearestAirports: [
      { name: 'Salzburg Airport (SZG)', driveTime: '~45m' },
      { name: 'Munich Airport (MUC)', driveTime: '~2h' },
    ],
    popularRoutes: [
      'Salzburg Airport → Flachau / Wagrain',
      'Munich Airport → Flachau / Wagrain (cross-border)',
    ],
    highlights: [
      'Hermann Maier World Cup course and high-speed modern lift infrastructure',
      'Direct connection between Grießenkar, Wagrain, and Alpendorf via G-Link cable car',
    ],
    hotelNote: 'Pickup and drop-off at family hotels and ski lodges in Flachau, Wagrain, and St. Johann.',
    attractions: [
      {
        name: 'G-Link Wagrain Cable Car',
        description: 'Spectacular 3D cable car spanning across the valley connecting Flachau and Wagrain peaks.',
      },
      {
        name: 'Hermann Maier World Cup Slope',
        description: 'The iconic World Cup slalom hill named after Salzburg’s legendary ski champion.',
      },
    ],
  },
]
