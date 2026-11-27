"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import {
  Bed,
  Heartbeat,
  Key,
  ForkKnife,
  Handshake,
  CaretLeft,
  CaretRight,
  Broadcast,
} from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

/* ── Responsive card dimensions (smaller like Orbix) ── */
function getCardDims(w: number) {
  if (w <= 479) return { w: 280, h: 400, r: 20, stage: 440, pad: 20, title: 26, desc: 13, mock: 140 };
  if (w <= 767) return { w: 340, h: 480, r: 28, stage: 520, pad: 28, title: 32, desc: 15, mock: 180 };
  if (w <= 991) return { w: 380, h: 520, r: 32, stage: 560, pad: 30, title: 36, desc: 16, mock: 200 };
  return { w: 460, h: 600, r: 36, stage: 640, pad: 36, title: 40, desc: 17, mock: 240 };
}

/* ── Sector data ── */
const sectores = [
  {
    title: "Hoteles y Turismo",
    description:
      "Reservas directas desde tu web sin comisiones. Tus huéspedes reservan y tú recibes el aviso al WhatsApp.",
    icon: Bed,
    cta: "Quiero más reservas",
    gradient: "linear-gradient(165deg, #E8956D 0%, #D4785A 35%, #C06A4C 70%, #9B5A42 100%)",
    mockupBg: "linear-gradient(135deg, #1a365d 0%, #2d3748 100%)",
  },
  {
    title: "Clínicas y Estética",
    description:
      "Tus pacientes agendan citas online y reciben recordatorios automáticos. Menos cancelaciones, más consultas.",
    icon: Heartbeat,
    cta: "Quiero más pacientes",
    gradient: "linear-gradient(165deg, #7C9FE8 0%, #5A82D4 35%, #4A6FC0 70%, #3D5A9B 100%)",
    mockupBg: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
  },
  {
    title: "Inmobiliarias",
    description:
      "Muestra propiedades con fotos profesionales y captura compradores que buscan en Google.",
    icon: Key,
    cta: "Captar compradores",
    gradient: "linear-gradient(165deg, #6DCFA5 0%, #4DB88A 35%, #3AA074 70%, #2D8760 100%)",
    mockupBg: "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)",
  },
  {
    title: "Restaurantes",
    description:
      "Reservas desde el celular, menú digital y pedidos por WhatsApp. Sin llamadas perdidas.",
    icon: ForkKnife,
    cta: "Llenar más mesas",
    gradient: "linear-gradient(165deg, #E8A06D 0%, #D48A5A 35%, #C07A4C 70%, #9B6342 100%)",
    mockupBg: "linear-gradient(135deg, #2d3748 0%, #1a365d 100%)",
  },
  {
    title: "Servicios Profesionales",
    description:
      "Tus clientes te encuentran en Google, llenan un formulario y tú recibes todo en WhatsApp.",
    icon: Handshake,
    cta: "Conseguir más clientes",
    gradient: "linear-gradient(165deg, #8B7CE8 0%, #7466D4 35%, #6354C0 70%, #52449B 100%)",
    mockupBg: "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)",
  },
];

/* ── Wrapping position (infinite loop) ── */
function wrapOffset(i: number, pos: number, total: number) {
  return i - (pos - Math.round((pos - i) / total) * total);
}

