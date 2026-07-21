export type Hotel = { name: string; area?: string }
export type Attraction = { name: string; description: string }

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
    region: 'Tirol',
    skiArea: 'Kitzbüheler Alpen (SkiWelt / KitzSki)',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std.' },
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 30 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~1 Std. 45 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → Kitzbühel',
      'Flughafen Salzburg → Kitzbühel',
      'Flughafen München → Kitzbühel (grenzüberschreitend)',
    ],
    highlights: [
      'Austragungsort des Hahnenkamm-Abfahrtsrennens und der berühmten Streif-Piste',
      'Mittelalterliche Altstadt am Fuß der Pisten',
    ],
    hotelNote: 'Abholung und Ablieferung an Chalets und Hotels in Kitzbühel und im benachbarten Kirchberg.',
    attractions: [
      {
        name: 'Streif (Hahnenkamm-Piste)',
        description: 'Die legendäre Weltcup-Abfahrtsstrecke, eine der anspruchsvollsten im Skirennsport.',
      },
      {
        name: 'Kitzbüheler Altstadt',
        description: 'Ein mittelalterliches Fußgängerzentrum am Fuß der Berge.',
      },
    ],
  },
  {
    slug: 'st-anton-am-arlberg',
    name: 'St. Anton am Arlberg',
    region: 'Tirol',
    skiArea: 'Ski Arlberg',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 10 Min.' },
      { name: 'Flughafen Zürich (ZRH, grenzüberschreitend)', driveTime: '~2 Std.' },
      { name: 'Flughafen München (MUC)', driveTime: '~2 Std. 30 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → St. Anton am Arlberg',
      'Flughafen Zürich → St. Anton am Arlberg (grenzüberschreitend)',
      'Flughafen München → St. Anton am Arlberg (grenzüberschreitend)',
    ],
    highlights: [
      'Teil von Ski Arlberg, einem der größten zusammenhängenden Skigebiete Österreichs',
      'Bekannt für Freeride-Terrain und lebhaftes Après-Ski',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in St. Anton, St. Christoph und Stuben.',
    attractions: [
      {
        name: 'Valluga-Seilbahn',
        description: 'Eine Seilbahn zu einem der höchsten Aussichtspunkte des Arlbergs, über 2.800 m.',
      },
      {
        name: 'St. Anton Ortszentrum',
        description: 'Das Herz der Après-Ski-Szene des Arlbergs, mit Bars und Restaurants.',
      },
    ],
  },
  {
    slug: 'lech-zuers',
    name: 'Lech-Zürs am Arlberg',
    region: 'Vorarlberg',
    skiArea: 'Ski Arlberg',
    nearestAirports: [
      { name: 'Flughafen Zürich (ZRH, grenzüberschreitend)', driveTime: '~2 Std.' },
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 30 Min.' },
      { name: 'Flughafen Friedrichshafen (FDH, grenzüberschreitend)', driveTime: '~1 Std. 30 Min.' },
    ],
    popularRoutes: [
      'Flughafen Zürich → Lech-Zürs (grenzüberschreitend)',
      'Flughafen Innsbruck → Lech-Zürs',
      'Bregenz → Lech-Zürs',
    ],
    highlights: [
      'Eines der exklusivsten Alpenresorts Österreichs, beliebt bei Königshäusern und VIPs',
      'Über die Flexenbahn mit dem gesamten Ski-Arlberg-Netz verbunden',
    ],
    hotelNote: 'Abholung und Ablieferung an Chalets und Fünf-Sterne-Hotels in Lech, Zürs und Oberlech.',
    attractions: [
      {
        name: 'Flexenbahn',
        description: 'Eine moderne Seilbahn, die Lech-Zürs direkt mit dem Ski-Arlberg-Netz verbindet.',
      },
      {
        name: 'Oberlech',
        description: 'Ein autofreier Ski-in/Ski-out-Weiler oberhalb von Lech, erreichbar per Seilbahn.',
      },
    ],
  },
  {
    slug: 'ischgl',
    name: 'Ischgl',
    region: 'Tirol',
    skiArea: 'Silvretta Arena',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 15 Min.' },
      { name: 'Flughafen Zürich (ZRH, grenzüberschreitend)', driveTime: '~2 Std. 15 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~2 Std. 30 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → Ischgl',
      'Flughafen Zürich → Ischgl (grenzüberschreitend)',
      'Flughafen München → Ischgl (grenzüberschreitend)',
    ],
    highlights: [
      'Die Silvretta Arena reicht über die Grenze bis nach Samnaun, Schweiz',
      'Bekannt für Saisoneröffnungs- und Abschlusskonzerte sowie lebhaftes Après-Ski',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Ischgl und im benachbarten Galtür.',
    attractions: [
      {
        name: 'Silvretta Arena',
        description: 'Ein hochalpines Skigebiet, das Ischgl (Österreich) mit Samnaun (Schweiz) verbindet.',
      },
      {
        name: 'Idalp',
        description: 'Ischgls zentrale Bergstation, per Gondel vom Ort aus erreichbar.',
      },
    ],
  },
  {
    slug: 'zell-am-see-kaprun',
    name: 'Zell am See - Kaprun',
    region: 'Salzburg',
    skiArea: 'Zell am See-Kaprun (Schmittenhöhe / Kitzsteinhorn)',
    nearestAirports: [
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std.' },
      { name: 'Flughafen München (MUC)', driveTime: '~2 Std.' },
    ],
    popularRoutes: [
      'Flughafen Salzburg → Zell am See-Kaprun',
      'Flughafen München → Zell am See-Kaprun (grenzüberschreitend)',
      'Salzburg → Zell am See-Kaprun',
    ],
    highlights: [
      'Skifahren auf der Schmittenhöhe mit Blick auf den Zeller See',
      'Ganzjähriges Gletscherskifahren auf dem Kitzsteinhorn',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels am Zeller-See-Ufer und im Ort Kaprun.',
    attractions: [
      {
        name: 'Kitzsteinhorn-Gletscher',
        description: 'Ein ganzjährig geöffnetes Gletscherskigebiet mit Aussichtsplattform über 3.000 m.',
      },
      {
        name: 'Zeller See',
        description: 'Der von Bergen umgebene See von Zell am See, mit Uferpromenade im Ort.',
      },
    ],
  },
  {
    slug: 'saalbach-hinterglemm',
    name: 'Saalbach-Hinterglemm',
    region: 'Salzburg',
    skiArea: 'Skicircus Saalbach-Hinterglemm-Leogang-Fieberbrunn',
    nearestAirports: [
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 15 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~2 Std. 15 Min.' },
    ],
    popularRoutes: [
      'Flughafen Salzburg → Saalbach-Hinterglemm',
      'Flughafen München → Saalbach-Hinterglemm (grenzüberschreitend)',
    ],
    highlights: [
      'Einer der größten zusammenhängenden Skizirkel Österreichs (Skicircus)',
      'Ein traditionelles Salzburger Dorf mit aktiver Sommer- und Wintersaison',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Saalbach, Hinterglemm und Leogang.',
    attractions: [
      {
        name: 'Skicircus Saalbach-Hinterglemm-Leogang-Fieberbrunn',
        description: 'Ein großer zusammenhängender Skizirkel über vier Ortschaften.',
      },
    ],
  },
  {
    slug: 'soelden',
    name: 'Sölden',
    region: 'Tirol',
    skiArea: 'Ötztal (Rettenbach- / Tiefenbachgletscher)',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 10 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~2 Std. 45 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → Sölden',
      'Flughafen München → Sölden (grenzüberschreitend)',
    ],
    highlights: [
      'Weltcup-Saisoneröffnungsrennen jeden Oktober auf dem Rettenbachgletscher',
      'Heimat der „007 Elements“-Installation im Ice Q-Restaurant, einem James-Bond-Drehort',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels im Ort Sölden und entlang des Ötztals.',
    attractions: [
      {
        name: 'Rettenbach- & Tiefenbachgletscher',
        description: 'Ganzjähriges Gletscherskifahren oberhalb von Sölden, verbunden durch den höchsten Straßentunnel der Alpen.',
      },
      {
        name: 'Ice Q & 007 Elements',
        description: 'Ein Bergrestaurant und James-Bond-„Spectre“-Ausstellung auf 3.048 m.',
      },
    ],
  },
]
