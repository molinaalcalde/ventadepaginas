"use client";

import {
  Globe,
  WhatsappLogo,
  AddressBook,
  Link as LinkIcon,
  Sparkle,
  Gift,
  Clock,
  Rocket,
  Star,
  Lightning,
} from "@phosphor-icons/react";

/* ─── Band 1: Dark — benefit phrases with colored dots ─── */
const phrases = [
  "Gestor de clientes incluido",
  "WhatsApp conectado a tu web",
  "Tarjeta Digital tipo Linktree GRATIS",
  "Tu negocio abierto 24/7",
  "Recibe clientes desde el día uno",
  "Todo integrado, sin complicaciones",
  "Oferta por tiempo limitado",
  "Dominio propio y profesional",
];

const dotColors = [
  "#0F766E", // teal
  "#25D366", // whatsapp green
  "#E8422A", // coral
  "#F2BF1D", // gold
  "#7C3AED", // purple
  "#0EA5E9", // sky
  "#E8422A", // coral
  "#0F766E", // teal
];

/* ─── Band 2: Teal — product features with icons ─── */
const features = [
  { label: "Web Profesional", Icon: Globe },
  { label: "WhatsApp Business", Icon: WhatsappLogo },
  { label: "Gestor CRM", Icon: AddressBook },
  { label: "Tarjeta Digital", Icon: LinkIcon },
  { label: "GRATIS", Icon: Gift },
  { label: "Tiempo Limitado", Icon: Clock },
  { label: "Lanzamiento", Icon: Rocket },
  { label: "Premium", Icon: Star },
  { label: "Rápido", Icon: Lightning },
  { label: "Exclusivo", Icon: Sparkle },
];

function Band1Content() {
  return (
    <>
      {phrases.map((phrase, i) => (
        <span key={i} className="flex items-center gap-0 shrink-0">
          <span className="text-[clamp(1.2rem,2.5vw,2.4rem)] font-bold text-[#F4F0E9] tracking-tight whitespace-nowrap">
            {phrase}
          </span>
          <i
            className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full mx-6 sm:mx-10"
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
      {features.map((feat, i) => (
        <span key={i} className="flex items-center gap-2.5 shrink-0 mx-5 sm:mx-8">
          <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <feat.Icon weight="bold" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </span>
          <span className="text-base sm:text-xl font-bold text-white whitespace-nowrap tracking-tight">
            {feat.label}
          </span>
        </span>
      ))}
    </>
  );
}

export default function MarqueeBanner() {
  return (
    <section
      className="relative py-6 sm:py-8 overflow-hidden select-none"
      style={{ backgroundColor: "var(--color-warm-cream)" }}
      aria-hidden="true"
    >
      {/* ── Band 1: Dark, rotated -3deg, scrolls left ── */}
      <div
        className="relative -mx-4 overflow-hidden"
        style={{
          backgroundColor: "var(--color-navy-deep)",
          transform: "rotate(-3deg)",
          padding: "1.1rem 0",
        }}
      >
        <div className="flex items-center animate-marquee-left">
          {/* Duplicate content 3x for seamless loop */}
          <Band1Content />
          <Band1Content />
          <Band1Content />
        </div>
      </div>

      {/* ── Band 2: Teal, rotated +2.5deg, scrolls right ── */}
      <div
        className="relative -mx-4 -mt-4 sm:-mt-5 overflow-hidden"
        style={{
          backgroundColor: "var(--color-primary)",
          transform: "rotate(2.5deg)",
          padding: "0.9rem 0",
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
