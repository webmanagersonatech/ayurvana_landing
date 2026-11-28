import { Card, Photo, Reveal } from "./ui";

const items = [
  ["Skin & body", "Herbal moisturiser, face wash, organic skin care and Abhyanga oils."],
  ["Colour, naturally", "Herbal hair dye, herbal nail paint and natural pigment kits."],
  ["Practice", "Yoga wear, natural-fibre mats and oil-pulling kits."],
  ["Health & craft", "Herbal teas, prescribed take-home kits, regional sarees and handmade objects."],
];

export default function ProShop() {
  return (
    <section id="proshop" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Photo src="pro-shop.jpg" alt="Ayurvana Pro Shop display" className="h-[340px] lg:h-[560px]" />
        </Reveal>
        <Reveal delay={0.1}>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-forest-light">The Pro Shop</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] mt-4">
            What you use here, you can keep using at home.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-text-muted leading-relaxed">
            The Pro Shop brings together products used in the treatment rooms, yoga spaces and kitchen. Organic, herbal
            and naturally made wherever the craft allows.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {items.map(([t, d]) => (
              <Card key={t} title={t}>{d}</Card>
            ))}
          </div>
          <a href="/" className="btn-outline mt-8">Browse products ↗</a>
        </Reveal>
      </div>
    </section>
  );
}
