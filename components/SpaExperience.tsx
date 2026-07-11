import { motion, Variants } from "framer-motion";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    alt: "Massage Therapy",
    span: "md:row-span-2",
  },
  {
    src: "https://img.magnific.com/premium-photo/ayurvedic-shirodhara-treatment-india_926199-3909061.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    alt: "Ayurvedic Treatment",
    span: "",
  },
  {
    src: "https://img.magnific.com/premium-photo/ayurvedic-shirodhara-treatment-india_211214-2.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    alt: "Face Therapy",
    span: "md:row-span-2",
  },
  {
    src: "https://img.magnific.com/premium-photo/ayurvedic-shirodhara-treatment-india_926199-2263056.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80",
    alt: "Essential Oils",
    span: "",
  },
];

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
      className="py-20 bg-cream"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
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
            Our AyurVana Experience
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtitleVariants}
            className="text-text-muted mt-4 max-w-xl mx-auto text-sm"
          >
            Step inside Ayurvana — a world of calm, crafted with care.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[180px]"
        >
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`overflow-hidden ${item.span} group relative cursor-pointer`}
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
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
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