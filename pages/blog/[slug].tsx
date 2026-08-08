import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, ChevronRight, Clock, Calendar, ArrowRight, Link2, List } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { blogPosts, getPostBySlug, getRelatedPosts, BlogPost } from "../../lib/blogData";

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogPostPage({ post, related }: Props) {
  const router = useRouter();
  const articleRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const headings = useMemo(
    () =>
      post?.content
        ?.map((block, i) => (block.heading ? { id: `${slugify(block.heading)}-${i}`, text: block.heading } : null))
        .filter(Boolean) as { id: string; text: string }[],
    [post]
  );

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const scrolled = -rect.top;
      const pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (router.isFallback) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-cream">
        <p className="text-text-muted">Loading article...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | AyurVana Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      {/* Reading progress rail */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-forest/10 z-50">
        <div
          className="h-full bg-gold transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero */}
      <section className="relative bg-forest-dark pt-32 pb-14 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-cream/50 mb-8 flex-wrap">
            <Home className="w-3.5 h-3.5" />
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-cream transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-cream/80 truncate max-w-[220px]">{post.title}</span>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-gold-light text-xs font-semibold tracking-[0.2em] uppercase">
                {post.category}
              </span>
              <span className="w-8 h-px bg-gold/40" />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-[1.15] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-5 mt-8 pt-6 border-t border-white/10 text-cream/60 text-sm">
              <span className="flex items-center gap-2.5">
                <img src={post.author.avatar} alt={post.author.name} className="w-9 h-9 rounded-full object-cover" />
                <span>
                  <span className="text-white block leading-none text-sm">{post.author.name}</span>
                  <span className="text-xs text-cream/45 mt-1 block">{post.author.role}</span>
                </span>
              </span>
              <span className="w-px h-8 bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
          <div className="overflow-hidden shadow-xl rounded-sm h-64 md:h-[420px]">
            <img
              loading="lazy"
              decoding="async"
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[48px_minmax(0,1fr)_240px] gap-x-10">

          {/* Share rail — sticky, desktop only */}
          <div className="hidden lg:flex flex-col items-center gap-3 sticky top-32 h-fit">
            <span
              className="text-[11px] text-text-light tracking-wide uppercase mb-1"
              style={{ writingMode: "vertical-rl" }}
            >
              Share
            </span>

            {[FaFacebook, FaTwitter, FaLinkedin, Link2].map((Icon, idx) => (
              <button
                key={idx}
                className="w-9 h-9 rounded-full bg-white border border-forest/10 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all duration-300"
                aria-label="Share"
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>

          {/* Article */}
          <article ref={articleRef} className="w-full min-w-0">
            <div className="max-w-[780px]">
              {post.content.map((block, i) => {
                const id = block.heading
                  ? `${slugify(block.heading)}-${i}`
                  : undefined;

                return (
                  <div key={i} className="mb-9">
                    {block.heading && (
                      <h2
                        id={id}
                        className="font-serif text-2xl font-semibold text-text-dark mb-4 scroll-mt-28"
                      >
                        {block.heading}
                      </h2>
                    )}

                    <p
                      className={`text-text-muted leading-[1.85] text-[1.05rem] ${i === 0
                          ? "first-letter:font-serif first-letter:text-6xl first-letter:font-semibold first-letter:text-forest first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1"
                          : ""
                        }`}
                    >
                      {block.body}
                    </p>
                  </div>
                );
              })}

              {/* Mobile share row */}
              <div className="flex lg:hidden items-center gap-3 pt-6 mt-2 border-t border-forest/10">
                <span className="text-text-light text-sm mr-1">Share:</span>

                {[FaFacebook, FaTwitter, FaLinkedin, Link2].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-9 h-9 rounded-full bg-white border border-forest/10 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all duration-300"
                    aria-label="Share"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full">
            <div className="sticky top-32 space-y-6">

              {headings && headings.length > 1 && (
                <div className="bg-white rounded-2xl p-6 card-hover">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-sage mb-4">
                    <List className="w-3.5 h-3.5" />
                    In this article
                  </span>

                  <ul className="space-y-2.5">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="text-sm text-text-muted hover:text-forest transition-colors leading-snug block"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 card-hover">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover mb-4"
                />

                <h3 className="font-serif text-lg font-semibold text-text-dark">
                  {post.author.name}
                </h3>

                <p className="text-sage text-xs font-semibold uppercase tracking-wide mb-3">
                  {post.author.role}
                </p>

                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  Practising Ayurveda for over a decade, blending traditional
                  protocols with a modern, personalised approach to wellness.
                </p>

                <Link
                  href="/blog"
                  className="btn-outline w-full justify-center text-sm"
                >
                  More Articles
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-20 bg-cream-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="section-label">Keep Reading</span>
              <h2 className="section-title mt-3">Related Articles</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white rounded-2xl overflow-hidden card-hover group block"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-text-light text-xs flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {r.readTime}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-text-dark mt-2 mb-2 leading-snug group-hover:text-forest transition-colors">
                      {r.title}
                    </h3>
                    <span className="text-forest text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all w-fit">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
      related: getRelatedPosts(post),
    },
  };
};