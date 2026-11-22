"use client";

import { ChatCircleDots, Layout, Plugs, RocketLaunch, CheckCircle } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const steps = [
  {
    number: "01",
    days: "Días 1 a 3",
    title: "Nos conocemos",
    description:
      "Hablamos 30 minutos por WhatsApp o videollamada. Nos cuentas de tu negocio y listo, sin tecnicismos ni reuniones eternas.",
    check: "Briefing completo en 30 min",
    icon: ChatCircleDots,
  },
  {
    number: "02",
    days: "Días 4 a 7",
    title: "Diseñamos tu web",
    description:
      "Te mostramos cómo va a quedar tu web antes de construirla. Si no te encanta, la cambiamos hasta que digas 'wow'.",
    check: "Prototipo navegable para revisar",
    icon: Layout,
  },
  {
    number: "03",
    days: "Días 8 a 11",
    title: "Construimos y conectamos",
    description:
      "Montamos todo: tu web, el gestor de clientes y WhatsApp conectado. Tú no tocas nada técnico.",
    check: "Web + WhatsApp + Gestor integrado",
    icon: Plugs,
  },
  {
    number: "04",
    days: "Día 14",
    title: "¡Al aire!",
    description:
      "Te enseñamos a usarla en 30 minutos y la publicamos. Ese mismo día empiezas a recibir clientes.",
    check: "Capacitación incluida",
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide mb-4">
            Así de fácil
          </span>
          <TextReveal as="h2" className="text-fluid-h2 font-extrabold text-navy-deep leading-tight">
            De la idea a tu web funcionando en solo{" "}
            <span className="text-primary">2 semanas</span>
          </TextReveal>
          <p className="mt-4 text-slate-text text-base sm:text-lg leading-relaxed">
            Sin reuniones eternas ni tecnicismos. Tú nos cuentas de tu negocio, nosotros hacemos el resto.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <ScrollReveal
                key={step.number}
                direction="up"
                delay={idx * 0.12}
              >
                <div className="relative flex gap-6 sm:gap-8">
                  {/* Timeline rail */}
                  <div className="flex flex-col items-center">
                    {/* Node */}
                    <div className="relative z-10 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={24} weight="bold" className="text-primary" />
                    </div>
                    {/* Connector line */}
                    {!isLast && (
                      <div className="w-px flex-1 bg-border-subtle my-2" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
                    {/* Day badge + step label */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-widest uppercase text-slate-light">
                        Paso {step.number}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
                        {step.days}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-navy-deep leading-snug mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-text leading-relaxed mb-3">
                      {step.description}
                    </p>

                    {/* Check item */}
                    <div className="flex items-center gap-2">
                      <CheckCircle
                        size={16}
                        weight="bold"
                        className="text-primary shrink-0"
                      />
                      <span className="text-xs font-semibold text-primary">
                        {step.check}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Finish line */}
          <ScrollReveal direction="up" delay={steps.length * 0.12}>
            <div className="relative flex gap-6 sm:gap-8">
              <div className="flex flex-col items-center">
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center shrink-0">
                  <CheckCircle size={24} weight="bold" className="text-coral" />
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-base font-bold text-coral">
                  Tu web está en línea. Empiezas a recibir clientes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
