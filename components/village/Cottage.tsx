import { Photo, Reveal, SectionHead } from "./ui";

const palette = ["Palace Verde", "Blossom Terracotta", "Leaf", "Petal Grey"];
const gallery = [
  ["cottage-openair-bath.jpg", "Open-air bath in private cottage", "02 / Open-air bathing"],
  ["cottage-terracotta.jpg", "Blossom terracotta cottage interior", "03 / Blossom Terracotta"],
  ["cottage-courtyard.jpg", "Open-air bathing courtyard", "04 / Private courtyard"],
  ["cottage-verde.jpg", "Palace verde cottage interior", "05 / Palace Verde"],
];

export default function Cottage() {
  return (
    <section id="cottage-design" className="pt-20 pb-12  bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          eyebrow="The private cottages · Design story"
          lead="The cottage design draws on handcrafted Athangudi tiles, natural materials, warm timber, muted plaster and antique bronze details. Open-air bathing and tactile finishes connect contemporary comfort with the craft traditions of Tamil Nadu."
        >
          Architecture shaped
          <br />
          <span className="italic text-forest-light">by place and ritual.</span>
        </SectionHead>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
          <Reveal>
            <Photo src="cottage-living.jpg" alt="Leaf colourway cottage living room" caption="01 / The living space · Palace Verde" className="h-[320px] lg:h-[520px]" />
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="h-full bg-cream-light border border-line p-6 flex flex-col">
              <span className="text-[10px] tracking-[0.25em] uppercase text-forest-light">Material palette</span>
              <ul className="mt-4 divide-y divide-line flex-1">
                {palette.map((p) => (
                  <li key={p} className="py-3">
                    <b className="font-serif text-lg font-normal">{p}</b>
                    <small className="block text-xs text-text-muted">Athangudi tile colourway</small>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-muted leading-relaxed mt-4">
                Warm timber, muted plaster and antique bronze bring balance to the patterned surfaces.
              </p>
            </aside>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {gallery.map(([src, alt, cap], i) => (
            <Reveal key={src} delay={i * 0.06}>
              <Photo src={src} alt={alt} caption={cap} className="h-60 lg:h-72" />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 border-l-2 border-gold pl-4 text-sm text-text-muted max-w-3xl leading-relaxed">
          <span className="block text-[10px] tracking-[0.25em] uppercase text-forest-light mb-1">Finishing details</span>
          Cane pendants, hanging drum lights, filament LED pendants and antique wall lights complete the interior
          language. Plumbing fixtures are shown in an antique bronze finish.
        </p>
      </div>
    </section>
  );
}
