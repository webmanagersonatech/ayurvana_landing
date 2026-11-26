import { Card, Photo, Reveal, SectionHead } from "./ui";

const items = [
  ["Aerial yoga", "Silk hammocks for supported movement and inversions."],
  ["Yoga at sunrise", "Surya Namaskar on the amphitheatre stage as the day begins."],
  ["Gymnasium", "Strength and mobility work prescribed alongside your programme."],
  ["Stillness practices", "Hatha, Yin, pranayama, Yoga Nidra and walking meditation."],
];

export default function Prana() {
  return (
    <section id="prana" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead
            eyebrow="Prana Shala & movement"
            lead="A brick pavilion for classical yoga and pranayama, with small-group and individual sessions shaped around each guest's programme."
          >
            Breath first.
            <br />
            <span className="italic text-forest-light">Then everything else.</span>
          </SectionHead>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map(([t, d]) => (
              <Card key={t} title={t}>
                {d}
              </Card>
            ))}
          </div>
        </div>
        <Reveal>
          <Photo src="prana-shala.jpg" alt="Prana Shala yoga pavilion" className="h-[360px] lg:h-[580px]" />
        </Reveal>
      </div>
    </section>
  );
}
