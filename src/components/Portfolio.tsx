"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    title: "Casa Colonial",
    url: "casacolonial.com",
    sector: "Hotel Boutique",
    colors: ["#0F766E", "#E8F5F3", "#1A1A2E"],
    position: { top: "5%", left: "2%" },
    rotation: { x: 12, y: 18, z: -3 },
    size: "w-56 sm:w-72 lg:w-80",
  },
  {
    title: "Centro Sonríe",
    url: "centrosonrie.com",
    sector: "Clínica Dental",
    colors: ["#E8422A", "#FEF0ED", "#1A1A2E"],
    position: { top: "12%", left: "35%" },
    rotation: { x: -8, y: -12, z: 2 },
    size: "w-48 sm:w-56 lg:w-64",
  },
  {
    title: "Reyes Bienes Raíces",
    url: "reyesbienes.com",
    sector: "Inmobiliaria",
    colors: ["#7C3AED", "#EDE9FE", "#1A1A2E"],
    position: { top: "3%", right: "3%" },
    rotation: { x: 10, y: -20, z: 4 },
    size: "w-60 sm:w-72 lg:w-80",
  },
  {
    title: "Sabor Caribeño",
    url: "saborcaribeno.com",
    sector: "Restaurante",
    colors: ["#D97706", "#FEF3C7", "#1A1A2E"],
    position: { bottom: "18%", left: "5%" },
    rotation: { x: -14, y: 15, z: -2 },
    size: "w-52 sm:w-64 lg:w-72",
  },
  {
    title: "Studio Wellness",
    url: "studiowellness.do",
    sector: "Spa y Bienestar",
    colors: ["#0F766E", "#F0FDF4", "#1A1A2E"],
    position: { bottom: "25%", left: "38%" },
    rotation: { x: 8, y: 10, z: -1 },
    size: "w-44 sm:w-52 lg:w-60",
  },
  {
    title: "Legal RD",
    url: "legalrd.com",
    sector: "Abogados",
    colors: ["#1A1A2E", "#F5F5F4", "#0F766E"],
    position: { bottom: "15%", right: "4%" },
    rotation: { x: -10, y: -16, z: 3 },
    size: "w-56 sm:w-68 lg:w-76",
  },
  {
    title: "Flaneur Magazine",
    url: "flaneur.do",
    sector: "Revista Digital",
    colors: ["#E8422A", "#1A1A2E", "#FFFFFF"],
    position: { top: "35%", right: "25%" },
    rotation: { x: 5, y: -8, z: -2 },
    size: "w-44 sm:w-52 lg:w-56",
  },
  {
    title: "Punta Cana Villas",
    url: "puntacanavillas.com",
    sector: "Alquileres",
    colors: ["#0EA5E9", "#F0F9FF", "#1A1A2E"],
    position: { bottom: "5%", left: "25%" },
    rotation: { x: 12, y: 6, z: 1 },
    size: "w-48 sm:w-56 lg:w-64",
  },
];

function WebsiteMockup({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const [hovered, setHovered] = useState(false);
  const [primary, secondary, text] = project.colors;

  return (
    <div
      className={`absolute ${project.size} select-none`}
      style={{
        top: project.position.top,
        bottom: project.position.bottom,
        left: project.position.left,
        right: project.position.right,
        transform: `rotateX(${project.rotation.x}deg) rotateY(${project.rotation.y}deg) rotateZ(${project.rotation.z}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Website card */}
      <div
        className="rounded-lg overflow-hidden shadow-2xl border border-white/10 cursor-pointer"
        style={{
          transition: "transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
          transform: hovered ? "scale(1.05) translateZ(30px)" : "scale(1) translateZ(0)",
          boxShadow: hovered
            ? `0 30px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.15)`
            : `0 20px 40px -15px rgba(0,0,0,0.3)`,
        }}
      >
        {/* Mini website content */}
        <div
          className="aspect-[16/10] p-3 sm:p-4 relative"
          style={{ backgroundColor: secondary }}
        >
          {/* Nav bar */}
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-1.5 rounded" style={{ backgroundColor: text, opacity: 0.15 }} />
            <div className="flex gap-1.5">
              <div className="w-6 h-1 rounded" style={{ backgroundColor: text, opacity: 0.1 }} />
              <div className="w-6 h-1 rounded" style={{ backgroundColor: text, opacity: 0.1 }} />
              <div className="w-6 h-1 rounded" style={{ backgroundColor: text, opacity: 0.1 }} />
            </div>
          </div>
          {/* Hero text */}
          <div className="space-y-1.5 mb-3">
            <div className="w-3/4 h-2.5 sm:h-3 rounded" style={{ backgroundColor: text, opacity: 0.15 }} />
            <div className="w-1/2 h-2.5 sm:h-3 rounded" style={{ backgroundColor: text, opacity: 0.1 }} />
          </div>
          {/* CTA */}
          <div className="w-16 h-5 rounded-sm" style={{ backgroundColor: primary, opacity: 0.9 }} />
          {/* Cards row */}
          <div className="flex gap-1.5 mt-3">
            <div className="flex-1 h-10 sm:h-14 rounded" style={{ backgroundColor: text, opacity: 0.05 }} />
            <div className="flex-1 h-10 sm:h-14 rounded" style={{ backgroundColor: text, opacity: 0.05 }} />
            <div className="flex-1 h-10 sm:h-14 rounded" style={{ backgroundColor: text, opacity: 0.05 }} />
          </div>
        </div>
      </div>

      {/* URL tooltip on hover */}
      <div
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(-8px)",
          transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
          pointerEvents: "none",
        }}
      >
        <span className="inline-flex items-center gap-1.5 bg-white text-navy-deep text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
          {project.url}
          <ArrowUpRight size={12} weight="bold" />
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

  // Subtle vertical parallax on the entire scene
  const sceneY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-navy-deep overflow-hidden"
      style={{ minHeight: "100vh" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Scene container */}
      <motion.div
        className="relative w-full h-screen"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          y: sceneY,
        }}
      >
        {/* Mouse-reactive wrapper */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotateX(${mousePos.y * -2}deg) rotateY(${mousePos.x * 2}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease-out",
          }}
        >
          {projects.map((project) => (
            <WebsiteMockup key={project.title} project={project} />
          ))}
        </div>

        {/* Center title — always on top */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="text-center">
            <TextReveal
              as="h2"
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white"
            >
              Hecho con KINETIC
            </TextReveal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
