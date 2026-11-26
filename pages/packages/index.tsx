import Head from "next/head";
import Link from "next/link";
import { MapPin, ShieldCheck, ArrowRight, LayoutGrid, IndianRupee } from "lucide-react";
import { competitors, ayurvanaPackages } from "../../lib/competitorData";

export default function ComparePage() {
  return (
    <>
      <Head>
        <title>Market Comparison | Ayurvana Ayurveda</title>
        <meta
          name="description"
          content="See how Ayurvana's Ayurvedic packages compare with leading wellness retreats across treatments, programs and tariffs — one detailed profile per center."
        />
        <link rel="canonical" href="https://www.ayurvanaindia.com/packages" />
      </Head>

      <main className="bg-cream min-h-screen pb-24">
        {/* Header */}
        <section className="bg-forest pt-32 pb-16 px-6 text-center">
          <span className="text-gold-light text-xs font-semibold tracking-widest uppercase">
            Industry Benchmarking
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-white mt-3 leading-tight">
            How Ayurvana Compares
            <br />
            <span className="italic text-gold-light">Across the Wellness Market</span>
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            A transparent look at treatments, programs and tariffs offered by leading
            Ayurveda, naturopathy and wellness retreats. Open a center's profile below
            for its full treatment menu, package pricing and room tariff.
          </p>
        </section>

        {/* Ayurvana packages recap */}
        <section className="max-w-6xl mx-auto px-6 -mt-10">
          <div className="bg-cream-light rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-forest" strokeWidth={1.5} />
              <h2 className="font-serif text-xl text-text-dark">Ayurvana's Own Packages</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {ayurvanaPackages.map((pkg) => (
                <div
                  key={pkg.duration}
                  className="border border-forest/15 rounded-xl p-4 hover:border-gold transition-colors duration-300"
                >
                  <p className="text-forest-light text-xs font-semibold tracking-widest uppercase mb-1">
                    {pkg.duration}
                  </p>
                  <p className="font-serif text-lg text-text-dark mb-2">{pkg.focus}</p>
                  <p className="text-text-muted text-xs leading-relaxed mb-3">{pkg.inclusions}</p>
                  <p className="text-forest font-semibold text-sm">{pkg.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Center directory */}
        <section className="max-w-7xl mx-auto px-6 mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-text-dark">
              Center-Wise Profiles
            </h2>
            <span className="text-text-light text-xs">{competitors.length} centers</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {competitors.map((c) => {
              const entryPackage = c.packages[0];
              return (
                <Link
                  key={c.slug}
                  href={`/packages/${c.slug}`}
                  className="group bg-cream-light rounded-2xl border border-black/10 p-6 md:p-7 card-hover flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-xl md:text-2xl text-text-dark leading-snug">
                      {c.name}
                    </h3>
                    <span className="w-9 h-9 rounded-full bg-forest/8 flex items-center justify-center shrink-0 group-hover:bg-forest transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-forest group-hover:text-white transition-colors duration-300" />
                    </span>
                  </div>

                  {c.location && (
                    <p className="flex items-center gap-1.5 text-text-light text-xs mb-3">
                      <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {c.location}
                    </p>
                  )}

                  <p className="text-text-muted text-sm leading-relaxed mb-5">{c.positioning}</p>

                  <div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-6 text-xs">
                    <span className="flex items-center gap-1.5 text-text-muted">
                      <LayoutGrid className="w-3.5 h-3.5 text-forest-light" strokeWidth={1.5} />
                      {c.categories.length} categories
                    </span>
                    {entryPackage && (
                      <span className="flex items-center gap-1.5 text-text-muted">
                        <IndianRupee className="w-3.5 h-3.5 text-forest-light" strokeWidth={1.5} />
                        From {entryPackage.price.split("–")[0].trim()}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 mt-16 text-center">
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
