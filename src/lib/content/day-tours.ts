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
    tagline: "One of Austria's most photographed lakeside villages, tucked between the mountains and the Hallstätter See.",
    startingPoints: [
      { from: 'Salzburg', distance: '~70km', driveTime: '~1h' },
      { from: 'Vienna', distance: '~280km', driveTime: '~3h 30m' },
    ],
    highlights: [
      'A UNESCO World Heritage village on the edge of an alpine lake',
      "The world's oldest known salt mine, still open for tours",
      'The Hallstatt Skywalk viewing platform above the village',
      'One of the most photographed market squares in Austria',
    ],
    itinerary: [
      'Early morning pickup and direct drive to Hallstatt',
      'Time in the village and along the lakefront promenade',
      'Optional cable car up to the Skywalk viewing platform or the Salzwelten salt mine tour',
      'Lunch in the village',
      'Return drive with a flexible departure time in the afternoon',
    ],
    attractions: [
      {
        name: 'Hallstatt Skywalk',
        description: 'A viewing platform reached by cable car, looking straight down over the village and lake.',
      },
      {
        name: 'Hallstatt Salt Mine (Salzwelten)',
        description: "The world's oldest known salt mine, with a tour that includes a slide used by the original miners.",
      },
      {
        name: 'Hallstatt Parish Church & Bone House',
        description: 'A lakeside church with an unusual painted-skull ossuary (Beinhaus) dating back centuries.',
      },
      {
        name: 'Hallstätter See',
        description: 'The alpine lake the village sits on, framed by the Dachstein mountains.',
      },
    ],
    bestTime: 'Year-round, though the village is significantly quieter outside July–August. Given it is a long drive from Vienna, an early departure is recommended regardless of season.',
  },
  {
    slug: 'wachau-valley',
    name: 'Wachau Valley',
    region: 'Lower Austria',
    tagline: 'A UNESCO-listed stretch of the Danube — vineyard terraces, medieval towns, and Melk Abbey.',
    startingPoints: [
      { from: 'Vienna', distance: '~80km to Krems', driveTime: '~1h' },
      { from: 'Vienna', distance: '~100km to Melk', driveTime: '~1h 15m' },
    ],
    highlights: [
      'Melk Abbey, one of the most significant Baroque buildings in Austria',
      'Dürnstein, the town where Richard the Lionheart was once imprisoned',
      'Vineyard terraces along the Danube, one of Austria\'s best-known wine regions',
      'The medieval old town of Krems',
    ],
    itinerary: [
      'Morning departure from Vienna along the Danube',
      'Tour of Melk Abbey (Stift Melk)',
      'Drive along the river through the vineyard terraces to Dürnstein',
      'Time in Dürnstein and Krems old town, with optional wine tasting',
      'Return to Vienna in the evening',
    ],
    attractions: [
      {
        name: 'Melk Abbey (Stift Melk)',
        description: 'A working Benedictine monastery and one of the most important Baroque buildings in the country.',
      },
      {
        name: 'Dürnstein Castle Ruins',
        description: 'The ruined hilltop castle associated with the imprisonment of Richard the Lionheart in 1192.',
      },
      {
        name: 'Krems Old Town',
        description: 'A well-preserved medieval town center at the eastern edge of the Wachau.',
      },
      {
        name: 'Danube Vineyard Terraces',
        description: 'Steep terraced vineyards along the river, among the most photographed wine landscapes in Austria.',
      },
    ],
    bestTime: 'Spring through autumn for the vineyard scenery; late September–October for the harvest. A short enough drive from Vienna to do comfortably as a single day.',
  },
  {
    slug: 'salzburg-day-trip',
    name: 'Salzburg',
    region: 'Salzburg',
    tagline: "Mozart's birthplace and the Sound of Music filming locations, as a day trip from Vienna.",
    startingPoints: [
      { from: 'Vienna', distance: '~295km', driveTime: '~2h 45m' },
    ],
    highlights: [
      'The historic Altstadt, a UNESCO World Heritage site',
      'Hohensalzburg Fortress overlooking the city',
      'Mozart\'s birthplace and Mirabell Gardens',
      '"Sound of Music" filming locations around the city',
    ],
    itinerary: [
      'Early departure from Vienna on the A1 West Autobahn',
      'Full day in the Altstadt, Mirabell Gardens, and Hohensalzburg Fortress',
      'Lunch in the old town',
      'Flexible return departure in the late afternoon or evening',
    ],
    attractions: [
      {
        name: 'Hohensalzburg Fortress',
        description: "One of Europe's largest medieval castles, overlooking the Altstadt.",
      },
      {
        name: 'Mirabell Palace & Gardens',
        description: 'Baroque palace gardens made famous by "The Sound of Music," with views of the fortress.',
      },
      {
        name: 'Getreidegasse',
        description: "Salzburg's historic shopping street and Mozart's birthplace.",
      },
      {
        name: 'Salzburg Cathedral',
        description: "The Baroque cathedral at the heart of the Altstadt.",
      },
    ],
    bestTime: 'Given the round-trip distance, this works best as a full-day booking with an early start. Consider an overnight stay if you want a more relaxed pace — we can arrange a one-way transfer instead.',
  },
]
