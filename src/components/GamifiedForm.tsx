"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

/* ── Types ── */

interface FormData {
  sector: string;
  goal: string;
  timeline: string;
  name: string;
  whatsapp: string;
  email: string;
  instagram: string;
  details: string;
}

const INITIAL: FormData = {
  sector: "",
  goal: "",
  timeline: "",
  name: "",
  whatsapp: "",
  email: "",
  instagram: "",
  details: "",
};

/* ── Step Data ── */

const SECTORS = [
  { id: "hotel", label: "Hotel y Turismo" },
  { id: "clinica", label: "Clínica y Salud" },
  { id: "inmobiliaria", label: "Inmobiliaria" },
  { id: "restaurante", label: "Restaurante y Eventos" },
  { id: "servicios", label: "Servicios Profesionales" },
  { id: "otro", label: "Otro tipo de negocio" },
];

const GOALS = [
  { id: "nueva", label: "Crear mi primera web profesional" },
  { id: "redisenar", label: "Rediseñar una web que ya tengo" },
  { id: "clientes", label: "Conseguir más clientes online" },
  { id: "reservas", label: "Automatizar reservas o citas" },
];

const TIMELINES = [
  { id: "urgente", label: "Lo antes posible", tag: "Prioridad" },
  { id: "semanas", label: "En las próximas semanas" },
  { id: "explorando", label: "Estoy explorando opciones" },
];

/* ── Confetti ── */

function ConfettiBurst() {
  const colors = ["#0F766E", "#14B8A6", "#E8422A", "#F59E0B", "#3B82F6", "#8B5CF6"];
  const pieces = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * 360;
    const rad = (angle * Math.PI) / 180;
    const distance = 100 + Math.random() * 80;
    return {
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
      size: 5 + Math.random() * 6,
      color: colors[i % colors.length],
      rotation: Math.random() * 720 - 360,
      delay: Math.random() * 0.12,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
      {pieces.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: [1, 1.2, 0.5], rotate: p.rotation }}
          transition={{ duration: 1.2, delay: p.delay, ease: "easeOut" }}
          className="absolute rounded-full"
          style={{ width: p.size, height: p.size, backgroundColor: p.color }}
        />
      ))}
    </div>
  );
}

/* ── Animated Checkmark ── */

