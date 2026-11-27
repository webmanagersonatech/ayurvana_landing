/**
 * Single source of truth for photography used on the home page sections.
 *
 * To drop in licensed premium stock later, replace the file paths below
 * (keep the same 3:2 landscape ratio, min 1600px wide, same warm colour grade)
 * — no component code needs to change.
 *
 * Line-art motifs (very low opacity section backgrounds) live in /images/lineart.
 */
export const photos = {
  aboutTall: { src: "/images/ayurvana/walkway.jpg", alt: "Stone walkway through the Ayurvana village at golden hour" },
  aboutTop: { src: "/images/ayurvana/pond-dusk.jpg", alt: "The village pond at dusk with lantern light" },
  aboutBottom: { src: "/images/ayurvana/prana-shala.jpg", alt: "Prana Shala yoga pavilion" },

  gallery: [
    { src: "/images/ayurvana/pond-dusk.jpg", label: "The Pond", tall: true },
    { src: "/images/ayurvana/spa.jpg", label: "Spa", tall: false },
    { src: "/images/ayurvana/walkway.jpg", label: "The Walkway", tall: true },
    { src: "/images/ayurvana/treatment-courtyard.jpg", label: "Treatment Courtyard", tall: false },
  ],

  // TODO: replace with a real portrait of the physician once available.
  quote: { src: "/images/ayurvana/entrance.jpg", alt: "The Ayurvana village entrance" },
};

export const lineArt = {
  sprig: "/images/lineart/lineart-sprig.svg",
  sprigLight: "/images/lineart/lineart-sprig-light.svg",
  lotus: "/images/lineart/lineart-lotus.svg",
  lotusLight: "/images/lineart/lineart-lotus-light.svg",
};
