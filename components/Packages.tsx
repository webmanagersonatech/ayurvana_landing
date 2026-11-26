import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Leaf, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext";

interface Package {
  duration: string;
  label: string;
  focus: string;
  inclusions: string[];
  price: string;
  popular?: boolean;
}

const packages: Package[] = [
  {
    duration: "3 Days",
    label: "Restore",
    focus: "Stress Relief & Rejuvenation",
    inclusions: [
      "Doctor consultation & pulse diagnosis",
      "Daily Abhyanga & Shirodhara",
      "Guided Yoga & Pranayama",
      "Sattvic detox meal plan",
    ],
    price: "₹28,000 – 38,000",
  },
  {
    duration: "7 Days",
    label: "Renew",
    focus: "Detox & Lifestyle Reset",
    inclusions: [
      "Personalised Panchakarma protocol",
      "Herbal steam & Kizhi therapy",
      "Daily Yoga Nidra & meditation",
      "Customised Ayurvedic diet therapy",
    ],
    price: "₹55,000 – 72,000",
    popular: true,
  },
  {
    duration: "14 Days",
    label: "Revive",
    focus: "Metabolic & Clinical Healing",
    inclusions: [
      "Advanced Panchakarma (Pizhichil, Basti)",
      "Weight & metabolic health tracking",
      "Diabetes / hormonal balance support",
      "Weekly progress review with physician",
    ],
    price: "₹1,05,000 – 1,35,000",
  },
  {
    duration: "21 Days",
    label: "Transform",
    focus: "Deep Detox & Disease Reversal",
    inclusions: [
      "Intensive Panchakarma & Rasayana therapy",
      "Physiotherapy & postural rehab",
      "Mind–body integration program",
      "Personalised take-home wellness plan",
    ],
    price: "₹1,60,000 – 1,95,000",
  },
];

export default function Packages() {
  const [active, setActive] = useState(1);
  const { openBookingModal } = useBookingModal();

  return (
    <section id="packages" className="py-20 relative overflow-hidden bg-cream">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">Wellness Packages</span>
          <h2 className="section-title mt-3">
            Healing Journeys, <span className="italic text-forest">Tailored</span> to You
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From a short restorative escape to a complete disease-reversal program — every
            package is designed and supervised by our in-house Ayurvedic physicians.
          </p>
        </div>

        {/* Duration tabs (mobile-friendly) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {packages.map((pkg, i) => (
            <button
              key={pkg.duration}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === i
                  ? "bg-forest text-white border-forest"
                  : "border-forest/30 text-forest hover:border-forest"
              }`}
            >
              {pkg.duration}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.duration}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className={`relative bg-cream-light rounded-2xl p-7 cursor-pointer card-hover flex flex-col ${
                active === i
                  ? "border-2 border-gold shadow-xl"
                  : "border border-black/10"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-2 text-forest-light mb-3">
                <Clock className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-xs font-semibold tracking-widest uppercase">
                  {pkg.duration}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-text-dark mb-1">{pkg.label}</h3>
              <p className="text-text-muted text-sm mb-5">{pkg.focus}</p>

              <ul className="space-y-3 mb-6 flex-1">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-dark">
                    <Check className="w-4 h-4 text-forest mt-0.5 shrink-0" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-black/10 pt-4">
                <p className="text-text-light text-xs mb-1">Starting from</p>
                <p className="font-serif text-xl text-forest mb-4">{pkg.price}</p>
                <button
                  type="button"
                  onClick={() => openBookingModal(`${pkg.label} Package (${pkg.duration})`)}
                  className="btn-outline w-full justify-center text-xs"
                >
                  Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10 text-text-muted text-xs">
          <Leaf className="w-4 h-4 text-forest-light" strokeWidth={1.5} />
          <span>All packages include accommodation, meals, and consultation. Final pricing is confirmed after your physician assessment.</span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-3 text-forest-light text-xs font-medium">
          <Sparkles className="w-4 h-4" strokeWidth={1.5} />
          <span>Compare us — Ayurvana offers the same clinical depth as leading retreats at a fraction of the cost.</span>
        </div>
      </div>
    </section>
  );
}
