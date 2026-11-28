
import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";

export default function PageShell({
  title,
  description,
  heading,
  children,
  bgImage,
}: {
  title: string;
  description: string;
  heading: ReactNode;
  children: ReactNode;
  bgImage?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <section
        className="relative section-pad bg-forest-dark text-white bg-cover bg-center"
        style={
          bgImage
            ? { backgroundImage: `url(${bgImage})` }
            : undefined
        }
      >
        {bgImage && (
          <div className="absolute inset-0 bg-forest-dark/75" />
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] uppercase text-gold-light hover:text-white"
          >
            ← Home
          </Link>

          <h1 className="heading-1 !text-white mt-6">
            {heading}
          </h1>
        </div>
      </section>

      {children}

      <section className="bg-cream py-16 text-center">
        <Link href="/contact" className="btn-primary">
          Plan your stay ↗
        </Link>
      </section>
    </>
  );
}
