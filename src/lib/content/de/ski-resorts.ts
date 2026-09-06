export type Hotel = { name: string; area?: string }
export type Attraction = { name: string; description: string }

export type SkiResort = {
  slug: string
  name: string
  region: string
  skiArea: string
  nearestAirports: { name: string; driveTime: string; distance?: string }[]
  popularRoutes: string[]
  highlights: string[]
  hotels?: Hotel[]
  hotelNote?: string
  attractions?: Attraction[]
  airportGuidance?: { airport: string; note: string }[]
  // Flagship enrichment fields — optional so only specifically differentiated
  // resort pages (see the Aug 2026 ski-transfer page audit) render the
  // expanded sections; other resorts keep the original compact template.
  seoTitle?: string
  seoDescription?: string
  heroHeading?: string
  // Resort-specific hero subtitle — falls back to the shared generic line
  // when unset (see the Sept 2026 Filzmoos AEO/GEO audit).
  heroSubtitle?: string
  dropoffHint?: string
  routeOverview?: { start: string; destination: string; driveTime: string; service: string; vehicles: string; luggage: string }
  whyBookPoints?: { title: string; description: string }[]
  accommodationSection?: { heading: string; description: string }
  returnSection?: { heading: string; description: string }
  relatedResortRoutes?: { label: string; duration: string; href?: string }[]
  nearbyResorts?: { label: string; href: string }[]
  transferComparison?: { option: string; bestFor: string; tradeoff: string }[]
  familySection?: { heading: string; description: string }
  groupSection?: { heading: string; description: string }
  faqs?: { question: string; answer: string }[]
}

