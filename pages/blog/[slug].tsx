import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Home, ChevronRight, Clock, Calendar, ArrowRight, Link2 } from "lucide-react";
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

export default function BlogPostPage({ post, related }: Props) {
  const router = useRouter();

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

      {/* Hero */}
      <section className="relative bg-forest-dark pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid slice">
            <path d="M800 0C800 0 700 40 660 100C620 160 600 240 560 300C520 360 440 400 400 400C400 400 500 360 540 300C580 240 600 160 640 100C680 40 800 0 800 0Z" fill="#C49A3C" />
          </svg>
        </div>
        <div className="relative max-w-7xl  mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-cream/60 mb-6 flex-wrap">
            <Home className="w-4 h-4" />
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-cream transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-cream truncate max-w-[220px]">{post.title}</span>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}>
            <span className="bg-gold/20 text-gold-light text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-5 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 mt-6 text-cream/70 text-sm">
              <span className="flex items-center gap-2">
                <img src={post.author.avatar} alt={post.author.name} className="w-9 h-9 rounded-full object-cover" />
                <span>
                  <span className="text-white block leading-none">{post.author.name}</span>
                  <span className="text-xs text-cream/50">{post.author.role}</span>
                </span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
          <div className="overflow-hidden shadow-xl h-64 md:h-96">
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
        <div className="max-w-7xl  mx-auto px-6 grid lg:grid-cols-[1fr_auto] gap-12">
          <article className="max-w-2xl">
            {post.content.map((block, i) => (
              <div key={i} className="mb-8">
                {block.heading && (
                  <h2 className="font-serif text-2xl font-semibold text-text-dark mb-3">{block.heading}</h2>
                )}
                <p className="text-text-muted leading-relaxed">{block.body}</p>
              </div>
            ))}

            {/* Share */}
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-forest/10">
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
          </article>

          {/* Author card sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl p-6 sticky top-24 card-hover">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="font-serif text-lg font-semibold text-text-dark">{post.author.name}</h3>
              <p className="text-sage text-xs font-semibold uppercase tracking-wide mb-3">{post.author.role}</p>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Practising Ayurveda for over a decade, blending traditional protocols with a modern, personalised approach to wellness.
              </p>
              <Link href="/blog" className="btn-outline w-full justify-center text-sm">
                More Articles
              </Link>
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
                    <span className="bg-sage/10 text-sage text-xs font-semibold px-3 py-1 rounded-full">
                      {r.category}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-text-dark mt-3 mb-2 leading-snug group-hover:text-forest transition-colors">
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
