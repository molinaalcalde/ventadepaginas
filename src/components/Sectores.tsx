"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { Bed, Heartbeat, Key, ForkKnife, Handshake } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

/* ── Responsive card dimensions ── */
function getCardDimensions(width: number) {
  if (width <= 479) return { w: 310, h: 380, radius: 20, stageH: 440, pad: 16, fontSize: 32, descSize: 15 };
  if (width <= 767) return { w: 380, h: 480, radius: 24, stageH: 520, pad: 24, fontSize: 36, descSize: 17 };
  if (width <= 991) return { w: 400, h: 520, radius: 32, stageH: 560, pad: 28, fontSize: 40, descSize: 18 };
  if (width >= 1920) return { w: 670, h: 760, radius: 40, stageH: 700, pad: 40, fontSize: 48, descSize: 20 };
  return { w: 620, h: 720, radius: 40, stageH: 620, pad: 40, fontSize: 48, descSize: 20 };
}

/* ── Sector data ── */
const sectores = [
  {
    title: "Hoteles y Turismo",
    description:
      "Recibe reservas directas desde tu web sin pagar comisiones a Booking ni Expedia. Tus huéspedes reservan y tú recibes el aviso al WhatsApp.",
    icon: Bed,
    cta: "Reservas directas para mi hotel",
    gradient: "linear-gradient(165deg, #0D6560 0%, #0F766E 40%, #34D399 100%)",
  },
  {
    title: "Clínicas y Estética",
    description:
      "Tus pacientes agendan citas online y reciben recordatorios automáticos. Menos llamadas, menos cancelaciones, más consultas.",
    icon: Heartbeat,
    cta: "Citas online para mi clínica",
    gradient: "linear-gradient(165deg, #0F766E 0%, #14B8A6 40%, #5EEAD4 100%)",
  },
  {
    title: "Inmobiliarias",
    description:
      "Muestra tus propiedades con fotos profesionales y captura compradores de USA y Europa que buscan en Google.",
    icon: Key,
    cta: "Captar compradores internacionales",
    gradient: "linear-gradient(165deg, #134E4A 0%, #0F766E 40%, #2DD4BF 100%)",
  },
  {
    title: "Restaurantes y Eventos",
    description:
      "Reservas de mesa desde el celular, menú digital y pedidos por WhatsApp. Sin llamadas perdidas, sin hojas de papel.",
    icon: ForkKnife,
    cta: "Adiós a las llamadas perdidas",
    gradient: "linear-gradient(165deg, #0D6560 0%, #0F766E 40%, #6EE7B7 100%)",
  },
  {
    title: "Servicios Profesionales",
    description:
      "Tus clientes te encuentran en Google, llenan un formulario y tú recibes todo en WhatsApp. Así de fácil.",
    icon: Handshake,
    cta: "Automatizar mi captación",
    gradient: "linear-gradient(165deg, #115E59 0%, #0F766E 40%, #99F6E4 100%)",
  },
];

/* ── Wrapping position function (infinite loop) ── */
function wrapOffset(cardIndex: number, currentPos: number, total: number) {
  return cardIndex - (currentPos - Math.round((currentPos - cardIndex) / total) * total);
}

