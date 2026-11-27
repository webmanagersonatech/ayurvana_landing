import { Card, Photo, Reveal, SectionHead } from "./ui";

const crafts = [
  ["sona-gramam.jpg", "Sona Gramam artisan village", "Pottery"],
  ["sona-entrance.jpg", "Sona Gramam entrance", "Weaving"],
  ["craft-courtyard.jpg", "Craft-inspired courtyard detail", "Painting"],
  ["bullock-cart.jpg", "Traditional bullock cart", "Bullock carts"],
];
const workshops = [
  ["Pottery & sculpting", "Terracotta on the wheel, clay and stone shaped with guidance."],
  ["Weaving & embroidery", "Handloom sessions and slow needlework with regional makers."],
  ["Block printing", "Carved wood, vegetable dye and cloth to take home."],
];

export default function SonaGramam() {
  return (
    <section id="gramam" className="pt-20 lg:pt-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          eyebrow="Sona Gramam · The art village"
          lead="Open workshops, a cart yard and an artisan bazaar where regional craft traditions are practised, taught and shared. Guests are invited to take part, not simply observe."
        >
          Rural India, not as a view from the window, but as a thing you do with your hands.
        </SectionHead>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {crafts.map(([src, alt, cap], i) => (
            <Reveal key={src} delay={i * 0.06}>
              <Photo src={src} alt={alt} caption={cap} className="h-64 lg:h-80" />
            </Reveal>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {workshops.map(([t, d]) => (
            <Card key={t} title={t}>{d}</Card>
          ))}
        </div>
        <p className="mt-6 border-l-2 border-gold pl-4 text-sm text-text-muted max-w-3xl">
          The artisan bazaar is planned to feature regional makers, including Konganapuram and Yellamballi sarees,
          Ooty oils and Channapatna toys.
        </p>
      </div>
    </section>
  );
}
