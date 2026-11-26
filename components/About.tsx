import { motion } from "framer-motion";

export default function About() {
  const pillars = [
    {
      number: "01",
      tag: "Heal",
      title: "Heal",
      desc: "Personalised Ayurvedic and naturopathic programmes guided by qualified practitioners, with care shaped around the individual.",
    },
    {
      number: "02",
      tag: "Unwind",
      title: "Unwind",
      desc: "A natural pond, a 1.5 km track, an amphitheatre beneath the stars and food prepared with your programme in mind.",
    },
    {
      number: "03",
      tag: "Belong",
      title: "Belong",
      desc: "Sona Gramam brings guests closer to regional craft through pottery, weaving, painting, workshops and artisan encounters.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-12 sm:py-16 bg-cream overflow-hidden">
      {/* Bottom left decorative image */}
      <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
        <img
          src="/images/image-1.png"
          alt=""
          aria-hidden="true"
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-contain"
        />
      </div>

      {/* Top right decorative leaf */}
      <div className="absolute top-0 right-0 opacity-30 pointer-events-none">
        <img
          src="/images/image-2.png"
          alt=""
          aria-hidden="true"
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images grid - left */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex flex-col gap-4">
              <motion.div
                className="rounded-2xl overflow-hidden h-56"
                variants={imageVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/a2.webp"
                  alt="Ayurvedic back massage"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden h-64"
                variants={imageVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/a3.webp"
                  alt="Ayurvedic oils and herbal ingredients"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <motion.div
              className="rounded-2xl overflow-hidden h-full"
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                loading="lazy"
                decoding="async"
                src="/images/a1.webp"
                alt="Ayurvedic facial massage treatment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content - right */}
          <motion.div
            className="relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10 z-0"
              style={{
                backgroundImage: "url('/images/bgimage-4.png')",
                backgroundSize: "60%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="relative z-10">
              {/* Eyebrow */}
              <motion.div className="flex items-center gap-2 mb-5" variants={fadeInUp}>
                <motion.svg
                  className="w-4 h-4 text-forest-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                  <path strokeLinecap="round" strokeWidth={1.8} d="M12 8v8M8 12h8" />
                </motion.svg>
                <span className="text-forest-light text-xs font-semibold tracking-[0.2em] uppercase">
                  A different kind of retreat
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-dark leading-[1.15] mb-6"
                variants={fadeInUp}
              >
                Come for the treatment.
                <br />
                <span className="italic text-forest-light">Stay for the village.</span>
              </motion.h2>

            

              {/* Pillars */}
              <motion.div className="space-y-6" variants={staggerContainer}>
                {pillars.map((item) => (
                  <motion.div
                    key={item.number}
                    variants={fadeInUp}
                    className="flex items-start gap-4 pt-5 border-t border-forest-light/20"
                  >
                    <div className="shrink-0 w-12">
                      <p className="font-serif text-2xl text-forest-light leading-none">
                        {item.number}
                      </p>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mt-1.5">
                        {item.tag}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="font-serif text-xl text-text-dark mb-1.5">{item.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}