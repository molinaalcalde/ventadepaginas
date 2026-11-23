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
      "Desde el primer mensaje me explicaron todo clarito, sin tecnicismos. En 10 días tenía mi web funcionando con menú, horarios y un formulario donde los clientes reservan solos. Ahora recibo entre 15 y 20 reservaciones nuevas por semana sin mover un dedo.",
  },
  {
    name: "Dr. Ernesto Villalba",
    role: "Director, Clínica Dental Villalba",
    location: "Ciudad de Panamá, Panamá",
    initials: "EV",
    stars: 5,
    quote:
      "Me atendieron de manera súper profesional. Me mostraron el diseño antes de construirlo y quedó exactamente como lo imaginaba. Los pacientes ahora agendan desde la web a cualquier hora y el formulario me llega directo al WhatsApp. Todo en menos de dos semanas.",
  },
  {
    name: "Natalia Obando",
    role: "Propietaria, Studio N Beauty",
    location: "San José, Costa Rica",
    initials: "NO",
    stars: 5,
    quote:
      "Yo no sabía nada de páginas web y ellos se encargaron de absolutamente todo. La web se ve premium, mis clientas me dicen que se ve carísima. El proceso fue rápido, me explicaron cada paso y me capacitaron para usarla. Las citas por semana me subieron casi el triple.",
  },
  {
    name: "Rafael Almonte",
    role: "Gerente, Almonte Propiedades",
    location: "Santiago, RD",
    initials: "RA",
    stars: 5,
    quote:
      "Lo que más me gustó fue la atención. Siempre disponibles, me respondían al momento. La web quedó profesional, con un formulario para captación de prospectos que me organiza todo automáticamente. En el primer mes cerré tres ventas que antes se me hubieran escapado.",
  },
];

const DESKTOP_GAP = 12;
const MOBILE_GAP = 7;
const CARD_SPACING = 72;

export default function Testimonials() {
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef(0);

  const setCardRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) cardsRef.current[i] = el;
  }, []);

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
      surface.style.filter = `brightness(${1 - 0.06 * overlap})`;
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

        {/* Stacked cards */}
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
              <div
                data-surface=""
                className="rounded-2xl overflow-hidden border border-border-subtle"
                style={{
                  transformOrigin: "50% 0",
                  backfaceVisibility: "hidden",
                  background: i % 2 === 0
                    ? "linear-gradient(135deg, #E8F5F3 0%, #FFFFFF 60%, #FEF0ED 100%)"
                    : "linear-gradient(135deg, #FEF0ED 0%, #FFFFFF 60%, #E8F5F3 100%)",
                  boxShadow: "0 -4px 30px rgba(26,26,46,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px] lg:min-h-[340px]">
                  {/* Left: Avatar + Info */}
                  <div className="relative flex items-center justify-center p-10 lg:p-14">
                    <Quotes
                      weight="fill"
                      className="absolute top-6 left-6 text-primary/[0.06]"
                      size={100}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div
                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center"
                        style={{
                          background: i % 2 === 0
                            ? "linear-gradient(135deg, #0F766E, #0D6560)"
                            : "linear-gradient(135deg, #E8422A, #C1341F)",
                        }}
                      >
                        <span className="text-2xl lg:text-3xl font-bold text-white">
                          {t.initials}
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-navy-deep">{t.name}</p>
                        <p className="text-sm text-slate-text mt-0.5">{t.role}</p>
                        <p className="text-xs text-slate-light mt-0.5">{t.location}</p>
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
                    <blockquote className="text-base lg:text-lg text-slate-text leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-8 pt-5 border-t border-border-subtle">
                      <span className="text-xs font-semibold text-slate-light uppercase tracking-widest">
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
