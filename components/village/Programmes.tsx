import { useState } from "react";
import { Card, Photo, Reveal, SectionHead } from "./ui";

const stays = [
  { label: "7 nights", duration: "07 NIGHTS", title: "The reset", copy: "Consultation, daily treatments, Sattvic diet and the full Sona Gramam programme. An introduction to the Ayurvana approach." },
  { label: "14 nights", duration: "14 NIGHTS", title: "The course", copy: "A more complete programme focused on one concern, such as metabolic health, blood pressure, gut health or She Health. Progress is followed through the stay." },
  { label: "21 nights +", duration: "21 NIGHTS AND BEYOND", title: "The transformation", copy: "A longer stay is recommended for full Panchakarma, rejuvenation and the development of a daily rhythm to take home. Programme suitability is determined by your physician." },
];
const audiences = [
  ["FOR TEAMS", "Corporate retreats", "Eighteen rooms, a 10,000 sq ft hall and an amphitheatre provide a setting for leadership offsites, with wellbeing programmes alongside the agenda."],
  ["FOR INTERNATIONAL GUESTS", "Health tourism", "Customised packages for international guests, potentially including transfers, a personal physician, craft experiences and day trips."],
  ["PARTNERSHIP", "WeUsThem, Canada", "A memorandum of understanding to bring guests from North America for Ayurvedic and wellness programmes."],
];

export default function Programmes() {
  const [i, setI] = useState(0);
  const s = stays[i];
  return (
    <section id="programmes" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          eyebrow="Stay longer"
          lead="Ayurvedic treatment works best as a course rather than a single session. Explore the intended stay lengths below; individual plans are set after consultation."
        >
          A weekend rests you.
          <br />
          <span className="title-accent">Three weeks change you.</span>
        </SectionHead>
        <div role="tablist" aria-label="Stay length" className="flex flex-wrap gap-2 mb-8">
          {stays.map((t, n) => (
            <button
              key={t.label}
              role="tab"
              type="button"
              aria-selected={i === n}
              onClick={() => setI(n)}
              className={`px-5 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase rounded-full border transition-colors ${
                i === n ? "bg-forest text-cream-light border-forest" : "border-forest/40 text-forest hover:border-forest"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="grid md:grid-cols-2 bg-cream-light border border-line rounded-2xl overflow-hidden">
          <Photo src="stay-experience.jpg" alt="Ayurvana guest stay experience" className="h-72 md:h-full min-h-[320px] !rounded-none" />
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] text-forest-light font-semibold">{s.duration}</p>
            <h3 className="font-serif text-3xl lg:text-4xl mt-3 text-text-dark">{s.title}</h3>
            <p className="card-text mt-4">{s.copy}</p>
            <a href="/contact" className="btn-primary mt-6 self-start">Enquire about this stay ↗</a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {audiences.map(([tag, t, d], n) => (
            <Reveal key={t} delay={n * 0.06}>
              <Card title={t} tag={tag}>{d}</Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
