export type Attraction = { name: string; description: string }

export type DayTour = {
  slug: string
  name: string
  region: string
  tagline: string
  startingPoints: { from: string; distance: string; driveTime: string }[]
  highlights: string[]
  itinerary: string[]
  attractions: Attraction[]
  bestTime: string
}

export const dayTours: DayTour[] = [
  {
    slug: 'hallstatt',
    name: 'Hallstatt',
    region: 'Salzkammergut',
    tagline: 'Eines der meistfotografierten Seedörfer Österreichs, eingebettet zwischen Bergen und dem Hallstätter See.',
    startingPoints: [
      { from: 'Salzburg', distance: '~70 km', driveTime: '~1 Std.' },
      { from: 'Wien', distance: '~280 km', driveTime: '~3 Std. 30 Min.' },
    ],
    highlights: [
      'Ein UNESCO-Weltkulturerbe-Dorf am Rand eines Alpensees',
      'Das älteste bekannte Salzbergwerk der Welt, noch heute für Führungen geöffnet',
      'Der Hallstatt Skywalk, eine Aussichtsplattform über dem Dorf',
      'Einer der meistfotografierten Marktplätze Österreichs',
    ],
    itinerary: [
      'Frühmorgendliche Abholung und direkte Fahrt nach Hallstatt',
      'Zeit im Dorf und entlang der Seepromenade',
      'Optional: Seilbahn zum Skywalk oder Führung in den Salzwelten',
      'Mittagessen im Dorf',
      'Rückfahrt mit flexibler Abfahrtszeit am Nachmittag',
    ],
    attractions: [
      {
        name: 'Hallstatt Skywalk',
        description: 'Eine per Seilbahn erreichbare Aussichtsplattform mit Blick direkt hinunter auf Dorf und See.',
      },
      {
        name: 'Salzwelten Hallstatt',
        description: 'Das älteste bekannte Salzbergwerk der Welt, mit einer Führung inklusive der historischen Bergmannsrutsche.',
      },
      {
        name: 'Pfarrkirche & Beinhaus Hallstatt',
        description: 'Eine Kirche am See mit einem ungewöhnlichen, jahrhundertealten bemalten Schädel-Beinhaus.',
      },
      {
        name: 'Hallstätter See',
        description: 'Der Alpensee, an dem das Dorf liegt, umrahmt vom Dachsteinmassiv.',
      },
    ],
    bestTime: 'Ganzjährig, wobei das Dorf außerhalb von Juli–August deutlich ruhiger ist. Angesichts der langen Fahrt ab Wien empfiehlt sich unabhängig von der Jahreszeit ein früher Aufbruch.',
  },
  {
    slug: 'wachau-valley',
    name: 'Wachau',
    region: 'Niederösterreich',
    tagline: 'Ein UNESCO-gelisteter Donauabschnitt — Weinterrassen, mittelalterliche Städte und Stift Melk.',
    startingPoints: [
      { from: 'Wien', distance: '~80 km nach Krems', driveTime: '~1 Std.' },
      { from: 'Wien', distance: '~100 km nach Melk', driveTime: '~1 Std. 15 Min.' },
    ],
    highlights: [
      'Stift Melk, eines der bedeutendsten Barockbauwerke Österreichs',
      'Dürnstein, die Stadt, in der Richard Löwenherz einst gefangen gehalten wurde',
      'Weinterrassen entlang der Donau, eine der bekanntesten Weinregionen Österreichs',
      'Die mittelalterliche Altstadt von Krems',
    ],
    itinerary: [
      'Morgendliche Abfahrt aus Wien entlang der Donau',
      'Besichtigung von Stift Melk',
      'Fahrt entlang des Flusses durch die Weinterrassen nach Dürnstein',
      'Zeit in Dürnstein und der Kremser Altstadt, optional mit Weinverkostung',
      'Rückkehr nach Wien am Abend',
    ],
    attractions: [
      {
        name: 'Stift Melk',
        description: 'Ein aktives Benediktinerkloster und eines der bedeutendsten Barockbauwerke des Landes.',
      },
      {
        name: 'Ruine Dürnstein',
        description: 'Die Ruine der Höhenburg, die mit der Gefangenschaft Richard Löwenherz\' im Jahr 1192 verbunden ist.',
      },
      {
        name: 'Kremser Altstadt',
        description: 'Ein gut erhaltenes mittelalterliches Stadtzentrum am östlichen Rand der Wachau.',
      },
      {
        name: 'Donau-Weinterrassen',
        description: 'Steile Terrassenweingärten entlang des Flusses, zu den meistfotografierten Weinlandschaften Österreichs zählend.',
      },
    ],
    bestTime: 'Frühling bis Herbst für die Weinlandschaft; Ende September–Oktober zur Weinlese. Von Wien aus bequem an einem einzigen Tag machbar.',
  },
  {
    slug: 'salzburg-day-trip',
    name: 'Salzburg',
    region: 'Salzburg',
    tagline: 'Mozarts Geburtsstadt und die „The Sound of Music"-Drehorte, als Tagesausflug ab Wien.',
    startingPoints: [
      { from: 'Wien', distance: '~295 km', driveTime: '~2 Std. 45 Min.' },
    ],
    highlights: [
      'Die historische Altstadt, ein UNESCO-Weltkulturerbe',
      'Festung Hohensalzburg über der Stadt',
      'Mozarts Geburtshaus und der Mirabellgarten',
      '„The Sound of Music"-Drehorte rund um die Stadt',
    ],
    itinerary: [
      'Frühe Abfahrt aus Wien auf der A1 Westautobahn',
      'Ganzer Tag in Altstadt, Mirabellgarten und Festung Hohensalzburg',
      'Mittagessen in der Altstadt',
      'Flexible Rückfahrt am späten Nachmittag oder Abend',
    ],
    attractions: [
      {
        name: 'Festung Hohensalzburg',
        description: 'Eine der größten mittelalterlichen Burgen Europas, hoch über der Altstadt.',
      },
      {
        name: 'Schloss Mirabell & Mirabellgarten',
        description: 'Barocke Schlossgärten, bekannt aus „The Sound of Music", mit Blick auf die Festung.',
      },
      {
        name: 'Getreidegasse',
        description: 'Salzburgs historische Einkaufsstraße und Mozarts Geburtshaus.',
      },
      {
        name: 'Salzburger Dom',
        description: 'Der barocke Dom im Herzen der Altstadt.',
      },
    ],
    bestTime: 'Angesichts der Fahrtstrecke funktioniert dies am besten als Ganztagesbuchung mit frühem Start. Für ein entspannteres Tempo empfiehlt sich eine Übernachtung — wir organisieren dann stattdessen gerne einen einfachen Transfer.',
  },
]
