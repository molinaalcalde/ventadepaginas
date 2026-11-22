"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Bed,
  Heartbeat,
  Key,
  ForkKnife,
  Handshake,
  ShoppingBag,
  Lightning,
  CalendarDots,
  MagnifyingGlass,
} from "@phosphor-icons/react";

/* ────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────── */

interface FormData {
  sector: string;
  teamSize: string;
  timeline: string;
  name: string;
  whatsapp: string;
  email: string;
}

const INITIAL: FormData = {
  sector: "",
  teamSize: "",
  timeline: "",
  name: "",
  whatsapp: "",
  email: "",
};

/* ────────────────────────────────────────────────────────
   Step Data
   ──────────────────────────────────────────────────────── */

const SECTORS = [
  {
    id: "hotel",
    label: "Hotel y Turismo",
    icon: <Bed size={28} weight="duotone" />,
  },
  {
    id: "clinica",
    label: "Clínica y Salud",
    icon: <Heartbeat size={28} weight="duotone" />,
  },
  {
    id: "inmobiliaria",
    label: "Inmobiliaria",
    icon: <Key size={28} weight="duotone" />,
  },
  {
    id: "restaurante",
    label: "Restaurante y Eventos",
    icon: <ForkKnife size={28} weight="duotone" />,
  },
  {
    id: "servicios",
    label: "Servicios Profesionales",
    icon: <Handshake size={28} weight="duotone" />,
  },
  {
    id: "otro",
    label: "Otro tipo de negocio",
    icon: <ShoppingBag size={28} weight="duotone" />,
  },
];

/* Plan único — no hay selector de planes */

const TEAM_SIZES = [
  {
    id: "solo",
    label: "Solo yo",
    count: 1,
  },
  {
    id: "small",
    label: "2–5 personas",
    count: 3,
  },
  {
    id: "medium",
    label: "6–15 personas",
    count: 8,
  },
  {
    id: "large",
    label: "Más de 15",
    count: 16,
  },
];

const TIMELINES = [
  {
    id: "urgente",
    label: "Lo antes posible",
    badge: "URGENTE",
    icon: <Lightning size={28} weight="duotone" />,
  },
  {
    id: "semanas",
    label: "En las próximas semanas",
    icon: <CalendarDots size={28} weight="duotone" />,
  },
  {
    id: "explorando",
    label: "Estoy explorando opciones",
    icon: <MagnifyingGlass size={28} weight="duotone" />,
  },
];

/* ────────────────────────────────────────────────────────
   Utility: Person Icon for Team Step
   ──────────────────────────────────────────────────────── */

function PersonIcon({ index }: { index: number }) {
  return (
    <motion.svg
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 400, damping: 20 }}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-primary"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
    </motion.svg>
  );
}

/* ────────────────────────────────────────────────────────
   Confetti Burst
   ──────────────────────────────────────────────────────── */

