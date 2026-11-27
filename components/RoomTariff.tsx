import { motion } from "framer-motion";
import { BedDouble, Check } from "lucide-react";

interface Room {
  name: string;
  desc: string;
  price: string;
  featured?: boolean;
}

const rooms: Room[] = [
  {
    name: "Garden Room",
    desc: "Cosy garden-facing room surrounded by our herbal garden.",
    price: "₹4,500 – 6,000",
  },
  {
    name: "Deluxe Room",
    desc: "Spacious private room with attached bath & work desk.",
    price: "₹6,500 – 8,500",
    featured: true,
  },
  {
    name: "Terrace Suite",
    desc: "Private terrace, sit-out, and enhanced in-room amenities.",
    price: "₹9,500 – 12,000",
  },
  {
    name: "Ayurvana Suite",
    desc: "Our signature suite with personalised butler & therapy scheduling.",
    price: "₹14,000 – 18,000",
  },
];

export default function RoomTariff() {
  return (
    <section id="rooms" className="section-pad relative overflow-hidden bg-cream-dark">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="section-head center">
          <span className="section-label">Stay With Us</span>
          <h2 className="section-title mt-3">
            Room <span className="title-accent">Tariff</span>
          </h2>
          <p className="section-lead">
            Comfortable, healing-focused accommodation for every budget — priced well
            below comparable luxury retreats, without compromising on care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-cream-light rounded-2xl p-7 card-hover flex flex-col ${
                room.featured ? "border-2 border-gold shadow-xl" : "border border-line"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-forest-light/15 flex items-center justify-center mb-4">
                <BedDouble className="w-5 h-5 text-forest" strokeWidth={1.5} />
              </div>
              <h3 className="card-title mb-2">{room.name}</h3>
              <p className="card-text mb-5 flex-1">{room.desc}</p>
              <div className="border-t border-line pt-4">
                <p className="text-text-light text-xs mb-1">Per night</p>
                <p className="font-serif text-xl text-forest">{room.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 text-text-muted text-xs">
          <Check className="w-4 h-4 text-forest" strokeWidth={2} />
          <span>Room tariff includes all meals, in-house yoga sessions, and Wi-Fi.</span>
        </div>
      </div>
    </section>
  );
}
