/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        "cream-dark": "#EDE7D9",
        forest: "#2D5016",
        "forest-light": "#3A6B1A",
        "forest-dark": "#1E3A0F",
        sage: "#7A9E5B",
        gold: "#C49A3C",
        "gold-light": "#D4AE5A",
        "warm-brown": "#8B5E3C",
        "text-dark": "#1A1A1A",
        "text-muted": "#6B6B6B",
        "text-light": "#9A9A9A",
      },
      fontFamily: {
        serif: ["Georgia", "Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(45,80,22,0.7) 0%, rgba(30,58,15,0.5) 100%)",
      },
    },
  },
  plugins: [],
};
