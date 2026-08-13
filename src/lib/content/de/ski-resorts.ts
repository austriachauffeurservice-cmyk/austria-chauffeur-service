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
  {
    slug: 'mayrhofen',
    name: 'Mayrhofen',
    region: 'Tirol',
    skiArea: 'Zillertal (Penken / Ahorn) & Hintertuxer Gletscher',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 10 Min.' },
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~2 Std. 30 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~2 Std. 30 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → Mayrhofen',
      'Flughafen München → Mayrhofen (grenzüberschreitend)',
      'Flughafen Salzburg → Mayrhofen',
    ],
    highlights: [
      'Tor zum Skigebiet Zillertal, inklusive ganzjährigem Gletscherskifahren am Hintertuxer Gletscher',
      'Die Harakiri-Piste ist mit 78 % Gefälle die steilste präparierte Piste Österreichs',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels im Ort Mayrhofen und entlang des Zillertals.',
    attractions: [
      {
        name: 'Hintertuxer Gletscher',
        description: 'Österreichs einziger ganzjährig geöffneter Skigletscher, an jedem Tag des Jahres befahrbar am Ende des Zillertals.',
      },
      {
        name: 'Penken',
        description: 'Das Hauptskigebiet oberhalb von Mayrhofen, per Seilbahn mit der weiteren Zillertal Arena verbunden.',
      },
      {
        name: 'Harakiri-Piste',
        description: 'Die steilste präparierte Skipiste Österreichs, eine Herausforderung für erfahrene Skifahrer.',
      },
    ],
  },
  {
    slug: 'seefeld',
    name: 'Seefeld in Tirol',
    region: 'Tirol',
    skiArea: 'Olympiaregion Seefeld',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~25 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~1 Std. 45 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → Seefeld',
      'Flughafen München → Seefeld (grenzüberschreitend)',
    ],
    highlights: [
      'Zweifacher Olympia-Austragungsort (1964 und 1976) für nordische Ski- und Biathlonwettbewerbe',
      'Ein autofreies, wellnessorientiertes Resort, das Langlauf mit luxuriösem Dorfflair verbindet',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels und Chalets im gesamten Ort Seefeld.',
    attractions: [
      {
        name: 'Olympia-Loipenzentrum',
        description: 'Die historische Langlauf- und Biathlonanlage, Schauplatz zweier Winterolympiaden.',
      },
      {
        name: 'Seefelder Ortszentrum',
        description: 'Ein elegantes Fußgängerdorf mit Luxusboutiquen, Spas und Bergblick.',
      },
    ],
  },
  {
    slug: 'bad-gastein',
    name: 'Bad Gastein',
    region: 'Salzburg',
    skiArea: 'Ski Amadé — Gasteinertal (Stubnerkogel / Schlossalm)',
    nearestAirports: [
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 20 Min.' },
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~2 Std. 15 Min.' },
    ],
    popularRoutes: [
      'Flughafen Salzburg → Bad Gastein',
      'Salzburg → Bad Gastein',
    ],
    highlights: [
      'Ein prachtvoller Belle-Époque-Kurort an einem Thermalwasserfall, seit dem 19. Jahrhundert Anziehungspunkt für Königshäuser',
      'Teil des Ski-Amadé-Verbunds, einem der größten zusammenhängenden Skigebiete der Alpen',
    ],
    hotelNote: 'Abholung und Ablieferung an Grandhotels und Kurresorts in Bad Gastein und im benachbarten Bad Hofgastein.',
    attractions: [
      {
        name: 'Gasteiner Wasserfall',
        description: 'Ein eindrucksvoller Alpenwasserfall, der mitten durch den historischen Kurort donnert.',
      },
      {
        name: 'Stubnerkogel & Felsentherme',
        description: 'Der Hausberg von Bad Gastein, direkt neben der berühmten Felsentherme an seinem Fuß.',
      },
      {
        name: 'Gasteiner Heilstollen',
        description: 'Einzigartige unterirdische Thermalstollen für therapeutische Anwendungen, eine Gasteiner Spezialität.',
      },
    ],
  },
  {
    slug: 'obertauern',
    name: 'Obertauern',
    region: 'Salzburg',
    skiArea: 'Obertauern (Tauernrunde)',
    nearestAirports: [
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 20 Min.' },
      { name: 'Flughafen Klagenfurt (KLU)', driveTime: '~1 Std. 30 Min.' },
    ],
    popularRoutes: [
      'Flughafen Salzburg → Obertauern',
      'Salzburg → Obertauern',
    ],
    highlights: [
      'Eines der schneesichersten Skigebiete Österreichs, zuverlässig geöffnet von Ende November bis Anfang Mai',
      'Die Tauernrunde erlaubt es, aus jeder Richtung zu jedem Punkt im Ort zurückzufahren',
    ],
    hotelNote: 'Abholung und Ablieferung an Ski-in/Ski-out-Hotels in ganz Obertauern — der Ort ist direkt um die Pisten herum gebaut.',
    attractions: [
      {
        name: 'Tauernrunde',
        description: 'Eine Rundpiste um das gesamte Skigebiet, die es erlaubt, den Berg in jede Richtung zu umrunden.',
      },
      {
        name: 'Seekareck & Gamskogel',
        description: 'Die beiden Hauptgipfel des Skigebiets Obertauern mit Panoramablick.',
      },
    ],
  },
  {
    slug: 'schladming',
    name: 'Schladming',
    region: 'Steiermark',
    skiArea: 'Ski Amadé — Planai / Hochwurzen / Dachsteingletscher / Hauser Kaibling',
    nearestAirports: [
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 30 Min.' },
      { name: 'Flughafen Graz (GRZ)', driveTime: '~1 Std. 30 Min.' },
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~2 Std. 15 Min.' },
    ],
    popularRoutes: [
      'Flughafen Salzburg → Schladming',
      'Flughafen Graz → Schladming',
      'Salzburg → Schladming',
    ],
    highlights: [
      'Austragungsort der FIS Alpinen Ski-Weltmeisterschaft und regelmäßig Schauplatz des Nachtslaloms auf der Planai',
      'Der Vier-Berge-Skiverbund Ski Amadé verbindet Planai, Hochwurzen, Hauser Kaibling und den Dachsteingletscher',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Schladming und den umliegenden Ski-Amadé-Ortschaften.',
    attractions: [
      {
        name: 'Planai-Nachtslalom',
        description: 'Das berühmte Nachtrennen auf der Weltcup-Piste der Planai, unter Flutlicht vor 45.000 Zuschauern.',
      },
      {
        name: 'Dachsteingletscher & Skywalk',
        description: 'Ein ganzjähriger Gletscher mit der markanten Glasboden-Aussichtsplattform auf über 2.700 m.',
      },
      {
        name: 'Schladminger Altstadt',
        description: 'Ein traditioneller steirischer Marktort mit gotischer Kirche und lebhaften Après-Ski-Lokalen.',
      },
    ],
  },
  {
    slug: 'flachau-wagrain',
    name: 'Flachau / Wagrain',
    region: 'Salzburg',
    skiArea: 'Snow Space Salzburg (Ski Amadé)',
    nearestAirports: [
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~45 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~2 Std.' },
    ],
    popularRoutes: [
      'Flughafen Salzburg → Flachau / Wagrain',
      'Flughafen München → Flachau / Wagrain (grenzüberschreitend)',
    ],
    highlights: [
      'Hermann-Maier-Weltcupstrecke und moderne Hochgeschwindigkeitslifte',
      'Direkte Verbindung zwischen Grießenkar, Wagrain und Alpendorf über die G-Link-Seilbahn',
    ],
    hotelNote: 'Abholung und Ablieferung an Familienhotels und Skihütten in Flachau, Wagrain und St. Johann.',
    attractions: [
      {
        name: 'G-Link Wagrain',
        description: 'Spektakuläre 3D-Seilbahn, die über das Tal hinweg die Gipfel von Flachau und Wagrain verbindet.',
      },
      {
        name: 'Hermann-Maier-Weltcuppiste',
        description: 'Der legendäre Weltcup-Slalomhang, benannt nach dem Salzburger Skichampion.',
      },
    ],
  },
]
