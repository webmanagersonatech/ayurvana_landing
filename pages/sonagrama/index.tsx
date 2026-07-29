import { motion } from "framer-motion";
import {
  Leaf,
  Sparkles,
  Moon,
  Sun,
  Wind,
  Droplets,

  Heart,

  X,
  ArrowRight,
  Home,
  ChevronRight,

  Brain,
  Activity,
  Pill,
  TreePine,

  Bed,

  Sprout,

  Compass,
  Feather,
  Gift
} from "lucide-react";
import { Toaster } from 'react-hot-toast';
import AyurvedicBookingForm from "../../components/Booking";
import { AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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
// Breadcrumb Component
// ---------------------------------------------------------------------------

function Breadcrumb({ currentPage, subPage }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-[#6E695D] py-4">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </motion.div>
      <ChevronRight className="w-4 h-4" />
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        {currentPage}
      </motion.span>
      {subPage && (
        <>
          <ChevronRight className="w-4 h-4" />
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#1B3324] font-medium"
          >
            {subPage}
          </motion.span>
        </>
      )}
    </nav>
  );
}



// ---------------------------------------------------------------------------
// Benefits Data
// ---------------------------------------------------------------------------

const benefits = {
  physical: [
    { icon: Wind, title: "Relaxation and stress relief", desc: "Deep relaxation techniques that calm the nervous system" },
    { icon: Moon, title: "Improved sleep quality", desc: "Natural sleep enhancement through Ayurvedic practices" },
    { icon: Droplets, title: "Detoxification and weight management", desc: "Gentle cleansing and balanced weight control" },
  ],
  mental: [
    { icon: Brain, title: "Reduced anxiety and depression", desc: "Mindful practices for emotional stability" },
    { icon: Sparkles, title: "Improved mood and emotional balance", desc: "Natural mood elevation through holistic therapies" },
    { icon: Compass, title: "Increased self-awareness and mindfulness", desc: "Deepen your connection with yourself" },
  ],
  spiritual: [
    { icon: Heart, title: "Connection with nature and tranquility", desc: "Immerse yourself in serene natural surroundings" },
    { icon: Feather, title: "Opportunities for meditation and introspection", desc: "Create space for inner reflection" },
  ],
};

// ---------------------------------------------------------------------------
// Accommodation Data
// ---------------------------------------------------------------------------

const accommodations = [
  {
    id: 1,
    name: "Executive Suite",
    description: "Spacious suite with garden view, private balcony, and personal wellness amenities.",
    price: "₹8,500/night",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    features: ["King Bed", "Garden View", "Private Balcony", "En-suite Bath"]
  },
  {
    id: 2,
    name: "Deluxe Room",
    description: "Elegant room with natural lighting, comfortable furnishings, and resort facilities.",
    price: "₹6,000/night",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    features: ["Queen Bed", "Pool View", "Work Desk", "Modern Bath"]
  },
  {
    id: 3,
    name: "Wellness Cottage",
    description: "Private cottage with therapeutic amenities, perfect for extended wellness programs.",
    price: "₹12,000/night",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    features: ["King Bed", "Private Garden", "Yoga Deck", "Therapy Room"]
  },
];



// ---------------------------------------------------------------------------
// Treatments Section Component
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Main SonaGrama Page
// ---------------------------------------------------------------------------

export default function SonaGramaPage() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const handleBookingSubmit = (filters: any) => {
    console.log('Booking submitted:', filters);
    // Add your API call here
    closeModal();
  };
  const handleBookNow = () => {

    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="bg-[#FBF7ED] min-h-screen">
      <Toaster position="top-right" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1B3324] to-[#2A4D36] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[450px] md:h-[500px]"
        >
          <img loading="lazy" decoding="async"
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80"
            alt="SonaGrama Wellness Resort"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 opacity-5">
            <Leaf className="w-96 h-96 text-white" />
          </div>
          <div className="absolute bottom-10 left-20 opacity-5 rotate-12">
            <Heart className="w-64 h-64 text-white" />
          </div>

          <div className="relative pt-28 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 mb-4"
              >
                <Leaf className="w-5 h-5 text-[#C49A3C]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#C49A3C] uppercase">
                  Heritage Wellness Resort
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
              >
                Welcome to{" "}
                <span className="text-[#C49A3C]">SonaGrama</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-white/70 text-sm sm:text-base md:text-lg mt-3 leading-relaxed max-w-2xl"
              >
                Discover a serene escape at our Wellness Health Resort, where naturopathy and yoga combine to restore work-life balance, detoxify, and rejuvenate mind, body, and soul.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-[#C49A3C] text-sm sm:text-base mt-2 font-medium"
              >
                Experience holistic healing through personalized treatments, yoga sessions, and natural therapies in a peaceful environment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3 mt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={handleBookNow}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-[#C49A3C] text-white  text-sm font-semibold hover:bg-[#B08A35] transition-all duration-300 shadow-lg"
                >
                  Book Your Stay
                </motion.button>

              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <div>
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <Breadcrumb currentPage="SonaGrama" subPage="Treatments" />



          {/* About Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                  <Sprout className="w-5 h-5 text-[#C49A3C]" />
                  <span className="text-sm font-semibold tracking-[0.15em] text-[#C49A3C] uppercase">
                    About SonaGrama
                  </span>
                </motion.div>
                <motion.h2
                  variants={fadeInUp}
                  className="font-serif text-3xl md:text-4xl text-[#1B3324] mb-4"
                >
                  Where Tradition Meets{" "}
                  <span className="text-[#C49A3C]">Tranquility</span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-[#6E695D] leading-relaxed mb-4">
                  SonaGrama is more than just a resort - it's a sanctuary for holistic healing and self-discovery. Nestled in serene surroundings, our heritage wellness resort combines ancient Ayurvedic wisdom with modern therapeutic practices.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-[#6E695D] leading-relaxed mb-6">
                  Experience the perfect blend of tradition and luxury at SonaGrama, where every treatment is personalized for your unique path to wellness. Our expert practitioners guide you through transformative healing journeys that restore balance and vitality.
                </motion.p>
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-[#1B3324] font-semibold hover:text-[#C49A3C] transition-colors group"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
              <motion.div
                variants={scaleIn}
                className="relative group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img loading="lazy" decoding="async"
                    src="/images/restort.webp"
                    alt="SonaGrama Resort"
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3324]/80 via-[#1B3324]/30 to-transparent" />

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C49A3C]/10 rounded-bl-full" />



                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-[2px] bg-[#C49A3C]" />
                      <span className="text-[#C49A3C] text-xs font-medium tracking-wider uppercase">Premium Retreat</span>
                    </div>
                    <h3 className="text-white font-serif text-2xl mb-2">Serenity by Nature</h3>
                    <p className="text-white/70 text-sm">Immersive wellness experience in 50+ acres of greenery</p>
                  </div>
                </div>

                {/* Floating info card */}
                <div className="absolute -top-5 -right-8 bg-white rounded-2xl shadow-2xl p-4 border-l-4 border-[#C49A3C]">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="p-2 bg-[#1B3324] rounded-full">
                        <TreePine className="w-5 h-5 text-[#C49A3C]" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6E695D]">Property Size</p>
                      <p className="text-sm font-bold text-[#1B3324]">50+ Acres of Serenity</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Gift className="w-5 h-5 text-[#C49A3C]" />
                <span className="text-sm font-semibold tracking-[0.15em] text-[#C49A3C] uppercase">
                  Benefits
                </span>
              </div>
              <motion.h2
                variants={fadeInUp}
                className="font-serif text-3xl md:text-4xl text-[#1B3324]"
              >
                Rejuvenate Your{" "}
                <span className="text-[#C49A3C]">Body, Mind & Spirit</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#6E695D] max-w-2xl mx-auto mt-3"
              >
                Experience comprehensive wellness through our holistic approach
              </motion.p>
            </motion.div>

            <div className="space-y-12">
              {/* Physical Benefits */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-serif font-semibold text-[#1B3324] mb-6 flex items-center gap-2 border-b border-[#E8DDC4] pb-3">
                  <Heart className="w-5 h-5 text-[#C49A3C]" />
                  Physical Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {benefits.physical.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 4 }}
                      className="group relative pl-6"
                    >
                      {/* Decorative line */}
                      <div className="absolute left-0 top-0 w-[2px] h-full bg-[#C49A3C]/30 group-hover:bg-[#C49A3C] transition-colors duration-300" />

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#1B3324]/5 rounded-full flex-shrink-0 mt-1 group-hover:bg-[#1B3324]/10 transition-colors duration-300">
                          <benefit.icon className="w-4 h-4 text-[#1B3324]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1B3324] text-sm group-hover:text-[#C49A3C] transition-colors duration-300">
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-[#6E695D] mt-1 leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mental Benefits */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-serif font-semibold text-[#1B3324] mb-6 flex items-center gap-2 border-b border-[#E8DDC4] pb-3">
                  <Brain className="w-5 h-5 text-[#C49A3C]" />
                  Mental & Emotional Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {benefits.mental.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 4 }}
                      className="group relative pl-6"
                    >
                      <div className="absolute left-0 top-0 w-[2px] h-full bg-[#C49A3C]/30 group-hover:bg-[#C49A3C] transition-colors duration-300" />

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#1B3324]/5 rounded-full flex-shrink-0 mt-1 group-hover:bg-[#1B3324]/10 transition-colors duration-300">
                          <benefit.icon className="w-4 h-4 text-[#1B3324]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1B3324] text-sm group-hover:text-[#C49A3C] transition-colors duration-300">
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-[#6E695D] mt-1 leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Spiritual Benefits */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-serif font-semibold text-[#1B3324] mb-6 flex items-center gap-2 border-b border-[#E8DDC4] pb-3">
                  <Heart className="w-5 h-5 text-[#C49A3C]" />
                  Spiritual Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.spiritual.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 4 }}
                      className="group relative pl-6"
                    >
                      <div className="absolute left-0 top-0 w-[2px] h-full bg-[#C49A3C]/30 group-hover:bg-[#C49A3C] transition-colors duration-300" />

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#1B3324]/5 rounded-full flex-shrink-0 mt-1 group-hover:bg-[#1B3324]/10 transition-colors duration-300">
                          <benefit.icon className="w-4 h-4 text-[#1B3324]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1B3324] text-sm group-hover:text-[#C49A3C] transition-colors duration-300">
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-[#6E695D] mt-1 leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>



          {/* Accommodation Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Bed className="w-5 h-5 text-[#C49A3C]" />
                <span className="text-sm font-semibold tracking-[0.15em] text-[#C49A3C] uppercase">
                  Accommodation
                </span>
              </div>
              <motion.h2
                variants={fadeInUp}
                className="font-serif text-3xl md:text-4xl text-[#1B3324]"
              >
                Luxurious {" "}
                <span className="text-[#C49A3C]">Stay</span> Options
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[#6E695D] max-w-2xl mx-auto mt-3"
              >
                Choose from our carefully designed accommodations for a comfortable and rejuvenating stay
              </motion.p>
            </motion.div>

            <div className="space-y-8">
              {accommodations.map((acc, index) => (
                <motion.div
                  key={acc.id}
                  variants={scaleIn}
                  whileHover={{ x: 8 }}
                  className="group relative border-b border-[#E8DDC4] pb-8 last:border-b-0 last:pb-0 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image - Left side on desktop */}
                    <div className="md:w-1/3 lg:w-1/4 relative overflow-hidden rounded-xl flex-shrink-0">
                      <div className="aspect-[4/3] w-full">
                        <img loading="lazy" decoding="async"
                          src={acc.image}
                          alt={acc.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Price tag - positioned absolutely on image */}
                      <div className="absolute top-3 right-3 bg-[#C49A3C] px-4 py-1.5 rounded-full">
                        <span className="text-sm font-semibold text-white">{acc.price}</span>
                      </div>
                    </div>

                    {/* Content - Right side */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-serif font-semibold text-[#1B3324] text-xl md:text-2xl group-hover:text-[#C49A3C] transition-colors duration-300">
                          {acc.name}
                        </h3>
                        {/* Decorative number */}
                        <span className="text-4xl font-serif text-[#E8DDC4] font-light opacity-50">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <p className="text-sm text-[#6E695D] leading-relaxed mt-2 max-w-2xl">
                        {acc.description}
                      </p>

                      {/* Features as inline chips */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {acc.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-transparent text-[#6E695D] px-3 py-1 rounded-full border border-[#E8DDC4] hover:border-[#C49A3C] hover:text-[#C49A3C] transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Decorative accent line */}
                      <div className="w-12 h-[2px] bg-[#C49A3C]/50 group-hover:w-24 transition-all duration-500 mt-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="relative overflow-hidden"
        >
          {/* Background - Fixed positioning */}
          <div className="absolute inset-0">
            {/* Background color - Dark base */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Background image with overlay */}
            <div
              className="absolute inset-0 bg-center bg-fixed"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80")`,
              }}
            />

            {/* Black overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C49A3C] to-transparent z-10" />

          {/* Decorative bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C49A3C]/50 to-transparent z-10" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              {/* Decorative element */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#C49A3C]" />
                <Leaf className="w-8 h-8 text-[#C49A3C] animate-pulse" />
                <div className="w-12 h-[1px] bg-[#C49A3C]" />
              </div>

              <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">
                Ready to Rejuvenate Your{" "}
                <span className="text-[#C49A3C] relative inline-block">
                  Body, Mind, and Spirit?
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#C49A3C]/50" />
                </span>
              </h2>

              <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Begin your journey to holistic wellness at SonaGrama. Book your stay today and
                experience the transformative power of Ayurveda and naturopathy.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  onClick={handleBookNow}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-3.5 bg-[#C49A3C] text-white  font-semibold overflow-hidden shadow-2xl shadow-[#C49A3C]/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Your Wellness Journey
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.button>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-3.5 text-white rounded-full font-semibold overflow-hidden"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C49A3C] group-hover:w-full transition-all duration-300" />
                  </motion.button>
                </Link>
              </div>

              {/* Decorative bottom dots */}
              <div className="flex justify-center gap-2 mt-10">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#C49A3C]/30"
                    style={{
                      opacity: 0.3 + (i * 0.15),
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={handleModalClick}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.4
              }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                aria-label="Close booking form"
              >
                <X className="w-5 h-5 text-forest-dark" />
              </motion.button>

              {/* Booking Form with Auto-filled Data */}
              <AyurvedicBookingForm
                onSearch={handleBookingSubmit}
                variant="full"
                showDatePicker={true}
                theme="light"
                className="w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}