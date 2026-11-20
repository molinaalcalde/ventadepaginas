"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    days: "Días 1-3",
    title: "Nos conocemos",
    description:
      "Hablamos por WhatsApp o videollamada para entender tu negocio, tus clientes y qué necesitas. Sin tecnicismos.",
    check: "Briefing completo en 30 min",
    highlighted: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: "02",
    days: "Días 4-7",
    title: "Diseñamos tu web",
    description:
      "Te enviamos una propuesta visual personalizada para que veas exactamente cómo va a quedar antes de seguir.",
    check: "Prototipo navegable para revisar",
    highlighted: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "03",
    days: "Días 8-11",
    title: "Construimos y conectamos",
    description:
      "Montamos tu web, conectamos WhatsApp Business y dejamos tu CRM listo para recibir los primeros clientes.",
    check: "Web + WhatsApp + CRM integrado",
    highlighted: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "04",
    days: "Día 14",
    title: "¡Al aire!",
    description:
      "Te explicamos todo en una videollamada de 30 minutos y publicamos tu web. Empiezas a recibir clientes ese mismo día.",
    check: "Capacitación incluida",
    highlighted: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section
      id="como-funciona"
      className="py-20 lg:py-28 bg-surface-soft border-y border-border-subtle/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide mb-4">
            Proceso claro y sin estrés
          </span>
          <TextReveal as="h2" className="text-fluid-h2 font-extrabold text-navy-deep leading-tight">
            De la idea a tu web funcionando en solo{" "}
            <span className="text-primary">2 semanas</span>
          </TextReveal>
        </div>

        {/* Steps Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.15}>
          {steps.map((step) => (
            <div
              key={step.number}
              className={`bg-white rounded-3xl p-7 shadow-soft flex flex-col gap-5 transition-shadow hover:shadow-float ${
                step.highlighted
                  ? "border-2 border-coral ring-1 ring-coral/20"
                  : "border border-border-subtle"
              }`}
            >
              {/* Step number + days badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold tracking-widest uppercase ${
                    step.highlighted ? "text-coral" : "text-slate-light"
                  }`}
                >
                  Paso {step.number}
                </span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    step.highlighted
                      ? "bg-coral-light text-coral"
                      : "bg-primary-light text-primary"
                  }`}
                >
                  {step.days}
                </span>
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  step.highlighted ? "bg-coral-light text-coral" : "bg-primary-light text-primary"
                }`}
              >
                {step.icon}
              </div>

              {/* Title + Description */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-navy-deep mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-text leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom check item */}
              <div
                className={`flex items-center gap-2 pt-4 border-t ${
                  step.highlighted
                    ? "border-coral/20"
                    : "border-border-subtle"
                }`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={
                    step.highlighted ? "text-coral shrink-0" : "text-primary shrink-0"
                  }
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6 9l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`text-xs font-semibold ${
                    step.highlighted ? "text-coral" : "text-primary"
                  }`}
                >
                  {step.check}
                </span>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
