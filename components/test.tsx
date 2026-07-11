import { Calendar, Users, Leaf, Sparkles, User, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // State for form inputs
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  // Tags data
  const tags = ["Wellness", "Ayurveda", "Holistic"];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with subtle zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/images/bgmain.png"
          alt="Ayurvedic massage treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-gold-light text-xs font-semibold tracking-widest uppercase mb-4"
            >
              Welcome to Ayurvana Wellness
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Experience Holistic
              <br />
              <span className="italic text-gold-light">Healing</span> and Serenity
              <br />
              with Ayurveda at Ayurvana
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Rediscover balance through ancient Ayurvedic wisdom. Our certified practitioners craft personalised wellness journeys for your mind, body, and spirit.
            </motion.p>

        
          </motion.div>

          {/* Right side cards */}
          <motion.div
            className="hidden lg:flex flex-col gap-4 items-end"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {[
              {
                icon: Leaf,
                title: "Natural Ingredients",
                desc: "100% organic herbs & oils",
                shape: "rounded-[20px_50px_20px_50px]"
              },
              {
                icon: Sparkles,
                title: "Expert Practitioners",
                desc: "Certified Ayurvedic specialists",

                shape: "rounded-[20px_50px_20px_50px]"
              },
              {
                icon: Users,
                title: "Holistic Healing",
                desc: "Mind, body & spirit wellness",
                shape: "rounded-[20px_50px_20px_50px]" // asymmetric
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`bg-white/10 backdrop-blur-md border border-white/20 ${item.shape} p-5 flex items-center gap-4 w-72`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <item.icon className="w-6 h-6 text-forest-dark" />
                <div>
                  <div className="text-forest-dark font-semibold text-sm">{item.title}</div>
                  <div className="text-forest-light text-xs mt-0.5">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Form section */}
        <motion.div
          className="mt-6 flex flex-col lg:flex-row lg:items-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-6 flex flex-col sm:flex-row items-stretch sm:items-end gap-5 flex-1 max-w-3xl">
            <div className="flex-1 min-w-[160px]">
              <label className="block text-white/70 text-[11px] font-semibold tracking-wider uppercase mb-2 flex items-center gap-2">
                <User className="w-3 h-3" />
                Your Name
              </label>
              <motion.input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/50 focus:outline-none focus:border-white"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className="block text-white/70 text-[11px] font-semibold tracking-wider uppercase mb-2 flex items-center gap-2">
                <Phone className="w-3 h-3" />
                Your Number
              </label>
              <motion.input
                type="tel"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Your Number"
                className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/50 focus:outline-none focus:border-white"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className="block text-white/70 text-[11px] font-semibold tracking-wider uppercase mb-2 flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                Date
              </label>
              <motion.input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/50 focus:outline-none focus:border-white [color-scheme:dark]"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <motion.button
              type="button"
              className="btn-primary text-white px-7 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clock className="w-4 h-4" />
              Book Now
            </motion.button>
          </div>

          {/* Tags */}
          <motion.div
            className="hidden lg:flex items-center gap-3 text-white/80 text-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="flex items-center gap-3"
                whileHover={{ scale: 1.1 }}
              >
                {tag}
                {i < tags.length - 1 && <span className="w-1 h-1 rounded-full bg-white/50" />}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}