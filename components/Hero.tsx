import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "./Splittext";
import AyurvedicBookingForm from "./Booking";
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
  ArrowRight,
  User,
  UserCircle,
  Droplet,
  Moon,
  Sun,
  Flower2,
  Trees,
  X,
} from "lucide-react";

// Type for booking data
interface BookingPrefillData {
  gender?: string;
  guests?: number;
  roomType?: string;
  treatment?: string;
  date?: string;
  time?: string;
  name?: string;
  email?: string;
  phone?: string;
  aadharNumber?: string;
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState("stay");
  const [checkIn, setCheckIn] = useState("2025-05-24");
  const [checkOut, setCheckOut] = useState("2025-05-25");
  const [guests, setGuests] = useState(2);
  const [gender, setGender] = useState("any");
  const [roomType, setRoomType] = useState("all");
  const [treatment, setTreatment] = useState("all");

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState<BookingPrefillData | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

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

  const genderOptions = [
    { value: "any", label: "Any Gender", icon: UserCircle },
    { value: "male", label: "Male", icon: User },
    { value: "female", label: "Female", icon: User },
    { value: "couple", label: "Couple", icon: HeartPulse },
  ];

  const roomOptions = [
    { value: "all", label: "All Rooms" },
    { value: "deluxe", label: "Deluxe Room" },
    { value: "ayurveda-suite", label: "Ayurveda Suite" },
    { value: "garden-cottage", label: "Garden Cottage" },
    { value: "family-suite", label: "Family Suite" },
  ];

