import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLeaf,
} from "react-icons/fa";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Healing programmes", href: "/wellness#healing" },
  { label: "The spa", href: "/wellness#spa" },
  { label: "She Health", href: "/wellness#she" },
  { label: "Prana Shala", href: "/wellness#prana" },
  { label: "A day at Ayurvana", href: "/day" },
];

const discoverLinks = [
  { label: "Rooms & cottages", href: "/stay" },
  { label: "The village", href: "/sonagramam#village" },
  { label: "Sona Gramam", href: "/sonagramam#gramam" },
  { label: "Sattvic dining", href: "/experiences#dining" },
  { label: "Unwind & explore", href: "/experiences#experiences" },
  { label: "Pro Shop", href: "/experiences#proshop" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FaFacebook, label: "Facebook", href: "https://facebook.com/ayurvana" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/ayurvana" },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/ayurvana" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/ayurvana" },
];

const linkClass =
  "text-white/60 text-sm hover:text-gold-light transition-all duration-300 flex items-center gap-2 group";

function Dot() {
  return (
    <span className="w-1 h-1 shrink-0 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-semibold mb-6 text-gold-light uppercase tracking-wider relative">
      {children}
      <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold/50" />
    </h4>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-dark text-white overflow-hidden" id="footer">
      {/* Decorative corner leaves */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 0C200 0 150 20 130 50C110 80 100 120 80 150C60 180 20 200 0 200C0 200 50 180 70 150C90 120 100 80 120 50C140 20 200 0 200 0Z" fill="#b89a65" />
          <path d="M200 0C200 0 160 10 140 40C120 70 110 110 90 140C70 170 30 190 10 190C10 190 50 170 70 140C90 110 100 70 120 40C140 10 200 0 200 0Z" fill="#e0c08e" opacity="0.6" />
          <path d="M180 20C180 20 150 30 135 55C120 80 110 115 95 140C80 165 50 180 30 185C30 185 60 170 80 145C100 120 110 85 125 60C140 35 180 20 180 20Z" fill="#f5eee2" opacity="0.3" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none rotate-180" aria-hidden="true">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 0C200 0 150 20 130 50C110 80 100 120 80 150C60 180 20 200 0 200C0 200 50 180 70 150C90 120 100 80 120 50C140 20 200 0 200 0Z" fill="#66715a" opacity="0.5" />
          <path d="M200 0C200 0 160 10 140 40C120 70 110 110 90 140C70 170 30 190 10 190C10 190 50 170 70 140C90 110 100 70 120 40C140 10 200 0 200 0Z" fill="#873f2b" opacity="0.4" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none" aria-hidden="true">
        <svg width="100" height="300" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 0 80 50 80 100C80 150 60 200 50 250C40 200 20 150 20 100C20 50 50 0 50 0Z" fill="#b89a65" />
          <path d="M50 20C50 20 70 60 70 100C70 140 55 180 50 220C45 180 30 140 30 100C30 60 50 20 50 20Z" fill="#e0c08e" opacity="0.6" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center" aria-label="Ayurvana home">
              <div className="w-[70px] h-[40px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/Ayurvana.webp"
                  alt="Ayurvana Logo"
                  width={70}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-serif font-bold tracking-wide">AyurVana</span>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Natural healing and holistic wellness in the heart of Salem.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/5 hover:border-gold/40"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white group-hover:text-gold-light transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <ColumnHeading>Wellness</ColumnHeading>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    <Dot />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <ColumnHeading>Discover & Stay</ColumnHeading>
            <ul className="space-y-3">
              {discoverLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    <Dot />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3 hover:text-white transition-colors duration-300 group">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <span>
                  Sona Valliappa Campus,
                  <br />
                  Kakapalayam-Attyampatti Road,
                  <br />
                  Kandarkulamanickam (Post),
                  <br />
                  Salem – 637504.
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                <FaPhone className="w-4 h-4 shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <a href="tel:+919442700366" className="hover:text-gold-light transition-colors">
                  +91 9442700366
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                <FaEnvelope className="w-4 h-4 shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@ayurvanaindia.com"
                  className="hover:text-gold-light transition-colors break-all"
                >
                  info@ayurvanaindia.com
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                <FaClock className="w-4 h-4 shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <span>Mon – Sat: 8:00am – 8:00pm</span>
              </li>
            </ul>

            {/* Decorative Ayurvedic element */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <FaLeaf className="text-gold-light text-lg shrink-0" />
                <span className="text-xs text-white/40 italic">
                  &ldquo;Balance in body, mind &amp; soul&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-forest-dark/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-xs">
            © {currentYear} Ayurvana. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}