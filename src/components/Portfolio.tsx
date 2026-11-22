"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    url: "casacolonial.com",
    colors: { bg: "#E8F5F3", accent: "#0F766E", text: "#1A1A2E" },
    style: {
      top: "-8%", left: "-5%",
      width: "clamp(280px, 30vw, 420px)",
      transform: "rotateX(15deg) rotateY(25deg) rotateZ(-4deg) translateZ(-80px)",
    },
  },
  {
    url: "centrosonrie.com",
    colors: { bg: "#FEF0ED", accent: "#E8422A", text: "#1A1A2E" },
    style: {
      top: "5%", left: "30%",
      width: "clamp(220px, 22vw, 320px)",
      transform: "rotateX(-10deg) rotateY(-15deg) rotateZ(3deg) translateZ(60px)",
    },
  },
  {
    url: "reyesbienes.com",
    colors: { bg: "#EDE9FE", accent: "#7C3AED", text: "#1A1A2E" },
    style: {
      top: "-5%", right: "-3%",
      width: "clamp(300px, 32vw, 460px)",
      transform: "rotateX(12deg) rotateY(-28deg) rotateZ(5deg) translateZ(-120px)",
    },
  },
  {
    url: "saborcaribeno.com",
    colors: { bg: "#FEF3C7", accent: "#D97706", text: "#1A1A2E" },
    style: {
      bottom: "8%", left: "-4%",
      width: "clamp(260px, 28vw, 400px)",
      transform: "rotateX(-18deg) rotateY(22deg) rotateZ(-3deg) translateZ(40px)",
    },
  },
  {
    url: "studiowellness.do",
    colors: { bg: "#F0FDF4", accent: "#0F766E", text: "#1A1A2E" },
    style: {
      bottom: "15%", left: "33%",
      width: "clamp(200px, 20vw, 280px)",
      transform: "rotateX(8deg) rotateY(12deg) rotateZ(-1deg) translateZ(100px)",
    },
  },
  {
    url: "legalrd.com",
    colors: { bg: "#F5F5F4", accent: "#1A1A2E", text: "#52525B" },
    style: {
      bottom: "5%", right: "-2%",
      width: "clamp(280px, 30vw, 420px)",
      transform: "rotateX(-12deg) rotateY(-24deg) rotateZ(4deg) translateZ(-60px)",
    },
  },
  {
    url: "flaneur.do",
    colors: { bg: "#FFFFFF", accent: "#E8422A", text: "#1A1A2E" },
    style: {
      top: "30%", right: "18%",
      width: "clamp(220px, 24vw, 340px)",
      transform: "rotateX(6deg) rotateY(-10deg) rotateZ(-2deg) translateZ(80px)",
    },
  },
  {
    url: "puntacanavillas.com",
    colors: { bg: "#F0F9FF", accent: "#0EA5E9", text: "#1A1A2E" },
    style: {
      bottom: "-5%", left: "20%",
      width: "clamp(240px, 26vw, 380px)",
      transform: "rotateX(14deg) rotateY(8deg) rotateZ(2deg) translateZ(-40px)",
    },
  },
];

function SiteMockup({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const [hovered, setHovered] = useState(false);
  const { bg, accent, text } = project.colors;

  return (
    <div
      className="absolute"
      style={{
        ...project.style,
        transformStyle: "preserve-3d",
        transition: "transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="rounded-xl overflow-hidden cursor-pointer"
        style={{
          boxShadow: hovered
            ? "0 60px 100px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)"
            : "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
          transform: hovered ? "scale(1.08) translateZ(50px)" : "scale(1)",
          transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
        }}
      >
        {/* Website mockup content */}
        <div
          className="relative"
          style={{ backgroundColor: bg, aspectRatio: "16/10" }}
        >
          {/* Navbar */}
          <div className="flex items-center justify-between px-[6%] py-[4%]">
            <div className="w-[18%] h-[6px] rounded-sm" style={{ backgroundColor: accent }} />
            <div className="flex gap-[3%] w-[40%]">
              <div className="flex-1 h-[4px] rounded-sm" style={{ backgroundColor: text, opacity: 0.12 }} />
              <div className="flex-1 h-[4px] rounded-sm" style={{ backgroundColor: text, opacity: 0.12 }} />
              <div className="flex-1 h-[4px] rounded-sm" style={{ backgroundColor: text, opacity: 0.12 }} />
              <div className="flex-1 h-[4px] rounded-sm" style={{ backgroundColor: text, opacity: 0.12 }} />
            </div>
          </div>

          {/* Hero area */}
          <div className="px-[6%] pb-[4%]">
            <div className="w-[65%] h-[8px] rounded-sm mb-[3%]" style={{ backgroundColor: text, opacity: 0.15 }} />
            <div className="w-[45%] h-[8px] rounded-sm mb-[3%]" style={{ backgroundColor: text, opacity: 0.1 }} />
            <div className="w-[30%] h-[5px] rounded-sm mb-[5%]" style={{ backgroundColor: text, opacity: 0.07 }} />
            {/* CTA button */}
            <div className="w-[22%] h-[14px] rounded-sm" style={{ backgroundColor: accent }} />
          </div>

          {/* Feature cards row */}
          <div className="flex gap-[2%] px-[6%] pb-[5%]">
            <div className="flex-1 rounded-md" style={{ backgroundColor: text, opacity: 0.04, aspectRatio: "1/0.7" }} />
            <div className="flex-1 rounded-md" style={{ backgroundColor: text, opacity: 0.04, aspectRatio: "1/0.7" }} />
            <div className="flex-1 rounded-md" style={{ backgroundColor: text, opacity: 0.04, aspectRatio: "1/0.7" }} />
          </div>

          {/* Bottom content */}
          <div className="px-[6%] pb-[6%]">
            <div className="w-[40%] h-[6px] rounded-sm mb-[2%]" style={{ backgroundColor: text, opacity: 0.12 }} />
            <div className="w-[80%] h-[4px] rounded-sm mb-[1.5%]" style={{ backgroundColor: text, opacity: 0.06 }} />
            <div className="w-[60%] h-[4px] rounded-sm" style={{ backgroundColor: text, opacity: 0.06 }} />
          </div>
        </div>
      </div>

      {/* URL tooltip */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-20"
        style={{
          opacity: hovered ? 1 : 0,
          transform: `translateX(-50%) ${hovered ? "translateY(0)" : "translateY(-6px)"}`,
          transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
          pointerEvents: "none",
        }}
      >
        <span className="inline-flex items-center gap-1.5 bg-white text-[#1A1A2E] text-xs font-semibold px-4 py-2 rounded-full shadow-xl">
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

  const sceneY = useTransform(scrollYProgress, [0, 1], [30, -30]);

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
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0f",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Scene */}
      <motion.div
        className="relative w-full"
        style={{
          height: "100vh",
          perspective: "800px",
          perspectiveOrigin: "50% 50%",
          y: sceneY,
        }}
      >
        {/* Mouse-reactive 3D container */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * 3}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {projects.map((project) => (
            <SiteMockup key={project.url} project={project} />
          ))}
        </div>

        {/* Center title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h2
            className="text-5xl sm:text-7xl lg:text-[7rem] font-bold text-white leading-none tracking-tighter text-center"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Hecho con<br />
            <span className="text-primary-light">KINETIC</span>
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
