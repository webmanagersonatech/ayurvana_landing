import { motion } from "framer-motion";
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

const heroCards = [
  {
    title: "Chiropractic Adjustments",
    desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: Pill,
    bgImage: "https://img.magnific.com/free-photo/side-view-man-getting-professional-massage_23-2150649766.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80", // Replace with actual image path
  },
  {
    title: "Massage & Body Therapy",
    desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: PersonStanding,
    bgImage: "https://img.magnific.com/premium-photo/male-masseur-performing-neck-massage-stretcher-female-client_242111-13897.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80", // Replace with actual image path
  },
  {
    title: "Aromatherapy Sessions",
    desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: FlaskRound,
    bgImage: "https://img.magnific.com/premium-photo/soapmaking-workshop-natural-ingredients-traditional-techniques_223582-10432.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80", // Replace with actual image path
  },
  {
    title: "Ayurvedic Treatments",
    desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: Flower2,
    bgImage: "https://img.magnific.com/premium-photo/facial-massage-man-bath-male-attendant-conducts-procedures-client-sauna-relaxing-massage_209484-30930.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80", // Replace with actual image path
  },
];

function Hero() {
  return (
    <section id="services" className="relative bg-[#FBF7ED]">
      {/* image + overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[450px] md:h-[480px]"
      >
        <img
          src="/images/bg1.webp"
          alt="Women meditating outdoors"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3324]/80 via-[#1B3324]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs font-semibold tracking-widest text-white/90 uppercase"
            >
              Our Service
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl text-white mt-4 leading-tight"
            >
              Discover Alternative Health{" "}
              <span className="italic text-gold-light">Treatments</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white/85 text-sm md:text-base mt-5 leading-relaxed max-w-md"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="max-w-7xl mx-auto px-6"
>
  <div className="relative -mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
    {heroCards.map((card, index) => {
      const Icon = card.icon;
      return (
        <motion.div
          key={card.title}
          variants={scaleIn}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          className="relative group"
          style={{ perspective: 1000 }}
        >
          {/* 3D depth layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark to-emerald-900 transform rotate-3 scale-95 opacity-20 group-hover:rotate-6 group-hover:scale-100 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent transform -rotate-2 scale-90 opacity-0 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700" />

          {/* Main content block with background image */}
          <div 
            className="relative p-8  shadow-2xl shadow-forest-dark/20 group-hover:shadow-3xl group-hover:shadow-forest-dark/30 transition-all duration-500 overflow-hidden"
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '320px',
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-700" />
            
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/30 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Top section with scale effect */}
            <div className="relative z-10 flex items-start justify-between mb-6">
              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: [0, -10, 10, -5, 5, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Glowing orb background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-forest-dark/30 to-emerald-500/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-dark to-emerald-700 flex items-center justify-center shadow-xl shadow-forest-dark/30 group-hover:shadow-2xl group-hover:shadow-forest-dark/50 transition-all duration-300 backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* Scale number */}
              <motion.div
                className="text-7xl font-bold font-serif text-white/10 group-hover:text-white/20 transition-colors duration-500"
                whileHover={{ scale: 1.2 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                {index + 1}
              </motion.div>
            </div>

            {/* Title with scale animation */}
            <motion.h3
              className="relative z-10 font-serif text-2xl text-white mb-3 tracking-tight group-hover:tracking-wide transition-all duration-500 drop-shadow-lg"
              whileHover={{ scale: 1.02, x: 4 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
            >
              {card.title}
            </motion.h3>

            {/* Animated divider */}
            <motion.div
              className="relative z-10 w-16 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mb-4 group-hover:w-24 transition-all duration-500"
              whileHover={{ scale: 1.5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            />

            {/* Description */}
            <p className="relative z-10 text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-md">
              {card.desc}
            </p>

            {/* Scale indicator at bottom */}
            <motion.div
              className="absolute bottom-4 right-4 z-10 w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-white/10"
              whileHover={{ scale: 1.5, rotate: 45 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>

            {/* Scale dots decoration */}
            <div className="absolute bottom-4 left-4 z-10 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white/60 transition-colors duration-300"
                  whileHover={{ scale: 2 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }}
                />
              ))}
            </div>
          </div>

          {/* Shadow depth layers */}
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-forest-dark/5 blur-xl group-hover:blur-2xl transition-all duration-700 -z-10" />
          <div className="absolute -bottom-8 -right-8 w-full h-full bg-emerald-500/5 blur-2xl group-hover:blur-3xl transition-all duration-700 -z-20" />
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

function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-[#FBF7ED]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-[#1B3324]/70 uppercase">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2E2A22] mt-3">
            Your Wellness Journey
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-16 h-16 bg-[#1B3324] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </motion.div>
                <span className="text-sm font-semibold text-[#1B3324]/50 block mb-1">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg text-[#2E2A22] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#6E695D] text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

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