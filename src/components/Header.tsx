"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "#que-incluye", label: "¿Qué incluye?" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#sectores", label: "Sectores" },
  { href: "#testimonios", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border-subtle/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
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
                  scrolled ? "text-navy-deep" : "text-white"
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
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {/* Underline animation: grows from center */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 w-0 group-hover:w-3/4 ${
                    scrolled ? "bg-primary" : "bg-white"
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
                : "text-white/90 hover:text-white"
            }`}
          >
            {/* WhatsApp icon */}
            <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="hidden lg:inline">+1 809 XXX XXXX</span>
          </a>

          {/* CTA Button — magnetic hover effect */}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-coral transition-colors duration-300"
          >
            <span>Empezar ahora</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300 gap-[5px] ${
              scrolled
                ? "text-navy-deep hover:bg-surface-soft"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {/* Animated hamburger lines */}
            <motion.span
              className={`block h-[2px] w-5 rounded-full ${
                scrolled ? "bg-navy-deep" : "bg-white"
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
                scrolled ? "bg-navy-deep" : "bg-white"
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
                scrolled ? "bg-navy-deep" : "bg-white"
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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span>+1 809 XXX XXXX</span>
                </a>

                <a
                  href="#contacto"
                  onClick={closeMobile}
                  className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white text-base font-bold px-6 py-3.5 rounded-full shadow-coral hover:shadow-lg transition-all"
                >
                  <span>Empezar ahora</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
