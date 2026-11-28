import { Card, Photo, Reveal, SectionHead } from "./ui";

const items = [
  ["Prenatal care", "Garbhini Paricharya-inspired support alongside the guest's obstetrician's plan."],
  ["Postpartum recovery", "Traditional recovery rituals, warm oil massage, herbal baths, suitable meals and rest."],
  ["Cycle & hormonal balance", "Programmes for menstrual comfort, PCOS and perimenopause guided by qualified practitioners."],
];

export default function SheHealth() {
  return (
    <section id="she" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Photo src="she-health.jpg" alt="She Health consultation wing" className="h-[360px] lg:h-[600px]" />
        </Reveal>
        <div>
          <SectionHead
            eyebrow="Wellness · She Health"
            lead="A dedicated, women-led and physician-guided wellness wing, designed around the stages many wellness retreats overlook."
          >
            Care that understands a woman's body across her whole life.
          </SectionHead>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map(([t, d]) => (
              <Card key={t} title={t}>
                {d}
              </Card>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-gold pl-4 text-sm text-text-muted">
            The She Room offers shared, women-only accommodation at ₹4,500 per bed per night, plus GST.
          </p>
        </div>
      </div>
    </section>
  );
}
