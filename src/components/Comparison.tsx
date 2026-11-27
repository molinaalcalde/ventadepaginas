"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const contrasts = [
  {
    them: "2 a 6 meses esperando tu web",
    us: "Tu web profesional lista en 14 días",
    diy: "Meses de frustración intentando con Wix",
  },
  {
    them: "Plantillas recicladas que todos usan",
    us: "Diseño único hecho para tu negocio",
    diy: "Idéntica a miles de páginas genéricas",
  },
  {
    them: "Tickets de soporte que tardan 72 horas",
    us: "Te respondemos por WhatsApp en minutos",
    diy: "Chatbots sin solución real",
  },
  {
    them: "Te cobran CRM aparte: $100 a $300 al mes",
    us: "CRM incluido con alertas a tu correo",
    diy: "Plugins que se rompen con cada actualización",
  },
  {
    them: "No ofrecen link para tus redes sociales",
    us: "Tu web estilo Linktree incluida gratis",
    diy: "Pagas Linktree aparte: $9 a $35 al mes",
  },
  {
    them: "Te amarran con contratos y letra chica",
    us: "Tu web es tuya para siempre, sin amarres",
    diy: "Atrapado en su plataforma sin poder salir",
  },
];

type TabKey = "us" | "them" | "diy";

const tabs: { key: TabKey; label: string; recommended?: boolean }[] = [
  { key: "us", label: "Con KINETIC", recommended: true },
  { key: "them", label: "Agencia tradicional" },
  { key: "diy", label: "Hacerlo tú mismo" },
];

function MobileComparison() {
  const [activeTab, setActiveTab] = useState<TabKey>("us");

  return (
    <div className="lg:hidden max-w-lg mx-auto">
      {/* Tab bar */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="relative shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
            style={{
              backgroundColor: activeTab === tab.key
                ? (tab.key === "us" ? "#0F766E" : "#1A1A2E")
                : "#F5F5F4",
              color: activeTab === tab.key ? "#FFFFFF" : "#64748B",
            }}
          >
            {tab.recommended && activeTab === tab.key && (
              <span className="absolute -top-2 -right-1 bg-coral text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                TOP
              </span>
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Rows for active tab */}
      <div className="space-y-3">
        {contrasts.map((item, i) => {
          const text = item[activeTab];
          const isUs = activeTab === "us";

          return (
            <div
              key={`${activeTab}-${i}`}
              className="rounded-2xl px-5 py-4 flex items-start gap-3"
              style={{
                backgroundColor: isUs ? undefined : "#FAFAFA",
                background: isUs ? "linear-gradient(135deg, #E8F5F3 0%, #F0FBF9 100%)" : undefined,
                border: isUs ? "1px solid rgba(15,118,110,0.15)" : "1px solid #F0F0F0",
                boxShadow: isUs ? "0 2px 8px -2px rgba(15,118,110,0.1)" : undefined,
              }}
            >
              {isUs ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
                  <circle cx="10" cy="10" r="10" fill="#0F766E" fillOpacity="0.12" />
                  <path d="M6.5 10.5L9 13L14 7.5" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
                  <circle cx="10" cy="10" r="10" fill="#E8422A" fillOpacity="0.08" />
                  <path d="M7 13L13 7M7 7l6 6" stroke="#E8422A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
              <p className={`text-sm leading-relaxed ${isUs ? "font-semibold text-navy-deep" : "text-slate-light"}`}>
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Comparison() {
  /* Desktop rows — animated with IntersectionObserver */
  const desktopRowsRef = useRef<HTMLDivElement[]>([]);

  const setDesktopRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) desktopRowsRef.current[i] = el;
  }, []);

  useEffect(() => {
    const rows = desktopRowsRef.current.filter(Boolean);
    if (!rows.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-28 lg:py-36 bg-white relative" style={{ overflow: "clip" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-20">
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
            <p className="mt-5 text-slate-text text-sm sm:text-base lg:text-lg leading-relaxed">
              No somos la opción más barata. Somos la que realmente funciona.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Desktop: 3-column layout (lg+) ── */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center justify-center gap-2 py-3">
              <span className="text-sm font-bold text-slate-light uppercase tracking-widest">
                Agencia tradicional
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 py-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                Con KINETIC
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 py-3">
              <span className="text-sm font-bold text-slate-light uppercase tracking-widest">
                Hacerlo tú mismo
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {contrasts.map((item, i) => (
              <div
                key={i}
                ref={(el) => setDesktopRef(el, i)}
                className="grid grid-cols-3 gap-4 transition-all"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "0.6s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 0.07}s`,
                }}
              >
                <div
                  className="rounded-2xl px-5 py-4 flex items-center transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#FAFAFA", border: "1px solid #F0F0F0" }}
                >
                  <p className="text-sm text-slate-light leading-relaxed">{item.them}</p>
                </div>

                <div
                  className="rounded-2xl px-5 py-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #E8F5F3 0%, #F0FBF9 100%)",
                    border: "1px solid rgba(15,118,110,0.15)",
                    boxShadow: "0 2px 8px -2px rgba(15,118,110,0.1)",
                  }}
                >
                  <p className="text-sm font-semibold text-navy-deep leading-relaxed flex-1">{item.us}</p>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                    <circle cx="9" cy="9" r="9" fill="#0F766E" fillOpacity="0.12" />
                    <path d="M6 9.5L8 11.5L12 7" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div
                  className="rounded-2xl px-5 py-4 flex items-center transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#FAFAFA", border: "1px solid #F0F0F0" }}
                >
                  <p className="text-sm text-slate-light leading-relaxed">{item.diy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: Tab-based comparison ── */}
        <MobileComparison />

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mt-12 sm:mt-20">
            <a
              href="#contacto"
              className="group relative inline-flex items-center font-bold text-white hover:-translate-y-1 active:translate-y-0"
              style={{
                backgroundColor: "#1A1A2E",
                borderRadius: "99px",
                padding: "14px 14px 14px 32px",
                fontSize: "16px",
                gap: "14px",
                transition: "all .35s cubic-bezier(.16,1,.3,1)",
                boxShadow:
                  "0 0 #0000, -1.1px 1.2px .1px #00000003, -2.2px 2.4px .3px #00000005, -3.3px 3.7px .5px #00000005, -4.6px 5.1px .7px #00000008, -6px 6.6px .9px #00000008, -7.6px 8.4px 1.3px #00000008, -9.5px 10.5px 1.8px #00000008, -11.8px 13px 2.4px #00000008, -14.7px 16.2px 3.2px #00000008, -18.3px 20.2px 4.4px #0000000a, -23px 25.4px 6px #0000000a, -29.3px 32.3px 8.2px #0000000a, -37.8px 41.8px 11.3px #0000000a, -49.9px 55.1px 15.9px #0000000a",
              }}
            >
              <span>Cotizar mi web</span>
              <span
                className="flex items-center justify-center"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  transition: "transform .35s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <ArrowUpRight size={18} weight="bold" className="text-navy-deep group-hover:rotate-45" />
              </span>
            </a>
            <p className="mt-5 text-sm text-slate-light">
              Lista en 14 días. Sin compromisos.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
