import Head from "next/head";
import Link from "next/link";
import Day from "../../components/village/Day";

export default function DayPage() {
  return (
    <>
      <Head>
        <title>A Day at Ayurvana | Daily Rhythm at the Wellness Village, Salem</title>
        <meta
          name="description"
          content="An illustrative day at Ayurvana: yoga at sunrise, physician-guided treatments, Sattvic meals, craft workshops and evenings at the amphitheatre."
        />
      </Head>
      <section className="bg-forest-dark text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/" className="text-xs tracking-[0.2em] uppercase text-gold-light hover:text-white">
            ← Home
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl mt-6 leading-tight">
            A day in <span className="italic text-gold-light">Ayurvana</span>
          </h1>
        </div>
      </section>
      <Day />
    </>
  );
}
