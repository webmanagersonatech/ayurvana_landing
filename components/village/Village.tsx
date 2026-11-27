import { Card, Photo, Reveal, SectionHead } from "./ui";

const spaces = [
  ["Treatment courtyards", "Open-to-sky spaces with consultation and treatment rooms."],
  ["Prana Shala", "A yoga and breathwork pavilion with aerial yoga and a gymnasium."],
  ["Dining hall", "A 10,000 sq ft jute-canopied hall serving Sattvic food."],
  ["Amphitheatre", "Stepped lawns and a stone stage for yoga and weekly talks."],
  ["Rooms & cottages", "Eighteen rooms by the water and private cottages."],
  ["Pond & track", "A natural pond and 1.5 km track through the trees."],
  ["Sona Gramam", "Open workshops, bullock carts and an artisan bazaar."],
  ["The Pro Shop", "Selected wellness products and items used during your stay."],
];

export default function Village() {
  return (
    <section id="village" className="pb-20 lg:pb-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          eyebrow="The village"
          lead="Laterite walls, jute canopies, black steel and a great deal of green. Ayurvana is imagined as a village of distinct spaces, connected by courtyards, pathways and a slower pace."
        >
          A place shaped by the land, and the life within it.
        </SectionHead>
        <Reveal>
          <Photo
            src="village-plan.jpg"
            alt="Aerial view of the Ayurvana village masterplan"
            className="h-[280px] sm:h-[420px] lg:h-[520px]"
          />
        </Reveal>
        <div id="village-spaces" className="mt-16 grid lg:grid-cols-[1fr_2fr] gap-10">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-forest-light">
              A village within a village
            </span>
            <h3 className="font-serif text-3xl lg:text-4xl mt-4 leading-tight">
              Eight places.
              <br />
              One connected rhythm.
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mt-4">
              Each space has a purpose: to support healing, movement, gathering, craft or quiet retreat.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {spaces.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 0.08}>
                <Card title={t} tag={String(i + 1).padStart(2, "0")}>
                  {d}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
