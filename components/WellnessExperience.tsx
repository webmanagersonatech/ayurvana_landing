import { 
  Leaf, 
  Droplets, 
  Wind, 
  Flower2, 
  Brain, 
  Sparkles 
} from 'lucide-react';

const experiences = [
  { icon: Leaf, title: "Authentic Ayurveda", desc: "Rooted in classical texts, every therapy follows traditional protocols refined over centuries." },
  { icon: Droplets, title: "Panchakarma Therapy", desc: "The five-stage detoxification ritual that cleanses toxins and restores your body's innate balance." },
  { icon: Wind, title: "Yoga & Pranayama", desc: "Breathing and movement practices integrated with treatments for a complete healing journey." },
  { icon: Flower2, title: "Herbal Treatments", desc: "Freshly prepared medicated oils, ghee, and herbal concoctions unique to each prescription." },
  { icon: Brain, title: "Stress Management", desc: "Proven techniques combining shirodhara, meditation, and lifestyle counselling for deep calm." },
  { icon: Sparkles, title: "Rasayana Therapy", desc: "Anti-ageing and rejuvenation protocols that replenish vitality and promote cellular renewal." },
];

export default function WellnessExperience() {
  return (
    <section id="services" className="pb-20 relative overflow-hidden">
      {/* Background texture */}
   

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gold-light text-xs font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mt-3 leading-tight">
            The Ultimate Ayurvedic Wellness
            <br />
            <span className="italic text-gold-light">Experience</span>
          </h2>
          <p className="text-white mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            We combine ancient knowledge with serene surroundings and personalised care to offer an experience unlike any other.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.title}
                className="p-6 border border-white/20 hover:border-white transition-all duration-300 group text-center"
              >
                <IconComponent 
                  className="w-10 h-10 mx-auto mb-4 text-gold-light group-hover:text-white transition-colors duration-300" 
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-lg text-white font-semibold mb-2">{exp.title}</h3>
                <p className="text-white text-sm leading-relaxed">{exp.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}