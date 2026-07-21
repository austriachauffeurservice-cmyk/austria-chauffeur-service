import { serviceTypes as serviceTypesEn, vehicles as vehiclesEn } from '@/lib/content/services'

export const serviceTypes = [
  {
    ...serviceTypesEn[0],
    title: 'Flughafentransfers',
    description:
      'Flugverfolgung, persönlicher Empfang und Festpreise zu und von Wien, Salzburg, Graz, Linz, Innsbruck und nahegelegenen internationalen Flughäfen.',
  },
  {
    ...serviceTypesEn[1],
    title: 'Stadt-zu-Stadt-Transfers',
    description:
      'Direkte, private Fahrten zwischen zwei beliebigen Orten in Österreich — ohne Umsteigen, ohne Mitfahrgelegenheit.',
  },
  {
    ...serviceTypesEn[2],
    title: 'Grenzüberschreitende Transfers',
    description:
      'Lizenziert für internationale Abholungen und Ablieferungen nach Deutschland, Tschechien, Slowakei, Ungarn, Slowenien, Italien und in die Schweiz/Liechtenstein.',
  },
  {
    ...serviceTypesEn[3],
    title: 'Stunden- & Firmenbuchung',
    description:
      'Fahrer und Fahrzeug auf Abruf für Meetings, Roadshows und mehrteilige Geschäftstage — stundenweise abgerechnet.',
  },
  {
    ...serviceTypesEn[4],
    title: 'Veranstaltungen & Hochzeiten',
    description:
      'Pünktlicher, diskreter Transport für Hochzeiten, Konferenzen und private Veranstaltungen im ganzen Land.',
  },
  {
    ...serviceTypesEn[5],
    title: 'Ski- & Alpintransfers',
    description:
      'Winterfeste Fahrzeuge und erfahrene Fahrer für Transfers nach Tirol, Salzburger Land und Vorarlberg.',
  },
]

export const vehicles = [
  {
    ...vehiclesEn[0],
    name: 'Business-Limousine',
    passengers: 'Bis zu 3',
    luggage: '2–3 Gepäckstücke',
    description:
      'Mercedes E-Klasse oder vergleichbar. Die Standardwahl für Flughafentransfers und Stadtfahrten — ruhig, komfortabel, pünktlich.',
    idealFor: ['Flughafentransfers für ein bis zwei Personen', 'Direkte Stadtfahrten', 'Standard-Geschäftsreisen'],
    features: ['Wasserflaschen an Bord', 'Kostenloses WLAN, wo verfügbar', 'Ladekabel fürs Handy', 'Klimaanlage'],
  },
  {
    ...vehiclesEn[1],
    name: 'Luxus-Limousine',
    passengers: 'Bis zu 3',
    luggage: '2–3 Gepäckstücke',
    description:
      'Mercedes S-Klasse oder BMW 7er. Für Kunden, VIP-Gäste und Anlässe, bei denen der erste Eindruck zählt.',
    idealFor: ['VIP- und Executive-Ankünfte', 'Kundenorientierte Geschäftsreisen', 'Hochzeiten und besondere Anlässe'],
    features: ['Hochwertiges Lederinterieur', 'Erweiterte Beinfreiheit', 'Wasser & Erfrischungen', 'Kostenloses WLAN, wo verfügbar'],
  },
  {
    ...vehiclesEn[2],
    name: 'Executive Van',
    passengers: 'Bis zu 7',
    luggage: '6–7 Gepäckstücke',
    description:
      'Mercedes V-Klasse. Ideal für Familien, kleine Gruppen und längere grenzüberschreitende Fahrten mit mehr Gepäck.',
    idealFor: ['Familien mit Gepäck oder Skiausrüstung', 'Kleine Gruppen-Flughafentransfers', 'Grenzüberschreitende Fahrten'],
    features: ['Extra Platz für Gepäck & Ski/Board', 'Captain-Sitze hinten', 'Klimaanlage', 'Kindersitze auf Anfrage'],
  },
  {
    ...vehiclesEn[3],
    name: 'Kleinbus',
    passengers: 'Bis zu 16',
    luggage: 'Große Kapazität',
    description:
      'Mercedes Sprinter. Für größere Gruppen, Firmenteams und Veranstaltungstransporte in ganz Österreich und darüber hinaus.',
    idealFor: ['Firmenteams und Roadshows', 'Hochzeitsgesellschaften und Gruppenevents', 'Große Familien- oder Gruppentransfers'],
    features: ['Große Gepäckkapazität', 'Gruppensitzplätze für bis zu 16 Personen', 'Klimaanlage', 'Verfügbar für Mehrfachstopp-Buchungen'],
  },
]
