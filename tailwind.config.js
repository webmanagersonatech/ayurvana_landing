/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
