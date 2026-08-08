import Link from "next/link";
import { blogPosts } from "../lib/blogData";

const articles = blogPosts.slice(0, 3);

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
          <Link href="/blog" className="btn-outline shrink-0">
            View All Articles
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link href={`/blog/${article.slug}`} key={article.slug} className="bg-white rounded-2xl overflow-hidden card-hover group block">
              <div className="h-48 overflow-hidden">
                <img loading="lazy" decoding="async"
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
                  <span className="text-forest text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
