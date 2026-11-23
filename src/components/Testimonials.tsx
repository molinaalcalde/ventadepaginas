"use client";

import { useRef, useEffect, useCallback } from "react";
import { Star, Quotes } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    name: "Carolina Reyes",
    role: "Dueña, Restaurante El Bohío",
    location: "Santo Domingo, RD",
    initials: "CR",
    stars: 5,
    quote:
      "Antes la gente nos encontraba solo de boca en boca. Desde que tenemos la web, recibimos entre 15 y 20 reservaciones nuevas por semana que antes simplemente no llegaban. El link de bio en Instagram fue lo que más nos sorprendió.",
  },
  {
    name: "Dr. Ernesto Villalba",
    role: "Director, Clínica Dental Villalba",
    location: "Ciudad de Panamá, Panamá",
    initials: "EV",
    stars: 5,
    quote:
      "Con la nueva web empezamos a aparecer cuando alguien busca dentista en el área, y eso se tradujo en el doble de consultas nuevas al mes. El CRM me ayuda a saber exactamente qué pacientes no han vuelto en meses.",
  },
  {
    name: "Natalia Obando",
    role: "Propietaria, Studio N Beauty",
    location: "San José, Costa Rica",
    initials: "NO",
    stars: 5,
    quote:
      "Mis clientas me decían que antes no podían encontrar mis precios ni mis servicios en ningún lado. Ahora entran al link de mi Instagram, ven todo, y me escriben ya decididas. Las citas por semana me subieron casi el triple.",
  },
  {
    name: "Rafael Almonte",
    role: "Gerente, Almonte Propiedades",
    location: "Santiago, RD",
    initials: "RA",
    stars: 5,
    quote:
      "Lo que más cambió fue el CRM. Antes llevaba mis contactos en un cuaderno y se me iban prospectos porque no les daba seguimiento a tiempo. Ahora tengo todo organizado y cerré tres ventas en el primer mes que se me hubieran escapado.",
  },
];

const DESKTOP_GAP = 12;
const MOBILE_GAP = 7;
const CARD_SPACING = 72;
const CARD_SPACING_MOBILE = 48;

export default function Testimonials() {
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef(0);

  const setCardRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) cardsRef.current[i] = el;
  }, []);

  /* ── Set --stack-top per card ── */
  const layoutCards = useCallback(() => {
    const headerH = document.querySelector("header")?.getBoundingClientRect().height || 80;
    const gap = window.innerWidth < 768 ? MOBILE_GAP : DESKTOP_GAP;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const top = Math.min(
        headerH + 16 + i * gap,
        window.innerHeight - card.offsetHeight - 18
      );
      card.style.setProperty("--stack-top", `${top}px`);
    });
  }, []);

  /* ── Scroll handler: scale + brightness based on overlap ── */
  const onScroll = useCallback(() => {
    rafRef.current = 0;
    const container = stackRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    if (containerRect.bottom < 0 || containerRect.top > window.innerHeight) return;

    const cards = cardsRef.current;
    const rects = cards.map((c) => c?.getBoundingClientRect());

    cards.forEach((card, i) => {
      if (!card || !rects[i]) return;
      const surface = card.querySelector<HTMLElement>("[data-surface]");
      if (!surface) return;

      const nextRect = rects[i + 1];
      const thisTop = parseFloat(card.style.getPropertyValue("--stack-top")) || 100;

      let overlap = 0;
      if (nextRect) {
        overlap = Math.max(0, Math.min(1,
          (thisTop + rects[i]!.height - nextRect.top) / (0.8 * rects[i]!.height)
        ));
      }

      surface.style.transform = `scale(${1 - 0.035 * overlap})`;
      surface.style.filter = `brightness(${1 - 0.055 * overlap})`;
    });
  }, []);

  useEffect(() => {
    layoutCards();
    window.addEventListener("resize", layoutCards);

    const scrollHandler = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(onScroll);
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("resize", layoutCards);
      window.removeEventListener("scroll", scrollHandler);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [layoutCards, onScroll]);

  return (
    <section
      id="testimonios"
      className="py-28 lg:py-36 bg-warm-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft border border-border-subtle mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" size={16} className="text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-navy-deep">4.9/5</span>
              <span className="text-xs text-slate-light">· +140 negocios</span>
            </div>
          </ScrollReveal>
          <TextReveal
            as="h2"
            className="text-fluid-h2 font-extrabold text-navy-deep leading-tight"
          >
            Lo que dicen nuestros{" "}
            <span className="text-primary">clientes</span>
          </TextReveal>
        </div>

        {/* Stacked cards container */}
        <div
          ref={stackRef}
          className="relative isolate max-w-5xl mx-auto"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: `${CARD_SPACING}px`,
            paddingBottom: "40px",
            overflow: "visible",
            overflowAnchor: "none",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => setCardRef(el, i)}
              className="will-change-auto"
              style={{
                position: "sticky" as const,
                top: "var(--stack-top, 100px)",
                zIndex: i + 1,
                scrollMarginTop: "100px",
              }}
            >
              {/* Surface — receives scale + brightness transforms */}
              <div
                data-surface=""
                className="rounded-2xl overflow-hidden"
                style={{
                  transformOrigin: "50% 0",
                  backfaceVisibility: "hidden",
                  backgroundColor: "#1A1A2E",
                  boxShadow: "0 -8px 24px rgba(26,26,46,0.08)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px] lg:min-h-[360px]">
                  {/* Left: Avatar + Info */}
                  <div
                    className="relative flex items-center justify-center p-10 lg:p-14"
                    style={{
                      backgroundColor: i % 2 === 0
                        ? "rgba(15,118,110,0.12)"
                        : "rgba(232,66,42,0.08)",
                    }}
                  >
                    <Quotes
                      weight="fill"
                      className="absolute top-6 left-6 text-white/[0.05]"
                      size={100}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div
                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: i % 2 === 0
                            ? "rgba(15,118,110,0.35)"
                            : "rgba(232,66,42,0.25)",
                          border: "2px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <span className="text-2xl lg:text-3xl font-bold text-white/90">
                          {t.initials}
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-white">{t.name}</p>
                        <p className="text-sm text-white/50 mt-0.5">{t.role}</p>
                        <p className="text-xs text-white/30 mt-0.5">{t.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Quote */}
                  <div className="flex flex-col justify-center p-8 lg:p-14">
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(t.stars)].map((_, j) => (
                        <Star key={j} weight="fill" size={18} className="text-amber-400" />
                      ))}
                    </div>
                    <blockquote className="text-base lg:text-lg text-white/80 leading-relaxed font-medium">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-8 pt-5 border-t border-white/[0.06]">
                      <span className="text-xs font-semibold text-white/25 uppercase tracking-widest">
                        {i + 1} / {testimonials.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
