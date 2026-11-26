import { Card, SectionHead } from "./ui";

const trips = [
  ["Approx. 100 km", "Hogenakkal Falls", "The Cauvery breaking over black rock, coracle rides into the spray and a full day out."],
  ["Day trip", "Mettur", "The Stanley Reservoir, dam gardens and a Sattvic picnic hamper."],
  ["Day trip", "Ardhanareeswarar Temple", "The hill temple at Tiruchengode, visited at dawn before the heat."],
];

export default function Beyond() {
  return (
    <section id="beyond" className="py-20 lg:py-28 bg-forest-dark text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          dark
          eyebrow="Beyond the gates"
          lead="Ayurvana is located in the Salem countryside, between the Cauvery to the west and the hills of Yercaud to the east. Guided day trips are available for longer stays and are scheduled around each guest's treatment plan."
        >
          Rivers, falls and old temples, within reach of the village.
        </SectionHead>
        <div className="grid md:grid-cols-3 gap-4">
          {trips.map(([tag, t, d]) => (
            <Card key={t} title={t} tag={tag} dark>{d}</Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-white/60 max-w-3xl">
          Other places nearby include Yercaud, Kiliyur Falls and the silk weavers of Salem. Nearest airport: Salem (SXV).
        </p>
      </div>
    </section>
  );
}
