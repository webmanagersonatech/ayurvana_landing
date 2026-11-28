import { useState } from "react";
import { motion } from "framer-motion";
import { BedDouble, ArrowRight } from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext";

interface Room {
  name: string;
  basis: string;
  price: string;
}

const rooms: Room[] = [
  {
    name: "She Room and He Room",
    basis: "Per bed, shared room",
    price: "₹4,500",
  },
  {
    name: "Room, shared occupancy",
    basis: "Per person",
    price: "₹6,000",
  },
  {
    name: "Room, double occupancy",
    basis: "Per room, two guests",
    price: "₹12,000",
  },
  {
    name: "Room, single occupancy",
    basis: "Per room, one guest",
    price: "₹13,000",
  },
  {
    name: "Premium room",
    basis: "Balcony, terrace, private garden",
    price: "From ₹15,600",
  },
];

export default function Packages() {
  const [active, setActive] = useState<number | null>(null);
  const { openBookingModal } = useBookingModal();

  return (
    <section id="packages" className="py-16 relative overflow-hidden bg-cream">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="section-head center">
         <span className="section-label">Wellness Packages</span>
          <h2 className="section-title mt-3">
            Rooms &amp; <span className="title-accent">Accommodation</span>
          </h2>
          <p className="section-lead">Choose the room that suits your stay.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-5">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden bg-cream-light rounded-2xl text-center cursor-pointer card-hover flex flex-col ${
                active === i
                  ? "border-2 border-gold shadow-xl"
                  : "border border-line"
              }`}
            >
              <div className="bg-forest text-white px-4 py-6">
                <p className="font-serif text-2xl">{room.price}</p>
                <p className="text-xs uppercase tracking-widest opacity-80 mt-1">Per night</p>
              </div>

              <div className="flex flex-col flex-1 items-center px-4 pb-5">
                <span className="-mt-5 mb-4 flex w-10 h-10 items-center justify-center rounded-full bg-cream-light border border-gold">
                  <BedDouble className="w-5 h-5 text-forest" strokeWidth={1.5} />
                </span>
                <h3 className="card-title mb-2">{room.name}</h3>
                <p className="card-text mb-6 flex-1">{room.basis}</p>
                <button
                  type="button"
                  onClick={() => openBookingModal(room.name)}
                  className="btn-outline w-full"
                >
                  Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}