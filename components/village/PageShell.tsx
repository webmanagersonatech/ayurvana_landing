import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";

export default function PageShell({
  title, description, heading, children,
}: { title: string; description: string; heading: ReactNode; children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="section-pad bg-forest-dark text-white">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/" className="text-xs tracking-[0.2em] uppercase text-gold-light hover:text-white">← Home</Link>
          <h1 className="heading-1 !text-white mt-6">{heading}</h1>
        </div>
      </section>
      {children}
      <section className="bg-cream py-16 text-center">
        <Link href="/contact" className="btn-primary">Plan your stay ↗</Link>
      </section>
    </>
  );
}
