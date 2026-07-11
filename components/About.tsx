import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function About() {
  const features = [
    {
      title: "Ayurvedic Expertise",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "Ayurvedic Expertise",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  // Auto-counting animation component
  const CountUpAnimation = ({ targetValue, label, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const isInView = useInView(countRef, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (isInView && !hasAnimated) {
        setHasAnimated(true);
        const startTime = Date.now();
        const startValue = 0;
        
        const updateCount = () => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = startValue + (targetValue - startValue) * easeOutQuart;
          
          setCount(currentValue);
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            setCount(targetValue);
          }
        };
        
        requestAnimationFrame(updateCount);
      }
    }, [isInView, targetValue, duration, hasAnimated]);

    // Format the count based on the value type
    const formatCount = (value) => {
      if (targetValue.toString().includes('%')) {
        return `${Math.round(value)}%`;
      } else if (targetValue.toString().includes('+')) {
        return `${Math.round(value)}+`;
      } else {
        return Math.round(value);
      }
    };

    // Extract numeric value for calculation
    const numericValue = parseFloat(targetValue.toString().replace(/[^0-9.]/g, ''));
    const displayValue = formatCount(count);

    return (
      <motion.div
        ref={countRef}
        className="px-4 text-center"
        variants={fadeInUp}
      >
        <motion.p
          className="font-serif text-4xl md:text-5xl text-sage leading-none mb-2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          {displayValue}
        </motion.p>
        <p className="text-text-muted text-xs tracking-wide uppercase">
          {label}
        </p>
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-12 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images grid - Left side */}
          <motion.div 
            className="grid grid-cols-2 gap-4 order-1 lg:order-1"
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
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80"
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
                  src="https://img.magnific.com/premium-photo/there-is-person-pouring-water-into-bowl-with-candles_974521-89235.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80"
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
                src="https://img.magnific.com/free-photo/female-therapists-massaging-back-man-with-thai-herbal-compress-health-spa_637285-2255.jpg?t=st=1783315647~exp=1783319247~hmac=17e27141cdfeaba055b5f130f52971f33218d20560513c16b8fe05cfc8bde7ab&w=1480"
                alt="Ayurvedic facial massage treatment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content - Right side */}
          <motion.div
            className="order-2 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-center gap-2 mb-5"
              variants={fadeInUp}
            >
              <motion.svg 
                className="w-4 h-4 text-sage" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                <path strokeLinecap="round" strokeWidth={1.8} d="M12 8v8M8 12h8" />
              </motion.svg>
              <span className="text-sage text-xs font-semibold tracking-[0.2em] uppercase">
                About Us
              </span>
            </motion.div>

            <motion.h2 
              className="font-serif text-4xl md:text-5xl text-text-dark leading-[1.15] mb-6"
              variants={fadeInUp}
            >
              Sanctuary for Ayurvedic
              <br />
              Healing and Wellness
            </motion.h2>

            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
            >
              {features.map((item, index) => (
                <motion.div 
                  key={item.title}
                  variants={fadeInUp}
                >
                  <motion.h3 
                    className="font-serif text-xl text-text-dark mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.title}
                  </motion.h3>
                  <div className="flex items-start gap-4">
                    <motion.span 
                      className="mt-0.5 w-6 h-6 rounded-full border border-sage flex items-center justify-center flex-shrink-0"
                      whileHover={{ 
                        scale: 1.2,
                        backgroundColor: "rgba(163, 135, 106, 0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.svg 
                        className="w-3 h-3 text-sage" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d="M5 13l4 4L19 7" 
                        />
                      </motion.svg>
                    </motion.span>
                    <motion.p 
                      className="text-text-muted text-sm leading-relaxed"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Statistics with Auto-Count Animation */}
            <motion.div
              className="py-8 border-t border-sage/20 mt-8"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <CountUpAnimation targetValue={98} label="Client Satisfaction Rate" duration={2000} />
                <CountUpAnimation targetValue={15} label="Years of Experience" duration={2000} />
                <CountUpAnimation targetValue={100} label="Webinar Attendees" duration={2000} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}