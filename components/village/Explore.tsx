"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { IMG } from "./ui";

const tiles = [
  ["/wellness", "treatment-courtyard.jpg", "Wellness", "Ayurveda, spa, She Health and yoga."],
  ["/experiences", "dining-hall.jpg", "Life at Ayurvana", "Sattvic dining, pond, amphitheatre and Pro Shop."],
  ["/stay", "cottage-exterior.jpg", "Rooms & cottages", "Where you stay, and the tariff."],
  ["/sonagramam", "sona-gramam.jpg", "Sona Gramam", "The village, craft, cottage design and furniture."],
  ["/day", "pond-dusk.jpg", "A day at Ayurvana", "An illustrative daily rhythm."],
];

const last = tiles.length - 1;

function Slide({ tile, index, progress }: { tile: string[]; index: number; progress: MotionValue<number> }) {
  const [href, img, title, text] = tile;
  // The photo drifts a little slower than its slide, which gives depth
  const imageY = useTransform(progress, [(index - 1) / last, (index + 1) / last], ["-12%", "12%"]);

  return (
    <div className="relative h-full w-full shrink-0 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${IMG}/${img}`}
          alt={title}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-16 text-white lg:px-[8vw] lg:pb-20">
        <h3 className="card-title !text-white !text-3xl lg:!text-6xl">{title}</h3>
        <p className="mt-3 max-w-md text-base text-white/85 lg:text-lg">{text}</p>
        <Link
          href={href}
          className="mt-6 inline-block rounded-full border border-white/60 px-7 py-3 text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Explore ↗
        </Link>
      </div>
    </div>
  );
}

export default function Explore() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4, restDelta: 0.0005 });
  const progress = reduceMotion ? scrollYProgress : smooth;
  // The track is one screen tall, so -100% moves it up by exactly one slide
  const y = useTransform(progress, [0, 1], ["0%", `-${last * 100}%`]);

  return (
    // One screen of scrolling per slide
    <section id="explore" ref={sectionRef} className="relative bg-cream-light" style={{ height: `${tiles.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full w-full overflow-hidden bg-black">
          <motion.div className="flex h-full w-full flex-col will-change-transform" style={{ y }}>
            {tiles.map((tile, i) => (
              <Slide key={tile[0]} tile={tile} index={i} progress={progress} />
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 top-0 px-6 pt-24 text-center text-white lg:px-[8vw]">
            <span className="section-label !text-white">Explore Ayurvana</span>
            <h2 className="mt-2 text-lg text-white/85 lg:text-2xl">
              Discover the village, one place at a time.
            </h2>
          </div>

          {/* Progress line on the right, filling from bottom to top */}
          <div className="absolute bottom-16 right-3 top-48 w-px bg-white/25 lg:right-[3vw]">
            <motion.div className="h-full w-full origin-bottom bg-white" style={{ scaleY: progress }} />
          </div>
        </div>
      </div>
    </section>
  );
}