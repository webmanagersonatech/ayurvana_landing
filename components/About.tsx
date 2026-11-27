import { motion } from "framer-motion";
import { photos, lineArt } from "./siteImages";

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
    <section id="about" className="section-pad relative bg-cream overflow-hidden">
      {/* Line-art backgrounds — very low opacity */}
      <img
        src={lineArt.sprig}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-10 -left-10 w-48 sm:w-64 lg:w-96 opacity-[0.07] pointer-events-none select-none"
      />
      <img
        src={lineArt.lotus}
        alt=""
        aria-hidden="true"
        className="absolute top-6 -right-8 w-48 sm:w-64 lg:w-96 opacity-[0.06] pointer-events-none select-none"
      />

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
                  src={photos.aboutTop.src}
                  alt={photos.aboutTop.alt}
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
                  src={photos.aboutBottom.src}
                  alt={photos.aboutBottom.alt}
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
                src={photos.aboutTall.src}
                alt={photos.aboutTall.alt}
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
              className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
              style={{
                backgroundImage: "url('/images/bgimage-4.png')",
                backgroundSize: "60%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="relative z-10">
              {/* Eyebrow */}
              <motion.div className="mb-4" variants={fadeInUp}>
                <span className="section-label">A different kind of retreat</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="section-title mb-10"
                variants={fadeInUp}
              >
                Come for the treatment.
                <br />
                <span className="title-accent">Stay for the village.</span>
              </motion.h2>

            

              {/* Pillars */}
              <motion.div className="space-y-6" variants={staggerContainer}>
                {pillars.map((item) => (
                  <motion.div
                    key={item.number}
                    variants={fadeInUp}
                    className="flex items-start gap-4 pt-5 border-t border-line"
                  >
                    <div className="shrink-0 w-12">
                      <p className="font-serif text-2xl text-forest-light leading-none">
                        {item.number}
                      </p>
                      <p className="text-xs tracking-[0.2em] uppercase text-text-light mt-1.5">
                        {item.tag}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="card-title mb-1.5">{item.title}</h3>
                      <p className="card-text">{item.desc}</p>
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