import { motion } from 'framer-motion';
import { photos, lineArt } from './siteImages';

export default function QuoteBand() {
  return (
    <section className="section-pad relative overflow-hidden bg-forest-dark on-dark">
      <img
        src={lineArt.lotusLight}
        alt=""
        aria-hidden="true"
        className="absolute -right-10 top-1/2 -translate-y-1/2 w-72 lg:w-[28rem] opacity-[0.06] pointer-events-none select-none"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Quote Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Animated Quote Mark - GOLD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              className="lg:text-left"
            >
              <div className="text-6xl font-serif text-gold leading-none mb-4">"</div>
            </motion.div>

            {/* Quote Text - WHITE */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="font-serif text-xl md:text-2xl text-white italic leading-relaxed mb-6"
            >
              At Ayurvana, we genuinely believe that true wellness comes from within. Our mission is to guide each guest towards a life of balance, vitality, and inner peace through the ancient science of Ayurveda.
            </motion.blockquote>

            {/* Citation - LIGHT GOLD */}
            <motion.cite
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut"
              }}
              className="text-gold-light text-sm not-italic block"
            >
              — Dr. Priya Sharma, Founder & Chief Ayurvedic Physician
            </motion.cite>

            {/* Decorative Line - GOLD */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.6,
                ease: "easeInOut"
              }}
              className="h-0.5 bg-gold mt-6 mx-auto lg:mx-0"
            />
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 w-full max-w-sm lg:max-w-md"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/20">
                <img
                  loading="lazy"
                  decoding="async"
                  src={photos.quote.src}
                  alt={photos.quote.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-cream-light rounded-full px-5 py-2.5 shadow-lg"
              >
                <span className="text-xs font-semibold tracking-wide text-forest">15+ Years of Care</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}