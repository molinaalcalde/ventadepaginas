"use client";

import { Buildings, FirstAidKit, HouseSimple, ForkKnife, Briefcase } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const sectores = [
  {
    title: "Hoteles y Turismo",
    description:
      "Reservas directas, motor de búsqueda de habitaciones y conexión con WhatsApp para que tus huéspedes reserven sin intermediarios. Punta Cana, Samaná, Jarabacoa — donde sea.",
    icon: Buildings,
    iconBg: "bg-primary-light",
    iconColor: "text-primary",
    cta: "Reservas directas para mi hotel →",
  },
  {
    title: "Clínicas y Estética",
    description:
      "Citas online, recordatorios automáticos por WhatsApp y fichas de pacientes. Para dentistas, estética, dermatología y cirugía plástica.",
    icon: FirstAidKit,
    iconBg: "bg-coral-light",
    iconColor: "text-coral",
    cta: "Citas online para mi clínica →",
  },
  {
    title: "Inmobiliarias",
    description:
      "Escaparate de propiedades con fichas cuidadas, calculadora de inversión y captura de leads internacionales. Ideal para compradores de USA y Europa.",
    icon: HouseSimple,
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    cta: "Captar compradores internacionales →",
  },
  {
    title: "Restaurantes y Eventos",
    description:
      "Reservas de mesa, menú digital, peticiones de catering y confirmación automática. Adiós a las llamadas perdidas.",
    icon: ForkKnife,
    iconBg: "bg-[#FCE7F3]",
    iconColor: "text-[#DB2777]",
    cta: "Adiós a las llamadas perdidas →",
  },
  {
    title: "Servicios Profesionales",
    description:
      "Abogados, contadores, consultores. Formularios de solicitud, seguimiento de casos y presupuestos automáticos.",
    icon: Briefcase,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    cta: "Automatizar mi captación →",
  },
];

export default function Sectores() {
  return (
    <section
      id="sectores"
      className="py-28 lg:py-36 bg-surface-soft border-y border-border-subtle/80"
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
            Pensado expresamente para tu tipo de negocio
          </TextReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-4 text-slate-light text-base sm:text-lg leading-relaxed">
              Cada sector capta clientes de forma distinta. Por eso diseñamos
              soluciones específicas que encajan con tu flujo de trabajo real.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectores.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <ScrollReveal key={sector.title} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-float border border-border-subtle/80 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${sector.iconBg} ${sector.iconColor} flex items-center justify-center mb-4`}
                  >
                    <Icon size={28} weight="duotone" />
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
              </ScrollReveal>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
