import { Card, Note, Photo, Reveal, SectionHead } from "./ui";

const programmes = [
  ["Metabolic health", "Programmes may combine nutrition, movement, prescribed therapies and daily monitoring for guests with metabolic health concerns."],
  ["Blood pressure", "Supportive care may include Shirodhara, breathwork, Sattvic nutrition and rest, monitored against an individual baseline."],
  ["Gut health", "Personalised food guidance, cleansing protocols and herbal preparations, as prescribed by the practitioner."],
  ["Rejuvenation", "Rasayana therapies, Abhyanga and herbal skin care as part of a restorative programme."],
];

export default function Healing() {
  return (
    <section id="healing" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          eyebrow="Wellness · Physician guided"
          lead="Every stay begins with a consultation. Practitioners review your constitution, history and reports before shaping an individual programme. Progress is monitored as part of your care."
        >
          Predominantly Ayurvedic.
          <br />
          <span className="italic text-forest-light">Entirely personal.</span>
        </SectionHead>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Photo src="treatment-courtyard.jpg" alt="Ayurvana treatment courtyard" className="h-[320px] lg:h-[520px]" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {programmes.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 0.08}>
                <Card title={t} tag={`${String(i + 1).padStart(2, "0")} / ${t.toUpperCase()}`}>
                  {d}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
        <Note>
          Ayurvana describes supportive and complementary care under qualified practitioners. Outcomes vary between
          individuals. Guests should continue prescribed medication unless their treating physician advises otherwise.
        </Note>
      </div>
    </section>
  );
}