/* ── Laptop mockup SVG (simplified MacBook frame) ── */
function LaptopMockup({ bg, title }: { bg: string; title: string }) {
  return (
    <div className="w-full flex flex-col items-center" style={{ perspective: "800px" }}>
      <div
        className="relative w-full"
        style={{
          transform: "rotateX(4deg)",
          transformOrigin: "50% 100%",
        }}
      >
        {/* Screen bezel */}
        <div
          className="relative mx-auto overflow-hidden"
          style={{
            width: "92%",
            aspectRatio: "16 / 10",
            borderRadius: "8px 8px 0 0",
            border: "2px solid rgba(0,0,0,0.15)",
            borderBottom: "none",
            background: bg,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          {/* Browser chrome bar */}
          <div
            className="flex items-center gap-1.5 px-3"
            style={{
              height: "22px",
              background: "rgba(255,255,255,0.1)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-red-400/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
            <div className="w-2 h-2 rounded-full bg-green-400/70" />
            <div
              className="ml-3 flex-1 h-3.5 rounded-sm"
              style={{ background: "rgba(255,255,255,0.08)", maxWidth: "140px" }}
            />
          </div>
          {/* Fake page content */}
          <div className="p-3 space-y-2">
            <div className="h-3 rounded-sm bg-white/15 w-3/4" />
            <div className="h-2 rounded-sm bg-white/10 w-full" />
            <div className="h-2 rounded-sm bg-white/10 w-5/6" />
            <div className="flex gap-2 mt-3">
              <div className="h-6 rounded bg-white/12 flex-1" />
              <div className="h-6 rounded bg-white/12 flex-1" />
            </div>
            <div className="h-12 rounded bg-white/8 w-full mt-2" />
          </div>
        </div>
        {/* Keyboard base */}
        <div
          className="mx-auto"
          style={{
            width: "100%",
            height: "10px",
            background: "linear-gradient(180deg, #c0c0c0 0%, #a8a8a8 100%)",
            borderRadius: "0 0 6px 6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          {/* Notch */}
          <div
            className="mx-auto"
            style={{
              width: "28%",
              height: "3px",
              background: "rgba(0,0,0,0.08)",
              borderRadius: "0 0 4px 4px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Sectores() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const isVisibleRef = useRef(false);
  const lastTimeRef = useRef(0);
  const targetPosRef = useRef(0);
  const currentPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [dims, setDims] = useState(() => ({
    w: 460, h: 600, r: 36, stage: 640, pad: 36, title: 40, desc: 17, mock: 240,
  }));
  const [, forceUpdate] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalCards = useRef(0);
  const cardData = useRef(sectores);

  useEffect(() => {
    const data = [...sectores];
    while (data.length < 8) {
      data.push(...sectores.slice(0, 8 - data.length));
    }
    cardData.current = data;
    totalCards.current = data.length;
    setDims(getCardDims(window.innerWidth));
    forceUpdate((n) => n + 1);

    const onResize = () => setDims(getCardDims(window.innerWidth));
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

      if (absOffset >= 2.8) {
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
        card.style.visibility = "hidden";
        continue;
      }

      const rotation = offset * 21;

      let scale: number;
      if (absOffset <= 0.7) {
        scale = 1 - 0.04 * absOffset;
      } else {
        const clamped = Math.min(absOffset, 2);
        const fadeProgress = (clamped - 0.7) / 1.3;
        scale = 1 - 0.7 * fadeProgress * fadeProgress;
      }

      const zIndex = 5 - Math.round(absOffset);

      card.style.transform = `translate3d(-50%, 0px, 0px) rotate(${rotation}deg) scale(${scale})`;
      card.style.opacity = `${Math.max(0, scale)}`;
      card.style.zIndex = `${zIndex}`;
      card.style.pointerEvents = "auto";
      card.style.visibility = "visible";
    }
  }, []);

  /* ── Animation loop ── */
  const animationLoop = useCallback(
    (timestamp: number) => {
      rafRef.current = null;
      const dt = lastTimeRef.current
        ? Math.min(64, timestamp - lastTimeRef.current)
        : 16.67;
      lastTimeRef.current = timestamp;

      const smoothing = isDraggingRef.current ? 0.3 : 0.12;
      const target = targetPosRef.current;
      currentPosRef.current +=
        (target - currentPosRef.current) * (1 - Math.pow(1 - smoothing, dt / 16.67));

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
    if (!rafRef.current && isVisibleRef.current) rafRef.current = requestAnimationFrame(animationLoop);
  }, [animationLoop]);

  const snapTo = useCallback(
    (index: number) => {
      targetPosRef.current = Math.round(index);
      setActiveIndex(((Math.round(index) % sectores.length) + sectores.length) % sectores.length);
      startAnimation();
    },
    [startAnimation]
  );

  /* ── Autoplay ── */
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      snapTo(Math.round(targetPosRef.current) + 1);
      startAutoplay();
    }, 4000);
  }, [snapTo]);

  /* ── Navigation ── */
  const goNext = useCallback(() => {
    stopAutoplay();
    snapTo(Math.round(targetPosRef.current) + 1);
    startAutoplay();
  }, [snapTo, stopAutoplay, startAutoplay]);

  const goPrev = useCallback(() => {
    stopAutoplay();
    snapTo(Math.round(targetPosRef.current) - 1);
    startAutoplay();
  }, [snapTo, stopAutoplay, startAutoplay]);

  /* ── Pointer (drag) ── */
  const onPointerDown = useCallback(
    (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartPosRef.current = targetPosRef.current;
      stopAutoplay();
      if (stageRef.current) stageRef.current.style.cursor = "grabbing";
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
      targetPosRef.current = dragStartPosRef.current - dx / 380;
      startAnimation();
    },
    [startAnimation]
  );

  const onPointerUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (stageRef.current) stageRef.current.style.cursor = "grab";
    snapTo(Math.round(targetPosRef.current));
    startAutoplay();
  }, [snapTo, startAutoplay]);

  /* ── Wheel ── */
  const onWheel = useCallback(
    (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
      if (Math.abs(delta) < 0.5) return;
      e.preventDefault();
      stopAutoplay();
      targetPosRef.current += delta / 500;
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

    // Render immediately so cards are visible before IntersectionObserver fires
    renderCards();

    stage.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    stage.addEventListener("wheel", onWheel, { passive: false });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0].isIntersecting;
        isVisibleRef.current = visible;
        if (visible) {
          startAutoplay();
        } else {
          stopAutoplay();
          if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
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
    renderCards, onPointerDown, onPointerMove, onPointerUp,
    onWheel, startAutoplay, stopAutoplay,
  ]);

  return (
    <section
      id="sectores"
      className="py-28 lg:py-36 bg-surface-soft relative"
      style={{ overflow: "clip" }}
    >
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
        <div className="relative">
          <div
            ref={stageRef}
            className="relative flex flex-col justify-center items-center select-none"
            style={{
              height: `${dims.stage}px`,
              cursor: "grab",
              touchAction: "pan-y",
            }}
          >
            <div
              className="relative flex justify-center items-center w-full"
              style={{ height: "100%" }}
            >
              {cardData.current.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <div
                    key={`${sector.title}-${i}`}
                    ref={(el) => {
                      if (el) {
                        cardsRef.current[i] = el;
                        // Render cards as soon as refs are assigned
                        if (i === 0) requestAnimationFrame(() => renderCards());
                      }
                    }}
                    className="absolute will-change-transform"
                    style={{
                      transformOrigin: "50% 360%",
                      width: `${dims.w}px`,
                      height: `${dims.h}px`,
                      borderRadius: `${dims.r}px`,
                      overflow: "hidden",
                      opacity: 0,
                      left: "50%",
                    }}
                  >
                    {/* Bevel / glass border effect */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        borderRadius: `${dims.r}px`,
                        border: "1.5px solid rgba(255,255,255,0.35)",
                        boxShadow:
                          "inset 0 1px 0 0 rgba(255,255,255,0.4), inset 0 -1px 0 0 rgba(0,0,0,0.08), 0 8px 32px -4px rgba(0,0,0,0.12), 0 2px 8px -2px rgba(0,0,0,0.06)",
                        zIndex: 2,
                      }}
                    />

                    {/* Card surface */}
                    <div
                      className="w-full h-full relative flex flex-col items-center"
                      style={{
                        background: sector.gradient,
                        padding: `${dims.pad}px`,
                        paddingBottom: `${dims.pad * 0.6}px`,
                      }}
                    >
                      {/* Top content */}
                      <div className="flex flex-col items-center text-center flex-1 justify-start" style={{ gap: `${dims.pad * 0.5}px` }}>
                        {/* Badge */}
                        <div className="flex items-center" style={{ gap: "1px" }}>
                          <div
                            className="flex items-center justify-center gap-1.5"
                            style={{
                              backgroundColor: "#E8422A",
                              borderRadius: "100px",
                              height: dims.w < 350 ? "32px" : "38px",
                              padding: dims.w < 350 ? "6px 12px" : "6px 16px",
                            }}
                          >
                            <Broadcast
                              size={dims.w < 350 ? 14 : 16}
                              weight="bold"
                              className="text-white"
                            />
                          </div>
                          <div
                            className="flex items-center justify-center"
                            style={{
                              backgroundColor: "#FFFFFF",
                              borderRadius: "100px",
                              height: dims.w < 350 ? "32px" : "38px",
                              padding: dims.w < 350 ? "6px 12px" : "6px 16px",
                            }}
                          >
                            <span
                              className="font-semibold text-navy-deep"
                              style={{
                                fontSize: dims.w < 350 ? "13px" : "15px",
                                lineHeight: 1,
                              }}
                            >
                              En vivo
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className="font-extrabold text-white"
                          style={{
                            fontSize: `${dims.title}px`,
                            letterSpacing: "-0.02em",
                            lineHeight: "110%",
                            marginTop: `${dims.pad * 0.2}px`,
                          }}
                        >
                          {sector.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="text-white/80 max-w-[380px]"
                          style={{
                            fontSize: `${dims.desc}px`,
                            lineHeight: "150%",
                          }}
                        >
                          {sector.description}
                        </p>
                      </div>

                      {/* Laptop mockup */}
                      <div className="w-full mt-auto" style={{ maxWidth: `${dims.mock + 60}px` }}>
                        <LaptopMockup bg={sector.mockupBg} title={sector.title} />
                      </div>

                      {/* CTA Button overlapping the bottom */}
                      <a
                        href="#contacto"
                        className="absolute inline-flex items-center gap-2 font-semibold text-navy-deep hover:-translate-y-0.5 active:scale-95"
                        style={{
                          bottom: `${dims.pad * 0.5}px`,
                          backgroundColor: "#FFFFFF",
                          borderRadius: "99px",
                          height: dims.w < 350 ? "40px" : "48px",
                          padding: dims.w < 350 ? "0 14px 0 18px" : "0 16px 0 24px",
                          fontSize: dims.w < 350 ? "13px" : "15px",
                          fontWeight: 600,
                          transition: "all .35s cubic-bezier(.16,1,.3,1)",
                          boxShadow:
                            "0 0 #0000, -1.1px 1.2px .1px #00000003, -2.2px 2.4px .3px #00000005, -3.3px 3.7px .5px #00000005, -4.6px 5.1px .7px #00000008, -6px 6.6px .9px #00000008, -7.6px 8.4px 1.3px #00000008, -9.5px 10.5px 1.8px #00000008, -11.8px 13px 2.4px #00000008",
                          zIndex: 3,
                        }}
                      >
                        {sector.cta}
                        <span className="w-6 h-6 rounded-full bg-navy-deep flex items-center justify-center shrink-0">
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                            <path d="M4 4l8 8M12 4v8H4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all hover:scale-110 active:scale-95 hover:bg-white"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
            aria-label="Anterior"
          >
            <CaretLeft size={20} weight="bold" className="text-navy-deep" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all hover:scale-110 active:scale-95 hover:bg-white"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
            aria-label="Siguiente"
          >
            <CaretRight size={20} weight="bold" className="text-navy-deep" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {sectores.map((s, i) => (
              <button
                key={s.title}
                onClick={() => {
                  stopAutoplay();
                  const current = Math.round(targetPosRef.current);
                  const currentMod = ((current % sectores.length) + sectores.length) % sectores.length;
                  const diff = i - currentMod;
                  snapTo(current + diff);
                  startAutoplay();
                }}
                className="flex items-center justify-center transition-all"
                style={{
                  minWidth: "44px",
                  minHeight: "44px",
                }}
                aria-label={`Ir a ${s.title}`}
              >
                <span
                  style={{
                    display: "block",
                    width: activeIndex === i ? "28px" : "8px",
                    height: "8px",
                    borderRadius: "99px",
                    backgroundColor: activeIndex === i ? "#0F766E" : "rgba(15,118,110,0.2)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
