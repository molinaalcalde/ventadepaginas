"use client";

import { Bed, Heartbeat, Key, ForkKnife, Handshake } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TiltCard } from "@/components/animations/TiltCard";

const sectores = [
  {
    title: "Hoteles y Turismo",
    description:
      "Recibe reservas directas desde tu web sin pagar comisiones a Booking ni Expedia. Tus huéspedes reservan y tú recibes el aviso al WhatsApp.",
    icon: Bed,
    cta: "Reservas directas para mi hotel",
  },
  {
    title: "Clínicas y Estética",
    description:
      "Tus pacientes agendan citas online y reciben recordatorios automáticos. Menos llamadas, menos cancelaciones, más consultas.",
    icon: Heartbeat,
    cta: "Citas online para mi clínica",
  },
  {
    title: "Inmobiliarias",
    description:
      "Muestra tus propiedades con fotos profesionales y captura compradores de USA y Europa que buscan en Google.",
    icon: Key,
    cta: "Captar compradores internacionales",
  },
  {
    title: "Restaurantes y Eventos",
    description:
      "Reservas de mesa desde el celular, menú digital y pedidos por WhatsApp. Sin llamadas perdidas, sin hojas de papel.",
    icon: ForkKnife,
    cta: "Adiós a las llamadas perdidas",
  },
  {
    title: "Servicios Profesionales",
    description:
      "Tus clientes te encuentran en Google, llenan un formulario y tú recibes todo en WhatsApp. Así de fácil.",
    icon: Handshake,
    cta: "Automatizar mi captación",
  },
];

export default function Sectores() {
  return (
    <section
      id="sectores"
      className="py-28 lg:py-36 bg-warm-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal direction="up">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4">
              Adaptado a tu sector
            </span>
          </ScrollReveal>
          <TextReveal as="h2" className="text-fluid-h2 font-display font-extrabold text-navy-deep tracking-tight">
            Tu tipo de negocio, tu tipo de web
          </TextReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-4 text-slate-light text-base sm:text-lg leading-relaxed">
              Cada negocio tiene su forma de vender. Tu web debe reflejar cómo compran TUS clientes.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectores.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <ScrollReveal key={sector.title} direction="up" delay={index * 0.1}>
                <TiltCard className="relative h-full" tiltMax={10} glareOpacity={0.06}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-float border border-border-subtle/80 transition-shadow duration-300 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4"
                    >
                      <Icon size={24} weight="bold" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-display font-bold text-navy-deep mb-2 leading-snug">
                      {sector.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-light leading-relaxed mb-5 flex-1">
                      {sector.description}
                    </p>

                    {/* Link */}
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
                    >
                      {sector.cta}
                    </a>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
