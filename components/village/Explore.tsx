import Link from "next/link";
import { IMG, Reveal, SectionHead } from "./ui";

const tiles = [
  ["/wellness", "treatment-courtyard.jpg", "Wellness", "Ayurveda, spa, She Health and yoga."],
  ["/experiences", "dining-hall.jpg", "Life at Ayurvana", "Sattvic dining, pond, amphitheatre and Pro Shop."],
  ["/stay", "cottage-exterior.jpg", "Rooms & cottages", "Where you stay, and the tariff."],
  ["/sonagramam", "sona-gramam.jpg", "Sona Gramam", "The village, craft, cottage design and furniture."],
  ["/day", "pond-dusk.jpg", "A day at Ayurvana", "An illustrative daily rhythm."],
];

export default function Explore() {
  return (
    <section id="explore" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead eyebrow="Explore Ayurvana" center>
          Discover the village, one place at a time.
        </SectionHead>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiles.map(([href, img, t, d], i) => (
            <Reveal key={href} delay={i * 0.05}>
              <Link href={href} className="group block relative h-72 overflow-hidden rounded-2xl">
                <img src={`${IMG}/${img}`} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="card-title !text-white">{t}</h3>
                  <p className="text-sm text-white/80 mt-1 leading-snug">{d}</p>
                  <span className="text-xs tracking-[0.2em] uppercase text-gold-light mt-3 inline-block">Explore ↗</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
