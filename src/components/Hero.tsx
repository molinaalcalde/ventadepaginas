"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { MagneticButton } from "@/components/animations/MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const chevronOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* ── Light gradient mesh background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-surface-soft to-white" />

      {/* Warm peach glow orb — very subtle */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-warm-blush) 0%, transparent 70%)",
          opacity: 0.5,
          top: "5%",
          left: "10%",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Warm cream glow orb — very subtle */}
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-warm-peach) 0%, transparent 70%)",
          opacity: 0.8,
          bottom: "15%",
          right: "8%",
        }}
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary warm blush accent — very subtle */}
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-warm-blush) 0%, transparent 70%)",
          opacity: 0.4,
          top: "55%",
          right: "28%",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-12"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
            </span>
            <span className="text-sm font-medium text-navy-deep tracking-wide">
              Más de 78,000 negocios en RD aún no tienen web profesional
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="mb-8 space-y-1">
            <TextReveal
              as="h1"
              className="text-fluid-hero font-display font-extrabold text-navy-deep leading-[1.1] tracking-tight"
              delay={0.4}
              splitBy="words"
            >
              Tus clientes te encuentran.
            </TextReveal>
            <TextReveal
              as="h1"
              className="text-fluid-hero font-display font-extrabold text-navy-deep leading-[1.1] tracking-tight"
              delay={0.7}
              splitBy="words"
            >
              Te escriben por WhatsApp.
            </TextReveal>
            <motion.h1
              className="text-fluid-hero font-serif italic text-coral leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
            >
              Tú solo cierra ventas.
            </motion.h1>
          </div>

          {/* Subtitle */}
          <ScrollReveal
            delay={0.3}
            direction="up"
            distance={30}
            duration={0.8}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-slate-text text-lg lg:text-xl leading-relaxed">
              Tu negocio merece una web que trabaje para ti. Recibe clientes desde Google, respóndeles por WhatsApp y véndeles más — todo en automático.
            </p>
          </ScrollReveal>

          {/* Single Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col items-center gap-4 mb-14"
          >
            <MagneticButton strength={0.25}>
              <a
                href="https://wa.me/18091234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-coral hover:bg-coral-hover text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-coral transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
                Quiero mi propuesta gratis
              </a>
            </MagneticButton>

            <p className="text-sm text-slate-light">
              Sin compromiso · Respuesta por WhatsApp en 2 horas
            </p>
          </motion.div>

          {/* Trust Bar */}
          <ScrollReveal delay={0.5} direction="up" distance={20}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">

              {/* Stat: Negocios activos */}
              <div className="flex flex-col items-center gap-1">
                <AnimatedCounter
                  value={140}
                  suffix="+"
                  duration={2.5}
                  className="text-3xl sm:text-4xl font-extrabold text-navy-deep font-display"
                />
                <span className="text-sm text-slate-text">negocios activos</span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-navy-deep/15" />

              {/* Stat: Entrega */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-baseline gap-1">
                  <AnimatedCounter
                    value={14}
                    duration={1.8}
                    className="text-3xl sm:text-4xl font-extrabold text-navy-deep font-display"
                  />
                  <span className="text-xl font-bold text-navy-deep font-display">
                    días
                  </span>
                </div>
                <span className="text-sm text-slate-text">entrega garantizada</span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-navy-deep/15" />

              {/* Stat: Rating */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  <AnimatedCounter
                    value={4.9}
                    duration={2}
                    className="text-3xl sm:text-4xl font-extrabold text-navy-deep font-display"
                  />
                  <svg
                    className="w-6 h-6 text-yellow-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-text">valoración promedio</span>
              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* ── Scroll Indicator ── */}
        <motion.div
          style={{ opacity: chevronOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-text tracking-widest uppercase">
            Scroll
          </span>
          <motion.svg
            className="w-5 h-5 text-slate-text"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
