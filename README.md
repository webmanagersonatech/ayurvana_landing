# Wivana Ayurveda — Next.js 15 Website

A fully responsive, SEO-friendly Ayurvedic wellness landing page built with **Next.js 15** (Pages Router), **Tailwind CSS**, and **React 19**.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## Project Structure

```
wivana/
├── pages/
│   ├── _app.jsx          # Global CSS import
│   ├── _document.jsx     # Custom HTML head (fonts, meta)
│   ├── index.jsx         # Homepage with full SEO meta tags
│   └── 404.jsx           # Custom 404 page
├── components/
│   ├── Navbar.jsx        # Sticky navbar with mobile menu
│   ├── Hero.jsx          # Full-screen hero section
│   ├── About.jsx         # About / sanctuary section
│   ├── QuoteBand.jsx     # Founder quote highlight
│   ├── HowItWorks.jsx    # 4-step process section
│   ├── WellnessExperience.jsx  # Dark green features grid
│   ├── PartnersBand.jsx  # Partners / certifications
│   ├── Treatments.jsx    # Treatment cards (alternating layout)
│   ├── Testimonials.jsx  # Customer reviews grid
│   ├── SpaExperience.jsx # Photo gallery grid
│   ├── FAQ.jsx           # Accordion FAQ with image
│   ├── Blog.jsx          # Latest articles grid
│   └── Footer.jsx        # Full footer with links & contact
├── styles/
│   └── globals.css       # Tailwind + custom component classes
├── public/               # Static assets
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## SEO Features

- Semantic HTML (`<main>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- Full `<meta>` tags (title, description, keywords, robots, canonical)
- Open Graph tags for social sharing
- Twitter Card tags
- JSON-LD structured data (HealthAndBeautyBusiness schema)
- Accessible `alt` text on all images
- Custom 404 page

## Design Tokens

| Token | Value |
|-------|-------|
| `cream` | `#F5F0E8` |
| `forest` | `#2D5016` |
| `sage` | `#7A9E5B` |
| `gold` | `#C49A3C` |
| Font — Display | Playfair Display |
| Font — Body | Inter |
