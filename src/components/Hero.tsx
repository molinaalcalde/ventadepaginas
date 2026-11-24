"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
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

      {/* Warm peach glow orb — static on mobile, animated on desktop */}
      <div
        className="absolute w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-warm-blush) 0%, transparent 70%)",
          opacity: 0.5,
          top: "5%",
          left: "10%",
          filter: "blur(80px)",
        }}
      />

      {/* Warm cream glow orb — static on mobile, animated on desktop */}
      <div
        className="absolute w-[300px] h-[300px] lg:w-[550px] lg:h-[550px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-warm-peach) 0%, transparent 70%)",
          opacity: 0.8,
          bottom: "15%",
          right: "8%",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary warm blush accent — hidden on mobile */}
      <div
        className="hidden lg:block absolute w-[320px] h-[320px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-warm-blush) 0%, transparent 70%)",
          opacity: 0.4,
          top: "55%",
          right: "28%",
          filter: "blur(90px)",
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-12"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
            </span>
            <span className="text-sm font-medium text-navy-deep tracking-wide">
              Por tiempo limitado: Gestor de Clientes + Tarjeta Digital incluidos
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="mb-8 space-y-1">
            <TextReveal
              as="span"
              className="block text-fluid-hero font-display font-extrabold text-navy-deep leading-[1.1] tracking-tight"
              delay={0.2}
              splitBy="words"
            >
              La vitrina digital
            </TextReveal>
            <TextReveal
              as="span"
              className="block text-fluid-hero font-display font-extrabold text-navy-deep leading-[1.1] tracking-tight"
              delay={0.4}
              splitBy="words"
            >
              de tu negocio.
            </TextReveal>
            <motion.span
              className="block text-fluid-hero font-serif italic text-coral leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            >
              Abierta las 24 horas.
            </motion.span>
          </h1>

          {/* Subtitle */}
          <ScrollReveal
            delay={0.15}
            direction="up"
            distance={30}
            duration={0.6}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-slate-text text-lg lg:text-xl leading-relaxed">
              Tu web es lo primero que ven tus clientes antes de llamarte, visitarte o comprarte. Ya sea que te busquen en Google, en ChatGPT o en redes sociales, tu web es donde deciden si confían en ti.
            </p>
          </ScrollReveal>

          {/* Single Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col items-center gap-4 mb-14"
          >
            <MagneticButton strength={0.25}>
              <a
                href="https://wa.me/18091234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-white font-bold text-lg rounded-full hover:-translate-y-1 active:scale-[0.97]"
                style={{
                  backgroundColor: "#1A1A2E",
                  padding: "12px 12px 12px 32px",
                  transition: "all .35s cubic-bezier(.16,1,.3,1)",
                  boxShadow:
                    "0 0 #0000, -1.1px 1.2px .1px #00000003, -2.2px 2.4px .3px #00000005, -3.3px 3.7px .5px #00000005, -4.6px 5.1px .7px #00000008, -6px 6.6px .9px #00000008, -7.6px 8.4px 1.3px #00000008, -9.5px 10.5px 1.8px #00000008, -11.8px 13px 2.4px #00000008, -14.7px 16.2px 3.2px #00000008, -18.3px 20.2px 4.4px #0000000a, -23px 25.4px 6px #0000000a, -29.3px 32.3px 8.2px #0000000a, -37.8px 41.8px 11.3px #0000000a, -49.9px 55.1px 15.9px #0000000a",
                }}
              >
                <span>Agenda tu consulta gratis</span>
                <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-[360deg]" style={{ transition: "transform .35s cubic-bezier(.16,1,.3,1)" }}>
                  <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
                </span>
              </a>
            </MagneticButton>

            <p className="text-sm text-slate-light">
              Sin compromiso · Te respondemos en menos de 2 horas
            </p>
          </motion.div>

          {/* Social proof micro-badges */}
          <ScrollReveal delay={0.2} direction="up" distance={20}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-peach/80 border border-coral/10 text-sm text-navy-deep font-medium">
                <span className="text-coral font-bold">140+</span> negocios ya venden online
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/10 text-sm text-navy-deep font-medium">
                <span className="text-primary font-bold">14 días</span> de la idea a vender
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/50 text-sm text-navy-deep font-medium">
                <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-bold">4.9/5</span> valoración
              </span>
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
