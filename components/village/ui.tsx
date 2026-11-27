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
    <Reveal className={`section-head max-w-3xl ${center ? "center mx-auto" : ""} ${dark ? "on-dark" : ""}`}>
      <span className="section-label">{eyebrow}</span>
      <h2 className="section-title mt-3">{children}</h2>
      {lead && <p className="section-lead !max-w-2xl">{lead}</p>}
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
    <div className={`${dark ? "ui-card-dark on-dark" : "ui-card"} h-full`}>
      {tag && (
        <p className={`text-xs tracking-[0.2em] uppercase mb-3 ${dark ? "text-gold-light" : "text-forest-light"}`}>
          {tag}
        </p>
      )}
      <h3 className="card-title mb-2">{title}</h3>
      <p className="card-text">{children}</p>
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
    <figure className={`relative overflow-hidden rounded-2xl group ${className}`}>
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
