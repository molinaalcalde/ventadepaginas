"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowUpRight, CaretLeft, CaretRight } from "@phosphor-icons/react";

const projects = [
  { url: "casacolonial.com", colors: { bg: "#E8F5F3", accent: "#0F766E", text: "#1A1A2E" } },
  { url: "centrosonrie.com", colors: { bg: "#FEF0ED", accent: "#E8422A", text: "#1A1A2E" } },
  { url: "reyesbienes.com", colors: { bg: "#EDE9FE", accent: "#7C3AED", text: "#1A1A2E" } },
  { url: "saborcaribeno.com", colors: { bg: "#FEF3C7", accent: "#D97706", text: "#1A1A2E" } },
  { url: "studiowellness.do", colors: { bg: "#F0FDF4", accent: "#0F766E", text: "#1A1A2E" } },
  { url: "legalrd.com", colors: { bg: "#F5F5F4", accent: "#1A1A2E", text: "#52525B" } },
  { url: "flaneur.do", colors: { bg: "#FFFFFF", accent: "#E8422A", text: "#1A1A2E" } },
  { url: "puntacanavillas.com", colors: { bg: "#F0F9FF", accent: "#0EA5E9", text: "#1A1A2E" } },
  { url: "verdemarket.com", colors: { bg: "#ECFDF5", accent: "#059669", text: "#1A1A2E" } },
  { url: "artesanodr.com", colors: { bg: "#FFF7ED", accent: "#EA580C", text: "#1A1A2E" } },
  { url: "puntacana.golf", colors: { bg: "#F5F3FF", accent: "#7C3AED", text: "#1A1A2E" } },
  { url: "islacatering.com", colors: { bg: "#FEF2F2", accent: "#DC2626", text: "#1A1A2E" } },
];

function SiteMockup({ project, showUrl }: { project: (typeof projects)[0]; showUrl?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const { bg, accent, text } = project.colors;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="rounded-xl lg:rounded-lg overflow-hidden cursor-pointer"
        style={{
          boxShadow: hovered
            ? "0 40px 60px -15px rgba(0,0,0,0.6)"
            : "0 20px 40px -15px rgba(0,0,0,0.4)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
        }}
      >
        <div style={{ backgroundColor: bg, aspectRatio: "16/10" }} className="p-[6%]">
          <div className="flex items-center justify-between mb-[8%]">
            <div className="w-[16%] h-[5px] rounded-sm" style={{ backgroundColor: accent }} />
            <div className="flex gap-[2%] w-[35%]">
              <div className="flex-1 h-[3px] rounded-sm" style={{ backgroundColor: text, opacity: 0.1 }} />
              <div className="flex-1 h-[3px] rounded-sm" style={{ backgroundColor: text, opacity: 0.1 }} />
              <div className="flex-1 h-[3px] rounded-sm" style={{ backgroundColor: text, opacity: 0.1 }} />
            </div>
          </div>
          <div className="w-[60%] h-[7px] rounded-sm mb-[4%]" style={{ backgroundColor: text, opacity: 0.14 }} />
          <div className="w-[40%] h-[7px] rounded-sm mb-[4%]" style={{ backgroundColor: text, opacity: 0.09 }} />
          <div className="w-[55%] h-[4px] rounded-sm mb-[6%]" style={{ backgroundColor: text, opacity: 0.06 }} />
          <div className="w-[20%] h-[12px] rounded-sm mb-[8%]" style={{ backgroundColor: accent }} />
          <div className="flex gap-[3%]">
            <div className="flex-1 rounded-md" style={{ backgroundColor: text, opacity: 0.04, aspectRatio: "1/0.65" }} />
            <div className="flex-1 rounded-md" style={{ backgroundColor: text, opacity: 0.04, aspectRatio: "1/0.65" }} />
            <div className="flex-1 rounded-md" style={{ backgroundColor: text, opacity: 0.04, aspectRatio: "1/0.65" }} />
          </div>
        </div>
      </div>

      {/* URL label — always visible on mobile, hover on desktop */}
      {showUrl && (
        <div className="mt-3 text-center">
          <span className="inline-flex items-center gap-1 text-white/70 text-xs font-medium">
            {project.url} <ArrowUpRight size={10} weight="bold" />
          </span>
        </div>
      )}

      {/* Desktop-only hover tooltip */}
      <div
        className="absolute -bottom-8 left-1/2 z-20 hidden lg:block"
        style={{
          opacity: hovered ? 1 : 0,
          transform: `translateX(-50%) ${hovered ? "translateY(0)" : "translateY(-4px)"}`,
          transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
          pointerEvents: "none",
        }}
      >
        <span className="inline-flex items-center gap-1 bg-white text-[#1A1A2E] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-xl whitespace-nowrap">
          {project.url} <ArrowUpRight size={10} weight="bold" />
        </span>
      </div>
    </div>
  );
}

function MobilePortfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth ?? 280;
    const gap = 16;
    const scrollAmount = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardWidth = scrollRef.current.children[0]?.clientWidth ?? 280;
    const gap = 16;
    setActiveIdx(Math.round(scrollLeft / (cardWidth + gap)));
  }, []);

  return (
    <div className="lg:hidden">
      {/* Title */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tighter">
          Así se ve<br />nuestro trabajo
        </h2>
      </div>

      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {projects.map((project) => (
          <div
            key={project.url}
            className="flex-none w-[75vw] max-w-[320px] snap-center"
          >
            <SiteMockup project={project} showUrl />
          </div>
        ))}
      </div>

      {/* Navigation: dots + arrows */}
      <div className="flex items-center justify-center gap-4 mt-6 px-4">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20 transition-colors"
          aria-label="Anterior"
        >
          <CaretLeft size={18} weight="bold" className="text-white/70" />
        </button>

        <div className="flex gap-1.5">
          {projects.map((_, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === activeIdx ? "20px" : "6px",
                backgroundColor: i === activeIdx ? "#0F766E" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20 transition-colors"
          aria-label="Siguiente"
        >
          <CaretRight size={18} weight="bold" className="text-white/70" />
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -6,
    });
  }, []);

  return (
    <section
      className="relative py-16 lg:py-0 lg:min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0f" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* Mobile carousel */}
      <MobilePortfolio />

      {/* Desktop: title centered behind grid */}
      <div className="absolute inset-0 items-center justify-center pointer-events-none z-10 hidden lg:flex">
        <h2
          className="text-[7rem] font-bold text-white leading-none tracking-tighter text-center"
          style={{ textShadow: "0 4px 60px rgba(0,0,0,0.9), 0 0 120px rgba(0,0,0,0.6)" }}
        >
          Así se ve<br />nuestro trabajo
        </h2>
      </div>

      {/* Desktop: 3D perspective scene */}
      <div
        ref={sceneRef}
        className="relative z-0 w-full max-w-7xl mx-auto px-6 py-24 hidden lg:block"
        style={{ perspective: "1200px" }}
      >
        <div
          className="grid grid-cols-4 gap-7"
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.1s ease-out",
          }}
        >
          {projects.map((project) => (
            <SiteMockup key={project.url} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
