import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AyurvedicBookingForm from "./Booking";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const { getTotalItems, openCart } = useCart();
  const cartCount = getTotalItems(); // Live cart items count from global cart

  // Refs for dropdowns
  const dropdownRefs = {
    products: useRef(null),
    facilities: useRef(null),
    research: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownClick = Object.values(dropdownRefs).some(
        (ref) => ref.current && ref.current.contains(event.target)
      );
      if (!isDropdownClick) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when booking form is open
  useEffect(() => {
    if (isBookingFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookingFormOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Products", href: "/products" },
    {
      label: "Facilities",
      href: "/#facilities",
      hasDropdown: true,
      dropdownItems: [
        { label: "Teams", href: "/teams" },
        { label: "Doctors", href: "/doctors" },
        { label: "Sonagramam", href: "/sonagramam" },
      ]
    },
    {
      label: "Research",
      href: "/#research",
    },
    { label: "Services", href: "/#services" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/contact" },
  ];

  const socialIcons = [
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://twitter.com/ayurvana",
      label: "Twitter"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      href: "https://instagram.com/ayurvana",
      label: "Instagram"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://facebook.com/ayurvana",
      label: "Facebook"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: "https://youtube.com/ayurvana",
      label: "YouTube"
    },
  ];

  // Handle dropdown toggle
  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Handle hover with delay for better UX
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = (label) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Open booking form
  const openBookingForm = (e) => {
    e.preventDefault();
    setIsBookingFormOpen(true);
  };

  // Close booking form
  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  // Handle cart click - opens the global cart sidebar
  const handleCartClick = (e) => {
    e.preventDefault();
    openCart();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-sm navbar-scrolled shadow-md py-2"
          : "bg-gradient-to-b from-black/60 to-transparent pb-4"
          }`}
      >
        {/* Main nav - Fixed alignment */}
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo - Fixed U-shape with responsive sizing */}
          <Link href="/" className="relative inline-flex items-center group">
            {/* Logo - U-shaped background */}
            <div
              className={`
      relative
      flex
      items-center
      justify-center
      transition-all
      duration-300
      overflow-hidden
      ${scrolled
                  ? "w-[110px] sm:w-[120px] h-[72px] sm:h-[78px] bg-transparent border-0 rounded-none"
                  : "w-[130px] sm:w-[145px] md:w-[155px] h-[90px] sm:h-[98px] md:h-[105px] bg-white/95 border-l-4 border-r-4 border-b-4 border-sage rounded-b-[42px]"
                }
    `}
            >
              <Image
                src="/images/Ayurvana.webp"
                alt="Ayurvana Logo"
                width={130}
                height={75}
                priority
                className={`
        object-contain
        transition-all
        duration-300
        ${scrolled
                    ? "w-[90px] sm:w-[100px]"
                    : "w-[110px] sm:w-[120px] md:w-[130px]"
                  }
      `}
              />
            </div>
          </Link>

          {/* Desktop Nav Links with Cart Icon */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                ref={link.hasDropdown ? dropdownRefs[link.label.toLowerCase()] : null}
                onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.label)}
                onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
              >
                <div
                  className={`flex items-center gap-1 cursor-pointer text-sm font-medium transition-colors duration-300 hover:text-sage ${scrolled ? "text-text-dark" : "text-white"
                    }`}
                  onClick={() => link.hasDropdown && toggleDropdown(link.label)}
                >
                  {link.hasDropdown ? (
                    <>
                      <Link href={link.href} className="hover:text-sage">
                        {link.label}
                      </Link>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <Link href={link.href} className="hover:text-sage">
                      {link.label}
                    </Link>
                  )}
                </div>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-cream-dark overflow-hidden"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-text-dark hover:bg-cream hover:text-forest transition-colors border-b border-cream-dark last:border-0"
                        onClick={() => {
                          setActiveDropdown(null);
                          if (hoverTimeout) {
                            clearTimeout(hoverTimeout);
                            setHoverTimeout(null);
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            {/* Cart Icon - Desktop */}
            <li className="relative">
              <button
                onClick={handleCartClick}
                className={`p-2 rounded-full transition-colors duration-300 hover:bg-white/10 ${scrolled ? "text-text-dark hover:text-sage" : "text-white hover:text-sage"
                  }`}
                aria-label="Shopping cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile menu toggle + Cart Icon */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Cart Icon - Mobile */}
            <button
              onClick={handleCartClick}
              className={`p-2 rounded-full transition-colors duration-300 ${scrolled ? "text-text-dark" : "text-white"
                }`}
              aria-label="Shopping cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className={`p-2 transition-colors ${scrolled ? "text-text-dark" : "text-white"
                }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-cream-dark shadow-xl max-h-[80vh] overflow-y-auto">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.label} className="border-b border-cream-dark last:border-0">
                  {link.hasDropdown ? (
                    <>
                      <div
                        className="flex items-center justify-between px-6 py-3 text-sm text-text-dark hover:text-forest hover:bg-cream transition-colors cursor-pointer"
                        onClick={() => toggleDropdown(link.label)}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {activeDropdown === link.label && (
                        <div className="bg-cream-light">
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-10 py-2.5 text-sm text-text-muted hover:text-forest transition-colors"
                              onClick={() => {
                                setMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-6 py-3 text-sm text-text-dark hover:text-forest hover:bg-cream transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              {/* Social Icons in Mobile Menu */}
              <li className="px-6 py-3 border-b border-cream-dark">
                <div className="flex items-center gap-4">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-gold transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </li>
              <li className="px-6 pt-3">
                <button
                  onClick={openBookingForm}
                  className="btn-primary w-full justify-center"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Booking Form Modal */}
      {isBookingFormOpen && (
        <div className="fixed inset-0 z-[999] overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={closeBookingForm}
          ></div>

          {/* Modal Container */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={closeBookingForm}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="Close booking form"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Booking Form */}
              <AyurvedicBookingForm onClose={closeBookingForm} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}