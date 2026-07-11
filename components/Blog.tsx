const articles = [
  {
    title: "What is Abhyanga? Benefits of Ayurvedic Oil Massage",
    category: "Wellness",
    date: "June 15, 2025",
    excerpt: "Abhyanga, the daily self-massage ritual, is one of Ayurveda's most profound practices for nourishing the body and calming the mind.",
    image: "https://img.magnific.com/premium-photo/massage-therapist39s-hand-applies-oil-woman39s-back_620829-17950.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    readTime: "5 min read",
  },
  {
    title: "Rasayana: The Ayurvedic Path to Anti-Ageing",
    category: "Treatments",
    date: "June 8, 2025",
    excerpt: "Discover how Rasayana therapies use potent herbal formulations to slow ageing, boost immunity, and restore youthful vitality.",
    image: "https://img.magnific.com/free-photo/female-therapist-giving-mud-bath-young-man-health-spa_662251-2588.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    readTime: "7 min read",
  },
  {
    title: "Customised Ayurvedic Therapy: Why One Size Never Fits All",
    category: "Ayurveda",
    date: "May 28, 2025",
    excerpt: "Understanding your dosha — Vata, Pitta, or Kapha — is the foundation of effective Ayurvedic treatment. Here's how personalisation works.",
    image: "https://img.magnific.com/free-photo/natural-cosmetics-environmentally-friendly-product-aromatic-cream-oil_169016-4908.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80q=80",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-cream" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="section-label">Our Blog</span>
            <h2 className="section-title mt-3">
              Latest Articles From
              <br />AyurVana
            </h2>
          </div>
          <a href="#blog" className="btn-outline shrink-0">
            View All Articles
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.title} className="bg-white rounded-2xl overflow-hidden card-hover group">
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-sage/10 text-sage text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-text-light text-xs">{article.readTime}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-text-dark mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-text-light text-xs">{article.date}</span>
                  <a href="#blog" className="text-forest text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
