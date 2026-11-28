"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { IMG } from "../village/ui";

type Panel = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  img: string;
  alt: string;
  link?: [string, string];
  imageFirst?: boolean;
  tall?: boolean;
  intro?: boolean;
};

const panels: Panel[] = [
  {
    eyebrow: "A slower way to feel well",
    title: (<>Wellness is<br /><em className="text-[#d0ad79]">not a room.</em></>),
    text: "It is a sequence of moments, places and practices that begin to feel like a new rhythm.",
    img: "village-plan.jpg",
    alt: "Ayurvana village plan",
    intro: true,
  },
  {
    eyebrow: "01 / Restore",
    title: (<>Begin with<br />yourself.</>),
    text: "Physician-guided care, traditional therapies and a programme shaped around your needs.",
    img: "treatment-courtyard.jpg",
    alt: "Treatment courtyard",
    link: ["/wellness", "Explore healing ↗"],
    imageFirst: true,
    tall: true,
  },
  {
    eyebrow: "02 / Reconnect",
    title: (<>Find your<br />own pace.</>),
    text: "Movement, breath, nourishing food and quiet spaces make room for a more considered day.",
    img: "prana-shala.jpg",
    alt: "Prana Shala",
    link: ["/day", "Explore daily rhythm ↗"],
  },
  {
    eyebrow: "03 / Belong",
    title: (<>Take a little<br />of it home.</>),
    text: "Meet makers, learn a craft and carry a slower, more grounded rhythm beyond your stay.",
    img: "sona-gramam.jpg",
    alt: "Sona Gramam craft village",
    link: ["/sonagramam", "Discover Sona Gramam ↗"],
    imageFirst: true,
    tall: true,
  },
];

function PanelView({ p, active }: { p: Panel; active: boolean }) {
  const copy = (
    <div
      className={`relative z-[2] max-w-[430px] transition-all duration-1000 ${
        active ? "translate-y-0 opacity-100" : "translate-y-[10px] opacity-60"
      }`}
    >
      <div className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#d0ad79]">{p.eyebrow}</div>
      <h2
        className="my-[22px] font-display font-normal text-[#f5eee2]"
        style={{ fontSize: "clamp(44px,5.6vw,76px)", lineHeight: 0.92, letterSpacing: "-0.02em", textWrap: "balance" as never }}
      >
        {p.title}
      </h2>
      <p className="max-w-[400px] text-[13px] leading-[1.9] text-[#d6c6b7]">{p.text}</p>
      {p.link && (
        <Link
          href={p.link[0]}
          className="mt-[22px] inline-flex items-center gap-3 border-b border-gold pb-[7px] text-[10px] uppercase tracking-[0.16em] text-[#f5eee2]"
        >
          {p.link[1]}
        </Link>
      )}
      {p.intro && (
        <span className="mt-[58px] hidden text-[8px] uppercase tracking-[0.2em] text-[#d0ad79] lg:block">
          Scroll to move through the village ↓
        </span>
      )}
    </div>
  );

  const visual = (
    <div className={`relative overflow-hidden ${p.tall ? "h-[min(72vh,720px)]" : "h-[min(66vh,650px)]"} max-lg:h-[260px]`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        loading="lazy"
        decoding="async"
        src={`${IMG}/${p.img}`}
        alt={p.alt}
        className={`h-full w-full object-cover transition-transform duration-[1800ms] ${active ? "scale-100" : "scale-[1.12]"}`}
      />
      <div className="pointer-events-none absolute inset-0 border border-[#e8d6bd]/30" />
    </div>
  );

  return (
    <article
      className={`grid shrink-0 items-center gap-6 px-6 py-9 max-lg:grid-cols-1 lg:h-full lg:w-1/4 lg:gap-[clamp(24px,5vw,72px)] lg:px-[clamp(30px,7vw,92px)] lg:pb-[clamp(54px,7vh,76px)] lg:pt-[clamp(74px,9vh,100px)] ${
        p.intro ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-2"
      }`}
    >
      {p.imageFirst ? (
        <>
          {visual}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {visual}
        </>
      )}
    </article>
  );
}

/** "The Ayurvana Experience" — scroll-driven horizontal chapter (stacked on mobile / reduced motion) */
export default function Journey() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const sticky = desktop && !reduce;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4, restDelta: 0.0005 });
  const x = useTransform(smooth, [0, 1], ["0%", "-75%"]);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(3, Math.max(0, Math.floor(v * 4)))));

  return (
    <section
      id="journey"
      ref={ref}
      aria-label="The Ayurvana journey"
      className="relative isolate bg-[#292019] text-[#f5eee2]"
      style={sticky ? { height: "390vh" } : undefined}
    >
      <div className={sticky ? "sticky top-0 flex h-[100svh] min-h-[560px] flex-col justify-center overflow-hidden" : "py-[70px]"}>
        {sticky && (
          <div className="absolute inset-x-[clamp(24px,5vw,76px)] top-[27px] z-[3] flex justify-between text-[7px] font-semibold uppercase tracking-[0.18em] text-[#d9c4a5]">
            <span>The Ayurvana Experience</span>
            <span className="font-display text-lg normal-case tracking-normal">
              <b className="inline-block min-w-[24px] font-normal">{String(active + 1).padStart(2, "0")}</b>{" "}
              <i className="mx-[5px] font-dm text-[10px] not-italic opacity-50">/</i> 04
            </span>
          </div>
        )}

        {sticky ? (
          <motion.div className="flex h-full w-[400%] will-change-transform" style={{ x }}>
            {panels.map((p, i) => (
              <PanelView key={p.alt} p={p} active={i === active} />
            ))}
          </motion.div>
        ) : (
          <div className="mx-auto grid max-w-6xl gap-4">
            <div className="px-6 pb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#d9c4a5]">
              The Ayurvana Experience
            </div>
            {panels.map((p) => (
              <PanelView key={p.alt} p={p} active />
            ))}
          </div>
        )}

        {sticky && (
          <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
            <motion.span
              className="block h-full origin-left bg-gradient-to-r from-forest-light via-[#d0ad79] to-[#f1dfbd]"
              style={{ scaleX: smooth }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

const shortcuts = [
  ["/wellness", "01", "Wellness"],
  ["/day", "02", "Daily life"],
  ["/sonagramam#gramam", "03", "Culture"],
  ["/sonagramam#cottage-design", "04", "Architecture"],
  ["/stay", "05", "Your stay"],
];

/** Quick links shown under the stat band in the client page */
export function JourneyShortcuts() {
  return (
    <nav aria-label="Explore Ayurvana" className="border-b border-line bg-cream-dark">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-6 py-5">
        {shortcuts.map(([href, n, label]) => (
          <Link
            key={href}
            href={href}
            className="text-[10px] uppercase tracking-[0.16em] text-text-dark transition-colors hover:text-forest"
          >
            <span className="mr-2 text-gold">{n}</span>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
