import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  ClipboardList,
  Leaf,
  HeartHandshake,
  Sparkles,
  Droplet,
  Users,
  FlaskConical,
  Palette,
  Award,
  Pill,
  PersonStanding,
  FlaskRound,
  Flower2,
} from "lucide-react";
import { therapies } from "../lib/therapiesData";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// ---------------------------------------------------------------------------
// Hero section
// ---------------------------------------------------------------------------

// Cards are pulled live from lib/therapiesData.ts — add a therapy there and
// it can show up here automatically. No more hardcoded placeholder cards.
const heroCardIcons = [Pill, PersonStanding, FlaskRound, Flower2];

const heroCards = therapies.slice(0, 4).map((t, i) => ({
  title: t.title,
  desc: t.excerpt,
  slug: t.slug,
  icon: heroCardIcons[i % heroCardIcons.length],
  bgImage: t.image,
}));

function Hero() {
  return (
    <section id="services" className="relative">
      {/* Intro band */}
      <div className="relative overflow-hidden bg-forest-dark on-dark pt-32 pb-44 lg:pt-40 lg:pb-52">
        <img
          src="/images/lineart/lineart-sprig-light.svg"
          alt=""
          aria-hidden="true"
          className="absolute -right-8 -top-10 w-56 lg:w-96 opacity-[0.06] pointer-events-none select-none"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-head center !mb-0"
          >
            <span className="section-label">Our Service</span>
            <h2 className="section-title mt-3">
              Restore Balance to <span className="title-accent">Mind, Body &amp; Spirit</span>
            </h2>
            <p className="section-lead">
              From classical Ayurvedic massages to advanced regenerative care, explore
              therapies tailored to your body and mind.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Therapy cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="relative -mt-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20 lg:pb-28">
          {heroCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={scaleIn} transition={{ delay: index * 0.1 }}>
                <Link
                  href={`/therapies/${card.slug}`}
                  className="group relative flex flex-col justify-end aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-forest-dark p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* One consistent overlay for every card, regardless of source photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  <div className="relative z-10">
                    <Icon className="w-7 h-7 text-gold-light mb-4" strokeWidth={1.5} />
                    <h3 className="card-title !text-white mb-2">{card.title}</h3>
                    <p className="card-text !text-white/80 line-clamp-3">{card.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light group-hover:gap-3 transition-all">
                      Explore
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// How It Works
// ---------------------------------------------------------------------------

const steps = [
  {
    number: "01",
    title: "Initial Consultant",
    desc: "Your journey begins with a personalised consultation where we assess your health.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Customized Plan",
    desc: "Based on your dosha (body constitution) and consultation, we create a tailored plan.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Therapeutic Sessions",
    desc: "Experience our diverse range of treatments, including massages, detox therapies, and wellness.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Ongoing Support",
    desc: "We provide continuous guidance and support throughout your wellness journey.",
    icon: HeartHandshake,
  },
];



// ---------------------------------------------------------------------------
// Why Choose Us
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function App() {
  return (
    <div>
      <Hero />

    </div>
  );
}
