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
import { getTherapyBySlug } from "../lib/therapiesData";

// Footer therapy links are pulled from therapiesData, so titles and URLs always match real pages.
// Every slug below exists in therapiesData.ts.
const footerTherapySlugs = [
  "abhyanga-steam-bath",
  "shirodhara",
  "kizhi",
  "kati-basti",
  "nasya",
  "udvarthana",
  "acupuncture-therapy",
  "full-body-massage",
];

const footerTherapies = footerTherapySlugs
  .map((slug) => {
    const therapy = getTherapyBySlug(slug);
    if (!therapy && process.env.NODE_ENV !== "production") {
      console.warn(`Footer: therapy slug not found: "${slug}"`);
    }
    return therapy;
  })
  .filter((t): t is NonNullable<typeof t> => Boolean(t))
  .map((t) => ({
    label: t.shortTitle ?? t.title,
    href: `/therapies/${t.slug}`,
  }));

const navigateLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Therapies", href: "/therapies" },
  { label: "Packages", href: "/packages" },
  { label: "Products", href: "/products" },
  { label: "Doctors", href: "/doctors" },
  { label: "Our Team", href: "/teams" },
  { label: "Sonagramam", href: "/sonagramam" },
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
      {/* Line-art backgrounds — very low opacity */}
      <img
        src="/images/lineart/lineart-sprig-light.svg"
        alt=""
        aria-hidden="true"
        className="absolute -top-6 -right-6 w-48 lg:w-72 opacity-[0.05] pointer-events-none select-none"
      />
      <img
        src="/images/lineart/lineart-lotus-light.svg"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-10 -left-8 w-48 lg:w-72 opacity-[0.05] pointer-events-none select-none"
      />

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

          {/* Therapies */}
          <div>
            <ColumnHeading>Therapies</ColumnHeading>
            <ul className="space-y-3">
              {footerTherapies.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    <Dot />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/therapies"
                  className="text-gold-light text-sm font-medium hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  View All Therapies →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <ColumnHeading>Navigate</ColumnHeading>
            <ul className="space-y-3">
              {navigateLinks.map((item) => (
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