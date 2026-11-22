"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="rounded-lg overflow-hidden cursor-pointer"
        style={{
          boxShadow: hovered
            ? "0 50px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)"
            : "0 25px 50px -15px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
          transform: hovered ? "translateZ(40px) scale(1.05)" : "translateZ(0) scale(1)",
          transformStyle: "preserve-3d",
          transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
        }}
      >
        <div style={{ backgroundColor: bg, aspectRatio: "16/10" }} className="relative p-[6%]">
          {/* Nav */}
          <div className="flex items-center justify-between mb-[8%]">
            <div className="w-[16%] h-[5px] rounded-sm" style={{ backgroundColor: accent }} />
            <div className="flex gap-[2%] w-[35%]">
              <div className="flex-1 h-[3px] rounded-sm" style={{ backgroundColor: text, opacity: 0.1 }} />
              <div className="flex-1 h-[3px] rounded-sm" style={{ backgroundColor: text, opacity: 0.1 }} />
              <div className="flex-1 h-[3px] rounded-sm" style={{ backgroundColor: text, opacity: 0.1 }} />
            </div>
          </div>
          {/* Headline */}
          <div className="w-[60%] h-[7px] rounded-sm mb-[4%]" style={{ backgroundColor: text, opacity: 0.14 }} />
          <div className="w-[40%] h-[7px] rounded-sm mb-[4%]" style={{ backgroundColor: text, opacity: 0.09 }} />
          <div className="w-[55%] h-[4px] rounded-sm mb-[6%]" style={{ backgroundColor: text, opacity: 0.06 }} />
          {/* CTA */}
          <div className="w-[20%] h-[12px] rounded-sm mb-[8%]" style={{ backgroundColor: accent }} />
          {/* Cards */}
          <div className="flex gap-[3%]">
            <div className="flex-1 rounded-md" style={{ backgroundColor: text, opacity: 0.04, aspectRatio: "1/0.65" }} />
            <div className="flex-1 rounded-md" style={{ backgroundColor: text, opacity: 0.04, aspectRatio: "1/0.65" }} />
            <div className="flex-1 rounded-md" style={{ backgroundColor: text, opacity: 0.04, aspectRatio: "1/0.65" }} />
          </div>
        </div>
      </div>

      {/* URL tooltip */}
      <div
        className="absolute -bottom-9 left-1/2 z-20"
        style={{
          opacity: hovered ? 1 : 0,
          transform: `translateX(-50%) ${hovered ? "translateY(0)" : "translateY(-4px)"}`,
          transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
          pointerEvents: "none",
        }}
      >
        <span className="inline-flex items-center gap-1 bg-white text-[#1A1A2E] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-xl whitespace-nowrap">
          {project.url}
          <ArrowUpRight size={10} weight="bold" />
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sceneY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 lg:py-0"
      style={{ backgroundColor: "#0a0a0f", minHeight: "100vh" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
    >
      {/* 3D perspective grid */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          minHeight: "100vh",
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
          y: sceneY,
        }}
      >
        {/* Mouse-reactive tilt on entire grid */}
        <div
          style={{
            transform: `rotateX(${mousePos.y * -4 + 8}deg) rotateY(${mousePos.x * 4}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.12s ease-out",
          }}
        >
          {/* Grid of website cards */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 p-4 sm:p-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <SiteMockup key={project.url} project={project} />
            ))}
          </div>
        </div>

        {/* Center title overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h2
            className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-none tracking-tighter text-center px-4"
            style={{
              textShadow: "0 4px 40px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.5)",
            }}
          >
            Así se ve<br />nuestro trabajo
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