function AnimatedCheckmark() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
      className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6"
      style={{
        boxShadow: "0 0 #0000, -1.1px 1.2px .1px #00000003, -2.2px 2.4px .3px #00000005, -4.6px 5.1px .7px #00000008, -9.5px 10.5px 1.8px #00000008, -18.3px 20.2px 4.4px #0000000a",
      }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
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

/* ── Option Button (reusable) ── */

function OptionButton({
  selected,
  label,
  tag,
  onClick,
}: {
  selected: boolean;
  label: string;
  tag?: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative flex items-center gap-3 px-5 py-4 rounded-2xl border transition-all cursor-pointer text-left"
      style={{
        borderColor: selected ? "#0F766E" : "#E7E5E4",
        backgroundColor: selected ? "#E8F5F3" : "#FAFAF9",
        boxShadow: selected
          ? "0 0 0 1px #0F766E, 0 2px 8px -2px rgba(15,118,110,0.15)"
          : "none",
        transition: "all .25s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {/* Radio indicator */}
      <span
        className="shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center"
        style={{
          borderColor: selected ? "#0F766E" : "#D6D3D1",
          transition: "all .25s cubic-bezier(.16,1,.3,1)",
        }}
      >
        {selected && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2.5 h-2.5 rounded-full bg-primary"
          />
        )}
      </span>

      <span className={`text-sm sm:text-base font-medium ${selected ? "text-navy-deep" : "text-slate-text"}`}>
        {label}
      </span>

      {tag && (
        <span className="ml-auto text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full tracking-wider uppercase">
          {tag}
        </span>
      )}
    </motion.button>
  );
}

/* ── Main Component ── */

export default function GamifiedForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 4;

  const goNext = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 4));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const selectAndAdvance = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setTimeout(() => goNext(), 400);
    },
    [goNext]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && step < 3) {
        const fields: (keyof FormData)[] = ["sector", "goal", "timeline"];
        if (formData[fields[step]]) goNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [step, formData, goNext]);

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Tu nombre es requerido";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Tu WhatsApp es requerido";
    else if (!/^\d{7,15}$/.test(formData.whatsapp.replace(/[\s\-()]/g, "")))
      newErrors.whatsapp = "Número inválido";
    if (!formData.email.trim()) newErrors.email = "Tu email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email inválido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setDirection(1);
    setStep(4);
  };

  const getSectorLabel = () => SECTORS.find((s) => s.id === formData.sector)?.label ?? "";
  const getGoalLabel = () => GOALS.find((g) => g.id === formData.goal)?.label ?? "";

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 280 : -280, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -280 : 280, opacity: 0 }),
  };

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
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-2">
              ¿A qué se dedica tu negocio?
            </h2>
            <p className="text-slate-light mb-8 text-sm sm:text-base">
              Así personalizamos tu web para tu tipo de cliente
            </p>

            <div className="grid grid-cols-2 gap-3">
              {SECTORS.map((sector) => (
                <OptionButton
                  key={sector.id}
                  selected={formData.sector === sector.id}
                  label={sector.label}
                  onClick={() => selectAndAdvance("sector", sector.id)}
                />
              ))}
            </div>
          </motion.div>
        );

      /* ── STEP 1: Goal ── */
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
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-2">
              ¿Qué necesitas lograr?
            </h2>
            <p className="text-slate-light mb-8 text-sm sm:text-base">
              Nos ayuda a preparar la mejor solución para ti
            </p>

            <div className="flex flex-col gap-3">
              {GOALS.map((goal) => (
                <OptionButton
                  key={goal.id}
                  selected={formData.goal === goal.id}
                  label={goal.label}
                  onClick={() => selectAndAdvance("goal", goal.id)}
                />
              ))}
            </div>
          </motion.div>
        );

      /* ── STEP 2: Timeline ── */
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
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-2">
              ¿Para cuándo lo necesitas?
            </h2>
            <p className="text-slate-light mb-8 text-sm sm:text-base">
              Nos ayuda a priorizar tu proyecto
            </p>

            <div className="flex flex-col gap-3">
              {TIMELINES.map((tl) => (
                <OptionButton
                  key={tl.id}
                  selected={formData.timeline === tl.id}
                  label={tl.label}
                  tag={tl.tag}
                  onClick={() => selectAndAdvance("timeline", tl.id)}
                />
              ))}
            </div>
          </motion.div>
        );

      /* ── STEP 3: Contact Info ── */
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
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-2">
              ¿Cómo te contactamos?
            </h2>
            <p className="text-slate-light mb-8 text-sm sm:text-base">
              Te enviamos una propuesta personalizada en menos de 24 horas
            </p>

            <div className="space-y-4">
              {/* Name + WhatsApp row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    placeholder="María González"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-navy-deep placeholder:text-slate-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm ${
                      errors.name ? "border-coral" : "border-border-subtle focus:border-primary"
                    }`}
                  />
                  {errors.name && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-coral text-xs mt-1">
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="gf-whatsapp" className="block text-sm font-semibold text-navy-deep mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    id="gf-whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^\d\s\-()]/g, "");
                      setFormData((prev) => ({ ...prev, whatsapp: val }));
                      if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: "" }));
                    }}
                    placeholder="+1 809 555 1234"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-navy-deep placeholder:text-slate-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm ${
                      errors.whatsapp ? "border-coral" : "border-border-subtle focus:border-primary"
                    }`}
                  />
                  {errors.whatsapp && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-coral text-xs mt-1">
                      {errors.whatsapp}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="gf-email" className="block text-sm font-semibold text-navy-deep mb-1.5">
                  Email *
                </label>
                <input
                  id="gf-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                  placeholder="maria@tunegocio.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-navy-deep placeholder:text-slate-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm ${
                    errors.email ? "border-coral" : "border-border-subtle focus:border-primary"
                  }`}
                />
                {errors.email && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-coral text-xs mt-1">
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Instagram */}
              <div>
                <label htmlFor="gf-instagram" className="block text-sm font-semibold text-navy-deep mb-1.5">
                  Instagram o redes del negocio <span className="text-slate-light font-normal">(opcional)</span>
                </label>
                <input
                  id="gf-instagram"
                  type="text"
                  value={formData.instagram}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, instagram: e.target.value }))
                  }
                  placeholder="@tunegocio"
                  className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-navy-deep placeholder:text-slate-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                />
              </div>

              {/* Details */}
              <div>
                <label htmlFor="gf-details" className="block text-sm font-semibold text-navy-deep mb-1.5">
                  Cuéntanos sobre tu negocio <span className="text-slate-light font-normal">(opcional)</span>
                </label>
                <textarea
                  id="gf-details"
                  value={formData.details}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, details: e.target.value }))
                  }
                  placeholder="Ej: Tengo una clínica dental con 3 sucursales y quiero que mis pacientes agenden online..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-navy-deep placeholder:text-slate-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                />
              </div>

              {/* Submit — dark pill Orbix style */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="group w-full mt-2 flex items-center justify-center gap-3 text-white font-bold py-4 px-6 rounded-full cursor-pointer"
                style={{
                  backgroundColor: "#1A1A2E",
                  transition: "all .35s cubic-bezier(.16,1,.3,1)",
                  boxShadow:
                    "0 0 #0000, -1.1px 1.2px .1px #00000003, -2.2px 2.4px .3px #00000005, -3.3px 3.7px .5px #00000005, -4.6px 5.1px .7px #00000008, -6px 6.6px .9px #00000008, -7.6px 8.4px 1.3px #00000008, -9.5px 10.5px 1.8px #00000008, -11.8px 13px 2.4px #00000008, -14.7px 16.2px 3.2px #00000008, -18.3px 20.2px 4.4px #0000000a, -23px 25.4px 6px #0000000a, -29.3px 32.3px 8.2px #0000000a, -37.8px 41.8px 11.3px #0000000a, -49.9px 55.1px 15.9px #0000000a",
                }}
              >
                <span>Solicitar mi propuesta</span>
                <span
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0"
                  style={{ transition: "transform .35s cubic-bezier(.16,1,.3,1)" }}
                >
                  <ArrowUpRight size={18} weight="bold" className="text-navy-deep group-hover:rotate-45" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        );

      /* ── STEP 4: Success ── */
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
            className="w-full text-center"
          >
            <ConfettiBurst />
            <AnimatedCheckmark />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-navy-deep mb-3"
            >
              Solicitud recibida
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="text-slate-text text-base max-w-md mx-auto mb-8 leading-relaxed"
            >
              Nuestro equipo está revisando tu información. Te contactaremos
              en menos de 24 horas con una propuesta personalizada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-surface-soft rounded-2xl p-5 text-left max-w-sm mx-auto border border-border-subtle"
            >
              <h3 className="text-xs font-bold text-slate-light mb-3 uppercase tracking-widest">
                Resumen
              </h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-light">Sector</span>
                  <span className="font-medium text-navy-deep">{getSectorLabel()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-light">Objetivo</span>
                  <span className="font-medium text-navy-deep text-right max-w-[200px]">{getGoalLabel()}</span>
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

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div
        className="rounded-3xl p-6 sm:p-8 min-h-[520px] flex flex-col relative overflow-hidden"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E7E5E4",
          boxShadow:
            "0 0 #0000, -1.1px 1.2px .1px #00000003, -2.2px 2.4px .3px #00000005, -3.3px 3.7px .5px #00000005, -4.6px 5.1px .7px #00000008, -6px 6.6px .9px #00000008, -7.6px 8.4px 1.3px #00000008, -9.5px 10.5px 1.8px #00000008, -11.8px 13px 2.4px #00000008",
        }}
      >
        {/* Progress Bar */}
        {step < 4 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-20">
                {step > 0 && (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    type="button"
                    onClick={goBack}
                    className="flex items-center gap-1 text-sm text-slate-light hover:text-primary transition-colors cursor-pointer font-medium"
                    style={{ transition: "color .25s cubic-bezier(.16,1,.3,1)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Atrás
                  </motion.button>
                )}
              </div>

              <span className="text-xs font-semibold text-slate-light tracking-wide">
                Paso {step + 1} de {totalSteps}
              </span>

              <div className="w-20" />
            </div>

            {/* Progress track — single color teal */}
            <div className="h-1.5 bg-surface-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={false}
                animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="flex-1 flex items-start justify-center pt-2">
          <AnimatePresence mode="wait" custom={direction}>
            {renderStep()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
