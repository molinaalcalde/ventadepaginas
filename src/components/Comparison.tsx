"use client";

import { useRef, useEffect, useCallback } from "react";
import {
  Check,
  X,
  Clock,
  Palette,
  ChatCircleDots,
  ShieldCheck,
  ChartLineUp,
  DeviceMobile,
  ArrowRight,
} from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const contrasts = [
  {
    icon: Clock,
    them: "2 a 6 meses esperando tu web",
    us: "Tu web profesional lista en 14 días",
  },
  {
    icon: Palette,
    them: "Plantillas recicladas que todos usan",
    us: "Diseño único hecho para tu negocio",
  },
  {
    icon: ChatCircleDots,
    them: "Tickets de soporte que tardan 72 horas",
    us: "Te respondemos por WhatsApp en minutos",
  },
  {
    icon: ChartLineUp,
    them: "Te cobran CRM aparte: $100 a $300 al mes",
    us: "CRM incluido y conectado a tu WhatsApp",
  },
  {
    icon: DeviceMobile,
    them: "Pagas Linktree aparte para tus redes",
    us: "Tu web estilo Linktree incluida gratis",
  },
  {
    icon: ShieldCheck,
    them: "Te amarran con contratos y letra chica",
    us: "Tu web es tuya para siempre, sin amarres",
  },
];

export default function Comparison() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);

  const setRowRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) rowsRef.current[i] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 lg:py-36 bg-white relative">
      <div ref={sectionRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-xs font-bold tracking-widest uppercase mb-5">
              Compara antes de decidir
            </span>
          </ScrollReveal>
          <TextReveal
            as="h2"
            className="text-fluid-h2 font-extrabold text-navy-deep leading-tight"
          >
            Lo que otros hacen vs.{" "}
            <span className="text-primary">lo que hacemos nosotros</span>
          </TextReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-5 text-slate-text text-base sm:text-lg leading-relaxed">
              No somos la opción más barata. Somos la que realmente funciona.
            </p>
          </ScrollReveal>
        </div>

        {/* Column labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 py-3">
            <X weight="bold" size={18} className="text-rose-400" />
            <span className="text-sm font-bold text-slate-light uppercase tracking-widest">
              Las alternativas
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 py-3">
            <Check weight="bold" size={18} className="text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Con KINETIC
            </span>
          </div>
        </div>

        {/* Contrast rows */}
        <div className="space-y-4 md:space-y-5 max-w-4xl mx-auto">
          {contrasts.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={(el) => setRowRef(el, i)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 transition-all"
                style={{
                  opacity: 0,
                  transform: "translateY(24px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "0.6s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                {/* THEM — faded, struck-through feel */}
                <div
                  className="relative rounded-2xl px-6 py-5 flex items-start gap-4 group"
                  style={{
                    backgroundColor: "#FEF2F2",
                    border: "1px solid rgba(239,68,68,0.1)",
                  }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(239,68,68,0.08)" }}
                  >
                    <Icon size={20} weight="duotone" className="text-rose-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-slate-light leading-relaxed">
                      {item.them}
                    </p>
                  </div>
                  <X
                    weight="bold"
                    size={16}
                    className="shrink-0 mt-1 text-rose-300"
                  />
                </div>

                {/* US — vibrant, confident */}
                <div
                  className="relative rounded-2xl px-6 py-5 flex items-start gap-4 group"
                  style={{
                    backgroundColor: "#E8F5F3",
                    border: "1px solid rgba(15,118,110,0.12)",
                    boxShadow: "0 2px 12px -2px rgba(15,118,110,0.08)",
                  }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(15,118,110,0.12)" }}
                  >
                    <Icon size={20} weight="duotone" className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-semibold text-navy-deep leading-relaxed">
                      {item.us}
                    </p>
                  </div>
                  <Check
                    weight="bold"
                    size={16}
                    className="shrink-0 mt-1 text-primary"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mt-16">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 font-bold text-white transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#E8422A",
                borderRadius: "99px",
                padding: "16px 36px",
                fontSize: "16px",
                boxShadow:
                  "0 4px 14px -3px rgba(232,66,42,0.4), 0 2px 6px -1px rgba(232,66,42,0.2)",
              }}
            >
              Quiero mi web profesional
              <ArrowRight
                size={20}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <p className="mt-4 text-sm text-slate-light">
              Lista en 14 días. Sin compromisos.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
