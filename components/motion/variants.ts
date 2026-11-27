import type { Variants } from "framer-motion";

/** Shared easing — fast start, soft landing (feels quick, not sluggish). */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Reusable motion presets. Use with <Reveal variant="fadeUp" /> or <StaggerItem variant="..." /> */
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
  },
  /** Curtain wipe from the bottom — great for image cards. */
  clipUp: {
    hidden: { clipPath: "inset(100% 0% 0% 0% round 16px)", opacity: 0.4 },
    show: {
      clipPath: "inset(0% 0% 0% 0% round 16px)",
      opacity: 1,
      transition: { duration: 0.8, ease: EASE },
    },
  },
} satisfies Record<string, Variants>;

export type VariantName = keyof typeof variants;
