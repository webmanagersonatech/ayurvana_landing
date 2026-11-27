/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ayurvana palette (from Website_HTML.html)
        cream: "#F5EEE2",          // --ivory
        "cream-dark": "#EDE3D4",   // stat band
        "cream-light": "#FBF8F1",  // --paper
        forest: "#873F2B",         // --clay (primary)
        "forest-light": "#A85B42", // --clay2
        "forest-dark": "#2C211C",  // --dark
        sage: "#66715A",           // --sage
        gold: "#B89A65",           // --gold
        "gold-light": "#E0C08E",
        "gold-dark": "#9A7F4F",
        "warm-brown": "#8B5E3C",
        "text-dark": "#2C211C",
        "text-muted": "#796C60",
        "text-light": "#A89A8C",
        line: "#D9CBBB",
      },
      fontFamily: {
        serif: ["Georgia", "Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(135,63,43,0.7) 0%, rgba(44,33,28,0.5) 100%)",
      },
    },
  },
  plugins: [
    /*
     * AYURVANA DESIGN SYSTEM  (single source of truth for type, cards, buttons)
     * ------------------------------------------------------------------------
     * Reference look = the "Wellness Packages" section.
     *
     * TYPE        .heading-1     page / hero H1
     *             .section-label eyebrow (SH1)
     *             .section-title section H2
     *             .section-lead  section body copy (BC1)
     *             .card-title    H3 inside cards
     *             .card-text     body copy inside cards
     * SHAPE       Everything is ROUNDED:  cards 2xl · inner panels/inputs xl · buttons/pills full
     * CARDS       .ui-card  (light)   .ui-card-dark (on dark sections)
     * BUTTONS     .btn-primary  .btn-outline  .btn-light  .btn-ghost-light
     * DARK        wrap a dark section in  .on-dark  and every token above flips automatically
     * Navigation is the only documented exception to the type scale.
     */
    plugin(function ({ addComponents }) {
      addComponents({
        ".heading-1": {
          "@apply font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-text-dark": {},
        },
        ".section-label": {
          "@apply inline-block text-xs font-semibold tracking-[0.2em] uppercase text-forest-light": {},
        },
        ".section-title": {
          "@apply font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-text-dark": {},
        },
        ".section-lead": {
          "@apply mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-text-muted": {},
        },
        ".title-accent": { "@apply italic text-forest": {} },
        ".section-head": { "@apply mb-14": {} },
        ".section-head.center": { "@apply text-center": {} },
        ".section-head.center .section-lead": { "@apply mx-auto": {} },
        ".card-title": { "@apply font-serif text-xl lg:text-2xl leading-snug text-text-dark": {} },
        ".section-pad": { "@apply py-20 lg:py-28": {} },
        ".card-text": { "@apply text-sm leading-relaxed text-text-muted": {} },

        ".on-dark .heading-1, .on-dark .section-title, .on-dark .card-title": { "@apply text-white": {} },
        ".on-dark .section-label": { "@apply text-gold-light": {} },
        ".on-dark .section-lead, .on-dark .card-text": { "@apply text-white/80": {} },
        ".on-dark .title-accent": { "@apply text-gold-light": {} },

        ".ui-card": {
          "@apply rounded-2xl border border-line bg-cream-light p-7 transition-all duration-300 hover:border-forest-light/60": {},
        },
        ".ui-card-dark": {
          "@apply rounded-2xl border border-white/20 p-7 transition-all duration-300 hover:border-white/60": {},
        },
        ".ui-media": { "@apply rounded-2xl overflow-hidden": {} },

        ".btn-primary, .btn-outline, .btn-light, .btn-ghost-light": {
          "@apply inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer": {},
        },
        ".btn-primary": { "@apply bg-forest text-white border border-forest hover:bg-forest-dark hover:border-forest-dark": {} },
        ".btn-outline": { "@apply border border-forest text-forest bg-transparent hover:bg-forest hover:text-white": {} },
        ".btn-light": { "@apply bg-cream text-forest border border-cream hover:bg-white hover:border-white": {} },
        ".btn-ghost-light": { "@apply border border-cream text-cream bg-transparent hover:bg-cream hover:text-forest": {} },

        ".field": {
          "@apply w-full rounded-xl border border-line bg-cream-light px-4 py-2.5 text-sm text-text-dark focus:outline-none focus:border-forest transition-colors": {},
        },
        ".field-dark": {
          "@apply w-full rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors": {},
        },
      });
    }),
  ],
};
