"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Calendar,
  Users,
  Grid3x3,
  ArrowRight,
  UserCircle,
  X,
} from "lucide-react";
import SplitText from "./Splittext";
import AyurvedicBookingForm from "./Booking";

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

const genderOptions = [
  { value: "any", label: "Any Gender" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "couple", label: "Couple" },
];

const guestOptions = [1, 2, 3, 4, 5, 6].map((n) => ({
  value: String(n),
  label: `${n} Guest${n > 1 ? "s" : ""}`,
}));

const roomOptions = [
  { value: "all", label: "All Rooms" },
  { value: "deluxe", label: "Deluxe Room" },
  { value: "ayurveda-suite", label: "Ayurveda Suite" },
  { value: "garden-cottage", label: "Garden Cottage" },
  { value: "family-suite", label: "Family Suite" },
];

const treatmentOptions = [
  { value: "all", label: "All Treatments" },
  { value: "abhyanga", label: "Abhyanga Massage" },
  { value: "shirodhara", label: "Shirodhara" },
  { value: "panchakarma", label: "Panchakarma" },
  { value: "pizhichil", label: "Pizhichil" },
  { value: "nasyam", label: "Nasyam" },
];

const splitProps = {
  delay: 30,
  duration: 1,
  ease: "power3.out",
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0 },
  threshold: 0.1,
  rootMargin: "0px",
  textAlign: "left" as const,
};

const headingSize =
  "font-serif text-[2rem] min-[400px]:text-4xl sm:text-5xl lg:text-6xl leading-[1.15]";

const selectClass =
  "w-full min-w-0 truncate rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 focus:border-gold px-3 py-2.5 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer";

const labelClass =
  "flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-white/80 mb-1.5";

// Today's date in the visitor's local time (YYYY-MM-DD)
const getToday = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split("T")[0];
};

function SelectField({
  label,
  icon: Icon,
  value,
  options,
  onChange,
}: {
  label: string;
  icon: React.ElementType;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block min-w-0">
      <span className={labelClass}>
        <Icon className="w-3.5 h-3.5" />
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={selectClass}
        style={{ color: "white" }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-text-dark">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function Hero() {
  const [guests, setGuests] = useState(2);
  const [gender, setGender] = useState("any");
  const [roomType, setRoomType] = useState("all");
  const [treatment, setTreatment] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState<BookingPrefillData | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBookNow = () => {
    setPrefillData({
      name: "Guest",
      gender: gender === "any" ? "all" : gender,
      guests,
      roomType,
      treatment,
      date: getToday(),
      time: "10:00 AM",
      email: "",
      phone: "",
      aadharNumber: "",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // Lock page scroll and close on Escape while the modal is open
  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const handleBookingSubmit = (filters: unknown) => {
    console.log("Booking submitted:", filters);
    // Add your API call here
    closeModal();
  };

  return (
    <>
      <section className="relative">
        {/* Hero: grows with its content, so text is never clipped */}
        <div className="relative flex items-center overflow-hidden min-h-[100svh] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[750px]">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <Image
              src="/images/hero-1.webp"
              alt="Ayurvana village pond at dusk"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-[1] w-full max-w-7xl mx-auto px-5 sm:px-4 pt-24 pb-28 sm:pb-32">
            <div className="flex flex-col items-start">
              <SplitText
                {...splitProps}
                splitType="words"
                text="A Sona Star Initiative · Salem, Tamil Nadu"
                className="text-gold-light text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4"
              />

              <SplitText
                {...splitProps}
                splitType="chars"
                text="Ayurvana"
                className="font-serif italic text-gold-light text-3xl sm:text-4xl lg:text-5xl leading-tight mb-2 sm:mb-4"
              />

              <SplitText
                {...splitProps}
                splitType="words, chars"
                text="A village for the body,"
                className={`${headingSize} text-white`}
              />

              <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 mt-1">
                <SplitText
                  {...splitProps}
                  splitType="words, chars"
                  text="the mind"
                  className={`${headingSize} italic text-gold-light`}
                />
                <SplitText
                  {...splitProps}
                  splitType="words, chars"
                  text="and the hands."
                  className={`${headingSize} text-white`}
                />
              </div>

              <SplitText
                {...splitProps}
                splitType="words"
                text="Where physician-led care, restorative rituals and living craft traditions come together."
                className="text-white/80 text-sm sm:text-base leading-relaxed mt-4 sm:mt-6 max-w-lg"
              />

              <div className="flex flex-col min-[400px]:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full min-[400px]:w-auto">
                <button type="button" onClick={handleBookNow} className="btn-light justify-center text-center">
                  Book Your Stay
                </button>
                <Link href="/sonagramam" className="btn-ghost-light justify-center text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating booking card */}
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            className="relative z-10 -mt-16 sm:-mt-20 md:-mt-16 lg:-mt-20 overflow-hidden rounded-2xl bg-forest-dark border border-white/10 shadow-2xl on-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <img
              src="/images/lineart/lineart-lotus-light.svg"
              alt=""
              aria-hidden="true"
              className="absolute -right-6 top-1/2 -translate-y-1/2 h-[140%] opacity-[0.06] pointer-events-none select-none"
            />

            <div className="relative z-[3] px-4 sm:px-8 py-5 sm:py-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 p-2 bg-gold/20 rounded-xl">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div className="min-w-0">
                  <h2 className="card-title">Start Your Wellness Journey</h2>
                  <p className="card-text mt-0.5">
                    Book your authentic Ayurveda experience today
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-5 lg:items-end">
                <SelectField
                  label="Gender"
                  icon={UserCircle}
                  value={gender}
                  options={genderOptions}
                  onChange={setGender}
                />
                <SelectField
                  label="Guests"
                  icon={Users}
                  value={String(guests)}
                  options={guestOptions}
                  onChange={(v) => setGuests(Number(v))}
                />
                <SelectField
                  label="Room Type"
                  icon={Grid3x3}
                  value={roomType}
                  options={roomOptions}
                  onChange={setRoomType}
                />
                <SelectField
                  label="Treatments"
                  icon={Sparkles}
                  value={treatment}
                  options={treatmentOptions}
                  onChange={setTreatment}
                />
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="btn-light group col-span-2 lg:col-span-1 w-full justify-center whitespace-nowrap"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-label="Booking form"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto rounded-2xl"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 p-2 bg-cream-light/90 hover:bg-cream-light rounded-full shadow-lg transition-colors"
                aria-label="Close booking form"
              >
                <X className="w-5 h-5 text-forest-dark" />
              </button>

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