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
    <section id="rooms" className="py-20 relative overflow-hidden bg-cream-dark">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">Stay With Us</span>
          <h2 className="section-title mt-3">
            Room <span className="italic text-forest">Tariff</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto text-sm leading-relaxed">
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
              className={`bg-white rounded-2xl p-6 card-hover flex flex-col ${
                room.featured ? "border-2 border-gold shadow-xl" : "border border-black/10"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-sage/15 flex items-center justify-center mb-4">
                <BedDouble className="w-5 h-5 text-forest" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-text-dark mb-2">{room.name}</h3>
              <p className="text-text-muted text-sm mb-5 flex-1">{room.desc}</p>
              <div className="border-t border-black/10 pt-4">
                <p className="text-text-light text-xs mb-1">Per night</p>
                <p className="font-serif text-lg text-forest">{room.price}</p>
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
