import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Home,
  Soup,
  HeartPulse,
  BedDouble,
  Sparkles,
  Gift,
  Calendar,
  Users,
  Grid3x3,
  Search,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("stay");
  const [checkIn, setCheckIn] = useState("2025-05-24");
  const [checkOut, setCheckOut] = useState("2025-05-25");
  const [guests, setGuests] = useState(2);

  const badges = [
    { icon: Leaf, label: "Authentic Ayurveda" },
    { icon: Home, label: "Peaceful Stay" },
    { icon: Soup, label: "Organic Food" },
    { icon: HeartPulse, label: "Natural Healing" },
  ];

  const tabs = [
    { id: "stay", label: "Stay", icon: BedDouble },
    { id: "treatments", label: "Treatments", icon: Sparkles },
    { id: "packages", label: "Packages", icon: Gift },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  return (
    <section className="relative">
      {/* Hero Image Section */}
      <div className="relative h-[480px] sm:h-[560px] md:h-[650px] lg:h-[750px] overflow-hidden">
        <motion.img
          src="/images/bg-main-3.png"
          alt="Ayurvedic oil massage treatment"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />

        {/* Text content */}
        <div className="absolute inset-0 flex items-center">
          <motion.div
            className="max-w-7xl mx-auto px-4 w-full"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="max-w-2xl">
              <motion.span
                variants={fadeInUp}
                className="inline-block text-gold-light text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4"
              >
                Welcome to Ayurvana Wellness
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-4 sm:mb-6"
              >
                Experience Holistic
                <br />
                <span className="italic text-gold-light">Healing</span> and
                <br className="hidden sm:block" />
                Comfortable Stay.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg"
              >
                Experience authentic Ayurveda treatments and peaceful stay surrounded by nature.
              </motion.p>

              {/* Badges Grid */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-2xl"
              >
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    variants={fadeInUp}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px_50px_20px_50px] p-2 sm:p-3 flex items-center gap-2 sm:gap-3 w-full h-12 sm:h-14"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)",
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-forest shrink-0" />
                    <div className="text-gold-light font-semibold text-[10px] sm:text-sm truncate">
                      {badge.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating search card */}
      <div className="relative max-w-7xl mx-auto px-4 ">
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-cream-dark -mt-16 sm:-mt-20 md:-mt-16 lg:-mt-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Tabs - Scrollable on mobile */}
          <div className="flex border-b border-cream-dark px-2 sm:px-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.id
                    ? "border-forest text-forest"
                    : "border-transparent text-text-muted hover:text-text-dark"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search form */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="p-3 sm:p-4 flex flex-col lg:flex-row lg:items-end gap-3"
            >
              {/* Check In */}
              <div className="flex-1 min-w-[100px]">
                <label className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-text-muted mb-1">
                  <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border border-cream-dark rounded-lg px-2 sm:px-2.5 py-1.5 sm:py-2 text-xs sm:text-sm text-text-dark focus:outline-none focus:border-forest"
                />
              </div>

              {/* Check Out */}
              <div className="flex-1 min-w-[100px]">
                <label className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-text-muted mb-1">
                  <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border border-cream-dark rounded-lg px-2 sm:px-2.5 py-1.5 sm:py-2 text-xs sm:text-sm text-text-dark focus:outline-none focus:border-forest"
                />
              </div>

              {/* Guests */}
              <div className="flex-1 min-w-[100px]">
                <label className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-text-muted mb-1">
                  <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full border border-cream-dark rounded-lg px-2 sm:px-2.5 py-1.5 sm:py-2 text-xs sm:text-sm text-text-dark focus:outline-none focus:border-forest appearance-none bg-white"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} Guest{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Type - Hide on smallest screens */}
              <div className="flex-1 min-w-[100px] hidden sm:block">
                <label className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-text-muted mb-1">
                  <Grid3x3 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  Room Type
                </label>
                <select className="w-full border border-cream-dark rounded-lg px-2 sm:px-2.5 py-1.5 sm:py-2 text-xs sm:text-sm text-text-dark focus:outline-none focus:border-forest appearance-none bg-white">
                  <option>All Rooms</option>
                  <option>Deluxe Room</option>
                  <option>Ayurveda Suite</option>
                  <option>Garden Cottage</option>
                </select>
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-forest-dark hover:bg-forest text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap w-full lg:w-auto"
              >
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Search Rooms</span>
              </button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Add scrollbar hide utility if not already in your CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}