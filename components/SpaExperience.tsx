import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { photos, lineArt } from "./siteImages";

const gallery = photos.gallery.map((g) => ({
  src: g.src,
  alt: g.label,
  span: g.tall ? "md:row-span-2" : "",
}));

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
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 text-xl text-white transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 240, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-full w-full max-w-5xl overflow-y-auto rounded-3xl bg-forest-dark on-dark shadow-2xl md:grid-cols-[1.6fr_1fr]"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={`${roundButton} absolute right-4 top-4 z-10 bg-black/40`}
        >
          ✕
        </button>

        {/* Photo, swipe left or right on phones */}
        <div className="relative h-[48vh] overflow-hidden bg-black/30 md:h-[75vh]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={index}
              src={item.src}
              alt={item.alt}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              drag={total > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                if (info.offset.x > 60) prev();
              }}
              className="h-full w-full cursor-grab object-contain active:cursor-grabbing"
            />
          </AnimatePresence>
        </div>

        {/* Side panel */}
        <div className="flex min-w-0 flex-col items-center justify-between gap-5 p-6 text-center md:pt-20">
          <div aria-live="polite">
            <span className="section-label">Ayurvana</span>
            <h3 className="section-title mt-3">
              <span className="title-accent">{item.alt}</span>
            </h3>
            <div className="mx-auto my-4 flex items-center justify-center gap-2 text-white/50">
              <span className="h-px w-10 bg-current" />
              <span className="h-1.5 w-1.5 rotate-45 bg-current" />
              <span className="h-px w-10 bg-current" />
            </div>
            <p className="text-xs tracking-widest text-white/60">
              {index + 1} / {total}
            </p>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap justify-center gap-2">
            {gallery.map((thumb, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onChange(i)}
                aria-label={`Show ${thumb.alt}`}
                aria-current={i === index}
                className={`h-14 w-11 overflow-hidden rounded-t-full rounded-b-md border-2 transition-opacity ${
                  i === index
                    ? "border-white opacity-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img src={thumb.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <button type="button" onClick={prev} aria-label="Previous photo" className={roundButton}>
              ‹
            </button>
            <button type="button" onClick={next} aria-label="Next photo" className={roundButton}>
              ›
            </button>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]"
        >
          {gallery.map((item, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${item.alt}`}
              variants={itemVariants}
              className={`${item.span} group relative cursor-pointer overflow-hidden rounded-t-[7rem] rounded-b-2xl border border-white/30 bg-white/5 p-2 transition-shadow duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
            >
              <span className="relative block h-full w-full overflow-hidden rounded-t-[6.5rem] rounded-b-xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Name is always visible, so phone users see it too */}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-4 pt-12 text-center">
                  <span className="block text-sm font-medium uppercase tracking-wider text-white">{item.alt}</span>
                  <span className="mx-auto mt-2 block h-px w-8 bg-white/70 transition-all duration-500 group-hover:w-24" />
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
