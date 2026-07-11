import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const faqs = [
  {
    q: "What is Ayurveda and how does it help?",
    a: "Ayurveda is a 5,000-year-old holistic healing system from India that focuses on balancing the body, mind, and spirit. It uses personalised treatments based on your unique constitution (prakriti) to prevent illness and promote longevity.",
  },
  {
    q: "How do I know which treatment is right for me?",
    a: "We begin every journey with a comprehensive Ayurvedic consultation. Our physician will assess your dosha balance, current health concerns, and wellness goals before recommending a treatment plan tailored specifically for you.",
  },
  {
    q: "How long does a typical treatment session last?",
    a: "Sessions range from 45 minutes for focused treatments like shirodhara to 90 minutes for full-body Panchakarma therapies. We also offer multi-day intensive programmes for deeper healing.",
  },
  {
    q: "Are your practitioners certified?",
    a: "Yes. All our therapists are certified Ayurvedic practitioners with formal training from accredited institutions. Our physician holds an MD in Ayurvedic Medicine with over 15 years of clinical experience.",
  },
  {
    q: "Can I continue my regular medication alongside Ayurvedic treatments?",
    a: "Absolutely. Ayurveda works complementarily with modern medicine. Please inform our physician about any medications during your consultation so we can design a safe and effective treatment plan.",
  },
  {
    q: "Do you offer packages for wellness retreats?",
    a: "Yes, we offer curated 3-day, 7-day, and 14-day wellness retreat packages combining treatments, yoga, meditation, and Ayurvedic diet guidance. Contact us for customised retreat planning.",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

// Fixed: Removed duration from spring transition
const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

// Fixed: Removed duration from spring transition
const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
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

const faqVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

// Fixed: Removed duration from spring transition
const answerVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white"
      id="faq"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-stretch"
        >
          {/* Image Side - Fixed height matching FAQ */}
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="overflow-hidden lg:sticky lg:top-24 relative min-h-[500px] lg:min-h-[600px]"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80"
              alt="Relaxing Ayurvedic treatment"
              className="w-full h-full object-cover absolute inset-0"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            />
            
            {/* Decorative overlay with animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 z-10"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-sm font-medium text-stone-800"
              >
                ✧ 5,000 Years of Healing Wisdom
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-xs text-stone-500 mt-1"
              >
                Experience authentic Ayurvedic treatments
              </motion.p>
            </motion.div>
          </motion.div>

          {/* FAQ Side */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col"
          >
            <motion.span
              variants={titleVariants}
              className="section-label"
            >
              FAQ
            </motion.span>
            <motion.h2
              variants={titleVariants}
              className="section-title mt-3 mb-8"
            >
              Frequently Asked
              <br />Questions
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={faqVariants}
                  whileHover={{
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  className="border border-cream-dark rounded-xl overflow-hidden"
                >
                  <motion.button
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-cream transition-colors relative"
                    onClick={() => setOpen(open === index ? -1 : index)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium text-text-dark text-sm flex items-center gap-3">
                      <motion.span
                        initial={false}
                        animate={{
                          rotate: open === index ? 360 : 0,
                          scale: open === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sage/10 text-sage text-xs font-bold shrink-0"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>
                      {faq.q}
                    </span>
                    <motion.svg
                      className={`w-4 h-4 text-sage shrink-0`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{
                        rotate: open === index ? 180 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </motion.button>

                  <AnimatePresence mode="wait">
                    {open === index && (
                      <motion.div
                        key="answer"
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="px-5 pb-4 overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-text-muted text-sm leading-relaxed"
                        >
                          {faq.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}