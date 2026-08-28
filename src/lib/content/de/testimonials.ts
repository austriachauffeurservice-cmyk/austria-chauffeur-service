// Illustrative service scenarios, not attributed customer reviews — do not
// add names or star ratings here.
export type Testimonial = {
  quote: string
  context: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Empfang bei der Ankunft mit Namensschild, Übernahme von schwerem Skigepäck und eine reibungslose Fahrt direkt zum Resort in Lech.',
    context: 'Flughafen- zu Skiresort-Transfer',
  },
  {
    quote:
      'Ein Executive-Transfer für Geschäftsgäste von Wien nach München — pünktlich, in einer makellosen Mercedes V-Klasse, mit klarer Kommunikation.',
    context: 'Firmenstrecke (Wien nach München)',
  },
  {
    quote:
      'Ein grenzüberschreitender Transfer von Wien nach Prag mit einem professionellen, englischsprachigen Chauffeur und einer ruhigen, komfortablen Fahrt.',
    context: 'Grenzüberschreitende Strecke (Wien nach Prag)',
  },
  {
    quote:
      'Eine Hochzeitsgesellschaft, mit drei Fahrzeugen zwischen Trauung und Feier nach knappem Zeitplan verlegt — jeder Wagen pünktlich, jeder Fahrer im Anzug, niemand musste warten.',
    context: 'Hochzeitstransport, Salzburg',
  },
  {
    quote:
      'Ein Flug mit fast zwei Stunden Verspätung, ohne dass jemand kontaktiert werden musste — der Fahrer passt sich an und ist einfach da.',
    context: 'Abholung Flughafen Wien',
  },
  {
    quote:
      'Ein Sprinter für einen 12-köpfigen Firmenausflug von Graz zu einem Hotel außerhalb der Stadt — Gepäck und Ausrüstung ohne Umstände verstaut, zum genannten Preis.',
    context: 'Firmen-Gruppentransfer, Graz',
  },
  {
    quote:
      'Reisen mit zwei kleinen Kindern und einem Kinderwagen, mit bereitstehendem Kindersitz und entspannter Hilfe beim Einladen.',
    context: 'Familientransfer, Wien nach Salzburg',
  },
  {
    quote:
      'Eine kurzfristige Buchung für einen Kundenbesuch, mit einem bestätigten Angebot innerhalb weniger Stunden und einem auf die Minute pünktlichen Fahrer.',
    context: 'Stundenweise Firmenbuchung, Wien',
  },
]
