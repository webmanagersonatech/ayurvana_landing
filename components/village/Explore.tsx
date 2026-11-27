import Link from "next/link";
import { motion } from "framer-motion";
import { IMG } from "./ui";
import { ParallaxImage, Reveal, ScrollLine, Stagger, StaggerItem, TextReveal, variants } from "../motion";

const tiles = [
  ["/wellness", "treatment-courtyard.jpg", "Wellness", "Ayurveda, spa, She Health and yoga."],
  ["/experiences", "dining-hall.jpg", "Life at Ayurvana", "Sattvic dining, pond, amphitheatre and Pro Shop."],
  ["/stay", "cottage-exterior.jpg", "Rooms & cottages", "Where you stay, and the tariff."],
  ["/sonagramam", "sona-gramam.jpg", "Sona Gramam", "The village, craft, cottage design and furniture."],
  ["/day", "pond-dusk.jpg", "A day at Ayurvana", "An illustrative daily rhythm."],
];

// Desktop: alternate cards sit slightly lower for a gentle staggered rhythm
const offsets = ["lg:mt-0", "lg:mt-10", "lg:mt-0", "lg:mt-10", "lg:mt-0"];

export default function Explore() {
  return (
    <section id="explore" className="py-20 lg:py-28 bg-cream-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-head center max-w-3xl mx-auto">
          <Reveal variant="fadeIn">
            <span className="section-label">Explore Ayurvana</span>
          </Reveal>
          <TextReveal as="h2" className="section-title mt-3" text="Discover the village, one place at a time." delay={0.1} />
        </div>

        <Reveal variant="fadeIn" delay={0.2} className="mb-10">
          <ScrollLine />
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4" gap={0.1}>
          {tiles.map(([href, img, t, d], i) => (
            <StaggerItem key={href} variant="clipUp" className={offsets[i]}>
              <Link href={href} className="group block relative h-72 lg:h-96 overflow-hidden rounded-2xl">
                <ParallaxImage src={`${IMG}/${img}`} strength={6} className="transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <motion.div
                  className="absolute bottom-0 p-5 text-white"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } } }}
                >
                  <motion.h3 variants={variants.fadeUp} className="card-title !text-white">{t}</motion.h3>
                  <motion.p variants={variants.fadeUp} className="text-sm text-white/80 mt-1 leading-snug">{d}</motion.p>
                  <motion.span variants={variants.fadeUp} className="text-xs tracking-[0.2em] uppercase text-gold-light mt-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    Explore ↗
                  </motion.span>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
