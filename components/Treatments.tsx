const treatments = [
  {
    title: "Abhyanga Therapy",
    desc: "A full-body warm oil massage that nourishes tissues, improves circulation, and calms the nervous system. Ideal for fatigue, anxiety, and dry skin.",
    duration: "60 mins",
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80",
    tag: "Most Popular",
  },

  {
    title: "Dhathura Therapy",
    desc: "A specialised treatment combining herbal steam and therapeutic poultice massage to relieve joint pain, stiffness, and musculoskeletal disorders.",
    duration: "75 mins",
    price: "₹3,800",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tag: "Pain Relief",
  },

];

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="section-label">Our Services</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-3">
            <h2 className="section-title">
              Discover Holistic
              <br />
              Treatments for Mind,
              <br />
              Body, and Spirit
            </h2>
            <a href="#services" className="btn-outline shrink-0">
              All Treatments
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.title}
              className={`bg-white  overflow-hidden shadow-sm card-hover flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-2/5 h-56 md:h-auto">
                <img loading="lazy" decoding="async"
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-sage/10 text-sage text-xs font-semibold px-3 py-1 rounded-full">
                      {treatment.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-text-dark mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{treatment.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {treatment.duration}
                    </span>
                    <span className="font-semibold text-forest text-base">{treatment.price}</span>
                  </div>
                  <a href="#appointment" className="btn-primary text-sm">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
