"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

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

function SiteMockup({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);
  const { bg, accent, text } = project.colors;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="rounded-lg overflow-hidden cursor-pointer"
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

      {/* URL tooltip */}
      <div
        className="absolute -bottom-8 left-1/2 z-20"
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
      className="relative py-28 lg:py-0 lg:min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#0a0a0f" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* Title — centered behind the grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <h2
          className="text-5xl sm:text-7xl lg:text-[7rem] font-bold text-white leading-none tracking-tighter text-center"
          style={{ textShadow: "0 4px 60px rgba(0,0,0,0.9), 0 0 120px rgba(0,0,0,0.6)" }}
        >
          Así se ve<br />nuestro trabajo
        </h2>
      </div>

      {/* 3D perspective scene */}
      <div
        ref={sceneRef}
        className="relative z-0 w-full max-w-7xl mx-auto px-6 py-16 lg:py-24"
        style={{ perspective: "1200px" }}
      >
        <div
          className="grid grid-cols-3 sm:grid-cols-4 gap-5 lg:gap-7"
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
