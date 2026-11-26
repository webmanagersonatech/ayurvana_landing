import { Card, Photo, Reveal, SectionHead } from "./ui";

const items = [
  ["01 / WATER", "The pond", "A natural pond with a stone edge, wooden boat and lanterns in the trees."],
  ["02 / MOVEMENT", "The track", "One and a half kilometres through the trees, for walking, running or a bullock-cart ride."],
  ["03 / CULTURE", "The amphitheatre", "Weekly talks from physicians, farmers or artists, with folk music on selected evenings."],
];

export default function Unwind() {
  return (
    <section id="experiences" className="py-20 lg:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          eyebrow="Unwind"
          lead="Time outdoors is part of the experience: quiet movement, open skies and small discoveries close to the village."
        >
          After the last treatment of the day, the village comes out to play.
        </SectionHead>
        <div className="grid lg:grid-cols-2 gap-4">
          <Reveal>
            <Photo src="pond-dusk.jpg" alt="Pond at dusk" caption="The pond, when the lanterns come on" className="h-[300px] lg:h-[560px]" />
          </Reveal>
          <div className="grid gap-4">
            <Reveal delay={0.08}>
              <Photo src="amphitheatre.jpg" alt="Amphitheatre" caption="Gather at the amphitheatre" className="h-[240px] lg:h-[270px]" />
            </Reveal>
            <Reveal delay={0.16}>
              <Photo src="walkway.jpg" alt="Walkway through the village" caption="A slower walk through the trees" className="h-[240px] lg:h-[270px]" />
            </Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {items.map(([tag, t, d]) => (
            <Card key={t} title={t} tag={tag}>{d}</Card>
          ))}
        </div>
        <blockquote className="mt-10 font-serif italic text-2xl text-forest max-w-3xl">
          “Mindset engineering, we call it. Our guests call it the first good sleep in years.”
        </blockquote>
      </div>
    </section>
  );
}
