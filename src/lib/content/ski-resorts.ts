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
  {
    slug: 'serfaus-fiss-ladis',
    name: 'Serfaus-Fiss-Ladis',
    region: 'Tyrol',
    skiArea: 'Serfaus-Fiss-Ladis',
    nearestAirports: [
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h 25m' },
      { name: 'Zurich Airport (ZRH, cross-border)', driveTime: '~2h 30m' },
    ],
    popularRoutes: [
      'Innsbruck Airport → Serfaus-Fiss-Ladis',
      'Zurich Airport → Serfaus-Fiss-Ladis (cross-border)',
    ],
    highlights: [
      'One of Austria\'s most family-oriented ski areas, with dedicated children\'s slopes and lift passes',
      'Serfaus village runs a free underground funicular to move visitors car-free between the valley station and the village center',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Serfaus, Fiss, and Ladis.',
    attractions: [
      {
        name: 'Serfaus Dorfbahn',
        description: 'An underground funicular railway that keeps the village center car-free, a rarity among Austrian resorts.',
      },
      {
        name: 'Fiss Panorama',
        description: 'Wide, sunny pistes above Fiss with some of the best snow-making coverage in the Tyrol.',
      },
    ],
  },
  {
    slug: 'skiwelt',
    name: 'SkiWelt Wilder Kaiser-Brixental',
    region: 'Tyrol',
    skiArea: 'SkiWelt Wilder Kaiser–Brixental',
    nearestAirports: [
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h 15m' },
      { name: 'Salzburg Airport (SZG)', driveTime: '~1h 25m' },
      { name: 'Munich Airport (MUC)', driveTime: '~1h 30m' },
    ],
    popularRoutes: [
      'Innsbruck Airport → SkiWelt',
      'Salzburg Airport → SkiWelt',
      'Munich Airport → SkiWelt (cross-border)',
    ],
    highlights: [
      'One of the largest lift-linked ski areas in Austria, spanning the villages of Söll, Ellmau, Going, Scheffau, and Westendorf beneath the Wilder Kaiser massif',
      'A single lift pass covers all connected villages, making it easy to base in one and ski across the whole network',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Söll, Ellmau, Going, Scheffau, and Westendorf.',
    attractions: [
      {
        name: 'Wilder Kaiser Massif',
        description: 'A dramatic limestone mountain range forming the scenic backdrop to the entire SkiWelt area.',
      },
      {
        name: 'Hexenwasser Söll',
        description: 'A family adventure and water-themed mountain park above Söll, popular in both winter and summer.',
      },
    ],
  },
  {
    slug: 'alpbach',
    name: 'Alpbach',
    region: 'Tyrol',
    skiArea: 'Ski Juwel Alpbachtal Wildschönau',
    nearestAirports: [
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h' },
      { name: 'Munich Airport (MUC)', driveTime: '~1h 45m' },
    ],
    popularRoutes: [
      'Innsbruck Airport → Alpbach',
      'Munich Airport → Alpbach (cross-border)',
    ],
    highlights: [
      'Regularly rated among the prettiest villages in Austria, with a strict local building code preserving its traditional wooden-chalet look',
      'Also a major conference and academic destination, home to the annual European Forum Alpbach',
    ],
    hotelNote: 'Pickup and drop-off at hotels and chalets throughout Alpbach and the wider Alpbachtal valley.',
    attractions: [
      {
        name: 'Alpbach Village Center',
        description: 'A traditional Tyrolean village known for its uniform wooden-chalet architecture.',
      },
      {
        name: 'Ski Juwel Alpbachtal Wildschönau',
        description: 'A connected ski area linking Alpbach with the neighboring Wildschönau valley.',
      },
    ],
  },
  {
    slug: 'obergurgl-hochgurgl',
    name: 'Obergurgl-Hochgurgl',
    region: 'Tyrol',
    skiArea: 'Ötztal (Obergurgl-Hochgurgl)',
    nearestAirports: [{ name: 'Innsbruck Airport (INN)', driveTime: '~1h 30m' }],
    popularRoutes: ['Innsbruck Airport → Obergurgl-Hochgurgl'],
    highlights: [
      'Obergurgl is the highest parish in Austria, at the head of the Ötztal valley above 1,900m',
      'High-altitude terrain gives it some of the most reliable natural snow cover of any Austrian resort',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Obergurgl and Hochgurgl.',
    attractions: [
      {
        name: 'Top Mountain Star',
        description: 'A striking summit restaurant and viewing platform above Hochgurgl, near the Timmelsjoch pass into Italy.',
      },
      {
        name: 'Ötztal Valley Road',
        description: 'The scenic approach road up one of Tyrol\'s longest side valleys, passing Sölden en route.',
      },
    ],
  },
  {
    slug: 'hintertux-glacier',
    name: 'Hintertux Glacier',
    region: 'Tyrol',
    skiArea: 'Hintertux Glacier (Zillertal)',
    nearestAirports: [{ name: 'Innsbruck Airport (INN)', driveTime: '~1h 40m' }],
    popularRoutes: ['Innsbruck Airport → Hintertux Glacier'],
    highlights: [
      'The only ski area in Austria open every single day of the year, thanks to its glacier terrain above 3,250m',
      'At the very head of the Zillertal valley, beyond Mayrhofen',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Hintertux and the upper Zillertal valley.',
    attractions: [
      {
        name: 'Hintertux Glacier',
        description: 'Austria\'s only true year-round ski area, with summer and winter skiing on the same slopes.',
      },
      {
        name: 'Tuxertal',
        description: 'The high alpine valley leading up to the glacier, past traditional Zillertal farming villages.',
      },
    ],
  },
  {
    slug: 'bad-kleinkirchheim',
    name: 'Bad Kleinkirchheim',
    region: 'Carinthia',
    skiArea: 'Bad Kleinkirchheim / St. Oswald',
    nearestAirports: [{ name: 'Klagenfurt Airport (KLU)', driveTime: '~55m' }],
    popularRoutes: ['Klagenfurt Airport → Bad Kleinkirchheim', 'Villach → Bad Kleinkirchheim'],
    highlights: [
      'Home resort of Franz Klammer, Austria\'s Olympic downhill champion, and still hosts World Cup races',
      'One of the few Austrian resorts combining skiing with a genuine thermal spa town',
    ],
    hotelNote: 'Pickup and drop-off at hotels and spa resorts throughout Bad Kleinkirchheim and St. Oswald.',
    attractions: [
      {
        name: 'Römerbad Thermal Spa',
        description: 'A thermal spa complex at the base of the slopes, open year-round.',
      },
      {
        name: 'Franz-Klammer-Piste',
        description: 'The World Cup downhill course named after the resort\'s most famous skier.',
      },
    ],
  },
  {
    slug: 'turracher-hoehe',
    name: 'Turracher Höhe',
    region: 'Carinthia / Styria',
    skiArea: 'Turracher Höhe',
    nearestAirports: [
      { name: 'Klagenfurt Airport (KLU)', driveTime: '~1h 15m' },
      { name: 'Graz Airport (GRZ)', driveTime: '~1h 50m' },
    ],
    popularRoutes: ['Klagenfurt Airport → Turracher Höhe', 'Graz Airport → Turracher Höhe'],
    highlights: [
      'A pass-top resort straddling the border between Carinthia and Styria, with two lakes inside the ski area itself',
      'Compact and ski-in/ski-out, with steep pistes running directly down to the village',
    ],
    hotelNote: 'Pickup and drop-off at ski-in/ski-out hotels throughout Turracher Höhe.',
    attractions: [
      {
        name: 'Turracher See & Schwarzsee',
        description: 'Two mountain lakes within the resort area, unusually located directly on the pistes.',
      },
      {
        name: 'Nockberge Mountains',
        description: 'The rolling, low-treeline mountain range surrounding the resort.',
      },
    ],
  },
  {
    slug: 'nassfeld',
    name: 'Nassfeld',
    region: 'Carinthia',
    skiArea: 'Nassfeld-Pressegger See',
    nearestAirports: [{ name: 'Klagenfurt Airport (KLU)', driveTime: '~1h 5m' }],
    popularRoutes: ['Klagenfurt Airport → Nassfeld', 'Villach → Nassfeld'],
    highlights: [
      'Austria\'s southernmost major ski area, with a south-facing aspect that gives it some of the sunniest ski conditions in the country',
      'A short drive from the Italian border, popular for combining skiing with a cross-border day trip',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout the Nassfeld resort and neighboring Tröpolach.',
    attractions: [
      {
        name: 'Pressegger See',
        description: 'A lake in the valley below the resort, popular for summer visitors.',
      },
      {
        name: 'Gartnerkofel',
        description: 'The main summit of the Nassfeld ski area, on the ridge line shared with Italy.',
      },
    ],
  },
  {
    slug: 'katschberg',
    name: 'Katschberg',
    region: 'Salzburg / Carinthia',
    skiArea: 'Katschberg-Aineck',
    nearestAirports: [{ name: 'Salzburg Airport (SZG)', driveTime: '~1h 40m' }],
    popularRoutes: ['Salzburg Airport → Katschberg'],
    highlights: [
      'A family-oriented resort straddling the Katschberg pass between Salzburg and Carinthia',
      'Linked into the wider Tauern region, with easy access to neighboring Ski Amadé and Nockberge resorts',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout the Katschberg resort area.',
    attractions: [
      {
        name: 'Katschberg Pass',
        description: 'A historic Alpine pass road connecting Salzburg state with Carinthia.',
      },
      {
        name: 'Aineck',
        description: 'The main ski mountain above the Katschberg, with family-friendly, mostly north-facing terrain.',
      },
    ],
  },
  {
    slug: 'damuels-mellau',
    name: 'Damüls-Mellau',
    region: 'Vorarlberg',
    skiArea: 'Bregenzerwald (Damüls-Mellau)',
    nearestAirports: [{ name: 'Zurich Airport (ZRH, cross-border)', driveTime: '~1h 50m' }],
    popularRoutes: ['Zurich Airport → Damüls-Mellau (cross-border)', 'Bregenz → Damüls-Mellau'],
    highlights: [
      'Officially recorded as the snowiest inhabited village in the Alps, with average annual snowfall exceeding 9 meters',
      'Part of the wider Bregenzerwald region, known for traditional wooden architecture and cheese-making villages',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Damüls and Mellau.',
    attractions: [
      {
        name: 'Damüls Village',
        description: 'One of the highest year-round settlements in Vorarlberg, famous for exceptional natural snowfall.',
      },
      {
        name: 'Bregenzerwald',
        description: 'A region of traditional wooden farmhouses and cheese dairies, dotted between the ski villages.',
      },
    ],
  },
  {
    slug: 'warth-schroecken',
    name: 'Warth-Schröcken',
    region: 'Vorarlberg',
    skiArea: 'Warth-Schröcken (Ski Arlberg)',
    nearestAirports: [
      { name: 'Zurich Airport (ZRH, cross-border)', driveTime: '~2h 10m' },
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h 45m' },
    ],
    popularRoutes: ['Zurich Airport → Warth-Schröcken (cross-border)', 'Innsbruck Airport → Warth-Schröcken'],
    highlights: [
      'Connected directly into the wider Ski Arlberg network via the Auenfeldjet cable car, giving access to Lech-Zürs and St. Anton on one lift pass',
      'One of the snowiest villages in Vorarlberg, at the head of the Lechtal valley',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Warth and Schröcken.',
    attractions: [
      {
        name: 'Auenfeldjet',
        description: 'The cable car link connecting Warth-Schröcken directly into the Ski Arlberg network.',
      },
      {
        name: 'Lechtal Valley',
        description: 'The high alpine valley at the source of the Lech river, framing the resort.',
      },
    ],
  },
  {
    slug: 'montafon',
    name: 'Montafon',
    region: 'Vorarlberg',
    skiArea: 'Montafon (Silvretta Montafon / Golm / Gargellen)',
    nearestAirports: [{ name: 'Zurich Airport (ZRH, cross-border)', driveTime: '~2h' }],
    popularRoutes: ['Zurich Airport → Montafon (cross-border)', 'Bregenz → Montafon'],
    highlights: [
      'A long alpine valley with four separate, linked ski areas, giving visitors a genuine choice of terrain without changing base',
      'Base villages include Schruns and Gaschurn, both a traditional, lower-key alternative to the busier Arlberg resorts nearby',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Schruns, Gaschurn, and the wider Montafon valley.',
    attractions: [
      {
        name: 'Silvretta Montafon',
        description: 'The valley\'s largest connected ski area, above the village of Schruns.',
      },
      {
        name: 'Bartholomäberg',
        description: 'A historic hillside village overlooking the Montafon valley, one of the oldest settlements in the region.',
      },
    ],
  },
  {
    slug: 'hochkoenig',
    name: 'Hochkönig',
    region: 'Salzburg',
    skiArea: 'Ski Amadé — Hochkönig (Maria Alm / Dienten / Mühlbach)',
    nearestAirports: [{ name: 'Salzburg Airport (SZG)', driveTime: '~1h 10m' }],
    popularRoutes: ['Salzburg Airport → Hochkönig', 'Salzburg → Hochkönig'],
    highlights: [
      'A quieter cluster within the wider Ski Amadé network, sitting below the dramatic Hochkönig massif',
      'A strong base of traditional Salzburg-state hotels and guesthouses across its three linked villages',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Maria Alm, Dienten, and Mühlbach am Hochkönig.',
    attractions: [
      {
        name: 'Hochkönig Massif',
        description: 'A striking limestone mountain, one of the most recognizable peaks in the Salzburg Alps.',
      },
      {
        name: 'Maria Alm Village',
        description: 'A traditional pilgrimage village and the main base for the Hochkönig ski area.',
      },
    ],
  },
  {
    slug: 'koenigsleiten-wildkogel',
    name: 'Königsleiten / Wildkogel-Arena',
    region: 'Salzburg',
    skiArea: 'Wildkogel-Arena',
    nearestAirports: [
      { name: 'Salzburg Airport (SZG)', driveTime: '~1h 40m' },
      { name: 'Innsbruck Airport (INN)', driveTime: '~1h 30m' },
    ],
    popularRoutes: ['Salzburg Airport → Königsleiten', 'Innsbruck Airport → Königsleiten'],
    highlights: [
      'A lower-key alternative to the busier Zillertal resorts nearby, in the neighboring Wildkogel-Arena above Wald im Pinzgau',
      'Sunny, mostly south-facing pistes with panoramic Zillertal Alps views',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Königsleiten and Wald im Pinzgau.',
    attractions: [
      {
        name: 'Wildkogel-Arena',
        description: 'A sunny, south-facing ski area above the Salzach valley, adjoining the Zillertal Arena.',
      },
      {
        name: 'Wald im Pinzgau',
        description: 'The valley village at the base of the Wildkogel-Arena lift system.',
      },
    ],
  },
  {
    slug: 'gerlos',
    name: 'Gerlos',
    region: 'Tyrol',
    skiArea: 'Zillertal Arena',
    nearestAirports: [{ name: 'Innsbruck Airport (INN)', driveTime: '~1h 30m' }],
    popularRoutes: ['Innsbruck Airport → Gerlos', 'Salzburg Airport → Gerlos'],
    highlights: [
      'A family-oriented village within the wider Zillertal Arena, one of Austria\'s largest connected ski networks',
      'The Gerlos Pass road links directly into the Salzburg-state side of the Zillertal Arena at Königsleiten',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Gerlos village.',
    attractions: [
      {
        name: 'Zillertal Arena',
        description: 'A large connected ski network spanning both the Tyrol and Salzburg sides of the Gerlos Pass.',
      },
      {
        name: 'Gerlos Pass Road',
        description: 'A scenic Alpine pass road connecting the Zillertal with the Salzach valley.',
      },
    ],
  },
  {
    slug: 'filzmoos',
    name: 'Filzmoos',
    region: 'Salzburg',
    skiArea: 'Ski Amadé — Filzmoos',
    nearestAirports: [{ name: 'Salzburg Airport (SZG)', driveTime: '~1h 20m' }],
    popularRoutes: ['Salzburg Airport → Filzmoos', 'Salzburg → Filzmoos'],
    highlights: [
      'A traditional ski-jumping village that has hosted FIS Ski Jumping World Cup events beneath the Bischofsmütze peak',
      'Part of the wider Ski Amadé network, with a quieter, family-oriented village center',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout Filzmoos village.',
    attractions: [
      {
        name: 'Bischofsmütze',
        description: 'A distinctive jagged limestone peak overlooking Filzmoos, part of the Dachstein range.',
      },
      {
        name: 'Filzmoos Ski Jump',
        description: 'A World Cup-standard ski jump hill on the edge of the village.',
      },
    ],
  },
  {
    slug: 'achensee',
    name: 'Achensee',
    region: 'Tyrol',
    skiArea: 'Rofan (Achensee)',
    nearestAirports: [{ name: 'Innsbruck Airport (INN)', driveTime: '~45m' }],
    popularRoutes: ['Innsbruck Airport → Achensee', 'Innsbruck → Achensee'],
    highlights: [
      'Tyrol\'s largest lake, combining light skiing on the surrounding Rofan range with lake-district scenery',
      'One of the closest resort areas to Innsbruck Airport, making it practical for shorter trips',
    ],
    hotelNote: 'Pickup and drop-off at hotels throughout the Achensee lakefront villages.',
    attractions: [
      {
        name: 'Achensee',
        description: 'Tyrol\'s largest lake, framed by the Rofan and Karwendel mountain ranges.',
      },
      {
        name: 'Rofan Cable Car',
        description: 'A cable car accessing the Rofan ski area above the lake\'s eastern shore.',
      },
    ],
  },
]
