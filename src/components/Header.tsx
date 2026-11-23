"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WhatsappLogo, ArrowRight } from "@phosphor-icons/react";

const navLinks = [
  { href: "#que-incluye", label: "¿Qué incluye?" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#sectores", label: "Sectores" },
  { href: "#testimonios", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobile = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border-subtle/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        transition: "background-color 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-white shadow-teal transition-transform group-hover:scale-105">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3V19M5 11L14 3M9 11L17 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-extrabold text-xl tracking-tight leading-none transition-colors duration-300 ${
                  scrolled ? "text-navy-deep" : "text-navy-deep"
                }`}
              >
                KINETIC
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-primary uppercase mt-0.5">
                Cloud &amp; Web
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold px-3 py-2 transition-colors duration-300 group ${
                  scrolled
                    ? "text-slate-text hover:text-primary"
                    : "text-navy-deep/80 hover:text-primary"
                }`}
              >
                {link.label}
                {/* Underline animation: grows from center */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 w-0 group-hover:w-3/4 ${
                    scrolled ? "bg-primary" : "bg-primary"
                  }`}
                />
              </a>
            ))}
          </nav>
        </div>

        {/* Right side: WhatsApp + CTA + Hamburger */}
        <div className="flex items-center gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/1809XXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-2 text-sm font-bold transition-colors duration-300 px-3 py-2 rounded-full hover:bg-surface-soft ${
              scrolled
                ? "text-navy-deep hover:text-primary"
                : "text-navy-deep/80 hover:text-primary"
            }`}
          >
            {/* WhatsApp icon */}
            <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
              <WhatsappLogo weight="fill" size={16} />
            </div>
            <span className="hidden lg:inline">+1 809 XXX XXXX</span>
          </a>

          {/* CTA Button — Orbix-style dark pill */}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hidden sm:inline-flex items-center gap-2 text-white text-sm font-bold rounded-full"
            style={{
              backgroundColor: "#1A1A2E",
              padding: "6px 6px 6px 20px",
              transition: "all .35s cubic-bezier(.16,1,.3,1)",
              boxShadow:
                "0 0 #0000, -1.1px 1.2px .1px #00000003, -2.2px 2.4px .3px #00000005, -3.3px 3.7px .5px #00000005, -4.6px 5.1px .7px #00000008, -6px 6.6px .9px #00000008, -7.6px 8.4px 1.3px #00000008, -9.5px 10.5px 1.8px #00000008, -11.8px 13px 2.4px #00000008, -14.7px 16.2px 3.2px #00000008, -18.3px 20.2px 4.4px #0000000a, -23px 25.4px 6px #0000000a, -29.3px 32.3px 8.2px #0000000a, -37.8px 41.8px 11.3px #0000000a, -49.9px 55.1px 15.9px #0000000a",
            }}
          >
            <span>Quiero mi web</span>
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
              <ArrowRight weight="bold" size={13} className="text-navy-deep" />
            </span>
          </motion.a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300 gap-[5px] ${
              scrolled
                ? "text-navy-deep hover:bg-surface-soft"
                : "text-navy-deep hover:bg-surface-soft"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {/* Animated hamburger lines */}
            <motion.span
              className={`block h-[2px] w-5 rounded-full ${
                scrolled ? "bg-navy-deep" : "bg-navy-deep"
              }`}
              animate={
                mobileMenuOpen
                  ? { rotate: 45, y: 7, width: 20 }
                  : { rotate: 0, y: 0, width: 20 }
              }
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`block h-[2px] w-5 rounded-full ${
                scrolled ? "bg-navy-deep" : "bg-navy-deep"
              }`}
              animate={
                mobileMenuOpen
                  ? { opacity: 0, x: -10 }
                  : { opacity: 1, x: 0 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block h-[2px] w-5 rounded-full ${
                scrolled ? "bg-navy-deep" : "bg-navy-deep"
              }`}
              animate={
                mobileMenuOpen
                  ? { rotate: -45, y: -7, width: 20 }
                  : { rotate: 0, y: 0, width: 20 }
              }
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 top-20 z-40 bg-navy-deep/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobile}
            />

            {/* Menu Panel — slides from right */}
            <motion.div
              className="lg:hidden fixed top-20 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl border-l border-border-subtle overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <nav className="flex flex-col px-6 py-8 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      className="block text-base font-semibold text-slate-text hover:text-primary hover:bg-surface-soft px-4 py-3.5 rounded-xl transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile WhatsApp + CTA */}
              <motion.div
                className="flex flex-col gap-3 px-6 pb-8 border-t border-border-subtle pt-6 mx-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
              >
                <a
                  href="https://wa.me/1809XXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-bold text-navy-deep hover:text-primary transition-colors px-4 py-3 rounded-xl hover:bg-surface-soft"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
                    <WhatsappLogo weight="fill" size={16} />
                  </div>
                  <span>+1 809 XXX XXXX</span>
                </a>

                <a
                  href="#contacto"
                  onClick={closeMobile}
                  className="inline-flex items-center gap-2 text-white text-base font-bold rounded-full"
                  style={{
                    backgroundColor: "#1A1A2E",
                    padding: "10px 10px 10px 28px",
                    transition: "all .35s cubic-bezier(.16,1,.3,1)",
                    boxShadow:
                      "0 0 #0000, -1.1px 1.2px .1px #00000003, -2.2px 2.4px .3px #00000005, -3.3px 3.7px .5px #00000005, -4.6px 5.1px .7px #00000008, -6px 6.6px .9px #00000008, -7.6px 8.4px 1.3px #00000008, -9.5px 10.5px 1.8px #00000008, -11.8px 13px 2.4px #00000008, -14.7px 16.2px 3.2px #00000008, -18.3px 20.2px 4.4px #0000000a, -23px 25.4px 6px #0000000a, -29.3px 32.3px 8.2px #0000000a, -37.8px 41.8px 11.3px #0000000a, -49.9px 55.1px 15.9px #0000000a",
                  }}
                >
                  <span>Quiero mi web</span>
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                    <ArrowRight weight="bold" size={16} className="text-navy-deep" />
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
