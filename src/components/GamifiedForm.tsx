"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────── */

interface FormData {
  sector: string;
  need: string;
  teamSize: string;
  timeline: string;
  name: string;
  whatsapp: string;
  email: string;
}

const INITIAL: FormData = {
  sector: "",
  need: "",
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
    label: "Hotel / Turismo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 21h18M3 7v14M21 7v14M6 11h4v4H6zM14 11h4v4h-4zM9 3h6l3 4H6l3-4z" />
      </svg>
    ),
  },
  {
    id: "clinica",
    label: "Clínica / Salud",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    id: "inmobiliaria",
    label: "Inmobiliaria",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 21V9l9-7 9 7v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    id: "restaurante",
    label: "Restaurante / Eventos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
      </svg>
    ),
  },
  {
    id: "servicios",
    label: "Servicios Profesionales",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "otro",
    label: "Otro tipo de negocio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
];

const NEEDS = [
  {
    id: "web",
    label: "Solo la Web",
    desc: "Una página web profesional que genere confianza",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "web-crm",
    label: "Web + CRM",
    desc: "Web con gestor de clientes y WhatsApp",
    badge: "RECOMENDADO",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: "paquete",
    label: "Todo el paquete",
    desc: "Web + CRM + SEO + Automatizaciones",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "semanas",
    label: "En las próximas semanas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "explorando",
    label: "Estoy explorando opciones",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
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

  const totalSteps = 5;

  /* Navigation */
  const goNext = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 5));
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
      if (e.key === "Enter" && step < 4) {
        const fields: (keyof FormData)[] = ["sector", "need", "teamSize", "timeline"];
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
    setStep(5);
  };

  /* Labels for summary */
  const getSectorLabel = () => SECTORS.find((s) => s.id === formData.sector)?.label ?? "";
  const getNeedLabel = () => NEEDS.find((n) => n.id === formData.need)?.label ?? "";
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

      /* ── STEP 1: Need ── */
      case 1:
        return (
          <motion.div
            key="step1"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-2 font-display">
              ¿Qué necesitas para tu negocio?
            </h2>
            <p className="text-slate-light mb-8">
              Elige el nivel de servicio ideal para ti
            </p>

            <div className="flex flex-col lg:flex-row gap-4">
              {NEEDS.map((need) => {
                const selected = formData.need === need.id;
                return (
                  <motion.button
                    key={need.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectAndAdvance("need", need.id)}
                    className={`
                      relative flex-1 flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-colors cursor-pointer text-center
                      ${
                        selected
                          ? "border-coral bg-coral-light shadow-coral"
                          : "border-border-subtle bg-surface-soft hover:border-primary hover:bg-primary-light"
                      }
                    `}
                  >
                    {need.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                        {need.badge}
                      </span>
                    )}
                    <span className={selected ? "text-coral" : "text-primary"}>
                      {need.icon}
                    </span>
                    <span className={`text-base font-bold ${selected ? "text-coral" : "text-navy-deep"}`}>
                      {need.label}
                    </span>
                    <span className="text-sm text-slate-light leading-snug">
                      {need.desc}
                    </span>
                    {selected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-5 h-5 rounded-full bg-coral flex items-center justify-center"
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

      /* ── STEP 2: Team Size ── */
      case 2:
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

      /* ── STEP 3: Timeline ── */
      case 3:
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

      /* ── STEP 4: Contact Info ── */
      case 4:
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

      /* ── STEP 5: Success ── */
      case 5:
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
                  <span className="text-slate-light">Servicio</span>
                  <span className="font-medium text-navy-deep">{getNeedLabel()}</span>
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
        {step < 5 && (
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
