import { motion, Variants } from "framer-motion";
import { photos, lineArt } from "./siteImages";

const gallery = photos.gallery.map((g) => ({
  src: g.src,
  alt: g.label,
  span: g.tall ? "md:row-span-2" : "",
}));

// Animation variants - Explicitly typed with proper transitions
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

// Fixed: Remove duration from spring transition
const titleVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

// Fixed: Use tween transition for subtitle
const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export default function SpaExperience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="section-pad relative overflow-hidden bg-forest-dark on-dark"
      id="gallery"
    >
      <img
        src={lineArt.lotusLight}
        alt=""
        aria-hidden="true"
        className="absolute -left-12 top-10 w-64 lg:w-96 opacity-[0.05] pointer-events-none select-none"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="section-head center">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            className="section-label"
          >
            Our Space
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            className="section-title mt-3"
          >
            Our <span className="title-accent">Ayurvana</span> Experience
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtitleVariants}
            className="section-lead"
          >
            Step inside Ayurvana — a world of calm, crafted with care.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[200px]"
        >
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`overflow-hidden rounded-2xl ${item.span} group relative cursor-pointer`}
            >
              <motion.div
                className="w-full h-full overflow-hidden"
                whileHover={{
                  scale: 1.08,
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
              >
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                />
              </motion.div>
              
              {/* Overlay with animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/35 flex items-center justify-center rounded-2xl"
              >
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="text-white text-sm font-medium tracking-wider uppercase px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm"
                >
                  {item.alt}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}