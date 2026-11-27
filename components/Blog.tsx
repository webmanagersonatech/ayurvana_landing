import Link from "next/link";
import { blogPosts } from "../lib/blogData";

const articles = blogPosts.slice(0, 3);

export default function Blog() {
  return (
    <section className="section-pad bg-cream" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-head center">
          <span className="section-label">Our Blog</span>
          <h2 className="section-title mt-3">
            Latest Articles From <span className="title-accent">Ayurvana</span>
          </h2>
          <p className="section-lead">Practical guidance on Ayurveda, healing and slower living from our physicians.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link href={`/blog/${article.slug}`} key={article.slug} className="bg-cream-light border border-line rounded-2xl overflow-hidden card-hover group block">
              <div className="aspect-[3/2] overflow-hidden">
                <img loading="lazy" decoding="async"
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-forest-light/10 text-forest-light text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-text-light text-xs">{article.readTime}</span>
                </div>
                <h3 className="card-title mb-2">
                  {article.title}
                </h3>
                <p className="card-text mb-4">{article.excerpt}</p>
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

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-outline">View All Articles</Link>
        </div>
      </div>
    </section>
  );
}
