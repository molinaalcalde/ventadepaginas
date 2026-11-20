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
  },
  {
    number: "02",
    days: "Días 4-7",
    title: "Diseñamos tu web",
    description:
      "Te enviamos una propuesta visual personalizada para que veas exactamente cómo va a quedar antes de seguir.",
    check: "Prototipo navegable para revisar",
    highlighted: false,
  },
  {
    number: "03",
    days: "Días 8-11",
    title: "Construimos y conectamos",
    description:
      "Montamos tu web, conectamos WhatsApp Business y dejamos tu CRM listo para recibir los primeros clientes.",
    check: "Web + WhatsApp CRM integrado",
    highlighted: false,
  },
  {
    number: "04",
    days: "Día 14",
    title: "¡Al aire!",
    description:
      "Te explicamos todo en 30 minutos por Zoom y publicamos tu web. Empiezas a recibir clientes ese mismo día.",
    check: "Formación de 30 min incluida",
    highlighted: true,
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
                  step.highlighted ? "bg-coral-light" : "bg-primary-light"
                }`}
              >
                {step.number === "01" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={step.highlighted ? "text-coral" : "text-primary"}
                  >
                    <path
                      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {step.number === "02" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-primary"
                  >
                    <path
                      d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {step.number === "03" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-primary"
                  >
                    <path
                      d="M16 18 22 12 16 6M8 6 2 12 8 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {step.number === "04" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-coral"
                  >
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
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
                    step.highlighted ? "text-coral" : "text-primary"
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
