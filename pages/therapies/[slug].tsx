import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Home, ChevronRight, Clock, Tag, CheckCircle2, ArrowRight, Plus, Minus } from "lucide-react";
import { therapies, getTherapyBySlug, getRelatedTherapies, Therapy } from "../../lib/therapiesData";

interface Props {
  therapy: Therapy;
  related: Therapy[];
}

const SITE_URL = "https://www.ayurvana.com";

export default function TherapyPage({ therapy, related }: Props) {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (router.isFallback) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-cream">
        <p className="text-text-muted">Loading therapy details...</p>
      </div>
    );
  }

  const pageUrl = `${SITE_URL}/therapies/${therapy.slug}`;
  const metaTitle = therapy.metaTitle || `${therapy.title} | AyurVana`;
  const metaDescription = therapy.metaDescription || therapy.excerpt;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: therapy.title,
    description: therapy.excerpt,
    url: pageUrl,
    image: therapy.image.startsWith("http") ? therapy.image : `${SITE_URL}${therapy.image}`,
    ...(therapy.indications.length
      ? { indication: therapy.indications.map((i) => ({ "@type": "MedicalIndication", name: i })) }
      : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Therapies", item: `${SITE_URL}/therapies` },
      { "@type": "ListItem", position: 3, name: therapy.title, item: pageUrl },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: therapy.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {therapy.keywords && <meta name="keywords" content={therapy.keywords.join(", ")} />}
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={therapy.image.startsWith("http") ? therapy.image : `${SITE_URL}${therapy.image}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        {therapy.faqs.length > 0 && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        )}
      </Head>

      {/* Hero */}
      <section className="relative bg-forest-dark pt-32 pb-14 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-cream/50 mb-8 flex-wrap">
            <Home className="w-3.5 h-3.5" />
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/therapies" className="hover:text-cream transition-colors">Therapies</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-cream/80 truncate max-w-[220px]">{therapy.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-gold-light text-xs font-semibold tracking-[0.2em] uppercase">
              {therapy.category}
            </span>
            <span className="w-8 h-px bg-gold/40" />
            <span className="text-cream/60 text-xs">{therapy.tag}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-[1.15] tracking-tight max-w-3xl">
            {therapy.title}
          </h1>
          <p className="text-cream/60 mt-5 max-w-xl leading-relaxed">{therapy.excerpt}</p>

          <div className="flex items-center gap-5 mt-8 pt-6 border-t border-white/10 text-cream/60 text-sm flex-wrap">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {therapy.duration}
            </span>
            <span className="w-px h-8 bg-white/10 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> {therapy.price}
            </span>
            <a href="#appointment" className="btn-gold ml-auto">
              Book This Therapy
            </a>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
          <div className="overflow-hidden shadow-xl rounded-sm h-64 md:h-[420px]">
            <img
              loading="lazy"
              decoding="async"
              src={therapy.image}
              alt={therapy.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-x-10">
          <article className="w-full min-w-0 max-w-[780px]">
            {therapy.content.map((block, i) => (
              <div key={i} className="mb-9">
                <h2 className="font-serif text-2xl font-semibold text-text-dark mb-4 scroll-mt-28">
                  {block.heading}
                </h2>
                <p
                  className={`text-text-muted leading-[1.85] text-[1.05rem] ${
                    i === 0
                      ? "first-letter:font-serif first-letter:text-6xl first-letter:font-semibold first-letter:text-forest first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1"
                      : ""
                  }`}
                >
                  {block.body}
                </p>
              </div>
            ))}

            {/* Benefits */}
            <div className="mb-9">
              <h2 className="font-serif text-2xl font-semibold text-text-dark mb-4">
                Key Benefits
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {therapy.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            {therapy.faqs.length > 0 && (
              <div className="mb-9">
                <h2 className="font-serif text-2xl font-semibold text-text-dark mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {therapy.faqs.map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl border border-forest/10 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                      >
                        <span className="font-medium text-text-dark text-sm">{faq.q}</span>
                        {openFaq === i ? (
                          <Minus className="w-4 h-4 text-forest shrink-0" />
                        ) : (
                          <Plus className="w-4 h-4 text-forest shrink-0" />
                        )}
                      </button>
                      {openFaq === i && (
                        <p className="px-5 pb-4 text-text-muted text-sm leading-relaxed">{faq.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="w-full">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white rounded-2xl p-6 card-hover">
                <h3 className="font-serif text-lg font-semibold text-text-dark mb-4">
                  Session Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-light">Duration</span>
                    <span className="text-text-dark font-medium">{therapy.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">Price</span>
                    <span className="text-forest font-semibold">{therapy.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">Category</span>
                    <span className="text-text-dark font-medium">{therapy.category}</span>
                  </div>
                </div>
                <a href="#appointment" className="btn-primary w-full justify-center text-sm mt-5">
                  Book Now
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 card-hover">
                <h3 className="font-serif text-lg font-semibold text-text-dark mb-4">
                  Recommended For
                </h3>
                <ul className="space-y-2.5">
                  {therapy.indications.map((ind) => (
                    <li key={ind} className="text-text-muted text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/therapies" className="btn-outline w-full justify-center text-sm">
                Browse All Therapies
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related therapies */}
      {related.length > 0 && (
        <section className="py-20 bg-cream-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <span className="section-label">Explore More</span>
              <h2 className="section-title mt-3">Related Therapies</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/therapies/${r.slug}`}
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
                      <Clock className="w-3.5 h-3.5" /> {r.duration}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-text-dark mt-2 mb-2 leading-snug group-hover:text-forest transition-colors">
                      {r.title}
                    </h3>
                    <span className="text-forest text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all w-fit">
                      View therapy <ArrowRight className="w-4 h-4" />
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
    paths: therapies.map((t) => ({ params: { slug: t.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const therapy = getTherapyBySlug(slug);

  if (!therapy) {
    return { notFound: true };
  }

  return {
    props: {
      therapy,
      related: getRelatedTherapies(therapy),
    },
  };
};