  const treatmentOptions = [
    { value: "all", label: "All Treatments", icon: Sparkles },
    { value: "abhyanga", label: "Abhyanga Massage", icon: Droplet },
    { value: "shirodhara", label: "Shirodhara", icon: Moon },
    { value: "panchakarma", label: "Panchakarma", icon: Sun },
    { value: "pizhichil", label: "Pizhichil", icon: Flower2 },
    { value: "nasyam", label: "Nasyam", icon: Trees },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  // Map gender to booking form format
  const mapGenderToBooking = (genderValue: string) => {
    if (genderValue === "male") return "male";
    if (genderValue === "female") return "female";
    if (genderValue === "couple") return "couple";
    return "all";
  };

  // Handle Book Now click
  const handleBookNow = () => {
    // Gather all data from hero form
    const data: BookingPrefillData = {
      name: "Guest",
      gender: mapGenderToBooking(gender),
      guests: guests,
      roomType: roomType,
      treatment: treatment,
      date: checkIn || new Date().toISOString().split('T')[0],
      time: "10:00 AM",
      email: "",
      phone: "",
      aadharNumber: "",
    };

    setPrefillData(data);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle click outside to close
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  // Handle escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  // Handle booking form submission
  const handleBookingSubmit = (filters: any) => {
    console.log('Booking submitted:', filters);
    // Add your API call here
    closeModal();
  };

  return (
    <>
      <section className="relative">

        <div className="relative h-[480px] sm:h-[560px] md:h-[650px] lg:h-[750px] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <Image
              src="/images/hero-1.webp"
              alt="Ayurvedic oil massage treatment"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />

          {/* Text content */}
          {/* Text content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-6xl flex flex-col">
                {/* Eyebrow */}
                <SplitText
                  text="A Sona Star Initiative · Salem, Tamil Nadu"
                  className="text-gold-light text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 overflow-visible"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />

                {/* Brand name */}
                <SplitText
                  text="Ayurvana"
                  className="font-serif italic text-gold-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none mb-3 sm:mb-5 overflow-visible"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />

                {/* Heading - Line 1 */}
                <SplitText
                  text="A village for the body,"
                  className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight overflow-visible"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />

                {/* Heading - Line 2 */}
                <div className="flex flex-wrap mt-1 items-center gap-1 sm:gap-2 overflow-visible">
                  <SplitText
                    text="the mind"
                    className="italic text-gold-light font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl overflow-visible"
                    delay={50}
                    duration={1.25}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />

                  <SplitText
                    text="and the hands."
                    className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight overflow-visible"
                    delay={50}
                    duration={1.25}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                </div>

                {/* Description */}
                <SplitText
                  text="Where physician-led care, restorative rituals and living craft traditions come together."
                  className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mt-4 sm:mt-6 max-w-lg overflow-visible"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
                  <button
                    onClick={handleBookNow}
                    className="bg-cream text-forest hover:bg-white font-medium uppercase tracking-[0.18em] text-[11px] sm:text-xs px-6 sm:px-8 py-3 transition-all duration-300 hover:-translate-y-0.5 inline-block cursor-pointer"
                  >
                    Book Your Stay
                  </button>

                  <button
                    className="border border-cream text-cream hover:bg-cream hover:text-forest font-medium uppercase tracking-[0.18em] text-[11px] sm:text-xs px-6 sm:px-8 py-3 transition-all duration-300 hover:-translate-y-0.5 inline-block cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating search banner */}
        {/* Floating search banner */}
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            className="shadow-2xl -mt-16 sm:-mt-20 md:-mt-16 lg:-mt-20 relative z-10 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bg.webp')" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Dark overlay for text readability (change /50 to adjust) */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

            {/* Content */}
            <div className="relative px-4 sm:px-6 py-5 sm:py-6">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gold/20 rounded-xl">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                    Start Your Wellness Journey
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                    Book your authentic Ayurveda experience today
                  </p>
                </div>
              </div>

              {/* Search form - 2 column grid on mobile */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-2 gap-3 lg:grid-cols-5 lg:items-end"
                >
                  {/* Gender */}
                  <div className="col-span-1">
                    <label className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-white/80 mb-1.5">
                      <UserCircle className="w-3.5 h-3.5" />
                      Gender
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-gold px-3.5 py-2.5 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                      style={{ color: "white" }}
                    >
                      {genderOptions.map((option) => (
                        <option key={option.value} value={option.value} className="text-text-dark">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div className="col-span-1">
                    <label className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-white/80 mb-1.5">
                      <Users className="w-3.5 h-3.5" />
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-gold px-3.5 py-2.5 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                      style={{ color: "white" }}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n} className="text-text-dark">
                          {n} Guest{n > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Room Type */}
                  <div className="col-span-1">
                    <label className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-white/80 mb-1.5">
                      <Grid3x3 className="w-3.5 h-3.5" />
                      Room Type
                    </label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-gold px-3.5 py-2.5 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                      style={{ color: "white" }}
                    >
                      {roomOptions.map((option) => (
                        <option key={option.value} value={option.value} className="text-text-dark">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Treatments */}
                  <div className="col-span-1">
                    <label className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-white/80 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Treatments
                    </label>
                    <select
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-gold px-3.5 py-2.5 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                      style={{ color: "white" }}
                    >
                      {treatmentOptions.map((option) => (
                        <option key={option.value} value={option.value} className="text-text-dark">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Book Now Button */}
                  <button
                    type="button"
                    onClick={handleBookNow}
                    className="group col-span-2 lg:col-span-1 flex items-center justify-center gap-2 border border-cream-light text-cream-light uppercase tracking-[0.15em] px-8 py-2.5 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap w-full transform hover:scale-105 active:scale-95"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
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

      {/* Booking Modal - Opens with Smooth Animation */}
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
                className="absolute top-4 right-4 z-10 p-2 bg-cream-light/90 hover:bg-cream-light rounded-full shadow-lg transition-colors"
                aria-label="Close booking form"
              >
                <X className="w-5 h-5 text-forest-dark" />
              </motion.button>

              {/* Booking Form with Auto-filled Data */}
              <AyurvedicBookingForm
                onSearch={handleBookingSubmit}
                initialData={prefillData || undefined}
                variant="full"
                showDatePicker={true}
                theme="light"
                className="w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}