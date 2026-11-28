import { Card, Photo, Reveal, SectionHead } from "./ui";

const rituals = [
  ["Mud bath", "Mineral-rich volcanic soil, warmed and applied as part of a prescribed treatment."],
  ["Water therapy", "Hydrotherapy sequences intended to support circulation, joints and relaxation."],
  ["Oil pulling", "An Ayurvedic oral-care ritual introduced as part of the morning routine."],
  ["Also prescribed", "Abhyanga, Shirodhara, Swedana, Panchakarma, Kati and Janu Basti, naturopathic packs, yoga therapy and pranayama."],
];

export default function Spa() {
  return (
    <section id="spa" className="py-20 lg:py-28 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead
            dark
            eyebrow="Wellness · The spa"
            lead="The spa sits within the treatment courtyards. Therapies are selected by your physician according to your programme, rather than chosen from a retail menu."
          >
            Earth, water and oil. The oldest rituals, thoughtfully practised.
          </SectionHead>
          <div className="grid sm:grid-cols-2 gap-4">
            {rituals.map(([t, d]) => (
              <Card key={t} title={t} dark>
                {d}
              </Card>
            ))}
          </div>
        </div>
        <Reveal>
          <Photo src="spa.jpg" alt="Ayurvana spa treatment space" className="h-[360px] lg:h-[620px]" />
        </Reveal>
      </div>
    </section>
  );
}
