"use client";

import {
  Gift,
  Star,
  Lightning,
  Fire,
  Timer,
  Lock,
} from "@phosphor-icons/react";

/* ─── Band 1: Dark — promo phrases ─── */
const phrases = [
  "Obtén tu CRM gratis solo por este mes",
  "Web estilo Linktree para tus redes, gratis",
  "Tu web profesional lista en 14 días",
  "Oferta por tiempo limitado",
  "CRM para gestionar tus clientes sin costo adicional",
  "Tu página con menú, horarios, ubicación y WhatsApp en un solo link",
];

const dotColors = [
  "#E8422A",
  "#0F766E",
  "#F2BF1D",
  "#25D366",
  "#E8422A",
  "#0F766E",
];

/* ─── Band 2: Coral — short reinforcement tags ─── */
const tags = [
  { label: "CRM gratis", Icon: Gift },
  { label: "Solo este mes", Icon: Timer },
  { label: "Web en 14 días", Icon: Lightning },
  { label: "Oferta limitada", Icon: Fire },
  { label: "Link para tus redes gratis", Icon: Star },
  { label: "Plazas limitadas", Icon: Lock },
];

function Band1Content() {
  return (
    <>
      {phrases.map((phrase, i) => (
        <span key={i} className="flex items-center shrink-0">
          <span className="text-[clamp(1.1rem,2.2vw,2.2rem)] font-extrabold text-white tracking-tight whitespace-nowrap">
            {phrase}
          </span>
          <i
            className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full mx-6 sm:mx-10"
            style={{ backgroundColor: dotColors[i % dotColors.length] }}
          />
        </span>
      ))}
    </>
  );
}

function Band2Content() {
  return (
    <>
      {tags.map((tag, i) => (
        <span key={i} className="flex items-center gap-2 shrink-0 mx-5 sm:mx-8">
          <tag.Icon weight="fill" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <span className="text-sm sm:text-lg font-bold text-white whitespace-nowrap tracking-tight">
            {tag.label}
          </span>
        </span>
      ))}
    </>
  );
}

export default function MarqueeBanner() {
  return (
    <section
      className="relative py-10 sm:py-14 overflow-hidden select-none"
      style={{ backgroundColor: "var(--color-warm-cream)" }}
      aria-hidden="true"
    >
      {/* ── Band 1: Dark navy, rotated -3deg, scrolls left ── */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#1A1A2E",
          transform: "rotate(-3deg) scale(1.05)",
          padding: "1.15rem 0",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        <div className="flex items-center animate-marquee-left">
          <Band1Content />
          <Band1Content />
          <Band1Content />
          <Band1Content />
        </div>
      </div>

      {/* ── Band 2: Vibrant coral, rotated +2.5deg, scrolls right ── */}
      <div
        className="relative -mt-3 sm:-mt-4 overflow-hidden"
        style={{
          backgroundColor: "#E8422A",
          transform: "rotate(2.5deg) scale(1.05)",
          padding: "0.9rem 0",
          boxShadow: "0 8px 30px rgba(232,66,42,0.3)",
        }}
      >
        <div className="flex items-center animate-marquee-right">
          <Band2Content />
          <Band2Content />
          <Band2Content />
          <Band2Content />
        </div>
      </div>
    </section>
  );
}
