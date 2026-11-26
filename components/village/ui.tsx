import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const IMG = "/images/ayurvana";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  children,
  lead,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  children: ReactNode;
  lead?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`text-xs font-semibold tracking-[0.25em] uppercase ${
          dark ? "text-gold-light" : "text-forest-light"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] mt-4 ${
          dark ? "text-white" : "text-text-dark"
        }`}
      >
        {children}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-sm sm:text-base leading-relaxed ${
            dark ? "text-white/80" : "text-text-muted"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

export function Note({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mt-8 text-xs leading-relaxed max-w-3xl ${
        dark ? "text-white/65" : "text-text-light"
      }`}
    >
      {children}
    </p>
  );
}

export function Card({
  title,
  children,
  tag,
  dark = false,
}: {
  title: string;
  children: ReactNode;
  tag?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`p-6 border transition-colors duration-300 h-full ${
        dark
          ? "border-white/20 hover:border-white/60 text-white"
          : "border-line bg-cream-light hover:border-forest-light"
      }`}
    >
      {tag && (
        <p
          className={`text-[10px] tracking-[0.2em] uppercase mb-3 ${
            dark ? "text-gold-light" : "text-forest-light"
          }`}
        >
          {tag}
        </p>
      )}
      <h3 className={`font-serif text-xl mb-2 ${dark ? "text-white" : "text-text-dark"}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${dark ? "text-white/80" : "text-text-muted"}`}>
        {children}
      </p>
    </div>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  return (
    <figure className={`relative overflow-hidden group ${className}`}>
      <img
        src={`${IMG}/${src}`}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs tracking-wide text-white bg-gradient-to-t from-black/70 to-transparent">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
