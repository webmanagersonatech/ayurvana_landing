// All logos are pre-trimmed, transparent PNGs exported at the same height
// (see /public/images/logo-*.png). They are rendered at one fixed height here
// so the row stays visually even no matter the logo's aspect ratio.
const partners = [
  { id: 1, name: "Ministry of AYUSH", logo: "/images/logo-ayush.png", w: 186, h: 96 },
  { id: 2, name: "Kerala Ayurveda", logo: "/images/logo-kerala-ayurveda.png", w: 281, h: 96 },
  { id: 3, name: "Himalaya Wellness", logo: "/images/logo-himalaya.png", w: 252, h: 96 },
  { id: 4, name: "Kama Ayurveda", logo: "/images/logo-kama.png", w: 221, h: 96 },
  { id: 5, name: "Jiva Ayurveda", logo: "/images/logo-jiva.png", w: 327, h: 96 },
];

export default function PartnersBand() {
  return (
    <section className="py-14 bg-cream-dark border-y border-line">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label w-full text-center mb-10">
          Trusted Partners &amp; Certifications
        </p>

        <ul className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
          {partners.map((partner) => (
            <li key={partner.id} className="flex items-center justify-center">
              <img
                loading="lazy"
                decoding="async"
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.w}
                height={partner.h}
                className="h-12 w-auto max-w-none object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
