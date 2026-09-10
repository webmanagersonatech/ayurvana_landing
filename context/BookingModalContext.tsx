import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AyurvedicBookingForm from "../components/Booking";

type BookingModalContextType = {
  isOpen: boolean;
  contextLabel?: string;
  openBookingModal: (contextLabel?: string) => void;
  closeBookingModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contextLabel, setContextLabel] = useState<string | undefined>(undefined);

  const openBookingModal = (label?: string) => {
    setContextLabel(label);
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
    setContextLabel(undefined);
  };

  // Prevent body scroll while the modal is open, and allow closing with Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBookingModal();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <BookingModalContext.Provider
      value={{ isOpen, contextLabel, openBookingModal, closeBookingModal }}
    >
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-[999] overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={closeBookingModal}
          />

          {/* Modal Container */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={closeBookingModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="Close booking form"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Booking Form */}
              <AyurvedicBookingForm onClose={closeBookingModal} contextLabel={contextLabel} />
            </div>
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}
