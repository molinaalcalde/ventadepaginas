"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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

      {/* Teal glow orb — very subtle */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
          opacity: 0.07,
          top: "10%",
          left: "15%",
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

      {/* Coral glow orb — very subtle */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-coral) 0%, transparent 70%)",
          opacity: 0.06,
          bottom: "20%",
          right: "10%",
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

      {/* Secondary teal accent — very subtle */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
          opacity: 0.05,
          top: "60%",
          right: "30%",
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-10"
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
          <div className="mb-8">
            <TextReveal
              as="h1"
              className="text-fluid-hero font-extrabold font-display text-navy-deep leading-[1.1] tracking-tight"
              delay={0.4}
              splitBy="words"
            >
              Creamos tu web.
            </TextReveal>
            <TextReveal
              as="h1"
              className="text-fluid-hero font-extrabold font-display text-navy-deep leading-[1.1] tracking-tight"
              delay={0.7}
              splitBy="words"
            >
              Conectamos tu WhatsApp.
            </TextReveal>
            <motion.h1
              className="text-fluid-hero font-extrabold font-display text-coral leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
              Tú solo atiende clientes.
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
            <p className="text-lg sm:text-xl text-slate-text leading-relaxed">
              Diseño web de alto impacto con CRM y WhatsApp integrado para que
              cada cliente que te busque en Google termine escribiéndote. Sin
              complicaciones técnicas, con precio transparente desde el día uno.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <MagneticButton strength={0.2}>
              <a
                href="#como-funciona"
                className="group inline-flex items-center gap-3 bg-coral hover:bg-coral-hover text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-coral transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Play icon */}
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Ver cómo funciona
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="https://wa.me/18091234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border-2 border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* WhatsApp icon */}
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablar por WhatsApp
              </a>
            </MagneticButton>
          </motion.div>

          {/* Trust Indicators with Animated Counters */}
          <ScrollReveal delay={0.5} direction="up" distance={20} className="mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              {/* Clients */}
              <div className="flex flex-col items-center gap-1">
                <AnimatedCounter
                  value={140}
                  suffix="+"
                  duration={2.5}
                  className="text-3xl sm:text-4xl font-extrabold text-navy-deep font-display"
                />
                <span className="text-sm text-slate-text">clientes activos</span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-navy-deep/15" />

              {/* Delivery time */}
              <div className="flex flex-col items-center gap-1">
                <AnimatedCounter
                  value={2}
                  suffix=" sem"
                  duration={1.5}
                  className="text-3xl sm:text-4xl font-extrabold text-navy-deep font-display"
                />
                <span className="text-sm text-slate-text">
                  semanas de entrega
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-navy-deep/15" />

              {/* Rating */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <AnimatedCounter
                    value={4.9}
                    duration={2}
                    className="text-3xl sm:text-4xl font-extrabold text-navy-deep font-display"
                  />
                  {/* Star icon */}
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-text">
                  valoración promedio
                </span>
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
