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
        {/* Hero Video Section */}
        <div className="relative h-[480px] sm:h-[560px] md:h-[650px] lg:h-[750px] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ minHeight: '100%', minWidth: '100%' }}
            >
              <source src="/images/viedo.webm" type="video/webm" />
              {/* Fallback image if video doesn't load */}
              <Image
                src="/images/ayurvana.png"
                alt="Ayurvedic oil massage treatment"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent" />

          {/* Text content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-6xl flex flex-col">
                {/* Welcome Text */}
                <SplitText
                  text="Welcome to Sona Health & Wellness"
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

                {/* Heading - Line 1 */}
                <SplitText
                  text="Experience Holistic"
                  className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight overflow-visible"
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

                {/* Heading - Line 2: "Healing" in gold */}
                <div className="flex flex-wrap mt-1 items-center gap-1 sm:gap-2 overflow-visible">
                  <SplitText
                    text="Healing"
                    className="italic text-gold-light font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl overflow-visible"
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
                    text="and Comfortable Stay."
                    className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight overflow-visible"
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

                {/* Description Paragraph */}
                <SplitText
                  text="Experience authentic Ayurveda treatments and peaceful stay surrounded by nature."
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
                  {/* Primary CTA - Book Now */}
                  <button
                    onClick={handleBookNow}
                    className="bg-gold-light hover:bg-gold-dark text-white font-semibold px-6 sm:px-8 py-1.5 sm:py-2  transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block cursor-pointer text-sm sm:text-base"
                  >
                    Book Your Stay
                  </button>

                  {/* Secondary CTA */}
                  <button
                    className="border-2 border-gold-light text-gold-light hover:bg-gold-light hover:text-white font-semibold px-6 sm:px-8 py-1.5 sm:py-2  transition-all duration-300 hover:scale-105 inline-block cursor-pointer text-sm sm:text-base"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating search card */}
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-cream-dark -mt-16 sm:-mt-20 md:-mt-16 lg:-mt-20 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Title Header */}
            <div className="px-4 sm:px-6 pt-4 sm:pt-5 pb-2 border-b border-gray-100">
              <h2 className="text-lg sm:text-xl font-semibold text-forest-dark flex items-center gap-2">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                <span>Book Your Stay</span>
              </h2>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                Fill in the details to book your Ayurveda wellness experience
              </p>
            </div>

            {/* Search form */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-6"
              >
                {/* Desktop/Horizontal layout - hidden on mobile */}
                <div className="hidden md:flex flex-nowrap items-end gap-3 overflow-x-auto">
                  {/* Gender Selection */}
                  <div className="flex-1 min-w-[100px] flex-shrink-0">
                    <label className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-text-muted mb-1.5">
                      <UserCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Gender
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full border-2 border-gray-100 hover:border-forest/30 focus:border-forest rounded-lg px-3 py-2 text-sm text-text-dark focus:outline-none transition-colors appearance-none bg-white"
                    >
                      {genderOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div className="flex-1 min-w-[100px] flex-shrink-0">
                    <label className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-text-muted mb-1.5">
                      <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full border-2 border-gray-100 hover:border-forest/30 focus:border-forest rounded-lg px-3 py-2 text-sm text-text-dark focus:outline-none transition-colors appearance-none bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} Guest{n > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Room Type */}
                  <div className="flex-1 min-w-[120px] flex-shrink-0">
                    <label className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-text-muted mb-1.5">
                      <Grid3x3 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Room Type
                    </label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full border-2 border-gray-100 hover:border-forest/30 focus:border-forest rounded-lg px-3 py-2 text-sm text-text-dark focus:outline-none transition-colors appearance-none bg-white"
                    >
                      {roomOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Treatments */}
                  <div className="flex-1 min-w-[140px] flex-shrink-0">
                    <label className="flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-text-muted mb-1.5">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Treatments
                    </label>
                    <select
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full border-2 border-gray-100 hover:border-forest/30 focus:border-forest rounded-lg px-3 py-2 text-sm text-text-dark focus:outline-none transition-colors appearance-none bg-white"
                    >
                      {treatmentOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Book Now Button */}
                  <button
                    type="button"
                    onClick={handleBookNow}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-forest-dark to-forest hover:from-forest hover:to-forest-dark text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap flex-shrink-0 min-w-[140px]"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>

                {/* Mobile/Vertical layout - shown only on mobile */}
                <div className="md:hidden space-y-3">
                  {/* Gender & Guests - Row 1 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="flex items-center gap-1 text-[9px] font-semibold tracking-wide uppercase text-text-muted mb-1">
                        <UserCircle className="w-3 h-3" />
                        Gender
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full border-2 border-gray-100 hover:border-forest/30 focus:border-forest rounded-lg px-3 py-2 text-sm text-text-dark focus:outline-none transition-colors appearance-none bg-white"
                      >
                        {genderOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-[9px] font-semibold tracking-wide uppercase text-text-muted mb-1">
                        <Users className="w-3 h-3" />
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full border-2 border-gray-100 hover:border-forest/30 focus:border-forest rounded-lg px-3 py-2 text-sm text-text-dark focus:outline-none transition-colors appearance-none bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n} Guest{n > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Room Type & Treatments - Row 2 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="flex items-center gap-1 text-[9px] font-semibold tracking-wide uppercase text-text-muted mb-1">
                        <Grid3x3 className="w-3 h-3" />
                        Room Type
                      </label>
                      <select
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        className="w-full border-2 border-gray-100 hover:border-forest/30 focus:border-forest rounded-lg px-3 py-2 text-sm text-text-dark focus:outline-none transition-colors appearance-none bg-white"
                      >
                        {roomOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-1 text-[9px] font-semibold tracking-wide uppercase text-text-muted mb-1">
                        <Sparkles className="w-3 h-3" />
                        Treatments
                      </label>
                      <select
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className="w-full border-2 border-gray-100 hover:border-forest/30 focus:border-forest rounded-lg px-3 py-2 text-sm text-text-dark focus:outline-none transition-colors appearance-none bg-white"
                      >
                        {treatmentOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Book Now Button - Full width */}
                  <button
                    type="button"
                    onClick={handleBookNow}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-forest-dark to-forest hover:from-forest hover:to-forest-dark text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Scrollbar hide utility */}
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
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
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