import { useState, useMemo } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { Search, Home, ChevronRight, ArrowRight, Clock } from "lucide-react";
import { blogPosts, categories } from "../../lib/blogData";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export default function BlogIndex() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const [featured, ...rest] = filteredPosts;

  return (
    <>
      <Head>
        <title>Blog | AyurVana — Ayurvedic Wellness Journal</title>
        <meta
          name="description"
          content="Explore articles on Ayurveda, wellness rituals, treatments, and mindful living from the AyurVana journal."
        />
      </Head>

      {/* Hero */}
      <section className="relative bg-forest-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid slice">
            <path d="M800 0C800 0 700 40 660 100C620 160 600 240 560 300C520 360 440 400 400 400C400 400 500 360 540 300C580 240 600 160 640 100C680 40 800 0 800 0Z" fill="#C49A3C" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-cream/60 mb-6">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-cream">Blog</span>
          </nav>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}>
            <span className="section-label text-gold-light">The AyurVana Journal</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 leading-tight max-w-2xl">
              Stories &amp; wisdom for a balanced life
            </h1>
            <p className="text-cream/70 mt-5 max-w-xl leading-relaxed">
              Insights on Ayurveda, seasonal rituals, and holistic wellness from our practitioners —
              written to help you live in step with your own nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream border-b border-forest/10 sticky top-0 z-20 backdrop-blur-sm bg-cream/95">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-forest text-white"
                    : "bg-white text-text-muted hover:bg-forest/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-text-light absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-white border border-forest/10 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest/20"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-text-muted">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden card-hover"
                  >
                    <div className="h-72 md:h-full overflow-hidden">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 md:pr-12">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-sage/10 text-sage text-xs font-semibold px-3 py-1 rounded-full">
                          {featured.category}
                        </span>
                        <span className="text-text-light text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {featured.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-dark mb-4 leading-snug group-hover:text-forest transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                      <span className="text-forest text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all w-fit">
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {rest.map((post) => (
                  <motion.article
                    key={post.slug}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl overflow-hidden card-hover group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="h-48 overflow-hidden">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-sage/10 text-sage text-xs font-semibold px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-text-light text-xs">{post.readTime}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-text-dark mb-2 leading-snug group-hover:text-forest transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-text-light text-xs">{post.date}</span>
                          <span className="text-forest text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read more
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
