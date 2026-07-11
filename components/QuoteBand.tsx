import { motion } from 'framer-motion';

export default function QuoteBand() {
  return (
    <section className="py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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
              <div className="text-6xl font-serif text-[#C9A84C] leading-none mb-4">"</div>
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
              className="text-[#D4AF37] text-sm not-italic block"
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
              className="h-0.5 bg-[#C9A84C] mt-6 mx-auto lg:mx-0"
            />
          </div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 150
            }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative ring - GOLD */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-[#C9A84C]/40"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Image container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl shadow-[#C9A84C]/20">
                <img
                  src="https://img.magnific.com/premium-photo/professional-photo-attractive-female-nurse-blonde-hair-blue-scrubs-with-white-lab-coat_1139643-388.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80"
                  alt="Dr. Priya Sharma - Founder & Chief Ayurvedic Physician"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient - GOLD TINT */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C9A84C]/30 to-transparent" />
              </div>

              {/* Floating badge - GOLD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-2 -right-2 bg-white rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-xs font-semibold text-sage">15+ Years</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}