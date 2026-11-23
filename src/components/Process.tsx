"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import {
  ChatCircleDots,
  PaintBrush,
  Plugs,
  Rocket,
  ArrowUpRight,
  Check,
  ChartBar,
  Users,
  Globe,
  WhatsappLogo,
  AddressBook,
  Eye,
  Bell,
} from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const steps = [
  {
    id: 0,
    tab: "Nos conocemos",
    icon: ChatCircleDots,
    title: "Nos conocemos",
    description:
      "30 minutos por WhatsApp o videollamada. Nos cuentas de tu negocio, sin tecnicismos. Entendemos tu audiencia y definimos juntos la estrategia.",
    tags: ["WhatsApp", "Briefing", "Estrategia"],
    tagIcons: [WhatsappLogo, ChatCircleDots, ChartBar],
  },
  {
    id: 1,
    tab: "Diseñamos",
    icon: PaintBrush,
    title: "Diseñamos tu web",
    description:
      "Te mostramos tu web antes de construirla. La cambiamos hasta que digas 'wow'. Diseño único para tu negocio, nada de plantillas recicladas.",
    tags: ["Prototipo", "Diseño único", "Revisiones"],
    tagIcons: [Eye, PaintBrush, Check],
  },
  {
    id: 2,
    tab: "Construimos",
    icon: Plugs,
    title: "Construimos y conectamos",
    description:
      "Montamos todo: web, gestor de clientes y WhatsApp conectado. Tú no tocas nada técnico. Formularios inteligentes que capturan clientes automáticamente.",
    tags: ["CRM", "WhatsApp", "Formularios"],
    tagIcons: [AddressBook, WhatsappLogo, Users],
  },
  {
    id: 3,
    tab: "¡Al aire!",
    icon: Rocket,
    title: "¡Al aire!",
    description:
      "Te enseñamos a usarla y la publicamos. Ese mismo día empiezas a recibir clientes. Capacitación incluida para que nunca te sientas perdido.",
    tags: ["Publicación", "Capacitación", "Soporte"],
    tagIcons: [Globe, Users, Bell],
  },
];

