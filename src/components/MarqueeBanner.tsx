"use client";

import {
  Gift,
  Sparkle,
  Star,
  Lightning,
  Fire,
  Crown,
} from "@phosphor-icons/react";

/* ─── Band 1: Dark — urgency + benefit phrases ─── */
const phrases = [
  "Tarjeta Digital GRATIS solo por este mes",
  "Web + CRM + WhatsApp todo conectado",
  "Empieza a recibir clientes en 14 días",
  "Tu competencia ya tiene web, tú no",
  "Oferta de lanzamiento por tiempo limitado",
  "0 complicaciones, nosotros hacemos todo",
  "Tarjeta Digital GRATIS solo por este mes",
  "No necesitas saber de tecnología",
];

const dotColors = [
  "#E8422A", // coral
  "#0F766E", // teal
  "#F2BF1D", // gold
  "#25D366", // whatsapp green
  "#E8422A", // coral
  "#7C3AED", // purple
  "#F2BF1D", // gold
  "#0F766E", // teal
];

/* ─── Band 2: Coral — short punchy tags ─── */
const tags = [
  { label: "GRATIS este mes", Icon: Gift },
  { label: "Solo por lanzamiento", Icon: Fire },
  { label: "Tarjeta Digital", Icon: Sparkle },
  { label: "Oferta limitada", Icon: Lightning },
  { label: "Web Premium", Icon: Crown },
  { label: "CRM incluido", Icon: Star },
  { label: "GRATIS este mes", Icon: Gift },
  { label: "No te lo pierdas", Icon: Fire },
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
          <span className="text-sm sm:text-lg font-extrabold text-white whitespace-nowrap uppercase tracking-wide">
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
      className="relative py-4 sm:py-6 overflow-hidden select-none"
      style={{ backgroundColor: "var(--color-warm-cream)" }}
      aria-hidden="true"
    >
      {/* ── Band 1: Dark navy, rotated -3deg, scrolls left ── */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#1A1A2E",
          transform: "rotate(-3deg) scale(1.05)",
          padding: "1rem 0",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        <div className="flex items-center animate-marquee-left">
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
          padding: "0.75rem 0",
          boxShadow: "0 8px 30px rgba(232,66,42,0.3)",
        }}
      >
        <div className="flex items-center animate-marquee-right">
          <Band2Content />
          <Band2Content />
          <Band2Content />
        </div>
      </div>
    </section>
  );
}
