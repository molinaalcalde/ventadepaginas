"use client";

import { Buildings, FirstAidKit, HouseSimple, ForkKnife, Briefcase } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const sectores = [
  {
    title: "Hoteles y Turismo",
    description:
      "Recibe reservas directas desde tu web sin pagar comisiones a Booking ni Expedia. Tus huéspedes reservan y tú recibes el aviso al WhatsApp.",
    icon: Buildings,
    iconBg: "bg-[#E8F4FD]",
    iconColor: "text-[#3B82F6]",
    cta: "Reservas directas para mi hotel →",
  },
  {
    title: "Clínicas y Estética",
    description:
      "Tus pacientes agendan citas online y reciben recordatorios automáticos. Menos llamadas, menos cancelaciones, más consultas.",
    icon: FirstAidKit,
    iconBg: "bg-[#FDE8F0]",
    iconColor: "text-[#EC4899]",
    cta: "Citas online para mi clínica →",
  },
  {
    title: "Inmobiliarias",
    description:
      "Muestra tus propiedades con fotos profesionales y captura compradores de USA y Europa que buscan en Google.",
    icon: HouseSimple,
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#8B5CF6]",
    cta: "Captar compradores internacionales →",
  },
  {
    title: "Restaurantes y Eventos",
    description:
      "Reservas de mesa desde el celular, menú digital y pedidos por WhatsApp. Sin llamadas perdidas, sin hojas de papel.",
    icon: ForkKnife,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#F59E0B]",
    cta: "Adiós a las llamadas perdidas →",
  },
  {
    title: "Servicios Profesionales",
    description:
      "Tus clientes te encuentran en Google, llenan un formulario y tú recibes todo en WhatsApp. Así de fácil.",
    icon: Briefcase,
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#10B981]",
    cta: "Automatizar mi captación →",
  },
];

export default function Sectores() {
  return (
    <section
      id="sectores"
      className="py-28 lg:py-36 bg-warm-cream border-y border-border-subtle/80"
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
              No es una plantilla genérica. Diseñamos pensando en cómo TUS clientes buscan y compran.
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
                    className={`w-14 h-14 rounded-2xl ${sector.iconBg} ${sector.iconColor} flex items-center justify-center mb-4`}
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
