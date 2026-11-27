import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { photos, lineArt } from "./siteImages";

const gallery = photos.gallery.map((g) => ({
  src: g.src,
  alt: g.label,
  span: g.tall ? "md:row-span-2" : "",
}));

// Soft gold used for the popup accents. Change it to match your brand.
const GOLD = "#c9a45c";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.6, type: "tween", ease: "easeOut" },
  },
};

const roundButton =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c9a45c]/60 text-xl text-[#e8d3a2] transition-colors hover:bg-[#c9a45c] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8d3a2]";

type LightboxProps = {
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

function Lightbox({ index, onClose, onChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = gallery[index];
  const total = gallery.length;

  const prev = useCallback(
    () => onChange((index - 1 + total) % total),
    [index, total, onChange]
  );
  const next = useCallback(
    () => onChange((index + 1) % total),
    [index, total, onChange]
  );

  // Lock page scroll, move focus into the popup, and restore both on close
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  // Keyboard: Esc closes, arrows change photo, Tab stays inside the popup
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll("button");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        const inside = dialogRef.current?.contains(document.activeElement);
        if (e.shiftKey && (!inside || document.activeElement === first)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (!inside || document.activeElement === last)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
    >
      <motion.div
        initial={{ scale: 0.92, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-full w-full max-w-4xl overflow-y-auto rounded-t-[3rem] rounded-b-2xl border border-[#c9a45c]/50 bg-forest-dark p-3 shadow-2xl sm:rounded-t-[5rem] sm:p-5"
      >
        {/* Inner gold frame */}
        <div className="pointer-events-none absolute inset-1.5 rounded-t-[2.7rem] rounded-b-xl border border-[#c9a45c]/25 sm:rounded-t-[4.7rem]" />

        {/* Header */}
        <div className="relative flex flex-col items-center pb-3 pt-2">
          <img src={lineArt.lotusLight} alt="" aria-hidden="true" className="w-12 opacity-80" />
          <span className="mt-1 text-[11px] uppercase tracking-[0.35em]" style={{ color: GOLD }}>
            Ayurvana
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={`${roundButton} absolute right-3 top-3 sm:right-6`}
          >
            ✕
          </button>
        </div>

        {/* Photo, swipe left or right on phones */}
        <div className="relative overflow-hidden rounded-xl bg-black/30">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={index}
              src={item.src}
              alt={item.alt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              drag={total > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                if (info.offset.x > 60) prev();
              }}
              className="h-[55vh] w-full cursor-grab object-contain active:cursor-grabbing"
            />
          </AnimatePresence>
        </div>

        {/* Caption and arrows */}
        <div className="relative flex items-center justify-between gap-3 px-2 pt-4">
          <button type="button" onClick={prev} aria-label="Previous photo" className={roundButton}>
            ‹
          </button>
          <div className="text-center" aria-live="polite">
            <p className="font-serif text-xl italic text-white sm:text-2xl">{item.alt}</p>
            <div className="mx-auto my-2 h-px w-16" style={{ backgroundColor: GOLD }} />
            <p className="text-xs tracking-widest text-white/60">
              {index + 1} / {total}
            </p>
          </div>
          <button type="button" onClick={next} aria-label="Next photo" className={roundButton}>
            ›
          </button>
        </div>

        {/* Thumbnails */}
        <div className="relative mt-3 overflow-x-auto pb-2">
          <div className="mx-auto flex w-max gap-2 px-2 py-1">
            {gallery.map((thumb, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onChange(i)}
                aria-label={`Show ${thumb.alt}`}
                aria-current={i === index}
                className={`h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-opacity ${
                  i === index
                    ? "border-[#c9a45c] opacity-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img src={thumb.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SpaExperience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => setMounted(true), []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="section-pad relative overflow-hidden bg-forest-dark on-dark"
      id="gallery"
    >
      <img
        src={lineArt.lotusLight}
        alt=""
        aria-hidden="true"
        className="absolute -left-12 top-10 w-64 lg:w-96 opacity-[0.05] pointer-events-none select-none"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="section-head center">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            className="section-label"
          >
            Our Space
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            className="section-title mt-3"
          >
            Our <span className="title-accent">Ayurvana</span> Experience
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtitleVariants}
            className="section-lead"
          >
            Step inside Ayurvana — a world of calm, crafted with care.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[200px]"
        >
          {gallery.map((item, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${item.alt}`}
              variants={itemVariants}
              className={`overflow-hidden rounded-2xl ${item.span} group relative cursor-pointer`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Hover overlay */}
              <span className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-white text-sm font-medium tracking-wider uppercase px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">
                  {item.alt}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Rendered on <body> so the section cannot clip the popup */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {activeIndex !== null && (
              <Lightbox index={activeIndex} onClose={close} onChange={setActiveIndex} />
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.section>
  );
}