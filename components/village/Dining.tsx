import { useState } from "react";
import { Card, Reveal, SectionHead } from "./ui";
import { IMG } from "./ui";

const slides = [
  { img: "dining-hall.jpg", alt: "Central dining hall view", tag: "01 / The gathering place", title: "The heart of the village.", text: "A generous shared table beneath a canopy of natural texture. Dining is a daily ritual, not simply a service." },
  { img: "dining-tables.jpg", alt: "Long dining tables", tag: "02 / Together at the table", title: "Good food. Good company.", text: "Long tables invite guests to slow down, share a meal and become part of the village rhythm." },
  { img: "dining-evening.jpg", alt: "Dining hall in evening light", tag: "03 / After sundown", title: "Let the evening linger.", text: "Warm light, considered food and an unhurried close to the day." },
];
const points = [
  ["Seasonal produce", "Millets and ingredients from farms around the village."],
  ["Considered menus", "Food planned around the guest's programme and constitution."],
  ["Unhurried evenings", "Light, early dining as part of the daily rhythm."],
];

export default function Dining() {
  const [i, setI] = useState(0);
  const s = slides[i];
  const go = (n: number) => setI((n + slides.length) % slides.length);
  return (
    <section id="dining" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          eyebrow="Sattvic dining"
          lead="A 10,000 sq ft dining hall with long tables beneath a jute canopy. The kitchen focuses on fresh, seasonal, lightly spiced Sattvic food, with menus guided by each guest's physician's notes."
        >
          Food that follows the rhythm of your care.
        </SectionHead>
        <Reveal>
          <div className="relative h-[380px] sm:h-[500px] overflow-hidden bg-forest-dark">
            <img key={s.img} src={`${IMG}/${s.img}`} alt={s.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white max-w-2xl">
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold-light">{s.tag}</p>
              <h3 className="font-serif text-3xl sm:text-4xl mt-2">{s.title}</h3>
              <p className="text-sm text-white/85 mt-2">{s.text}</p>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-2 text-white text-xs">
              <button type="button" aria-label="Previous slide" onClick={() => go(i - 1)} className="w-10 h-10 border border-white/60 hover:bg-white/20">←</button>
              <button type="button" aria-label="Next slide" onClick={() => go(i + 1)} className="w-10 h-10 border border-white/60 hover:bg-white/20">→</button>
              <span className="ml-2 tracking-widest">{String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {points.map(([t, d], n) => (
            <Card key={t} title={t} tag={String(n + 1).padStart(2, "0")}>{d}</Card>
          ))}
        </div>
      </div>
    </section>
  );
}
