import { useState, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import { Home, ChevronRight, Clock, ArrowRight } from "lucide-react";
import { therapies, therapyCategories } from "../../lib/therapiesData";

export default function TherapiesIndex() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? therapies
        : therapies.filter((t) => t.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <Head>
        <title>All Therapies | AyurVana Wellness Treatments</title>
        <meta
          name="description"
          content="Explore all therapies offered at AyurVana — from traditional Ayurvedic massages to advanced regenerative treatments. Find the right therapy for your needs."
        />
        <link rel="canonical" href="https://www.ayurvanaindia.com/therapies" />
      </Head>

      {/* Hero */}
      <section className="relative bg-forest-dark pt-32 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-cream/50 mb-6">
            <Home className="w-3.5 h-3.5" />
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-cream/80">Therapies</span>
          </nav>
          <span className="text-gold-light text-xs font-semibold tracking-[0.2em] uppercase">
            Our Therapies
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mt-3 max-w-2xl">
            Every Therapy, Explained — Find the Right Treatment for You
          </h1>
          <p className="text-cream/60 mt-5 max-w-xl leading-relaxed">
            From classical Ayurvedic massages to advanced regenerative care, browse
            our full range of therapies below.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream sticky top-0 z-30 border-b border-forest/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar">
          {therapyCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-forest text-white"
                  : "bg-white text-text-muted hover:bg-forest/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-text-muted text-sm mb-8">
            Showing {filtered.length} {filtered.length === 1 ? "therapy" : "therapies"}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((therapy) => (
              <Link
                key={therapy.slug}
                href={`/therapies/${therapy.slug}`}
                className="bg-white rounded-2xl overflow-hidden card-hover group block"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={therapy.image}
                    alt={therapy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 text-forest text-xs font-semibold px-3 py-1 rounded-full">
                    {therapy.tag}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-sage text-xs font-semibold uppercase tracking-wide">
                    {therapy.category}
                  </span>
                  <h2 className="font-serif text-lg font-semibold text-text-dark mt-2 mb-2 leading-snug group-hover:text-forest transition-colors">
                    {therapy.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-2 mb-4">
                    {therapy.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5 text-text-light">
                      <Clock className="w-3.5 h-3.5" /> {therapy.duration}
                    </span>
                    <span className="text-forest font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
