import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Home,
  ChevronRight,
  MapPin,
  IndianRupee,
  BedDouble,
  LayoutGrid,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { competitors, ayurvanaPackages, Competitor } from "../../lib/competitorData";
import { categoryIcon } from "../../lib/compareIcons";

interface Props {
  center: Competitor;
  others: Competitor[];
}

const SITE_URL = "https://www.ayurvanaindia.com";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: competitors.map((c) => ({ params: { slug: c.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const center = competitors.find((c) => c.slug === slug);
  if (!center) return { notFound: true };
  const others = competitors.filter((c) => c.slug !== slug).slice(0, 3);
  return { props: { center, others } };
};

// Picks the Ayurvana package whose duration is closest to the competitor's
// package, so the comparison strip lines up like-for-like durations.
function closestAyurvanaPackage(durationLabel: string) {
  const num = (s: string) => parseInt(s.replace(/[^\d]/g, ""), 10) || 0;
  const target = num(durationLabel);
  return ayurvanaPackages.reduce((best, pkg) =>
    Math.abs(num(pkg.duration) - target) < Math.abs(num(best.duration) - target) ? pkg : best
  );
}

export default function CenterProfile({ center, others }: Props) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-cream">
        <p className="text-text-muted">Loading profile...</p>
      </div>
    );
  }

  const pageUrl = `${SITE_URL}/packages/${center.slug}`;
  const metaTitle = `${center.name} — Treatments, Packages & Room Tariff | Ayurvana Market Profile`;
  const metaDescription = `${center.positioning} Compare ${center.name}'s treatments, package pricing and room tariff with Ayurvana Ayurveda.`;
  const entryPackage = center.packages[0];
  const matchedPackage = entryPackage ? closestAyurvanaPackage(entryPackage.duration) : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: center.name,
    description: center.positioning,
    url: pageUrl,
    ...(center.location ? { address: { "@type": "PostalAddress", addressLocality: center.location } } : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE_URL}/packages` },
      { "@type": "ListItem", position: 3, name: center.name, item: pageUrl },
    ],
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <main className="bg-cream min-h-screen pb-24">
        {/* Hero */}
        <section className="relative bg-forest-dark pt-32 pb-14 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #F5F0E8 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-cream/50 mb-8">
              <Home className="w-3.5 h-3.5" />
              <Link href="/" className="hover:text-cream transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/packages" className="hover:text-cream transition-colors">Packages</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-cream/80">{center.name}</span>
            </nav>

            <span className="text-gold-light text-xs font-semibold tracking-widest uppercase">
              Market Profile
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-white mt-3 leading-tight max-w-3xl">
              {center.name}
            </h1>
            {center.location && (
              <p className="flex items-center gap-1.5 text-cream/60 text-sm mt-3">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                {center.location}
              </p>
            )}
            <p className="text-cream/70 mt-5 max-w-2xl leading-relaxed">{center.positioning}</p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 mt-9 pt-7 border-t border-white/10">
              <div>
                <p className="text-white font-serif text-2xl">{center.categories.length}</p>
                <p className="text-cream/50 text-xs mt-1">Treatment categories</p>
              </div>
              <div>
                <p className="text-white font-serif text-2xl">{center.packages.length}</p>
                <p className="text-cream/50 text-xs mt-1">Package tiers</p>
              </div>
              {entryPackage && (
                <div>
                  <p className="text-white font-serif text-2xl">{entryPackage.price.split("–")[0].trim()}</p>
                  <p className="text-cream/50 text-xs mt-1">Starting from ({entryPackage.duration})</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Treatments grid */}
        <section className="max-w-7xl mx-auto px-6 mt-14">
          <div className="flex items-center gap-2 mb-6">
            <LayoutGrid className="w-5 h-5 text-sage" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl text-text-dark">Treatments &amp; Programs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {center.categories.map((cat) => {
              const Icon = categoryIcon(cat.category);
              return (
                <div
                  key={cat.category}
                  className="bg-white rounded-2xl border border-black/10 p-6 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-forest/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-dark text-sm mb-1.5">{cat.category}</h3>
                    <p className="text-text-muted text-xs leading-relaxed">{cat.items}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Packages */}
        <section className="max-w-7xl mx-auto px-6 mt-14">
          <div className="flex items-center gap-2 mb-6">
            <IndianRupee className="w-5 h-5 text-sage" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl text-text-dark">Package Pricing</h2>
          </div>
          <div className="bg-white rounded-2xl border border-black/10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest/5 text-left">
                  <th className="px-5 py-3 font-semibold text-text-dark whitespace-nowrap">Duration</th>
                  <th className="px-5 py-3 font-semibold text-text-dark">Program Focus</th>
                  <th className="px-5 py-3 font-semibold text-text-dark">Inclusions</th>
                  <th className="px-5 py-3 font-semibold text-text-dark whitespace-nowrap">Price</th>
                </tr>
              </thead>
              <tbody>
                {center.packages.map((pkg, i) => (
                  <tr key={pkg.duration} className={i % 2 ? "bg-cream/50" : ""}>
                    <td className="px-5 py-4 text-text-dark font-medium whitespace-nowrap">{pkg.duration}</td>
                    <td className="px-5 py-4 text-text-dark">{pkg.focus}</td>
                    <td className="px-5 py-4 text-text-muted text-xs">{pkg.inclusions}</td>
                    <td className="px-5 py-4 text-forest font-semibold whitespace-nowrap">{pkg.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Room tariff */}
        <section className="max-w-7xl mx-auto px-6 mt-14">
          <div className="flex items-center gap-2 mb-6">
            <BedDouble className="w-5 h-5 text-sage" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl text-text-dark">Room Tariff</h2>
          </div>
          {center.rooms.length > 0 ? (
            <div className="bg-white rounded-2xl border border-black/10 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest/5 text-left">
                    <th className="px-5 py-3 font-semibold text-text-dark whitespace-nowrap">Room Type</th>
                    <th className="px-5 py-3 font-semibold text-text-dark">Description</th>
                    <th className="px-5 py-3 font-semibold text-text-dark whitespace-nowrap">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {center.rooms.map((room, i) => (
                    <tr key={room.type} className={i % 2 ? "bg-cream/50" : ""}>
                      <td className="px-5 py-4 text-text-dark font-medium whitespace-nowrap">{room.type}</td>
                      <td className="px-5 py-4 text-text-muted">{room.description}</td>
                      <td className="px-5 py-4 text-forest font-semibold whitespace-nowrap">{room.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-text-muted text-sm italic bg-white rounded-2xl border border-black/10 px-6 py-5">
              {center.roomNote}
            </p>
          )}
          {center.rooms.length > 0 && center.roomNote && (
            <p className="text-text-light text-xs mt-3">{center.roomNote}</p>
          )}
        </section>

        {/* Ayurvana comparison CTA */}
        {matchedPackage && entryPackage && (
          <section className="max-w-7xl mx-auto px-6 mt-16">
            <div className="bg-forest rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-gold-light text-xs font-semibold tracking-widest uppercase">
                  At a similar duration
                </span>
                <h3 className="font-serif text-2xl text-white mt-3 leading-snug">
                  Ayurvana's {matchedPackage.duration} program —{" "}
                  <span className="italic text-gold-light">{matchedPackage.focus.split("—")[0].trim()}</span>
                </h3>
                <p className="text-white/70 text-sm mt-3 leading-relaxed">{matchedPackage.inclusions}</p>
              </div>
              <div className="md:text-right">
                <p className="text-white font-serif text-3xl">{matchedPackage.price}</p>
                <p className="text-white/50 text-xs mt-1 mb-6">
                  vs {entryPackage.price} at {center.name} ({entryPackage.duration})
                </p>
                <Link href="/packages" className="btn-gold">
                  See full comparison <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Other centers */}
        {others.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-text-dark">Other Profiles</h2>
              <Link href="/packages" className="text-forest text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/packages/${o.slug}`}
                  className="bg-white rounded-2xl border border-black/10 p-5 card-hover"
                >
                  <p className="font-serif text-lg text-text-dark mb-1">{o.name}</p>
                  {o.location && (
                    <p className="text-text-light text-xs flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3" /> {o.location}
                    </p>
                  )}
                  <p className="text-text-muted text-xs leading-relaxed line-clamp-2">{o.positioning}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="max-w-3xl mx-auto px-6 mt-16 text-center">
          <Link href="/packages" className="text-text-muted text-sm inline-flex items-center gap-1.5 hover:text-forest transition-colors mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all profiles
          </Link>
          <p className="text-text-light text-xs leading-relaxed">
            Figures are compiled from publicly listed and shared tariff information for
            competitive benchmarking as of the date of research. Prices are indicative and
            subject to change by each provider without notice.
          </p>
        </section>
      </main>
    </>
  );
}