function ConfettiBurst() {
  const colors = [
    "#FF6B5B", "#0D9488", "#F59E0B", "#3B82F6",
    "#EC4899", "#8B5CF6", "#10B981", "#F97316",
  ];

  const pieces = Array.from({ length: 28 }, (_, i) => {
    const angle = (i / 28) * 360;
    const rad = (angle * Math.PI) / 180;
    const distance = 120 + Math.random() * 100;
    const x = Math.cos(rad) * distance;
    const y = Math.sin(rad) * distance;
    const size = 6 + Math.random() * 8;
    const color = colors[i % colors.length];
    const rotation = Math.random() * 720 - 360;

    return { x, y, size, color, rotation, delay: Math.random() * 0.15 };
  });

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
      {pieces.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: 0,
            scale: [1, 1.2, 0.5],
            rotate: p.rotation,
          }}
          transition={{
            duration: 1.2,
            delay: p.delay,
            ease: "easeOut",
          }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Animated Checkmark
   ──────────────────────────────────────────────────────── */

function AnimatedCheckmark() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
      className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center mx-auto mb-6 shadow-teal"
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.path
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
      </motion.svg>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────────────────── */

export default function GamifiedForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 4;

  /* Navigation */
  const goNext = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 4));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  /* Auto-advance helper for option steps */
  const selectAndAdvance = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setTimeout(() => goNext(), 500);
    },
    [goNext]
  );

  /* Keyboard: Enter to advance */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && step < 3) {
        const fields: (keyof FormData)[] = ["sector", "teamSize", "timeline"];
        if (formData[fields[step]]) goNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [step, formData, goNext]);

  /* Submit */
  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Tu nombre es requerido";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Tu WhatsApp es requerido";
    else if (!/^\d{7,10}$/.test(formData.whatsapp.replace(/\s/g, "")))
      newErrors.whatsapp = "Número inválido (7-10 dígitos)";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setDirection(1);
    setStep(4);
  };

  /* Labels for summary */
  const getSectorLabel = () => SECTORS.find((s) => s.id === formData.sector)?.label ?? "";
  const getTeamLabel = () => TEAM_SIZES.find((t) => t.id === formData.teamSize)?.label ?? "";
  const getTimelineLabel = () => TIMELINES.find((t) => t.id === formData.timeline)?.label ?? "";

  /* ── Animation Variants ── */
  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  /* ────────────────────────────────────────────────────
     Render Steps
     ──────────────────────────────────────────────────── */

  const renderStep = () => {
    switch (step) {
      /* ── STEP 0: Sector ── */
      case 0:
        return (
          <motion.div
            key="step0"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-2 font-display">
              ¿A qué se dedica tu negocio?
            </h2>
            <p className="text-slate-light mb-8">
              Selecciona la categoría más cercana a tu actividad
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {SECTORS.map((sector) => {
                const selected = formData.sector === sector.id;
                return (
                  <motion.button
                    key={sector.id}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => selectAndAdvance("sector", sector.id)}
                    className={`
                      relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-colors cursor-pointer text-center
                      ${
                        selected
                          ? "border-coral bg-coral-light shadow-coral"
                          : "border-border-subtle bg-surface-soft hover:border-primary hover:bg-primary-light"
                      }
                    `}
                  >
                    {selected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 w-5 h-5 rounded-full bg-coral flex items-center justify-center"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                    <span className={selected ? "text-coral" : "text-primary"}>
                      {sector.icon}
                    </span>
                    <span className={`text-sm font-semibold leading-tight ${selected ? "text-coral" : "text-navy-deep"}`}>
                      {sector.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        );

      /* ── STEP 1: Team Size ── */
      case 1:
        return (
          <motion.div
            key="step2"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-2 font-display">
              ¿Cuántas personas hay en tu equipo?
            </h2>
            <p className="text-slate-light mb-8">
              Esto nos ayuda a dimensionar tu solución
            </p>

            {/* Visual illustration */}
            <div className="flex justify-center items-end gap-1 mb-8 h-14">
              <AnimatePresence mode="wait">
                {formData.teamSize && (
                  <motion.div
                    key={formData.teamSize}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-1"
                  >
                    {Array.from({
                      length: Math.min(
                        TEAM_SIZES.find((t) => t.id === formData.teamSize)?.count ?? 0,
                        16
                      ),
                    }).map((_, i) => (
                      <PersonIcon key={i} index={i} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {!formData.teamSize && (
                <span className="text-slate-light/40 text-sm">
                  Selecciona una opción para ver tu equipo
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {TEAM_SIZES.map((size) => {
                const selected = formData.teamSize === size.id;
                return (
                  <motion.button
                    key={size.id}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => selectAndAdvance("teamSize", size.id)}
                    className={`
                      relative flex items-center justify-center gap-3 p-5 rounded-2xl border-2 transition-colors cursor-pointer
                      ${
                        selected
                          ? "border-coral bg-coral-light shadow-coral"
                          : "border-border-subtle bg-surface-soft hover:border-primary hover:bg-primary-light"
                      }
                    `}
                  >
                    <span className={`text-base font-semibold ${selected ? "text-coral" : "text-navy-deep"}`}>
                      {size.label}
                    </span>
                    {selected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 w-5 h-5 rounded-full bg-coral flex items-center justify-center"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        );

      /* ── STEP 2: Timeline ── */
      case 2:
        return (
          <motion.div
            key="step3"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-2 font-display">
              ¿Para cuándo lo necesitas?
            </h2>
            <p className="text-slate-light mb-8">
              Nos ayuda a priorizar tu proyecto
            </p>

            <div className="flex flex-col gap-3">
              {TIMELINES.map((tl) => {
                const selected = formData.timeline === tl.id;
                const isUrgent = tl.id === "urgente";
                return (
                  <motion.button
                    key={tl.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectAndAdvance("timeline", tl.id)}
                    className={`
                      relative flex items-center gap-4 p-5 rounded-2xl border-2 transition-colors cursor-pointer
                      ${
                        selected
                          ? "border-coral bg-coral-light shadow-coral"
                          : "border-border-subtle bg-surface-soft hover:border-primary hover:bg-primary-light"
                      }
                    `}
                  >
                    <span className={selected ? "text-coral" : isUrgent ? "text-coral" : "text-primary"}>
                      {tl.icon}
                    </span>
                    <span className={`text-base font-semibold ${selected ? "text-coral" : "text-navy-deep"}`}>
                      {tl.label}
                    </span>
                    {tl.badge && (
                      <span className="ml-auto bg-coral/10 text-coral text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">
                        {tl.badge}
                      </span>
                    )}
                    {selected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 rounded-full bg-coral flex items-center justify-center"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        );

      /* ── STEP 3: Contact Info ── */
      case 3:
        return (
          <motion.div
            key="step4"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-2 font-display">
              ¡Último paso! ¿Cómo te contactamos?
            </h2>
            <p className="text-slate-light mb-8">
              Te enviaremos una propuesta personalizada por WhatsApp
            </p>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="gf-name" className="block text-sm font-semibold text-navy-deep mb-1.5">
                  Tu nombre *
                </label>
                <input
                  id="gf-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, name: e.target.value }));
                    if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                  }}
                  placeholder="Ej: María González"
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-surface-soft text-navy-deep placeholder:text-slate-light/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                    errors.name ? "border-coral" : "border-border-subtle focus:border-primary"
                  }`}
                />
                {errors.name && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-coral text-xs mt-1">
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="gf-whatsapp" className="block text-sm font-semibold text-navy-deep mb-1.5">
                  WhatsApp *
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-3 rounded-xl border-2 border-border-subtle bg-surface-soft text-sm text-navy-deep font-medium shrink-0">
                    <span className="text-base" role="img" aria-label="República Dominicana">🇩🇴</span>
                    <span>+1</span>
                  </div>
                  <input
                    id="gf-whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^\d\s]/g, "");
                      setFormData((prev) => ({ ...prev, whatsapp: val }));
                      if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: "" }));
                    }}
                    placeholder="809 555 1234"
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-surface-soft text-navy-deep placeholder:text-slate-light/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                      errors.whatsapp ? "border-coral" : "border-border-subtle focus:border-primary"
                    }`}
                  />
                </div>
                {errors.whatsapp && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-coral text-xs mt-1">
                    {errors.whatsapp}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="gf-email" className="block text-sm font-semibold text-navy-deep mb-1.5">
                  Email <span className="text-slate-light font-normal">(opcional)</span>
                </label>
                <input
                  id="gf-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="maria@tunegocio.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border-subtle bg-surface-soft text-navy-deep placeholder:text-slate-light/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full mt-2 bg-coral hover:bg-coral-hover text-white font-bold py-4 px-6 rounded-xl shadow-coral transition-colors text-base cursor-pointer flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .613.613l4.458-1.495A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.39-1.584l-.386-.234-2.646.887.887-2.646-.234-.386A9.94 9.94 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Recibir mi propuesta por WhatsApp
              </motion.button>
            </div>
          </motion.div>
        );

      /* ── STEP 4: Success ── */
      case 4:
        return (
          <motion.div
            key="step5"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full text-center"
          >
            <ConfettiBurst />
            <AnimatedCheckmark />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-navy-deep mb-3 font-display"
            >
              ¡Excelente! 🎉
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="text-slate-text text-base max-w-md mx-auto mb-8 leading-relaxed"
            >
              Te escribimos por WhatsApp en menos de 2 horas con una propuesta
              personalizada para tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-surface-soft rounded-2xl p-5 text-left max-w-sm mx-auto border border-border-subtle"
            >
              <h3 className="text-sm font-bold text-navy-deep mb-3 uppercase tracking-wider">
                Resumen de tu solicitud
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-light">Sector</span>
                  <span className="font-medium text-navy-deep">{getSectorLabel()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-light">Equipo</span>
                  <span className="font-medium text-navy-deep">{getTeamLabel()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-light">Plazo</span>
                  <span className="font-medium text-navy-deep">{getTimelineLabel()}</span>
                </div>
                <div className="border-t border-border-subtle my-2 pt-2 flex justify-between">
                  <span className="text-slate-light">Contacto</span>
                  <span className="font-medium text-navy-deep">{formData.name}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  /* ────────────────────────────────────────────────────
     Main Render
     ──────────────────────────────────────────────────── */

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="bg-white rounded-3xl shadow-float p-6 sm:p-8 min-h-[500px] flex flex-col relative overflow-hidden">
        {/* ── Progress Bar ── */}
        {step < 4 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {/* Back button */}
              <div className="w-20">
                {step > 0 && (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    type="button"
                    onClick={goBack}
                    className="flex items-center gap-1 text-sm text-slate-light hover:text-primary transition-colors cursor-pointer font-medium"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Anterior
                  </motion.button>
                )}
              </div>

              {/* Step indicator */}
              <span className="text-xs font-semibold text-slate-light tracking-wide">
                Paso {step + 1} de {totalSteps}
              </span>

              <div className="w-20" />
            </div>

            {/* Progress track */}
            <div className="h-2 bg-surface-soft rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-coral to-primary"
                initial={false}
                animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />
            </div>
          </div>
        )}

        {/* ── Step Content ── */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            {renderStep()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
