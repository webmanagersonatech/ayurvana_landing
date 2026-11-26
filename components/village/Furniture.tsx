import { useState } from "react";
import { IMG, Reveal, SectionHead } from "./ui";

const pieces = [
  ["furn-cot.webp", "Bespoke cot", "The cot", "Bedroom"],
  ["furn-side-table.webp", "Hanging side table", "Suspended side table", "Tables"],
  ["furn-twin-bed.webp", "Twin-bed arrangement", "Twin-bed arrangement", "Bedroom"],
  ["furn-wardrobe.webp", "Patterned wardrobe unit", "Wardrobe", "Storage"],
  ["furn-couch.webp", "Couch with patterned panels", "Couch", "Seating"],
  ["furn-chair-1.webp", "Long chair option 01", "Long chair · 01", "Seating"],
  ["furn-chair-2.webp", "Long chair option 02", "Long chair · 02", "Seating"],
  ["furn-coffee-table.webp", "Coffee table", "Coffee table", "Tables"],
];
const filters = ["All pieces", "Bedroom", "Seating", "Tables", "Storage"];

export default function Furniture() {
  const [f, setF] = useState("All pieces");
  const [open, setOpen] = useState<string[] | null>(null);
  const shown = pieces.filter((p) => f === "All pieces" || p[3] === f);
  return (
    <section id="furniture" className="py-20  bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          eyebrow="Bespoke furniture · Sona Gramam"
          lead="The bespoke furniture concept carries the architectural language into everyday living. Dark timber, terracotta-toned patterned panels and soft natural upholstery create a distinct identity across the collection. Traditional motifs are reinterpreted across bedroom pieces, seating and occasional furniture."
        >
          Craft made tangible.
          <br />
          <span className="italic text-forest-light">Designed to belong.</span>
        </SectionHead>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] tracking-[0.25em] uppercase text-text-muted mb-6">
          <span>The collection</span>
          <span>{String(pieces.length).padStart(2, "0")} pieces</span>
          <span>Timber · Textile · Craft</span>
        </div>
        <div role="group" aria-label="Filter furniture" className="flex flex-wrap gap-2 mb-8">
          {filters.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={f === t}
              onClick={() => setF(t)}
              className={`px-4 py-2 text-[11px] tracking-[0.16em] uppercase border transition-colors ${
                f === t ? "bg-forest text-cream-light border-forest" : "border-forest/40 text-forest hover:border-forest"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {shown.map((p) => (
            <Reveal key={p[0]}>
              <figure className="bg-white border border-line">
                <button type="button" onClick={() => setOpen(p)} className="block w-full aspect-square overflow-hidden" aria-label={`View ${p[2]}`}>
                  <img src={`${IMG}/${p[0]}`} alt={p[1]} loading="lazy" decoding="async" className="w-full h-full object-contain p-3 hover:scale-105 transition-transform duration-500" />
                </button>
                <figcaption className="px-4 py-3 border-t border-line">
                  <b className="block text-xs tracking-[0.12em] uppercase font-semibold">{p[2]}</b>
                  <small className="text-[10px] tracking-[0.18em] uppercase text-text-muted">{p[3]}</small>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 border-l-2 border-gold pl-4 text-sm text-text-muted max-w-3xl">
          One design language: from the architecture to the furniture, each detail is intended to feel rooted in place,
          thoughtfully made and quietly comfortable.
        </p>
      </div>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open[2]}
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-6"
          onClick={() => setOpen(null)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(null)}
        >
          <button type="button" aria-label="Close" autoFocus onClick={() => setOpen(null)} className="absolute top-5 right-6 text-white text-3xl">×</button>
          <img src={`${IMG}/${open[0]}`} alt={open[1]} className="max-h-full max-w-full object-contain bg-white" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