export const skiResorts: SkiResort[] = [
  {
    slug: 'kitzbuehel',
    name: 'Kitzbühel',
    region: 'Tirol',
    skiArea: 'Kitzbüheler Alpen (SkiWelt / KitzSki)',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 15 Min.' },
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 15 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~2 Std.' },
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
    hotelNote:
      'Direkte Abholung und Fahrt zu Chalets und Hotels in Kitzbühel und im benachbarten Kirchberg — geben Sie bei der Anfrage Ihre genaue Adresse an.',
    attractions: [
      {
        name: 'Streif (Hahnenkamm-Piste)',
        description: 'Die legendäre Weltcup-Abfahrtsstrecke, eine der anspruchsvollsten im Skirennsport.',
      },
      {
        name: 'Kitzbüheler Altstadt',
        description: 'Ein mittelalterliches Fußgängerzentrum am Fuß der Berge.',
      },
      {
        name: 'Schwarzsee',
        description: 'Ein malerischer See direkt außerhalb von Kitzbühel, beliebt für einen entspannten Zwischenstopp abseits der Pisten.',
      },
    ],
    airportGuidance: [
      {
        airport: 'Flughafen Innsbruck (INN)',
        note: 'Mit rund 90 km und etwa einer Stunde Fahrzeit ist der Flughafen Innsbruck die nächstgelegene der drei Optionen und für die meisten Kitzbühel-Buchungen die Standardwahl. Die Strecke führt ostwärts auf der A12 Inntalautobahn, bevor sie über die B170/B161 direkt in den Ort führt — die direkteste Flughafen-zu-Resort-Verbindung der Region. Landet Ihr Flug in Innsbruck, ist dies in der Regel der schnellste und einfachste Weg nach Kitzbühel oder ins benachbarte Kirchberg.',
      },
      {
        airport: 'Flughafen Salzburg (SZG)',
        note: 'Der Flughafen Salzburg liegt rund 75 km entfernt, mit einer typischen Fahrzeit von etwa 1 Stunde 15 Minuten über die Loferer Straße (B178) durch Unken und Waidring. Er ist eine praktische Alternative, wenn Ihre Flugverbindungen eher für Salzburg als für Innsbruck sprechen, oder wenn Sie eine Kitzbühel-Reise mit Zeit in Salzburg selbst verbinden möchten — die Fahrt verläuft dabei vollständig innerhalb Österreichs, ohne Grenzübertritt.',
      },
      {
        airport: 'Flughafen München (MUC)',
        note: 'Der Flughafen München liegt rund 165 km von Kitzbühel entfernt, mit einer Fahrzeit von etwa 2 Stunden über die A8 Richtung Inntaldreieck und die A93/B173 durch Kufstein. Er lohnt sich vor allem für Langstrecken- oder internationale Anschlüsse, die an den kleineren österreichischen Flughäfen nicht verfügbar sind — auch wenn es sich um eine längere, grenzüberschreitende Fahrt handelt. Reisende aus Übersee empfinden Münchens größeres Streckennetz oft als lohnenden Ausgleich für die zusätzliche Fahrzeit.',
      },
    ],
    seoTitle: 'Kitzbühel Flughafentransfer | Privater Ski-Chauffeurservice',
    seoDescription:
      'Privater Skitransfer nach Kitzbühel ab Flughafen Innsbruck, Salzburg und München. Tür-zu-Tür-Service, Festpreise und Platz für Ski und Snowboards.',
    heroHeading: 'Kitzbühel Skitransfers: Privater Flughafen-Chauffeurservice',
    dropoffHint:
      'Geben Sie Ihr Hotel, Chalet oder Ihre Adresse in Kitzbühel oder Kirchberg als Ziel an. Wir bestätigen Verfügbarkeit und Festpreis per E-Mail.',
    whyBookPoints: [
      {
        title: 'Direkt zu Ihrer Unterkunft',
        description: 'Kein Fahrzeugwechsel und kein Shuttle — direkte Fahrt vom Flughafen zu Ihrem Hotel, Chalet oder Ihrer Adresse in Kitzbühel oder Kirchberg.',
      },
      {
        title: 'Festpreis',
        description: 'Ihr Preis wird vor der Fahrt per E-Mail bestätigt, basierend auf Abholung, Ziel, Personenanzahl und Gepäck.',
      },
      {
        title: 'Platz für Ski & Snowboard',
        description: 'Zusätzlicher Stauraum für Ski- und Snowboardausrüstung ist auf Anfrage verfügbar.',
      },
      {
        title: 'Flughafenabholung',
        description: 'Teilen Sie uns Ihre Flugnummer mit, damit wir die Abholung auf Ihre Ankunft abstimmen können.',
      },
      {
        title: 'Für Familien & Gruppen',
        description: 'Executive Vans und Kleinbusse stehen für größere Gruppen sowie Gepäck und Skiausrüstung zur Verfügung.',
      },
    ],
    accommodationSection: {
      heading: 'Kitzbühel & Kirchberg: Transfer zu Hotel, Chalet & Ferienwohnung',
      description:
        'Sowohl Kitzbühel als auch das benachbarte Kirchberg ziehen während der gesamten Wintersaison Chalet- und Hotelgäste an, und Ihre genaue Unterkunft — nicht nur der Ortsname — bestimmt den besten Ablauf für Abholung und Fahrt. Wir fahren direkt zu Hotels, Chalets, Ferienwohnungen und Privatadressen in beiden Orten; geben Sie bei der Anfrage die genaue Adresse an, statt nur „Kitzbühel" oder „Kirchberg".',
    },
    returnSection: {
      heading: 'Kitzbühel → Flughafen: Rücktransfer',
      description:
        'Für Ihre Abreise funktioniert derselbe private Service in umgekehrter Richtung. Wir holen Sie direkt von Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in Kitzbühel oder Kirchberg ab und fahren Sie zum Flughafen Innsbruck, Salzburg oder München. Planen Sie für einen Flugabflug zusätzlichen Puffer für winterliche Straßenverhältnisse und den Check-in ein — teilen Sie uns Ihre Flugdaten bei der Buchung mit, damit wir die Abholzeit entsprechend planen.',
    },
    relatedResortRoutes: [
      { label: 'Flughafen Innsbruck → Kitzbühel', duration: 'ca. 1 Std.', href: '/de/routes/innsbruck-airport-to-kitzbuehel' },
      { label: 'Flughafen Salzburg → Kitzbühel', duration: 'ca. 1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-kitzbuehel' },
      { label: 'Flughafen München → Kitzbühel (grenzüberschreitend)', duration: 'ca. 2 Std.', href: '/de/routes/munich-airport-to-kitzbuehel' },
    ],
    transferComparison: [
      { option: 'Privater Chauffeur', bestFor: 'Familien, Gruppen und Skigepäck', tradeoff: 'Höhere Kosten als geteilte Optionen' },
      { option: 'Zug', bestFor: 'Kostenbewusste Einzelreisende', tradeoff: 'Umstieg am Bahnhof und eigenständiger Gepäcktransport' },
      { option: 'Mietwagen', bestFor: 'Unabhängiges und flexibles Reisen', tradeoff: 'Winterfahrten und Parken im Ort' },
      { option: 'Sammelshuttle', bestFor: 'Preisbewusste Reisende mit flexiblem Zeitplan', tradeoff: 'Gemeinsame Zwischenstopps und weniger Flexibilität' },
    ],
    familySection: {
      heading: 'Familien-Skitransfer nach Kitzbühel',
      description:
        'Reisen mit Kindern bringt zusätzliches Gepäck und Logistik in eine Skireise — Kindersitze, Sitzerhöhungen, Kinderwagen und Skiausrüstung zusätzlich zu den normalen Koffern. Geben Sie bei der Anfrage die Anzahl und das Alter der Kinder, benötigte Kindersitze sowie Ihr Gepäck und Ihre Skiausrüstung an, und wir stellen einen Executive Van oder Kleinbus mit ausreichend Platz für die ganze Familie bereit.',
    },
    groupSection: {
      heading: 'Gruppen- & Firmentransfers',
      description:
        'Kitzbühel ist auch ein beliebtes Ziel für Skigruppen, Firmenausflüge und Veranstaltungen. Für größere Gruppen können mehrere Fahrzeuge oder ein Kleinbus organisiert werden, mit einer auf die Ankunftszeiten Ihrer Gruppe abgestimmten Abholung. Geben Sie bei der Anfrage Ihre vollständige Reiseroute an — Personenanzahl, Gepäck und etwaige Zwischenstopps.',
    },
    faqs: [
      {
        question: 'Welcher Flughafen liegt am nächsten zu Kitzbühel?',
        answer: 'Der Flughafen Innsbruck liegt am nächsten, mit rund 90 km und etwa einer Stunde Fahrzeit.',
      },
      {
        question: 'Wie lange dauert der Transfer vom Flughafen Innsbruck nach Kitzbühel?',
        answer: 'Unter normalen Bedingungen etwa 1 Stunde. Winterwetter und Verkehr können die Fahrzeit verlängern.',
      },
      {
        question: 'Wie lange dauert der Transfer vom Flughafen Salzburg nach Kitzbühel?',
        answer: 'Etwa 1 Stunde 15 Minuten, auf einer Strecke, die vollständig innerhalb Österreichs verläuft.',
      },
      {
        question: 'Kann ich mit Ski und Snowboard reisen?',
        answer: 'Ja. Geben Sie Ihre Ski- oder Snowboardausrüstung bei der Buchung an, damit wir ein Fahrzeug mit ausreichend Platz einplanen können.',
      },
      {
        question: 'Können Sie mich von meinem Hotel oder Chalet in Kitzbühel oder Kirchberg abholen?',
        answer: 'Ja. Wir fahren direkt zu Hotels, Chalets, Ferienwohnungen und Privatadressen in beiden Orten — teilen Sie uns einfach die genaue Adresse mit.',
      },
      {
        question: 'Bieten Sie Rücktransfers zum Flughafen an?',
        answer: 'Ja. Wir holen Sie von Ihrer Unterkunft in Kitzbühel oder Kirchberg ab und fahren Sie zum Flughafen Innsbruck, Salzburg oder München.',
      },
      {
        question: 'Ist der Flughafen München eine sinnvolle Option für Kitzbühel?',
        answer:
          'Es ist eine längere, grenzüberschreitende Fahrt von rund 2 Stunden, kann sich aber für Langstrecken- oder internationale Flugverbindungen lohnen, die an den kleineren österreichischen Flughäfen nicht verfügbar sind.',
      },
      {
        question: 'Kann ich ein größeres Fahrzeug für eine Familie oder Gruppe buchen?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen je nach Verfügbarkeit für Familien und Gruppen zur Verfügung — geben Sie bei der Buchung die Personen- und Gepäckanzahl an.',
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
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 20 Min.' },
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
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 15 Min.' },
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
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 15 Min.' },
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
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 15 Min.' },
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
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std. 15 Min.' },
      { name: 'Flughafen Zürich (ZRH, grenzüberschreitend)', driveTime: '~2 Std. 30 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → Serfaus-Fiss-Ladis',
      'Flughafen Zürich → Serfaus-Fiss-Ladis (grenzüberschreitend)',
    ],
    highlights: [
      'Familienfreundliches Skigebiet mit speziellen Angeboten für Kinder und Familien',
      'Serfaus verfügt über eine kostenlose unterirdische Dorfbahn, die das autofreie Ortszentrum mit wichtigen Bereichen des Dorfes verbindet',
    ],
    hotelNote:
      'Direkte Abholung und Fahrt zu Hotels, Chalets und Ferienwohnungen in Serfaus, Fiss und Ladis. Auch Privatadressen können direkt angefahren werden.',
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
    seoTitle: 'Skitransfer nach Serfaus-Fiss-Ladis | Privater Flughafentransfer',
    seoDescription:
      'Privater Skitransfer nach Serfaus-Fiss-Ladis ab Innsbruck und Zürich. Tür-zu-Tür-Service, wintertaugliche Fahrzeuge, Platz für Ski & Snowboards und Festpreis.',
    dropoffHint: 'Geben Sie Ihren Abholort und Ihr Ziel ein. Wir bestätigen Verfügbarkeit und Festpreis per E-Mail.',
    routeOverview: {
      start: 'Flughafen Innsbruck (INN)',
      destination: 'Serfaus-Fiss-Ladis',
      driveTime: 'ca. 1 Std. 15 Min.',
      service: 'Privater Transfer, Tür-zu-Tür',
      vehicles: 'Limousine, Executive Van, Kleinbus',
      luggage: 'Ski-, Snowboard- und normales Reisegepäck',
    },
    whyBookPoints: [
      {
        title: 'Direkt zur Unterkunft',
        description: 'Kein Umsteigen und kein zusätzlicher Shuttle.',
      },
      {
        title: 'Festpreis',
        description: 'Preis vor der Fahrt bestätigt.',
      },
      {
        title: 'Ski & Snowboard',
        description: 'Geeignete Fahrzeuge für Wintersportausrüstung.',
      },
      {
        title: 'Flughafen-Abholung',
        description: 'Direkter Treffpunkt nach Ihrer Ankunft.',
      },
      {
        title: 'Für Familien & Gruppen',
        description: 'Vans und Kleinbusse für mehrere Personen und Gepäck.',
      },
    ],
    accommodationSection: {
      heading: 'Hotel-, Chalet- & Ferienwohnung-Transfer',
      description:
        'Wir bringen Sie direkt vom Flughafen zu Ihrer Unterkunft in Serfaus, Fiss oder Ladis. Kein Umsteigen und kein zusätzlicher Shuttle vom Bahnhof — Ihr Fahrzeug bringt Sie direkt zur angegebenen Adresse.',
    },
    returnSection: {
      heading: 'Rücktransfer zum Flughafen',
      description:
        'Am Ende Ihres Skiurlaubs holen wir Sie direkt an Ihrem Hotel, Chalet oder Ihrer Ferienwohnung ab und bringen Sie zum Flughafen Ihrer Wahl — Innsbruck oder Zürich.',
    },
    relatedResortRoutes: [
      { label: 'Flughafen Innsbruck → Serfaus-Fiss-Ladis', duration: 'ca. 1 Std. 15 Min.', href: '/de/routes/innsbruck-airport-to-serfaus-fiss-ladis' },
      { label: 'Flughafen Zürich → Serfaus-Fiss-Ladis (grenzüberschreitend)', duration: 'ca. 2 Std. 30 Min.' },
    ],
    faqs: [
      {
        question: 'Wie lange dauert der Transfer vom Flughafen Innsbruck nach Serfaus?',
        answer:
          'Die Fahrt dauert normalerweise etwa 1 Stunde und 15 Minuten. Im Winter können Schnee, Straßenverhältnisse und starker Reiseverkehr die Fahrzeit verlängern.',
      },
      {
        question: 'Bieten Sie Transfers nach Serfaus, Fiss und Ladis an?',
        answer: 'Ja. Wir fahren direkt zu Hotels, Chalets, Ferienwohnungen und Privatadressen in Serfaus, Fiss und Ladis.',
      },
      {
        question: 'Kann ich Ski und Snowboard mitnehmen?',
        answer: 'Ja. Geben Sie Ihre Ski- oder Snowboardausrüstung bei der Buchung an, damit wir ein geeignetes Fahrzeug einplanen können.',
      },
      {
        question: 'Bieten Sie Transfers vom Flughafen Zürich an?',
        answer: 'Ja, Transfers von Zürich nach Serfaus-Fiss-Ladis können als grenzüberschreitende Privatfahrt arrangiert werden.',
      },
      {
        question: 'Gibt es auch Rücktransfers?',
        answer: 'Ja. Wir holen Sie direkt an Ihrer Unterkunft ab und bringen Sie zum vereinbarten Flughafen oder Zielort.',
      },
      {
        question: 'Welches Fahrzeug eignet sich für eine Familie?',
        answer:
          'Für Familien mit mehreren Koffern und Wintersportausrüstung eignet sich häufig ein Executive Van. Für größere Gruppen steht ein Kleinbus zur Verfügung.',
      },
      {
        question: 'Wie wird der Preis festgelegt?',
        answer: 'Sie erhalten vor der Fahrt einen Festpreis per E-Mail, basierend auf Abholort, Ziel, Reisedatum, Fahrgastzahl und Fahrzeug.',
      },
    ],
  },
  {
    slug: 'skiwelt',
    name: 'SkiWelt Wilder Kaiser-Brixental',
    region: 'Tirol',
    skiArea: 'SkiWelt Wilder Kaiser–Brixental',
    nearestAirports: [
      { name: 'Flughafen Innsbruck (INN)', driveTime: '~1 Std.' },
      { name: 'Flughafen Salzburg (SZG)', driveTime: '~1 Std. 25 Min.' },
      { name: 'Flughafen München (MUC)', driveTime: '~1 Std. 30 Min.' },
    ],
    popularRoutes: [
      'Flughafen Innsbruck → SkiWelt Wilder Kaiser-Brixental',
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
    seoTitle: 'Söll & SkiWelt Flughafentransfer | Privater Ski-Chauffeur',
    seoDescription:
      'Private Flughafentransfers nach Söll, Ellmau, Going, Scheffau und Westendorf — den fünf Orten der SkiWelt. Festpreise, winterfeste Fahrzeuge.',
    heroHeading: 'SkiWelt Transferservice — Söll, Ellmau, Going, Scheffau & Westendorf',
    heroSubtitle:
      'Private Transfers nach Söll, Ellmau, Going, Scheffau und Westendorf — den fünf verbundenen Orten der SkiWelt Wilder Kaiser-Brixental, einem der größten Skigebiete Österreichs.',
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
    airportGuidance: [
      {
        airport: 'Flughafen Salzburg (SZG)',
        note: 'Der Flughafen Salzburg ist der praktische Ausgangspunkt für den Katschberg, rund 1 Stunde 40 Minuten entfernt über die A10 Tauernautobahn — dieselbe Strecke, die auch für unsere Transfers nach Bad Gastein und Obertauern genutzt wird, bevor es weiter über die Tauernstrecke geht. Ein privater Chauffeur holt Sie nach der Ankunft ab und bringt Sie direkt zu Ihrem Hotel oder Chalet am Katschberg, mit winterfesten Fahrzeugen und Platz für Skiausrüstung für die letzte Etappe über den Pass. Derselbe Service gilt auch für Ihren Rücktransfer zum Flughafen Salzburg.',
      },
    ],
    nearbyResorts: [
      { label: 'Bad Gastein', href: '/de/ski-transfers/bad-gastein' },
      { label: 'Obertauern', href: '/de/ski-transfers/obertauern' },
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
    airportGuidance: [
      {
        airport: 'Flughafen Salzburg (SZG)',
        note: 'Der Flughafen Salzburg ist der nächstgelegene große Flughafen für Hochkönig, rund 1 Stunde 10 Minuten entfernt — eine der kürzeren Flughafen-Resort-Fahrten im Ski-Amadé-Netzwerk. Ein privater Chauffeur empfängt Sie nach der Ankunft und bringt Sie direkt zu Ihrem Hotel oder Chalet in Maria Alm, Dienten oder Mühlbach am Hochkönig, mit winterfesten Fahrzeugen und Platz für Skiausrüstung. Derselbe Service gilt auch für Ihren Rücktransfer zum Flughafen Salzburg für Ihren Rückflug.',
      },
    ],
    nearbyResorts: [
      { label: 'Flachau/Wagrain', href: '/de/ski-transfers/flachau-wagrain' },
      { label: 'Obertauern', href: '/de/ski-transfers/obertauern' },
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
    nearestAirports: [{ name: 'Flughafen Salzburg (SZG)', driveTime: '~50 Min.', distance: '~75 km' }],
    popularRoutes: ['Flughafen Salzburg → Filzmoos', 'Salzburg → Filzmoos'],
    highlights: [
      'Ein kompaktes, familienfreundliches Skigebiet mit rund 20 km Pisten auf Rossbrand und Großberg — leicht überschaubar für Anfänger und Familien',
      'Teil der Salzburger Sportwelt innerhalb des größeren Ski-Amadé-Netzwerks (860 km Pisten in 25 Skigebieten)',
      'Ein traditionelles Skisprungdorf, das FIS-Skisprung-Weltcups unterhalb der Bischofsmütze ausgetragen hat',
    ],
    hotelNote:
      'Direkte Abholung und Fahrt zu Hotels, Chalets, Ferienwohnungen und Privatadressen in Filzmoos und der umliegenden Resortregion.',
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
    seoTitle: 'Flughafen Salzburg nach Filzmoos Skitransfer | Privater Chauffeur',
    seoDescription:
      'Privater Skitransfer vom Flughafen Salzburg nach Filzmoos zum Festpreis, mit Tür-zu-Tür-Service, Platz für Skigepäck, Flugverfolgung und Fahrzeugen für Familien und Gruppen.',
    heroHeading: 'Flughafen Salzburg nach Filzmoos Skitransfer',
    heroSubtitle:
      'Private Tür-zu-Tür-Chauffeurtransfers vom Flughafen Salzburg und aus der Stadt Salzburg nach Filzmoos, mit Festpreisangeboten, Flugverfolgung und Platz für Ski und Snowboards.',
    dropoffHint:
      'Geben Sie Ihren Abholort am Flughafen Salzburg, in Salzburg oder anderswo an — wir bestätigen Verfügbarkeit und einen Festpreis für Ihren Filzmoos-Transfer per E-Mail.',
    routeOverview: {
      start: 'Flughafen Salzburg (SZG)',
      destination: 'Filzmoos',
      driveTime: '~50 Min.',
      service: 'Privat, Tür zu Tür',
      vehicles: 'Limousine, Executive Van oder Kleinbus',
      luggage: 'Ski, Snowboard und normales Reisegepäck',
    },
    whyBookPoints: [
      {
        title: 'Direkt zu Ihrer Unterkunft',
        description: 'Kein Fahrzeugwechsel und kein Shuttle — direkte Fahrt vom Flughafen Salzburg zu Ihrem Hotel, Chalet oder Ihrer Adresse in Filzmoos.',
      },
      {
        title: 'Festpreis',
        description: 'Der Preis wird vor der Fahrt bestätigt, basierend auf Strecke, Fahrzeug und Gepäck.',
      },
      {
        title: 'Platz für Ski & Snowboard',
        description: 'Zusätzlicher Stauraum für Ski- und Snowboardausrüstung ist auf Anfrage verfügbar.',
      },
      {
        title: 'Flughafenabholung',
        description: 'Teilen Sie uns Ihre Flugnummer mit, damit wir die Abholung auf Ihre Ankunft abstimmen können.',
      },
      {
        title: 'Für Familien & Gruppen',
        description: 'Executive Vans und Kleinbusse stehen für größere Gruppen sowie Gepäck und Skiausrüstung zur Verfügung.',
      },
    ],
    airportGuidance: [
      {
        airport: 'Flughafen Salzburg (SZG)',
        note: 'Der Flughafen Salzburg ist das etablierte Tor nach Filzmoos — rund 75 km und etwa 50 Minuten entfernt über die A10 Tauernautobahn, mit Ausfahrt Eben im Pongau und weiteren rund 11 km ins Ennstal, dieselbe Strecke, die auch für Transfers ab Salzburg selbst genutzt wird. Es ist der nächstgelegene größere Flughafen zu Filzmoos und die Standardwahl für die meisten Buchungen.',
      },
    ],
    accommodationSection: {
      heading: 'Filzmoos: Transfer zu Hotel & Chalet',
      description:
        'Wir fahren direkt zu Hotels, Chalets, Ferienwohnungen und Privatadressen in Filzmoos und der umliegenden Resortregion — geben Sie bei der Anfrage Ihre genaue Adresse an.',
    },
    returnSection: {
      heading: 'Filzmoos → Flughafen Salzburg: Rücktransfer',
      description:
        'Derselbe private Service funktioniert auch für Ihre Abreise in umgekehrter Richtung. Wir holen Sie direkt von Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in Filzmoos ab und fahren Sie zum Flughafen Salzburg oder nach Salzburg. Teilen Sie uns Ihre Flugdaten bei der Buchung mit, damit wir die Abholzeit um winterliche Straßenverhältnisse und den Check-in herum planen.',
    },
    relatedResortRoutes: [
      { label: 'Flughafen Salzburg → Filzmoos', duration: '~50 Min.', href: '/de/routes/salzburg-airport-to-filzmoos' },
      { label: 'Salzburg → Filzmoos', duration: '~50 Min.', href: '/de/routes/salzburg-to-filzmoos' },
    ],
    transferComparison: [
      { option: 'Privater Chauffeur', bestFor: 'Tür zu Tür, Familien, Gruppen und Skigepäck', tradeoff: 'Höhere Kosten als ein Sammelshuttle' },
      { option: 'Sammel-Skishuttle', bestFor: 'Preisbewusste Reisende mit festem Zeitplan', tradeoff: 'Gemeinsame Zwischenstopps, feste Abfahrtszeit und weniger Flexibilität' },
    ],
    familySection: {
      heading: 'Familien-Skitransfer nach Filzmoos',
      description:
        'Filzmoos ist ein beliebtes Ziel für Familien-Skiurlaube, und Reisen mit Kindern bringt Kindersitze, Sitzerhöhungen und zusätzliches Gepäck neben der Skiausrüstung mit sich. Geben Sie bei der Anfrage die Anzahl und das Alter der Kinder, benötigte Kindersitze sowie Ihr Gepäck und Ihre Skiausrüstung an, und wir stellen einen Executive Van oder Kleinbus mit ausreichend Platz bereit.',
    },
    groupSection: {
      heading: 'Gruppentransfers nach Filzmoos',
      description:
        'Diese Strecke eignet sich auch für Skigruppen und größere Gesellschaften. Für größere Gruppen können mehrere Fahrzeuge oder ein Kleinbus organisiert werden — geben Sie bei der Anfrage Ihre vollständige Reiseroute, Personenanzahl und Ihr Gepäck an.',
    },
    faqs: [
      {
        question: 'Wie weit ist Filzmoos vom Flughafen Salzburg entfernt?',
        answer: 'Filzmoos liegt etwa 75 km vom Flughafen Salzburg (SZG) entfernt. Ein privater Transfer dauert typischerweise rund 50 Minuten, wobei Schnee, Verkehr und Straßenverhältnisse die Fahrzeit verlängern können.',
      },
      {
        question: 'Welcher Flughafen ist für Filzmoos am besten geeignet?',
        answer: 'Der Flughafen Salzburg ist der nächstgelegene und praktischste Flughafen für Filzmoos, rund 75 km entfernt. Innsbruck und München sind beide deutlich weiter entfernt und bedeuten einen längeren Transfer.',
      },
      {
        question: 'Wie lange dauert der Transfer vom Flughafen Salzburg nach Filzmoos?',
        answer: 'Unter normalen Bedingungen etwa 50 Minuten. Winterwetter und Verkehr können die Fahrzeit verlängern.',
      },
      {
        question: 'Ist Filzmoos gut für Familien geeignet?',
        answer: 'Ja. Filzmoos ist ein kompaktes, leicht überschaubares Skigebiet, das bei Familien beliebt ist, mit langjähriger Skischultradition und größtenteils anfänger- und fortgeschrittenenfreundlichen Pisten auf Rossbrand und Großberg.',
      },
      {
        question: 'Was passiert, wenn mein Flug Verspätung hat?',
        answer: 'Geben Sie Ihre Flugnummer bei der Buchung an — Ihr Chauffeur verfolgt die Ankunft automatisch und passt die Abholzeit ohne Aufpreis an.',
      },
      {
        question: 'Können Sie mich vom Flughafen Salzburg abholen?',
        answer: 'Ja. Ihr Chauffeur empfängt Sie nach der Ankunft und fährt Sie direkt zu Ihrem Hotel, Chalet oder Ihrer Privatadresse in Filzmoos.',
      },
      {
        question: 'Kann ich Ski und Snowboard mitnehmen?',
        answer: 'Ja. Geben Sie Ihre Ski- oder Snowboardausrüstung bei der Buchung an, damit wir ein Fahrzeug mit ausreichend Platz einplanen können.',
      },
      {
        question: 'Bieten Sie Transfers für Familien an?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen je nach Verfügbarkeit für Familien und Gruppen zur Verfügung.',
      },
      {
        question: 'Bieten Sie einen Rücktransfer an?',
        answer: 'Ja — einfache Fahrten und Rückfahrten können beide angefragt werden.',
      },
      {
        question: 'Bieten Sie Kindersitze an?',
        answer: 'Ja. Kindersitze oder Sitzerhöhungen sind auf Anfrage verfügbar — geben Sie Alter und Körpergröße Ihrer Kinder bei der Buchung an.',
      },
      {
        question: 'Fahren Sie auch an Winterwochenenden und Feiertagen?',
        answer: 'Ja, je nach Verfügbarkeit. Wir empfehlen eine frühzeitigere Buchung während der Hauptsaison, besonders rund um Samstags-Wechseltage und Schulferien.',
      },
      {
        question: 'Gibt es einen direkten Transfer ab Salzburg selbst, nicht nur ab dem Flughafen?',
        answer: 'Ja — derselbe private Transfer ist auch ab Salzburg, Hotels oder Privatadressen verfügbar, auf derselben Strecke wie ab dem Flughafen Salzburg.',
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
