"use client";

import { CheckCircle } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const steps = [
  {
    number: "01",
    days: "Días 1 a 3",
    title: "Nos conocemos",
    description:
      "30 minutos por WhatsApp o videollamada. Nos cuentas de tu negocio, sin tecnicismos.",
    check: "Briefing completo en 30 min",
  },
  {
    number: "02",
    days: "Días 4 a 7",
    title: "Diseñamos tu web",
    description:
      "Te mostramos tu web antes de construirla. La cambiamos hasta que digas 'wow'.",
    check: "Prototipo navegable para revisar",
  },
  {
    number: "03",
    days: "Días 8 a 11",
    title: "Construimos y conectamos",
    description:
      "Montamos todo: web, gestor de clientes y WhatsApp conectado. Tú no tocas nada técnico.",
    check: "Web + WhatsApp + Gestor integrado",
  },
  {
    number: "04",
    days: "Día 14",
    title: "¡Al aire!",
    description:
      "Te enseñamos a usarla y la publicamos. Ese mismo día empiezas a recibir clientes.",
    check: "Capacitación incluida",
  },
];

/* ─── Visual mockups for each step (embedded in dark cards) ─── */

function VisualChat() {
  return (
    <div className="h-full flex flex-col justify-center gap-2.5 p-5">
      {/* Incoming message */}
      <div className="flex items-end gap-2 max-w-[85%]">
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" fill="white" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84Z"/></svg>
        </div>
        <div className="bg-white/[0.12] backdrop-blur-sm rounded-2xl rounded-bl-md px-4 py-2.5">
          <p className="text-[11px] text-white/80 leading-relaxed">Hola, tengo un restaurante en<br/>Santo Domingo y necesito una web</p>
          <p className="text-[9px] text-white/30 mt-1 text-right">10:32 AM</p>
        </div>
      </div>
      {/* Outgoing message */}
      <div className="flex items-end gap-2 max-w-[80%] self-end">
        <div className="bg-primary/40 backdrop-blur-sm rounded-2xl rounded-br-md px-4 py-2.5">
          <p className="text-[11px] text-white/90 leading-relaxed">¡Perfecto! Te cuento cómo<br/>funciona en 2 minutos 🚀</p>
          <p className="text-[9px] text-white/30 mt-1 text-right">10:33 AM</p>
        </div>
      </div>
      {/* Typing indicator */}
      <div className="flex items-end gap-2 max-w-[85%]">
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" fill="white" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84Z"/></svg>
        </div>
        <div className="bg-white/[0.12] rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

function VisualDesign() {
  return (
    <div className="h-full flex items-center justify-center p-4">
      <div className="w-full bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.06]">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.06]">
          <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <span className="w-2 h-2 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 h-3.5 bg-white/[0.06] rounded-md max-w-[120px] mx-auto" />
        </div>
        {/* Website content */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-14 h-2 rounded bg-primary/50" />
            <div className="flex gap-2">
              <div className="w-8 h-1.5 rounded bg-white/15" />
              <div className="w-8 h-1.5 rounded bg-white/15" />
              <div className="w-8 h-1.5 rounded bg-white/15" />
            </div>
          </div>
          <div className="pt-2">
            <div className="w-[70%] h-3 rounded bg-white/20 mb-2" />
            <div className="w-[50%] h-3 rounded bg-white/14 mb-2" />
            <div className="w-[60%] h-2 rounded bg-white/8 mb-3" />
            <div className="w-20 h-5 rounded-md bg-coral/60" />
          </div>
          <div className="flex gap-2 pt-2">
            <div className="flex-1 h-12 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
            <div className="flex-1 h-12 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
            <div className="flex-1 h-12 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualConnect() {
  return (
    <div className="h-full flex flex-col justify-center gap-3 p-5">
      {[
        { label: "Sitio web", sub: "Diseño responsive", color: "bg-primary", connected: true },
        { label: "WhatsApp Business", sub: "Notificaciones activas", color: "bg-[#25D366]", connected: true },
        { label: "Gestor de clientes", sub: "CRM integrado", color: "bg-coral", connected: true },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/[0.04]">
          <div className={`w-8 h-8 rounded-lg ${item.color}/20 flex items-center justify-center flex-shrink-0`}>
            <div className={`w-3.5 h-3.5 rounded-sm ${item.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-semibold text-white/90 truncate">{item.label}</p>
            <p className="text-[10px] text-white/40">{item.sub}</p>
          </div>
          {item.connected && (
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[9px] font-semibold text-emerald-400 uppercase tracking-wider">Activo</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function VisualLaunch() {
  return (
    <div className="h-full flex items-center justify-center p-4 relative">
      <div className="w-full bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.06] relative">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.06]">
          <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <span className="w-2 h-2 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 flex items-center gap-1 justify-center">
            <svg className="w-2.5 h-2.5 text-emerald-400" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
            <span className="text-[9px] text-white/50 font-medium">tunegocio.com</span>
          </div>
        </div>
        {/* Website content */}
        <div className="p-3 space-y-2.5">
          <div className="flex justify-between items-center">
            <div className="w-12 h-2 rounded bg-primary/50" />
            <div className="flex gap-1.5">
              <div className="w-6 h-1 rounded bg-white/12" />
              <div className="w-6 h-1 rounded bg-white/12" />
            </div>
          </div>
          <div className="w-[55%] h-2.5 rounded bg-white/18 mb-1" />
          <div className="w-[35%] h-2.5 rounded bg-white/12" />
          <div className="w-16 h-4 rounded bg-coral/50 mt-1" />
          <div className="flex gap-1.5 pt-1">
            <div className="flex-1 h-8 rounded-md bg-white/[0.04]" />
            <div className="flex-1 h-8 rounded-md bg-white/[0.04]" />
          </div>
        </div>
        {/* Live badge */}
        <div className="absolute top-8 right-2 flex items-center gap-1 bg-emerald-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-500/30">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          En vivo
        </div>
      </div>
      {/* Notification popup */}
      <div className="absolute bottom-6 right-3 bg-white/[0.12] backdrop-blur-md rounded-xl px-3 py-2 border border-white/[0.08] shadow-xl max-w-[140px]">
        <p className="text-[9px] text-emerald-400 font-bold mb-0.5">Nuevo contacto</p>
        <p className="text-[8px] text-white/60 leading-tight">María P. quiere reservar una mesa</p>
      </div>
    </div>
  );
}

const visuals = [VisualChat, VisualDesign, VisualConnect, VisualLaunch];

export default function Process() {
  return (
    <section
      id="como-funciona"
      className="relative py-28 lg:py-36"
      style={{
        background: "linear-gradient(180deg, var(--color-warm-cream) 0%, var(--color-primary-light) 40%, #0F766E 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-primary text-sm font-semibold tracking-wide mb-4">
              Así de fácil
            </span>
          </ScrollReveal>
          <TextReveal as="h2" className="text-fluid-h2 font-extrabold text-navy-deep leading-tight">
            De la idea a tu web en solo{" "}
            <span className="text-primary">2 semanas</span>
          </TextReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-4 text-slate-text text-base sm:text-lg leading-relaxed">
              Sin reuniones eternas ni tecnicismos. Tú nos cuentas, nosotros hacemos el resto.
            </p>
          </ScrollReveal>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-14">
          {steps.map((step, idx) => {
            const Visual = visuals[idx];
            return (
              <ScrollReveal key={step.number} direction="up" delay={idx * 0.1}>
                <div
                  className="group rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{
                    backgroundColor: "rgba(15, 20, 25, 0.85)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-8px)";
                    el.style.boxShadow = "0 30px 60px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)";
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  {/* Visual area */}
                  <div className="h-52 sm:h-56 relative overflow-hidden">
                    <Visual />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 border-t border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-bold tracking-widest uppercase text-white/30">
                        Paso {step.number}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary-light">
                        {step.days}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 leading-snug tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-white/45 leading-relaxed mb-4 flex-1">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                      <CheckCircle size={14} weight="bold" className="text-emerald-400 shrink-0" />
                      <span className="text-[11px] font-semibold text-emerald-400/90">
                        {step.check}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Finish line */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <CheckCircle size={20} weight="bold" className="text-white" />
            </div>
            <p className="text-base font-bold text-white">
              Tu web está en línea. Empiezas a recibir clientes.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
