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
  {
    slug: 'serfaus-fiss-ladis',
    name: 'Serfaus-Fiss-Ladis',
    region: 'Tirol',
    skiArea: 'Serfaus-Fiss-Ladis',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 25 Min.' },
      { name: 'Flughafen Zürich (ZRH, grenzüberschreitend)', driveTime: '~2 Std. 30 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → Serfaus-Fiss-Ladis',
      'Flughafen Zürich → Serfaus-Fiss-Ladis (grenzüberschreitend)',
    ],
    highlights: [
      'Eines der familienfreundlichsten Skigebiete Österreichs mit eigenen Kinderpisten und -liftkarten',
      'Das Dorf Serfaus verfügt über eine kostenlose unterirdische Dorfbahn, die Gäste autofrei zwischen Talstation und Ortszentrum bringt',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Serfaus, Fiss und Ladis.',
    attractions: [
      {
        name: 'Serfaus Dorfbahn',
        description: 'Eine unterirdische Standseilbahn, die das Ortszentrum autofrei hält — eine Seltenheit unter österreichischen Skiorten.',
      },
      {
        name: 'Fiss Panorama',
        description: 'Weite, sonnige Pisten oberhalb von Fiss mit einer der besten Beschneiungsabdeckungen in Tirol.',
      },
    ],
  },
  {
    slug: 'skiwelt',
    name: 'SkiWelt Wilder Kaiser-Brixental',
    region: 'Tirol',
    skiArea: 'SkiWelt Wilder Kaiser–Brixental',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 15 Min.' },
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 25 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~1 Std. 30 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → SkiWelt',
      'Flughafen Salzburg → SkiWelt',
      'Flughafen München → SkiWelt (grenzüberschreitend)',
    ],
    highlights: [
      'Eines der größten liftverbundenen Skigebiete Österreichs, das die Orte Söll, Ellmau, Going, Scheffau und Westendorf unterhalb des Wilden Kaisers verbindet',
      'Ein einziger Skipass gilt für alle verbundenen Orte — ideal, um von einem Standort aus das gesamte Netzwerk zu befahren',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Söll, Ellmau, Going, Scheffau und Westendorf.',
    attractions: [
      {
        name: 'Wilder Kaiser',
        description: 'Ein markantes Kalksteingebirge, die landschaftliche Kulisse des gesamten SkiWelt-Gebiets.',
      },
      {
        name: 'Hexenwasser Söll',
        description: 'Ein Familien- und Wassererlebnispark oberhalb von Söll, beliebt im Winter wie im Sommer.',
      },
    ],
  },
  {
    slug: 'alpbach',
    name: 'Alpbach',
    region: 'Tirol',
    skiArea: 'Ski Juwel Alpbachtal Wildschönau',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std.' },
      { name: 'Flughafen München (MUC)', driveTime: '~1 Std. 45 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → Alpbach',
      'Flughafen München → Alpbach (grenzüberschreitend)',
    ],
    highlights: [
      'Regelmäßig zu einem der schönsten Dörfer Österreichs gekürt, mit einer strengen örtlichen Bauordnung, die den traditionellen Holzhaus-Charakter bewahrt',
      'Auch ein bedeutender Konferenz- und Wissenschaftsstandort, Sitz des jährlichen Europäischen Forums Alpbach',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels und Chalets in Alpbach und im gesamten Alpbachtal.',
    attractions: [
      {
        name: 'Alpbacher Ortszentrum',
        description: 'Ein traditionelles Tiroler Dorf, bekannt für seine einheitliche Holzhaus-Architektur.',
      },
      {
        name: 'Ski Juwel Alpbachtal Wildschönau',
        description: 'Ein verbundenes Skigebiet, das Alpbach mit dem benachbarten Wildschönautal verbindet.',
      },
    ],
  },
  {
    slug: 'obergurgl-hochgurgl',
    name: 'Obergurgl-Hochgurgl',
    region: 'Tirol',
    skiArea: 'Ötztal (Obergurgl-Hochgurgl)',
    nearestAirports: [{ name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 30 Min.' }],
    popularRoutes: ['Flughafen Innsbruck → Obergurgl-Hochgurgl'],
    highlights: [
      'Obergurgl ist die höchstgelegene Pfarrgemeinde Österreichs, am Talschluss des Ötztals auf über 1.900 m',
      'Die Höhenlage sorgt für eine der zuverlässigsten Naturschneelagen aller österreichischen Skiorte',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Obergurgl und Hochgurgl.',
    attractions: [
      {
        name: 'Top Mountain Star',
        description: 'Ein markantes Gipfelrestaurant und Aussichtsplattform oberhalb von Hochgurgl, nahe dem Timmelsjoch-Pass nach Italien.',
      },
      {
        name: 'Ötztal-Straße',
        description: 'Die landschaftliche Anfahrtsstraße in eines der längsten Seitentäler Tirols, vorbei an Sölden.',
      },
    ],
  },
  {
    slug: 'hintertux-glacier',
    name: 'Hintertuxer Gletscher',
    region: 'Tirol',
    skiArea: 'Hintertuxer Gletscher (Zillertal)',
    nearestAirports: [{ name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 40 Min.' }],
    popularRoutes: ['Flughafen Innsbruck → Hintertuxer Gletscher'],
    highlights: [
      'Das einzige Skigebiet Österreichs, das an jedem einzelnen Tag des Jahres geöffnet ist, dank seines Gletschergeländes über 3.250 m',
      'Ganz am Talschluss des Zillertals, hinter Mayrhofen',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Hintertux und im oberen Zillertal.',
    attractions: [
      {
        name: 'Hintertuxer Gletscher',
        description: 'Österreichs einziges echtes Ganzjahresskigebiet, mit Sommer- und Winterskilauf auf denselben Pisten.',
      },
      {
        name: 'Tuxertal',
        description: 'Das hochalpine Tal zum Gletscher hinauf, vorbei an traditionellen Zillertaler Bauerndörfern.',
      },
    ],
  },
  {
    slug: 'bad-kleinkirchheim',
    name: 'Bad Kleinkirchheim',
    region: 'Kärnten',
    skiArea: 'Bad Kleinkirchheim / St. Oswald',
    nearestAirports: [{ name: 'Flughafen Klagenfurt (KLU)', driveTime: '~55 Min.' }],
    popularRoutes: ['Flughafen Klagenfurt → Bad Kleinkirchheim', 'Villach → Bad Kleinkirchheim'],
    highlights: [
      'Heimatort von Franz Klammer, Österreichs Olympiasieger in der Abfahrt, noch heute Austragungsort von Weltcup-Rennen',
      'Einer der wenigen österreichischen Skiorte, der Skifahren mit einem echten Thermenort verbindet',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels und Thermenresorts in Bad Kleinkirchheim und St. Oswald.',
    attractions: [
      {
        name: 'Römerbad Therme',
        description: 'Ein Thermalbad am Fuß der Pisten, das ganzjährig geöffnet ist.',
      },
      {
        name: 'Franz-Klammer-Piste',
        description: 'Die Weltcup-Abfahrtsstrecke, benannt nach dem berühmtesten Skifahrer des Ortes.',
      },
    ],
  },
  {
    slug: 'turracher-hoehe',
    name: 'Turracher Höhe',
    region: 'Kärnten / Steiermark',
    skiArea: 'Turracher Höhe',
    nearestAirports: [
      { name: 'Flughafen Klagenfurt (KLU)', driveTime: '~1 Std. 15 Min.' },
      { name: 'Flughafen Graz (GRZ)', driveTime: '~1 Std. 50 Min.' },
    ],
    popularRoutes: ['Flughafen Klagenfurt → Turracher Höhe', 'Flughafen Graz → Turracher Höhe'],
    highlights: [
      'Ein Passort an der Grenze zwischen Kärnten und der Steiermark, mit zwei Seen direkt im Skigebiet',
      'Kompakt und ski-in/ski-out, mit steilen Pisten, die direkt ins Dorf führen',
    ],
    hotelNote: 'Abholung und Ablieferung an Ski-in/Ski-out-Hotels auf der Turracher Höhe.',
    attractions: [
      {
        name: 'Turracher See & Schwarzsee',
        description: 'Zwei Bergseen im Resortgebiet, ungewöhnlicherweise direkt an den Pisten gelegen.',
      },
      {
        name: 'Nockberge',
        description: 'Das sanfte, waldarme Gebirge rund um das Resort.',
      },
    ],
  },
  {
    slug: 'nassfeld',
    name: 'Nassfeld',
    region: 'Kärnten',
    skiArea: 'Nassfeld-Pressegger See',
    nearestAirports: [{ name: 'Flughafen Klagenfurt (KLU)', driveTime: '~1 Std. 5 Min.' }],
    popularRoutes: ['Flughafen Klagenfurt → Nassfeld', 'Villach → Nassfeld'],
    highlights: [
      'Österreichs südlichstes großes Skigebiet, mit Südausrichtung für einige der sonnigsten Skibedingungen des Landes',
      'Kurze Fahrt zur italienischen Grenze, beliebt für einen grenzüberschreitenden Tagesausflug kombiniert mit Skifahren',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels im Resort Nassfeld und im benachbarten Tröpolach.',
    attractions: [
      {
        name: 'Pressegger See',
        description: 'Ein See im Tal unterhalb des Resorts, beliebt bei Sommergästen.',
      },
      {
        name: 'Gartnerkofel',
        description: 'Der Hauptgipfel des Skigebiets Nassfeld, auf dem Grat zur italienischen Grenze.',
      },
    ],
  },
  {
    slug: 'katschberg',
    name: 'Katschberg',
    region: 'Salzburg / Kärnten',
    skiArea: 'Katschberg-Aineck',
    nearestAirports: [{ name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 40 Min.' }],
    popularRoutes: ['Flughafen Salzburg → Katschberg'],
    highlights: [
      'Ein familienfreundliches Resort auf dem Katschbergpass zwischen Salzburg und Kärnten',
      'Angebunden an die weitere Tauernregion, mit einfachem Zugang zu den benachbarten Ski-Amadé- und Nockberge-Resorts',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels im Resortgebiet Katschberg.',
    attractions: [
      {
        name: 'Katschbergpass',
        description: 'Eine historische Alpenpassstraße, die das Land Salzburg mit Kärnten verbindet.',
      },
      {
        name: 'Aineck',
        description: 'Der Hausberg des Katschbergs, mit familienfreundlichem, überwiegend nordseitigem Gelände.',
      },
    ],
  },
  {
    slug: 'damuels-mellau',
    name: 'Damüls-Mellau',
    region: 'Vorarlberg',
    skiArea: 'Bregenzerwald (Damüls-Mellau)',
    nearestAirports: [{ name: 'Flughafen Zürich (ZRH, grenzüberschreitend)', driveTime: '~1 Std. 50 Min.' }],
    popularRoutes: ['Flughafen Zürich → Damüls-Mellau (grenzüberschreitend)', 'Bregenz → Damüls-Mellau'],
    highlights: [
      'Offiziell das schneereichste ganzjährig bewohnte Dorf der Alpen, mit einer durchschnittlichen Jahresschneemenge von über 9 Metern',
      'Teil des Bregenzerwalds, bekannt für traditionelle Holzarchitektur und Käsereidörfer',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Damüls und Mellau.',
    attractions: [
      {
        name: 'Damüls Ortszentrum',
        description: 'Eine der höchstgelegenen ganzjährig bewohnten Siedlungen Vorarlbergs, bekannt für außergewöhnlichen Naturschnee.',
      },
      {
        name: 'Bregenzerwald',
        description: 'Eine Region traditioneller Holzbauernhöfe und Käsereien zwischen den Skiorten.',
      },
    ],
  },
  {
    slug: 'warth-schroecken',
    name: 'Warth-Schröcken',
    region: 'Vorarlberg',
    skiArea: 'Warth-Schröcken (Ski Arlberg)',
    nearestAirports: [
      { name: 'Flughafen Zürich (ZRH, grenzüberschreitend)', driveTime: '~2 Std. 10 Min.' },
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 45 Min.' },
    ],
    popularRoutes: ['Flughafen Zürich → Warth-Schröcken (grenzüberschreitend)', 'Flughafen Innsbruck → Warth-Schröcken'],
    highlights: [
      'Über die Auenfeldjet-Seilbahn direkt an das Ski-Arlberg-Netzwerk angebunden, mit Zugang zu Lech-Zürs und St. Anton auf einem Skipass',
      'Eines der schneereichsten Dörfer Vorarlbergs, am Ursprung des Lechtals',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Warth und Schröcken.',
    attractions: [
      {
        name: 'Auenfeldjet',
        description: 'Die Seilbahnverbindung, die Warth-Schröcken direkt an das Ski-Arlberg-Netzwerk anbindet.',
      },
      {
        name: 'Lechtal',
        description: 'Das hochalpine Tal am Ursprung des Lech, das dem Resort seine Kulisse gibt.',
      },
    ],
  },
  {
    slug: 'montafon',
    name: 'Montafon',
    region: 'Vorarlberg',
    skiArea: 'Montafon (Silvretta Montafon / Golm / Gargellen)',
    nearestAirports: [{ name: 'Flughafen Zürich (ZRH, grenzüberschreitend)', driveTime: '~2 Std.' }],
    popularRoutes: ['Flughafen Zürich → Montafon (grenzüberschreitend)', 'Bregenz → Montafon'],
    highlights: [
      'Ein langes Alpental mit vier separaten, verbundenen Skigebieten — eine echte Geländeauswahl, ohne den Standort zu wechseln',
      'Basisorte sind Schruns und Gaschurn, beide eine traditionelle, ruhigere Alternative zu den belebteren Arlberg-Resorts in der Nähe',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Schruns, Gaschurn und im gesamten Montafon.',
    attractions: [
      {
        name: 'Silvretta Montafon',
        description: 'Das größte verbundene Skigebiet des Tals, oberhalb des Dorfes Schruns.',
      },
      {
        name: 'Bartholomäberg',
        description: 'Ein historisches Hangdorf mit Blick über das Montafon, eine der ältesten Siedlungen der Region.',
      },
    ],
  },
  {
    slug: 'hochkoenig',
    name: 'Hochkönig',
    region: 'Salzburg',
    skiArea: 'Ski Amadé — Hochkönig (Maria Alm / Dienten / Mühlbach)',
    nearestAirports: [{ name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 10 Min.' }],
    popularRoutes: ['Flughafen Salzburg → Hochkönig', 'Salzburg → Hochkönig'],
    highlights: [
      'Ein ruhigerer Verbund innerhalb des größeren Ski-Amadé-Netzwerks, unterhalb des markanten Hochkönig-Massivs',
      'Eine starke Basis traditioneller Salzburger Hotels und Pensionen über die drei verbundenen Orte hinweg',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Maria Alm, Dienten und Mühlbach am Hochkönig.',
    attractions: [
      {
        name: 'Hochkönig-Massiv',
        description: 'Ein markanter Kalksteinberg, einer der bekanntesten Gipfel der Salzburger Alpen.',
      },
      {
        name: 'Maria Alm',
        description: 'Ein traditioneller Wallfahrtsort und der Hauptausgangspunkt für das Skigebiet Hochkönig.',
      },
    ],
  },
  {
    slug: 'koenigsleiten-wildkogel',
    name: 'Königsleiten / Wildkogel-Arena',
    region: 'Salzburg',
    skiArea: 'Wildkogel-Arena',
    nearestAirports: [
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 40 Min.' },
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 30 Min.' },
    ],
    popularRoutes: ['Flughafen Salzburg → Königsleiten', 'Flughafen Innsbruck → Königsleiten'],
    highlights: [
      'Eine ruhigere Alternative zu den belebteren Zillertal-Resorts in der Nähe, in der benachbarten Wildkogel-Arena oberhalb von Wald im Pinzgau',
      'Sonnige, überwiegend südseitige Pisten mit Panoramablick auf die Zillertaler Alpen',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in Königsleiten und Wald im Pinzgau.',
    attractions: [
      {
        name: 'Wildkogel-Arena',
        description: 'Ein sonniges, südseitiges Skigebiet über dem Salzachtal, angrenzend an die Zillertal Arena.',
      },
      {
        name: 'Wald im Pinzgau',
        description: 'Das Talort an der Basis der Wildkogel-Arena-Liftanlagen.',
      },
    ],
  },
  {
    slug: 'gerlos',
    name: 'Gerlos',
    region: 'Tirol',
    skiArea: 'Zillertal Arena',
    nearestAirports: [{ name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 30 Min.' }],
    popularRoutes: ['Flughafen Innsbruck → Gerlos', 'Flughafen Salzburg → Gerlos'],
    highlights: [
      'Ein familienfreundliches Dorf innerhalb der Zillertal Arena, eines der größten verbundenen Skinetzwerke Österreichs',
      'Die Gerlospass-Straße verbindet direkt mit der Salzburger Seite der Zillertal Arena bei Königsleiten',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels im Dorf Gerlos.',
    attractions: [
      {
        name: 'Zillertal Arena',
        description: 'Ein großes verbundenes Skinetzwerk, das sowohl die Tiroler als auch die Salzburger Seite des Gerlospasses umfasst.',
      },
      {
        name: 'Gerlospass-Straße',
        description: 'Eine landschaftliche Alpenpassstraße, die das Zillertal mit dem Salzachtal verbindet.',
      },
    ],
  },
  {
    slug: 'filzmoos',
    name: 'Filzmoos',
    region: 'Salzburg',
    skiArea: 'Ski Amadé — Filzmoos',
    nearestAirports: [{ name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 20 Min.' }],
    popularRoutes: ['Flughafen Salzburg → Filzmoos', 'Salzburg → Filzmoos'],
    highlights: [
      'Ein traditionelles Skisprungdorf, das FIS-Skisprung-Weltcups unterhalb der Bischofsmütze ausgetragen hat',
      'Teil des größeren Ski-Amadé-Netzwerks, mit einem ruhigeren, familienfreundlichen Ortszentrum',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels im Dorf Filzmoos.',
    attractions: [
      {
        name: 'Bischofsmütze',
        description: 'Ein markanter, zerklüfteter Kalksteingipfel über Filzmoos, Teil des Dachsteingebirges.',
      },
      {
        name: 'Filzmoos Skisprungschanze',
        description: 'Eine Weltcup-taugliche Sprungschanze am Ortsrand.',
      },
    ],
  },
  {
    slug: 'achensee',
    name: 'Achensee',
    region: 'Tirol',
    skiArea: 'Rofan (Achensee)',
    nearestAirports: [{ name: 'Flughafen Innsbruck (INN)', driveTime: '~45 Min.' }],
    popularRoutes: ['Flughafen Innsbruck → Achensee', 'Innsbruck → Achensee'],
    highlights: [
      'Tirols größter See, kombiniert leichtes Skifahren im umliegenden Rofangebirge mit Seenlandschaft',
      'Eines der nächstgelegenen Resortgebiete zum Flughafen Innsbruck, praktisch für kürzere Aufenthalte',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in den Achensee-Uferorten.',
    attractions: [
      {
        name: 'Achensee',
        description: 'Tirols größter See, umrahmt vom Rofan- und Karwendelgebirge.',
      },
      {
        name: 'Rofan-Seilbahn',
        description: 'Eine Seilbahn zum Skigebiet Rofan über dem östlichen Seeufer.',
      },
    ],
  },
]
