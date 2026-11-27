"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";
import { EASE, variants, type VariantName } from "./variants";

const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

/* ───────────── Reveal: animate any block in when scrolled into view ───────────── */
export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  variant?: VariantName;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ───────────── Stagger: parent + items animate in sequence ───────────── */
export function Stagger({
  children,
  gap = 0.09,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  gap?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  variant = "fadeUp",
  className = "",
}: {
  children: ReactNode;
  variant?: VariantName;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={variants[variant]}>
      {children}
    </motion.div>
  );
}

/* ───────────── TextReveal: words rise out of a mask, one by one ───────────── */
export function TextReveal({
  text,
  as = "h2",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const Tag = as;
  const reduce = useReducedMotion();
  if (reduce) return <Tag className={className}>{text}</Tag>;
  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline"
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
      >
        {text.split(" ").map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%" },
                show: { y: "0%", transition: { duration: 0.7, ease: EASE } },
              }}
            >
              {w}&nbsp;
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ───────────── ParallaxImage: image drifts slowly while its frame scrolls ───────────── */
export function ParallaxImage({
  src,
  alt = "",
  strength = 8,
  className = "",
}: {
  src: string;
  alt?: string;
  /** percent the image travels up/down */
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={reduce ? undefined : { y, scale: 1 + (strength * 2) / 100 }}
        className={`absolute inset-0 w-full h-full object-cover will-change-transform ${className}`}
      />
    </div>
  );
}

/* ───────────── ScrollLine: a line that draws itself as the section scrolls ───────────── */
export function ScrollLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 40%"] });
  return (
    <div ref={ref} className={`h-px bg-forest/15 ${className}`}>
      <motion.div className="h-full bg-gold origin-left" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}

export { variants, EASE };
export type { VariantName };
