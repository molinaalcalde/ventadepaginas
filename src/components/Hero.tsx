"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { MagneticButton } from "@/components/animations/MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mockupY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-navy-deep"
    >
      {/* ── Animated gradient mesh background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-slate to-navy-deep" />

      {/* Teal glow orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
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

      {/* Coral glow orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-coral) 0%, transparent 70%)",
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

      {/* Secondary teal accent */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
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
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
            </span>
            <span className="text-sm font-medium text-slate-300 tracking-wide">
              Mas de 78,000 negocios en RD aun no tienen web profesional
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="mb-8">
            <TextReveal
              as="h1"
              className="text-fluid-hero font-extrabold font-display text-white leading-[1.1] tracking-tight"
              delay={0.4}
              splitBy="words"
            >
              Creamos tu web.
            </TextReveal>
            <TextReveal
              as="h1"
              className="text-fluid-hero font-extrabold font-display text-white leading-[1.1] tracking-tight"
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
              Tu solo atiende clientes.
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
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Diseno web de alto impacto con CRM y WhatsApp integrado para que
              cada cliente que te busque en Google termine escribiendote. Sin
              complicaciones tecnicas, sin mensualidades sorpresa.
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
                Ver como funciona
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="https://wa.me/18091234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-lg px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
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
                  className="text-3xl sm:text-4xl font-extrabold text-white font-display"
                />
                <span className="text-sm text-slate-400">clientes activos</span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-white/10" />

              {/* Delivery time */}
              <div className="flex flex-col items-center gap-1">
                <AnimatedCounter
                  value={2}
                  suffix=" sem"
                  duration={1.5}
                  className="text-3xl sm:text-4xl font-extrabold text-white font-display"
                />
                <span className="text-sm text-slate-400">
                  semanas de entrega
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-white/10" />

              {/* Rating */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <AnimatedCounter
                    value={4.9}
                    duration={2}
                    className="text-3xl sm:text-4xl font-extrabold text-white font-display"
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
                <span className="text-sm text-slate-400">
                  valoracion promedio
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Browser Mockup with Parallax ── */}
        <motion.div
          ref={mockupRef}
          style={{ y: mockupY }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <ScrollReveal delay={0.6} direction="up" distance={60}>
            <div className="relative">
              {/* Glow behind mockup */}
              <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 via-coral/5 to-transparent rounded-3xl blur-2xl" />

              {/* Browser frame */}
              <div className="relative bg-navy-soft/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 overflow-hidden shadow-glow">
                {/* Browser bar */}
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-lg border border-white/10 px-3 py-1.5 max-w-md mx-auto">
                    <svg
                      className="w-3.5 h-3.5 text-green-400/70 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                    <span className="text-xs text-slate-400 truncate">
                      tunegocio.kinetic.do
                    </span>
                  </div>
                </div>

                {/* Dashboard preview content */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-navy-deep via-navy-slate/50 to-navy-deep p-4 sm:p-6 lg:p-8">
                  {/* Subtle grid */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                      backgroundSize: "60px 60px",
                    }}
                  />

                  {/* Top navigation bar simulation */}
                  <div className="relative flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="h-7 w-7 rounded-lg bg-primary/30" />
                    <div className="h-3 w-20 rounded bg-white/10" />
                    <div className="flex-1" />
                    <div className="h-3 w-14 rounded bg-white/8" />
                    <div className="h-3 w-14 rounded bg-white/8" />
                    <div className="h-7 w-7 rounded-full bg-coral/30" />
                  </div>

                  {/* Stats cards row */}
                  <div className="relative grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                    >
                      <div className="text-xs text-slate-400 mb-1">Visitas hoy</div>
                      <div className="text-lg sm:text-xl font-bold text-white">247</div>
                      <div className="text-xs text-green-400 mt-1">+12.5%</div>
                    </motion.div>
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.0, duration: 0.5 }}
                    >
                      <div className="text-xs text-slate-400 mb-1">Leads nuevos</div>
                      <div className="text-lg sm:text-xl font-bold text-white">18</div>
                      <div className="text-xs text-green-400 mt-1">+8.3%</div>
                    </motion.div>
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2, duration: 0.5 }}
                    >
                      <div className="text-xs text-slate-400 mb-1">WhatsApp</div>
                      <div className="text-lg sm:text-xl font-bold text-white">32</div>
                      <div className="text-xs text-green-400 mt-1">+22.1%</div>
                    </motion.div>
                  </div>

                  {/* Chart area and sidebar */}
                  <div className="relative flex gap-3 sm:gap-4">
                    {/* Chart placeholder */}
                    <motion.div
                      className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4, duration: 0.6 }}
                    >
                      <div className="text-xs text-slate-400 mb-3">Conversiones esta semana</div>
                      {/* Fake chart bars */}
                      <div className="flex items-end gap-1.5 sm:gap-2 h-16 sm:h-20">
                        {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary/30"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{
                              delay: 2.6 + i * 0.1,
                              duration: 0.4,
                              ease: "easeOut",
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Recent activity sidebar */}
                    <motion.div
                      className="hidden sm:block w-40 lg:w-48 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.5, duration: 0.5 }}
                    >
                      <div className="text-xs text-slate-400 mb-3">Actividad reciente</div>
                      <div className="space-y-2.5">
                        {[
                          { color: "bg-green-400", label: "Nuevo lead" },
                          { color: "bg-coral", label: "WhatsApp msg" },
                          { color: "bg-primary", label: "Reserva" },
                          { color: "bg-yellow-400", label: "Seguimiento" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${item.color}`}
                            />
                            <span className="text-[10px] sm:text-xs text-slate-400 truncate">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                className="absolute -right-2 sm:-right-6 top-1/3 z-10 bg-navy-soft/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 pr-5 shadow-glow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-400/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Nuevo mensaje</p>
                    <p className="text-[10px] text-slate-400">hace 2 min</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -left-2 sm:-left-6 top-1/2 z-10 bg-navy-soft/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 pr-5 shadow-glow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.0, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">+140% reservas</p>
                    <p className="text-[10px] text-slate-400">este mes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </motion.div>

        {/* ── Scroll Indicator ── */}
        <motion.div
          style={{ opacity: chevronOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400 tracking-widest uppercase">
            Scroll
          </span>
          <motion.svg
            className="w-5 h-5 text-slate-400"
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