export default function Sectores() {
  const stageRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const targetPosRef = useRef(0);
  const currentPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [dims, setDims] = useState({ w: 620, h: 720, radius: 40, stageH: 620, pad: 40, fontSize: 48, descSize: 20 });
  const [, forceUpdate] = useState(0);

  // Clone cards for infinite loop (need minimum 8)
  const totalCards = useRef(0);
  const cardData = useRef(sectores);

  // Ensure at least 8 cards by cloning + responsive dimensions
  useEffect(() => {
    const data = [...sectores];
    while (data.length < 8) {
      data.push(...sectores.slice(0, 8 - data.length));
    }
    cardData.current = data;
    totalCards.current = data.length;
    setDims(getCardDimensions(window.innerWidth));
    forceUpdate((n) => n + 1);

    const onResize = () => setDims(getCardDimensions(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Render arc positions ── */
  const renderCards = useCallback(() => {
    const cards = cardsRef.current;
    const count = totalCards.current;
    if (!count) return;

    const pos = currentPosRef.current;

    for (let i = 0; i < count; i++) {
      const card = cards[i];
      if (!card) continue;

      const offset = wrapOffset(i, pos, count);
      const absOffset = Math.abs(offset);

      // Hide cards too far away
      if (absOffset >= 2.8) {
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
        card.style.visibility = "hidden";
        continue;
      }

      // Rotation: 21 degrees per position
      const rotation = offset * 21;

      // Scale: reduce 4% per position, with quadratic falloff after 0.7
      let scale: number;
      if (absOffset <= 0.7) {
        scale = 1 - 0.04 * absOffset;
      } else {
        const clamped = Math.min(absOffset, 2);
        const fadeProgress = (clamped - 0.7) / 1.3;
        scale = 1 - 0.7 * fadeProgress * fadeProgress;
      }

      // Z-index: center highest
      const zIndex = 50 - Math.round(absOffset) * 10;

      card.style.transform = `translate3d(-50%, 0px, 0px) rotate(${rotation}deg) scale(${scale})`;
      card.style.opacity = `${Math.max(0, scale)}`;
      card.style.zIndex = `${zIndex}`;
      card.style.pointerEvents = "auto";
      card.style.visibility = "visible";
    }
  }, []);

  /* ── Animation loop (spring/lerp) ── */
  const animationLoop = useCallback(
    (timestamp: number) => {
      rafRef.current = null;
      const dt = lastTimeRef.current
        ? Math.min(64, timestamp - lastTimeRef.current)
        : 16.67;
      lastTimeRef.current = timestamp;

      const smoothing = isDraggingRef.current ? 0.3 : 0.12;
      const target = targetPosRef.current;
      const current = currentPosRef.current;

      currentPosRef.current +=
        (target - current) * (1 - Math.pow(1 - smoothing, dt / 16.67));

      if (Math.abs(target - currentPosRef.current) < 0.0005) {
        currentPosRef.current = target;
        renderCards();
        lastTimeRef.current = 0;
        return;
      }

      renderCards();
      rafRef.current = requestAnimationFrame(animationLoop);
    },
    [renderCards]
  );

  const startAnimation = useCallback(() => {
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(animationLoop);
    }
  }, [animationLoop]);

  const snapTo = useCallback(
    (index: number) => {
      targetPosRef.current = Math.round(index);
      startAnimation();
    },
    [startAnimation]
  );

  /* ── Autoplay ── */
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      snapTo(Math.round(targetPosRef.current) + 1);
      startAutoplay();
    }, 3000);
  }, [snapTo]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  /* ── Pointer (drag) handlers ── */
  const onPointerDown = useCallback(
    (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartPosRef.current = targetPosRef.current;
      stopAutoplay();
      const stage = stageRef.current;
      if (stage) stage.style.cursor = "grabbing";
      if (e.pointerType !== "touch") {
        (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
      }
    },
    [stopAutoplay]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - dragStartXRef.current;
      targetPosRef.current = dragStartPosRef.current - dx / 440;
      startAnimation();
    },
    [startAnimation]
  );

  const onPointerUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const stage = stageRef.current;
    if (stage) stage.style.cursor = "grab";
    snapTo(Math.round(targetPosRef.current));
    startAutoplay();
  }, [snapTo, startAutoplay]);

  /* ── Wheel handler ── */
  const onWheel = useCallback(
    (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? (e.shiftKey ? e.deltaY : e.deltaX) : e.deltaX;
      if (Math.abs(delta) < 0.5) return;
      e.preventDefault();
      stopAutoplay();
      targetPosRef.current += delta / 600;
      startAnimation();

      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
      wheelTimeoutRef.current = setTimeout(() => {
        snapTo(Math.round(targetPosRef.current));
        startAutoplay();
      }, 120);
    },
    [startAnimation, snapTo, stopAutoplay, startAutoplay]
  );

  /* ── Setup ── */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !totalCards.current) return;

    // Initial render
    renderCards();

    // Pointer events
    stage.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    stage.addEventListener("wheel", onWheel, { passive: false });

    // Autoplay with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(stage);

    return () => {
      stage.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      stage.removeEventListener("wheel", onWheel);
      observer.disconnect();
      stopAutoplay();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, [
    renderCards,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onWheel,
    startAutoplay,
    stopAutoplay,
  ]);

  return (
    <section id="sectores" className="py-28 lg:py-36 bg-surface-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16 lg:mb-20">
          <ScrollReveal direction="up">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4">
              Adaptado a tu sector
            </span>
          </ScrollReveal>
          <TextReveal
            as="h2"
            className="text-fluid-h2 font-extrabold text-navy-deep leading-tight"
          >
            Tu tipo de negocio,{" "}
            <span className="text-primary">tu tipo de web</span>
          </TextReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-5 text-slate-text text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Cada negocio tiene su forma de vender. Tu web debe reflejar cómo compran tus clientes.
            </p>
          </ScrollReveal>
        </div>

        {/* Arc Carousel */}
        <div
          ref={stageRef}
          className="relative flex flex-col justify-center items-center select-none"
          style={{
            height: `${dims.stageH}px`,
            cursor: "grab",
            touchAction: "pan-y",
          }}
        >
          <div
            ref={deckRef}
            className="relative flex justify-center items-center w-full"
            style={{ height: "100%", gap: "16px" }}
          >
            {cardData.current.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <div
                  key={`${sector.title}-${i}`}
                  ref={(el) => {
                    if (el) cardsRef.current[i] = el;
                  }}
                  className="absolute will-change-transform"
                  style={{
                    transformOrigin: "50% 360%",
                    width: `${dims.w}px`,
                    height: `${dims.h}px`,
                    borderRadius: `${dims.radius}px`,
                    overflow: "hidden",
                    opacity: 0,
                    left: "50%",
                  }}
                >
                  {/* Card surface with gradient */}
                  <div
                    className="w-full h-full relative flex flex-col justify-between items-center"
                    style={{
                      background: sector.gradient,
                      padding: `${dims.pad}px`,
                    }}
                  >
                    {/* Top content */}
                    <div className="flex flex-col items-center gap-6 sm:gap-9 text-center">
                      {/* Badge */}
                      <div className="flex items-center" style={{ gap: "1px" }}>
                        <div
                          className="flex items-center justify-center"
                          style={{
                            backgroundColor: "#E8422A",
                            borderRadius: "100px",
                            height: dims.w < 400 ? "36px" : "42px",
                            padding: dims.w < 400 ? "6px 14px" : "8px 20px",
                          }}
                        >
                          <Icon size={dims.w < 400 ? 18 : 22} weight="bold" className="text-white" />
                        </div>
                        <div
                          className="flex items-center justify-center"
                          style={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "100px",
                            height: dims.w < 400 ? "36px" : "42px",
                            padding: dims.w < 400 ? "6px 14px" : "8px 20px",
                          }}
                        >
                          <span
                            className="font-medium text-navy-deep"
                            style={{
                              fontSize: dims.w < 400 ? "14px" : "18px",
                              lineHeight: "145%",
                            }}
                          >
                            En vivo
                          </span>
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex flex-col items-center gap-3 sm:gap-5 max-w-[540px]">
                        <h3
                          className="font-extrabold text-white"
                          style={{
                            fontSize: `${dims.fontSize}px`,
                            letterSpacing: "-0.32px",
                            lineHeight: "110%",
                          }}
                        >
                          {sector.title}
                        </h3>
                        <p
                          className="text-white/85"
                          style={{
                            fontSize: `${dims.descSize}px`,
                            lineHeight: "145%",
                          }}
                        >
                          {sector.description}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center font-medium text-navy-deep transition-transform hover:scale-105"
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "99px",
                        height: dims.w < 400 ? "44px" : "56px",
                        padding: dims.w < 400 ? "0 20px" : "0 32px",
                        fontSize: dims.w < 400 ? "14px" : "16px",
                        fontWeight: 500,
                        boxShadow:
                          "rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0.01) -1.1px 1.2px 0.1px 0px, rgba(0,0,0,0.02) -2.2px 2.4px 0.3px 0px, rgba(0,0,0,0.02) -3.3px 3.7px 0.5px 0px, rgba(0,0,0,0.03) -4.6px 5.1px 0.7px 0px, rgba(0,0,0,0.03) -6px 6.6px 0.9px 0px, rgba(0,0,0,0.03) -7.6px 8.4px 1.3px 0px, rgba(0,0,0,0.03) -9.5px 10.5px 1.8px 0px, rgba(0,0,0,0.03) -11.8px 13px 2.4px 0px",
                      }}
                    >
                      {sector.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Drag hint (desktop only) */}
          <div className="hidden md:flex items-center gap-3 absolute bottom-4 left-1/2 -translate-x-1/2 opacity-50 pointer-events-none select-none">
            <div className="w-2.5 h-2.5 rounded-full bg-navy-deep" />
            <span className="text-xs font-semibold uppercase tracking-widest text-navy-deep">Desliza</span>
            <div className="w-2.5 h-2.5 rounded-full bg-navy-deep" />
          </div>
        </div>
      </div>
    </section>
  );
}
