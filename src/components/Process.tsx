"use client";

import { ChatCircleDots, Layout, Plugs, RocketLaunch, CheckCircle } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    days: "Días 1-3",
    title: "Nos conocemos",
    description:
      "Hablamos 30 minutos por WhatsApp o videollamada. Nos cuentas de tu negocio y listo, sin tecnicismos ni reuniones eternas.",
    check: "Briefing completo en 30 min",
    highlighted: true,
    icon: ChatCircleDots,
  },
  {
    number: "02",
    days: "Días 4-7",
    title: "Diseñamos tu web",
    description:
      "Te mostramos cómo va a quedar tu web antes de construirla. Si no te encanta, la cambiamos hasta que digas 'wow'.",
    check: "Prototipo navegable para revisar",
    highlighted: false,
    icon: Layout,
  },
  {
    number: "03",
    days: "Días 8-11",
    title: "Construimos y conectamos",
    description:
      "Montamos todo: tu web, el gestor de clientes y WhatsApp conectado. Tú no tocas nada técnico.",
    check: "Web + WhatsApp + Gestor integrado",
    highlighted: false,
    icon: Plugs,
  },
  {
    number: "04",
    days: "Día 14",
    title: "¡Al aire!",
    description:
      "Te enseñamos a usarla en 30 minutos y la publicamos. Ese mismo día empiezas a recibir clientes.",
    check: "Capacitación incluida",
    highlighted: false,
    icon: RocketLaunch,
  },
];

export default function Process() {
  return (
    <section
      id="como-funciona"
      className="py-28 lg:py-36 bg-warm-cream border-y border-border-subtle/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide mb-4">
            Así de fácil
          </span>
          <TextReveal as="h2" className="text-fluid-h2 font-extrabold text-navy-deep leading-tight">
            De la idea a tu web funcionando en solo{" "}
            <span className="text-primary">2 semanas</span>
          </TextReveal>
          <p className="mt-4 text-slate-light text-base sm:text-lg leading-relaxed">
            Sin reuniones eternas ni tecnicismos. Tú nos cuentas de tu negocio, nosotros hacemos el resto.
          </p>
        </div>

        {/* Steps Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.15}>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`bg-white rounded-3xl p-7 shadow-soft flex flex-col gap-5 transition-shadow hover:shadow-float relative overflow-hidden ${
                  step.highlighted
                    ? "border-2 border-primary ring-1 ring-primary/20"
                    : "border border-border-subtle"
                }`}
              >
                {/* Decorative background step number */}
                <span
                  className={`absolute -top-3 -right-1 text-8xl font-extrabold leading-none select-none pointer-events-none ${
                    step.highlighted ? "text-primary/10" : "text-slate-200/80"
                  }`}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Step label + days badge */}
                <div className="flex items-center justify-between relative z-10">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase ${
                      step.highlighted ? "text-primary" : "text-slate-light"
                    }`}
                  >
                    Paso {step.number}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      step.highlighted
                        ? "bg-primary-light text-primary"
                        : "bg-primary-light text-primary"
                    }`}
                  >
                    {step.days}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2.5 mb-3`}>
                    <Icon
                      size={22}
                      weight="duotone"
                      className={step.highlighted ? "text-primary" : "text-primary"}
                    />
                    <h3 className="text-lg font-bold text-navy-deep leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-text leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom check item */}
                <div
                  className={`flex items-center gap-2 pt-4 border-t relative z-10 ${
                    step.highlighted ? "border-primary/20" : "border-border-subtle"
                  }`}
                >
                  <CheckCircle
                    size={18}
                    weight="bold"
                    className={step.highlighted ? "text-primary shrink-0" : "text-primary shrink-0"}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      step.highlighted ? "text-primary" : "text-primary"
                    }`}
                  >
                    {step.check}
                  </span>
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