/* ─── Floating mockup cards for each step ─── */
function FloatingCards1() {
  return (
    <div className="relative w-[380px] h-[300px]" style={{ transform: "scale(0.85)" }}>
      <div className="absolute top-0 left-0 z-10 w-[210px] bg-white rounded-2xl p-4 border border-gray-100" style={{ boxShadow: "0 24px 15px rgba(0,0,0,0.05)" }}>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-black">Tu Negocio</span>
          <span className="text-gray-400 text-xs">...</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="inline-flex items-center gap-1.5 bg-primary-light rounded-full px-2.5 py-1 text-[11px] text-primary font-medium w-fit">
            <ChartBar size={12} weight="bold" /> Objetivos claros
          </span>
          <span className="inline-flex items-center gap-1.5 bg-coral-light rounded-full px-2.5 py-1 text-[11px] text-coral font-medium w-fit">
            <Users size={12} weight="bold" /> Audiencia definida
          </span>
        </div>
      </div>
      <div className="absolute top-[50px] left-[170px] z-20 w-[200px] bg-white rounded-2xl p-4 border border-gray-100" style={{ boxShadow: "0 24px 15px rgba(0,0,0,0.05)" }}>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-black">Briefing</span>
          <span className="text-gray-400 text-xs">...</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
            <WhatsappLogo size={20} weight="fill" className="text-white" />
          </div>
          <p className="text-[11px] text-black/60 leading-tight w-[120px]">&quot;Cuéntanos de tu negocio en 30 min&quot;</p>
        </div>
      </div>
      <div className="absolute top-[165px] left-[50px] z-30 w-[220px] bg-white rounded-2xl p-4 border border-gray-100" style={{ boxShadow: "0 24px 15px rgba(0,0,0,0.05)" }}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-black">Estrategia lista</span>
          <span className="text-gray-400 text-xs">...</span>
        </div>
        <div className="flex flex-col gap-1">
          {["Propuesta clara", "Cronograma 14 días", "Sin tecnicismos"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <Check size={16} weight="bold" className="text-primary" />
              <span className="text-[11px] text-black/70">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingCards2() {
  return (
    <div className="relative w-[380px] h-[300px]" style={{ transform: "scale(0.85)" }}>
      <div className="absolute top-0 left-[20px] z-10 w-[340px] bg-white rounded-2xl p-4 border border-gray-100" style={{ boxShadow: "0 24px 15px rgba(0,0,0,0.05)" }}>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-black">Tu web</span>
          <span className="text-gray-400 text-xs">...</span>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
            <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
            <span className="w-2 h-2 rounded-full bg-[#28C840]" />
            <div className="ml-2 flex-1 h-3 bg-gray-200 rounded max-w-[100px]" />
          </div>
          <div className="space-y-2">
            <div className="w-[60%] h-2.5 rounded bg-gray-200" />
            <div className="w-[40%] h-2.5 rounded bg-gray-200" />
            <div className="w-16 h-4 rounded bg-primary/30 mt-2" />
          </div>
        </div>
      </div>
      <div className="absolute top-[160px] left-[140px] z-20 w-[220px] bg-white rounded-2xl p-4 border border-gray-100" style={{ boxShadow: "0 24px 15px rgba(0,0,0,0.05)" }}>
        <span className="text-sm font-semibold text-black">Revisiones</span>
        <div className="flex flex-col gap-1 mt-2">
          {["Diseño aprobado", "Colores definidos", "Contenido listo"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <Check size={16} weight="bold" className="text-primary" />
              <span className="text-[11px] text-black/70">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingCards3() {
  return (
    <div className="relative w-[380px] h-[300px]" style={{ transform: "scale(0.85)" }}>
      {[
        { label: "Sitio web", sub: "Responsive", color: "primary", top: 0, left: 0 },
        { label: "WhatsApp", sub: "Conectado", color: "[#25D366]", top: 55, left: 170 },
        { label: "CRM", sub: "Integrado", color: "coral", top: 165, left: 40 },
      ].map((item) => (
        <div key={item.label} className="absolute z-10 w-[210px] bg-white rounded-2xl p-4 border border-gray-100" style={{ top: item.top, left: item.left, boxShadow: "0 24px 15px rgba(0,0,0,0.05)" }}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-black">{item.label}</span>
            <span className="text-gray-400 text-xs">...</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-black/60">{item.sub}</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Activo
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function FloatingCards4() {
  return (
    <div className="relative w-[380px] h-[300px]" style={{ transform: "scale(0.85)" }}>
      <div className="absolute top-0 left-[20px] z-10 w-[340px] bg-white rounded-2xl p-4 border border-gray-100" style={{ boxShadow: "0 24px 15px rgba(0,0,0,0.05)" }}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-black">tunegocio.com</span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> En vivo
          </span>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 space-y-2">
          <div className="w-[50%] h-2 rounded bg-gray-200" />
          <div className="w-[30%] h-2 rounded bg-gray-200" />
          <div className="w-14 h-3.5 rounded bg-coral/30 mt-1" />
        </div>
      </div>
      <div className="absolute top-[120px] left-[160px] z-20 w-[200px] bg-white rounded-2xl p-4 border border-gray-100" style={{ boxShadow: "0 24px 15px rgba(0,0,0,0.05)" }}>
        <span className="text-[11px] font-bold text-emerald-600 mb-1 block">Nuevo contacto</span>
        <p className="text-[11px] text-black/60 leading-tight">María P. quiere reservar una mesa para 4 personas</p>
      </div>
      <div className="absolute top-[200px] left-[30px] z-20 w-[200px] bg-white rounded-2xl p-4 border border-gray-100" style={{ boxShadow: "0 24px 15px rgba(0,0,0,0.05)" }}>
        <span className="text-sm font-semibold text-black mb-2 block">Capacitación</span>
        <div className="flex flex-col gap-1">
          {["Uso del CRM", "Editar contenido", "Soporte continuo"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <Check size={14} weight="bold" className="text-primary" />
              <span className="text-[11px] text-black/70">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const floatingCards = [FloatingCards1, FloatingCards2, FloatingCards3, FloatingCards4];

/* ─── Background colors for right panel per step ─── */
const panelBgs = [
  "rgb(232, 245, 243)",  // primary-light
  "rgb(254, 240, 237)",  // coral-light
  "rgb(232, 245, 243)",  // primary-light
  "rgb(254, 240, 237)",  // coral-light
];

/* ─── Orbix-style dramatic button shadow ─── */
const ctaShadow = [
  "rgba(0,0,0,0) 0px 0px",
  "rgba(0,0,0,0.01) -1.1px 1.2px 0.1px",
  "rgba(0,0,0,0.02) -2.2px 2.4px 0.3px",
  "rgba(0,0,0,0.02) -3.3px 3.7px 0.5px",
  "rgba(0,0,0,0.03) -4.6px 5.1px 0.7px",
  "rgba(0,0,0,0.03) -6px 6.6px 0.9px",
  "rgba(0,0,0,0.03) -7.6px 8.4px 1.3px",
  "rgba(0,0,0,0.03) -9.5px 10.5px 1.8px",
  "rgba(0,0,0,0.03) -11.8px 13px 2.4px",
  "rgba(0,0,0,0.03) -14.7px 16.2px 3.2px",
  "rgba(0,0,0,0.04) -18.3px 20.2px 4.4px",
  "rgba(0,0,0,0.04) -23px 25.4px 6px",
  "rgba(0,0,0,0.04) -29.3px 32.3px 8.2px",
  "rgba(0,0,0,0.04) -37.8px 41.8px 11.3px",
  "rgba(0,0,0,0.04) -49.9px 55.1px 15.9px",
].join(", ");

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabBtnsRef = useRef<HTMLDivElement[]>([]);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const setTabRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) tabBtnsRef.current[i] = el;
  }, []);
  const setPanelRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) panelsRef.current[i] = el;
  }, []);

  /* ── Scroll-driven tab switching ── */
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight - window.innerHeight)));

      // Determine active step
      const stepIndex = Math.min(3, Math.floor(progress * 4));
      setActiveStep(stepIndex);

      // Animate mesh gradient
      if (meshRef.current) {
        meshRef.current.style.transform = `translateX(${-progress * 75}%)`;
      }

      // Update panels
      panelsRef.current.forEach((panel, i) => {
        if (!panel) return;
        if (i === stepIndex) {
          panel.style.opacity = "1";
          panel.style.pointerEvents = "auto";
        } else {
          panel.style.opacity = "0";
          panel.style.pointerEvents = "none";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Move droplet indicator ── */
  useEffect(() => {
    const btn = tabBtnsRef.current[activeStep];
    const indicator = indicatorRef.current;
    if (!btn || !indicator) return;

    const parent = btn.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    indicator.style.width = `${btnRect.width}px`;
    indicator.style.height = `${btnRect.height}px`;
    indicator.style.left = `${btnRect.left - parentRect.left}px`;
    indicator.style.top = `${btnRect.top - parentRect.top}px`;
  }, [activeStep]);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#010101" }}
    >
      {/* Section header */}
      <div className="pt-28 lg:pt-36 pb-16 text-center max-w-2xl mx-auto px-4">
        <ScrollReveal direction="up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm font-semibold tracking-wide mb-4">
            Así de fácil
          </span>
        </ScrollReveal>
        <TextReveal as="h2" className="text-fluid-h2 font-extrabold text-white leading-tight">
          De la idea a tu web en solo{" "}
          <span className="text-primary-light">2 semanas</span>
        </TextReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <p className="mt-4 text-white/50 text-base sm:text-lg leading-relaxed">
            Sin reuniones eternas ni tecnicismos. Tú nos cuentas, nosotros hacemos el resto.
          </p>
        </ScrollReveal>
      </div>

      {/* Scroll-driven tab container */}
      <div
        className="relative"
        style={{ height: "calc(1800px + 100vh)" }}
      >
        {/* Sticky hero stage */}
        <div
          ref={stageRef}
          className="sticky top-6 z-10 mx-auto flex flex-col items-center justify-center overflow-hidden"
          style={{
            width: "calc(100vw - 48px)",
            maxWidth: "1400px",
            height: "calc(100vh - 48px)",
            borderRadius: "32px",
            padding: "24px 24px",
            boxShadow: "rgba(15,118,110,0.12) 0px 24px 70px -20px",
          }}
        >
          {/* Gradient background layer */}
          <div className="absolute inset-0 z-0 overflow-hidden" style={{ borderRadius: "32px" }}>
            <div
              ref={meshRef}
              className="absolute top-0 left-0 h-full pointer-events-none"
              style={{
                width: "400%",
                backgroundImage: `linear-gradient(
                  105deg,
                  #E8F5F3 0%,
                  #D1EDE9 8%,
                  #B8E5D8 16%,
                  #FEF0ED 25%,
                  #FDD5CC 34%,
                  #E8F5F3 42%,
                  #D1EDE9 50%,
                  #FEF0ED 58%,
                  #FDD5CC 67%,
                  #E8F5F3 75%,
                  #D1EDE9 84%,
                  #FEF0ED 92%,
                  #E8F5F3 100%
                )`,
                transition: "transform 0.1s linear",
              }}
            />
          </div>

          {/* Tab pills */}
          <div className="relative z-20 flex items-center gap-1 mb-3">
            {/* Sliding indicator */}
            <div
              ref={indicatorRef}
              className="absolute z-10 pointer-events-none bg-white rounded-full"
              style={{
                transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            />
            {steps.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => setTabRef(el, i)}
                className="relative z-20 cursor-pointer rounded-full px-4 sm:px-6 py-3 sm:py-3.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <span
                  className="text-xs sm:text-sm font-medium whitespace-nowrap"
                  style={{
                    color: activeStep === i ? "#000" : "rgba(75,85,99,1)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {step.tab}
                </span>
              </div>
            ))}
          </div>

          {/* Main white card */}
          <div
            className="relative z-10 w-full max-w-[1160px] overflow-hidden mx-auto"
            style={{
              backgroundColor: "#fff",
              borderRadius: "42px",
              boxShadow: "0 16px 50px -10px rgba(0,0,0,0.06)",
              marginTop: "12px",
            }}
          >
            {/* Stacked panels (grid overlap) */}
            <div className="grid" style={{ gridTemplateColumns: "1fr", gridTemplateRows: "auto" }}>
              {steps.map((step, i) => {
                const FloatingVisual = floatingCards[i];
                return (
                  <div
                    key={step.id}
                    ref={(el) => setPanelRef(el, i)}
                    className="col-start-1 row-start-1"
                    style={{
                      opacity: i === 0 ? 1 : 0,
                      pointerEvents: i === 0 ? "auto" : "none",
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    <div
                      className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
                      style={{ borderRadius: "42px", padding: "12px", gap: "40px" }}
                    >
                      {/* Left: Content */}
                      <div className="flex flex-col justify-between gap-4 pt-6 pb-6 pl-6 sm:pt-8 sm:pb-8 sm:pl-8">
                        <div className="flex flex-col gap-8 sm:gap-10 max-w-[405px]">
                          {/* Icon */}
                          <div className="flex flex-col gap-8 sm:gap-10">
                            <step.icon size={40} weight="light" className="text-black" />
                            <div className="flex flex-col gap-5 sm:gap-6">
                              <h3 className="text-2xl sm:text-[32px] font-medium text-black leading-[124%] tracking-tight">
                                {step.title}
                              </h3>
                              <p className="text-sm sm:text-base text-black/70 leading-[140%] tracking-tight">
                                {step.description}
                              </p>
                            </div>
                          </div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {step.tags.map((tag, j) => {
                              const TagIcon = step.tagIcons[j];
                              return (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1.5 bg-white rounded-full px-1 pr-4 py-1 text-sm text-black/80 border border-black/10"
                                  style={{ boxShadow: "2px 10.4px 30px rgba(0,0,0,0.06)" }}
                                >
                                  <span className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center">
                                    <TagIcon size={14} weight="bold" className="text-primary" />
                                  </span>
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* CTA Button — Orbix-style dramatic shadow */}
                        <a
                          href="#contacto"
                          className="inline-flex items-center gap-3 bg-[#010101] rounded-full self-start overflow-hidden"
                          style={{
                            padding: "8px 8px 8px 24px",
                            boxShadow: ctaShadow,
                          }}
                        >
                          <span className="text-white text-base sm:text-lg font-normal">
                            Quiero mi web
                          </span>
                          <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                            <ArrowUpRight size={20} weight="bold" className="text-black" />
                          </span>
                        </a>
                      </div>

                      {/* Right: Visual area */}
                      <div
                        className="hidden lg:flex items-center justify-center overflow-hidden"
                        style={{
                          backgroundColor: panelBgs[i],
                          borderRadius: "30px",
                          minHeight: "380px",
                        }}
                      >
                        <FloatingVisual />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
