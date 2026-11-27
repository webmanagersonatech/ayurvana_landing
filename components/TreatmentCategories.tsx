import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  Wind,
  Activity,
  HeartPulse,
} from "lucide-react";

interface Category {
  icon: any;
  title: string;
  treatments: string[];
}

const categories: Category[] = [
  {
    icon: Leaf,
    title: "Ayurveda & Panchakarma",
    treatments: [
      "Panchakarma Detox",
      "Abhyanga",
      "Shirodhara",
      "Pizhichil",
      "Kizhi",
      "Nasya",
      "Basti",
    ],
  },
  {
    icon: Droplets,
    title: "Naturopathy & Detox",
    treatments: [
      "Therapeutic Fasting",
      "Juice & Raw Food Therapy",
      "Colon Hydrotherapy",
      "Mud Therapy",
      "Hydrotherapy",
    ],
  },
  {
    icon: Wind,
    title: "Yoga & Mind–Body",
    treatments: [
      "Personalised Yoga Therapy",
      "Pranayama",
      "Meditation",
      "Yoga Nidra",
      "Stress & Sleep Therapy",
    ],
  },
  {
    icon: Activity,
    title: "Physiotherapy & Rehab",
    treatments: [
      "Pain Management",
      "Spine Care",
      "Postural Correction",
      "Sports Injury Rehab",
      "Electrotherapy",
    ],
  },
  {
    icon: HeartPulse,
    title: "Clinical Programs",
    treatments: [
      "Diabetes Reversal",
      "Hypertension Control",
      "Gut Health",
      "Hormonal Balance",
      "Immunity Boost",
    ],
  },
];

export default function TreatmentCategories() {
  return (
    <section id="treatments" className="section-pad relative overflow-hidden bg-cream-light">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="section-head center">
          <span className="section-label">What We Treat</span>
          <h2 className="section-title mt-3">
            Every Therapy Under <span className="title-accent">One Roof</span>
          </h2>
          <p className="section-lead">
            A complete spectrum of classical and clinical care — the same depth you'd
            find across India's leading wellness retreats, delivered by our own
            physicians and therapists.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-cream rounded-2xl p-7 card-hover border border-line"
              >
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-forest" strokeWidth={1.5} />
                </div>
                <h3 className="card-title mb-3">{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.treatments.map((t) => (
                    <li key={t} className="card-text flex items-start gap-2">
                      <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
