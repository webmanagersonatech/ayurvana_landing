const partners = [
  { 
    id: 1,
    name: "Ayush Ministry",
    logo: "/images/partner-1.png",
    alt: "Ayush Ministry Logo"
  },
  { 
    id: 2,
    name: "Kerala Ayurveda",
    logo: "/images/partner-2.png",
    alt: "Kerala Ayurveda Logo"
  },
  { 
    id: 3,
    name: "Himalaya Wellness",
    logo: "/images/partner-3.jpg",
    alt: "Himalaya Wellness Logo"
  },
  { 
    id: 4,
    name: "Kama Ayurveda",
    logo: "/images/partner-4.png",
    alt: "Kama Ayurveda Logo"
  },
  { 
    id: 5,
    name: "Jiva Ayurveda",
    logo: "/images/partner-5.jpg",
    alt: "Jiva Ayurveda Logo"
  },
];

export default function PartnersBand() {
  return (
    <section className="py-12 bg-cream-dark border-y border-cream">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-text-light text-xs tracking-widest uppercase mb-8">
          Trusted Partners & Certifications
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center"
            >
              <img loading="lazy" decoding="async"
                src={partner.logo}
                alt={partner.alt}
                width={100}
                height={50}
                className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}