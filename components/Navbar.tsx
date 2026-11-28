"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

/**
 * NAVBAR — taken from the client's Website_HTML.html
 * Home · Wellness ▾ · Discover ▾ · Stay ▾ · Pro Shop · Blog · Plan your stay ↗
 *
 * Every link opens a real subpage; "#" parts jump to the section inside that page.
 * The cart icon is shown only when the cart has at least one item.
 */

const dropdowns = [
  {
    label: "Wellness",
    items: [
      ["Healing programmes", "/wellness#healing"],
      ["The spa", "/wellness#spa"],
      ["She Health", "/wellness#she"],
      ["Prana Shala", "/wellness#prana"],
    ],
  },
  {
    label: "Discover",
    items: [
      ["The village", "/sonagramam#village"],
      ["A day at Ayurvana", "/day"],
      ["Sattvic dining", "/experiences#dining"],
      ["Sona Gramam", "/sonagramam#gramam"],
      ["Unwind & explore", "/experiences#experiences"],
    ],
  },
  {
    label: "Stay",
    items: [
      ["Rooms & cottages", "/stay"],
      ["Cottage design", "/sonagramam#cottage-design"],
      ["Bespoke furniture", "/sonagramam#furniture"],
      ["Stay programmes", "/sonagramam#programmes"],
      ["FAQ", "/stay#faq"],
    ],
  },
];

const mobileLinks = [
  ["Home", "/"],
  ["Wellness", "/wellness"],
  ["The village", "/sonagramam"],
  ["Experiences", "/experiences"],
  ["A day at Ayurvana", "/day"],
  ["Stay", "/stay"],
  ["Pro Shop", "/experiences#proshop"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

const navLinkClass = "opacity-90 transition hover:text-gold hover:opacity-100";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop submenu
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { getTotalItems, openCart } = useCart();
  const cartCount = getTotalItems();

  const clearCloseTimer = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const showMenu = (label: string) => {
    clearCloseTimer();
    setOpenMenu(label);
  };

  // short delay so the menu doesn't vanish if the mouse slips off for a moment
  const hideMenu = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };

  const closeMenuNow = () => {
    clearCloseTimer();
    setOpenMenu(null);
  };

  useEffect(() => clearCloseTimer, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the desktop submenu on Escape, even when it was opened by hover
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock page scroll while the mobile menu is open + close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const cartButton = cartCount > 0 && (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart, ${cartCount} item${cartCount > 1 ? "s" : ""}`}
      className="relative border-0 bg-transparent p-[9px] text-text-dark transition hover:text-gold"
    >
      <ShoppingCart className="h-[21px] w-[21px]" strokeWidth={1.7} />
      <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-forest px-1 font-dm text-[10px] leading-none text-[#fff8ef]">
        {cartCount}
      </span>
    </button>
  );

  return (
    <>
      <header
        id="topbar"
        className={`fixed inset-x-0 top-0 z-[1000] border-b border-[#d9c8b2]/65 bg-[#fbf7ef]/95 text-text-dark backdrop-blur-[14px] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_28px_rgba(53,35,29,.08)]" : ""
        }`}
      >
        <div
          className={`mx-auto flex w-[min(1280px,calc(100%-44px))] items-center justify-between gap-8 transition-all duration-300 lg:w-[min(1280px,calc(100%-64px))] ${
            scrolled ? "h-[66px]" : "h-[76px]"
          }`}
        >
          {/* logo */}
          <Link href="/" aria-label="Ayurvana home" className="block shrink-0">
            <Image
              src="/images/Ayurvana.webp"
              alt="Ayurvana – Rooted in Nature, Inspired by Tradition"
              width={3508}
              height={2480}
              priority
              sizes="100px"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-[54px]" : "h-[62px]"}`}
            />
          </Link>

          {/* desktop links */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-[clamp(12px,2vw,27px)] font-dm text-[10px] uppercase tracking-[0.12em] lg:flex"
          >
            <Link href="/" className={navLinkClass}>
              Home
            </Link>

            {dropdowns.map((d) => {
              const isOpen = openMenu === d.label;

              return (
                <div
                  key={d.label}
                  className="relative"
                  onMouseEnter={() => showMenu(d.label)}
                  onMouseLeave={hideMenu}
                  onFocus={() => showMenu(d.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) hideMenu();
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => showMenu(d.label)}
                    className={`flex cursor-pointer items-center gap-1 border-0 bg-transparent py-3 uppercase tracking-[0.12em] transition ${
                      isOpen ? "text-gold" : "opacity-90"
                    }`}
                  >
                    {d.label}
                    <span
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      ⌄
                    </span>
                  </button>

                  {/* pt-2 is an invisible bridge, so there is no hover gap */}
                  <div
                    className={`absolute left-[-24px] top-full z-10 pt-2 transition-all duration-200 ${
                      isOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="grid min-w-[230px] border border-line bg-cream-light p-2 text-text-dark shadow-[0_18px_42px_rgba(53,35,29,.12)]">
                      {d.items.map(([label, href]) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={(e) => {
                            e.currentTarget.blur();
                            closeMenuNow();
                          }}
                          className="border-b border-line px-3 py-[13px] text-[10px] tracking-[0.08em] transition-colors last:border-0 hover:bg-cream hover:text-forest focus-visible:bg-cream focus-visible:text-forest"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link href="/experiences#proshop" className={navLinkClass}>
              Pro Shop
            </Link>
            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>
            <Link
              href="/contact"
              className="border border-forest bg-forest px-[17px] py-[13px] text-[9px] tracking-[0.15em] text-[#fff8ef] transition-colors hover:bg-[#713321]"
            >
              Plan your stay ↗
            </Link>
            {cartButton}
          </nav>

          {/* mobile cart + toggle */}
          <div className="flex items-center gap-1 lg:hidden">
            {cartButton}
            <button
              type="button"
              aria-label="Open navigation"
              aria-controls="mobileMenu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`border-0 bg-transparent p-[10px] text-[23px] ${open ? "text-gold" : "text-text-dark"}`}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        id="mobileMenu"
        className={`fixed inset-0 z-[1100] flex flex-col overflow-auto bg-cream-light px-7 pb-9 pt-[86px] text-text-dark transition-all duration-[450ms] ease-[cubic-bezier(.2,.65,.25,1)] lg:hidden ${
          open ? "visible translate-x-0" : "pointer-events-none invisible translate-x-[102%]"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          className="absolute right-7 top-[22px] h-[42px] w-[42px] border border-line bg-transparent text-[23px] text-text-dark"
        >
          ×
        </button>
        <small className="mb-[18px] font-dm text-[8px] uppercase tracking-[0.2em] text-forest-light">
          Explore Ayurvana
        </small>
        {mobileLinks.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="border-b border-line py-[13px] font-display text-[clamp(25px,6vw,36px)] text-text-dark"
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}