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
    visual: (
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[#25D366]" />
          </div>
          <div className="flex-1 bg-white/10 rounded-xl rounded-tl-none px-3 py-2">
            <div className="w-3/4 h-2 rounded bg-white/30 mb-1.5" />
            <div className="w-1/2 h-2 rounded bg-white/20" />
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <div className="bg-primary/30 rounded-xl rounded-tr-none px-3 py-2">
            <div className="w-20 h-2 rounded bg-white/30 mb-1.5" />
            <div className="w-14 h-2 rounded bg-white/20" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[#25D366]" />
          </div>
          <div className="flex-1 bg-white/10 rounded-xl rounded-tl-none px-3 py-2">
            <div className="w-full h-2 rounded bg-white/30 mb-1.5" />
            <div className="w-2/3 h-2 rounded bg-white/20" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    days: "Días 4 a 7",
    title: "Diseñamos tu web",
    description:
      "Te mostramos cómo va a quedar tu web antes de construirla. Si no te encanta, la cambiamos hasta que digas 'wow'.",
    check: "Prototipo navegable para revisar",
    icon: Layout,
    visual: (
      <div className="bg-white/10 rounded-lg overflow-hidden">
        <div className="flex items-center gap-1 px-2.5 py-1.5 bg-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
        </div>
        <div className="p-3 space-y-2">
          <div className="w-1/3 h-1.5 rounded bg-primary/40" />
          <div className="w-3/4 h-2.5 rounded bg-white/20" />
          <div className="w-1/2 h-2.5 rounded bg-white/15" />
          <div className="w-1/4 h-4 rounded bg-coral/40 mt-2" />
          <div className="flex gap-1.5 mt-2">
            <div className="flex-1 h-8 rounded bg-white/8" />
            <div className="flex-1 h-8 rounded bg-white/8" />
            <div className="flex-1 h-8 rounded bg-white/8" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    days: "Días 8 a 11",
    title: "Construimos y conectamos",
    description:
      "Montamos todo: tu web, el gestor de clientes y WhatsApp conectado. Tú no tocas nada técnico.",
    check: "Web + WhatsApp + Gestor integrado",
    icon: Plugs,
    visual: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2">
          <div className="w-6 h-6 rounded bg-primary/30 flex-shrink-0" />
          <div className="flex-1">
            <div className="w-16 h-1.5 rounded bg-white/30 mb-1" />
            <div className="w-10 h-1 rounded bg-white/15" />
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2">
          <div className="w-6 h-6 rounded bg-[#25D366]/30 flex-shrink-0" />
          <div className="flex-1">
            <div className="w-20 h-1.5 rounded bg-white/30 mb-1" />
            <div className="w-12 h-1 rounded bg-white/15" />
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2">
          <div className="w-6 h-6 rounded bg-coral/30 flex-shrink-0" />
          <div className="flex-1">
            <div className="w-14 h-1.5 rounded bg-white/30 mb-1" />
            <div className="w-8 h-1 rounded bg-white/15" />
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
      </div>
    ),
  },
  {
    number: "04",
    days: "Día 14",
    title: "¡Al aire!",
    description:
      "Te enseñamos a usarla en 30 minutos y la publicamos. Ese mismo día empiezas a recibir clientes.",
    check: "Capacitación incluida",
    icon: RocketLaunch,
    visual: (
      <div className="relative">
        <div className="bg-white/10 rounded-lg overflow-hidden">
          <div className="flex items-center gap-1 px-2.5 py-1.5 bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
            <div className="ml-2 flex-1">
              <div className="w-24 h-1.5 rounded bg-white/15 mx-auto" />
            </div>
          </div>
          <div className="p-3 space-y-2">
            <div className="w-1/3 h-1.5 rounded bg-primary/40" />
            <div className="w-2/3 h-2 rounded bg-white/20" />
            <div className="w-1/4 h-3 rounded bg-coral/50 mt-1" />
            <div className="flex gap-1.5 mt-2">
              <div className="flex-1 h-6 rounded bg-white/6" />
              <div className="flex-1 h-6 rounded bg-white/6" />
            </div>
          </div>
        </div>
        {/* Live indicator */}
        <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          Live
        </div>
      </div>
    ),
  },
];

export default function Process() {
  return (
    <section
      id="como-funciona"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--color-warm-cream) 0%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide mb-4">
              Así de fácil
            </span>
          </ScrollReveal>
          <TextReveal as="h2" className="text-fluid-h2 font-extrabold text-navy-deep leading-tight">
            De la idea a tu web funcionando en solo{" "}
            <span className="text-primary">2 semanas</span>
          </TextReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-4 text-slate-text text-base sm:text-lg leading-relaxed">
              Sin reuniones eternas ni tecnicismos. Tú nos cuentas de tu negocio, nosotros hacemos el resto.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps as cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal
                key={step.number}
                direction="up"
                delay={idx * 0.1}
              >
                <div
                  className="group bg-navy-deep/90 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col border border-white/[0.06] hover:border-white/[0.12] cursor-default"
                  style={{
                    transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 30px 60px -15px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px -15px rgba(0,0,0,0.3)";
                  }}
                >
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold tracking-widest uppercase text-white/40">
                        Paso {step.number}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                        {step.days}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center">
                      <Icon size={18} weight="bold" className="text-primary" />
                    </div>
                  </div>

                  {/* Visual mockup */}
                  <div className="mb-5">
                    {step.visual}
                  </div>

                  {/* Text */}
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">
                    {step.description}
                  </p>

                  {/* Check */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                    <CheckCircle size={14} weight="bold" className="text-primary shrink-0" />
                    <span className="text-xs font-semibold text-primary">
                      {step.check}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Finish line */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center">
              <CheckCircle size={20} weight="bold" className="text-coral" />
            </div>
            <p className="text-base font-bold text-white">
              Tu web está en línea. Empiezas a recibir clientes.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
