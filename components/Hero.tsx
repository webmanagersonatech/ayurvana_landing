"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Italiana } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

// Fonts from the client's design
const italiana = Italiana({ subsets: ["latin"], weight: "400" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

// Where the hero links go. Change these to match your pages and section ids.
const links = { wellness: "/sonagramam", stay: "#packages", discover: "/sonagramam" };

// Today's date in the visitor's local time (YYYY-MM-DD)
const getToday = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split("T")[0];
};

export default function Hero() {
  const [ready, setReady] = useState(false); // starts the entrance animation
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState<BookingPrefillData | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // shared "rise in" effect; each element adds its own delay
  const rise = `transition-all duration-1000 ease-[cubic-bezier(.22,.68,0,1)] motion-reduce:transition-none ${
    ready
      ? "translate-y-0 opacity-100 blur-[0px]"
      : "translate-y-[35px] opacity-0 blur-[7px] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-[0px]"
  }`;

  // Call this from a "Book now" button to open the booking modal
  const handleBookNow = () => {
    setPrefillData({
      name: "Guest",
      gender: "all",
      guests: 2,
      roomType: "all",
      treatment: "all",
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
        {/* Hero */}
        <div
          className={`relative grid h-[100svh] max-h-[980px] min-h-[620px] place-items-center overflow-hidden bg-[#30231c] text-center font-light text-white ${dmSans.className}`}
        >
          <Image
            src="/images/hero-1.webp"
            alt="Ayurvana village pond at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_54%] max-[701px]:object-[58%_center]"
          />

          {/* shade layers */}
          <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(31,22,16,.34),rgba(31,22,16,.08)_34%,rgba(31,22,16,.4)),radial-gradient(rgba(31,22,16,.1),rgba(31,22,16,.35)_72%),linear-gradient(90deg,rgba(30,23,18,.68),rgba(33,22,12,.2)_62%,rgba(29,20,12,.08)),linear-gradient(0deg,rgba(29,20,12,.78),transparent_64%)]" />

          <div className="relative flex w-[calc(100%-38px)] max-w-[780px] flex-col items-center pb-16 pt-[82px]">
            <p
              className={`m-0 text-[13px] font-semibold uppercase leading-normal tracking-[0.24em] text-[#ead6b8] delay-[450ms] max-[701px]:text-[10px] ${rise}`}
            >
              A Sona Star Initiative <span className="px-[7px] text-[#d0ad79]">·</span> Salem, Tamil Nadu
            </p>

            <h1
              className={`mb-5 mt-[25px] text-[clamp(72px,9vw,128px)] font-normal leading-[0.92] tracking-[-0.055em] text-[#fff8ef] delay-[620ms] max-[701px]:mb-[17px] max-[701px]:mt-[22px] max-[701px]:text-[clamp(64px,16vw,100px)] ${italiana.className} ${rise}`}
            >
              Ayurvana
            </h1>

            <p
              className={`m-0 text-[clamp(22px,3vw,36px)] leading-[1.22] text-[#fff8ef] delay-[800ms] max-[701px]:text-[clamp(22px,6vw,29px)] ${italiana.className} ${rise}`}
            >
              A village for the body,
              <br />
              the mind and the hands.
            </p>

            <p
              className={`mb-0 mt-5 max-w-[470px] text-[14px] leading-[1.8] tracking-[0.025em] text-[rgba(255,248,239,.82)] delay-[900ms] max-[701px]:mt-[15px] max-[701px]:text-[12px] ${rise}`}
            >
              Where physician-led care, restorative rituals and living craft traditions come
              together.
            </p>

            <div
              className={`mt-[34px] flex items-center gap-[26px] uppercase delay-[1000ms] max-[701px]:mt-[26px] max-[701px]:flex-col max-[701px]:gap-[17px] ${rise}`}
            >
              <Link
                href={links.wellness}
                className="inline-flex items-center gap-3 bg-[#f5eee2] px-6 py-4 text-[8px] tracking-[0.13em] text-[#873f2b] transition-all duration-300 hover:-translate-y-[3px] hover:bg-white"
              >
                Explore wellness <span>↗</span>
              </Link>
              <Link
                href={links.stay}
               className="inline-flex items-center gap-3 border border-[#b89a65]  px-6 py-4 text-[8px] tracking-[0.13em] text-[#fff8ef] transition-all duration-300 hover:-translate-y-[3px] "
              
              >
                Discover your stay <span>↗</span>
              </Link>
            </div>
          </div>

          {/* bottom rail */}
          <div className="absolute bottom-0 left-[5.5%] right-[5.5%] grid min-h-[92px] grid-cols-[1fr_auto_1fr] items-center gap-6 border-t border-[rgba(240,223,200,.34)] uppercase max-[701px]:left-5 max-[701px]:right-5 max-[701px]:grid-cols-1 max-[701px]:justify-items-center max-[701px]:gap-0">
            <div className="flex flex-col gap-2 text-left max-[701px]:hidden">
              <span className="text-[7px] tracking-[0.24em] text-[rgba(240,223,200,.62)]">
                The approach
              </span>
              <span className="text-[9px] normal-case tracking-[0.1em] text-[#fff8ef]">
                Ayurveda <i className="px-[5px] not-italic text-[#d0ad79]">·</i> Naturopathy{" "}
                <i className="px-[5px] not-italic text-[#d0ad79]">·</i> Living craft
              </span>
            </div>

            <Link href={links.discover} className="flex items-center gap-3.5">
              <span className="text-[7px] tracking-[0.24em] text-[rgba(240,223,200,.62)]">
                Discover Ayurvana
              </span>
              <span
                className="grid h-[27px] w-[27px] place-items-center rounded-full border border-[rgba(208,173,121,.65)] text-[13px] text-[#d0ad79]"
                aria-hidden="true"
              >
                ↓
              </span>
            </Link>

            <div className="flex flex-col gap-2 text-right max-[701px]:hidden">
              <span className="text-[7px] tracking-[0.24em] text-[rgba(240,223,200,.62)]">
                Find us
              </span>
              <span className="text-[9px] normal-case tracking-[0.1em] text-[#fff8ef]">
                Salem, Tamil Nadu <i className="px-[5px] not-italic text-[#d0ad79]">↗</i>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking modal: z-[1200] keeps it above the navbar (z-[1000]) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-4"
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
              className="relative max-h-[90dvh] w-full max-w-4xl overflow-y-auto rounded-2xl"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-3 top-3 z-10 rounded-full bg-cream-light/90 p-2 shadow-lg transition-colors hover:bg-cream-light"
                aria-label="Close booking form"
              >
                <X className="h-5 w-5 text-forest-dark" />
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