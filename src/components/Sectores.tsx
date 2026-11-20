"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const sectores = [
  {
    title: "Hoteles y Turismo",
    description:
      "Reservas directas, motor de búsqueda de habitaciones y conexión con WhatsApp para que tus huéspedes reserven sin intermediarios. Punta Cana, Samaná, Jarabacoa — donde sea.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 21V13M3 13V7a2 2 0 012-2h2a2 2 0 012 2v2h10a2 2 0 012 2v2M3 13h18m0 0v8M7 9v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="5" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
    iconBg: "bg-primary-light",
    iconColor: "text-primary",
  },
  {
    title: "Clínicas y Estética",
    description:
      "Citas online, recordatorios automáticos por WhatsApp y fichas de pacientes. Para dentistas, estética, dermatología y cirugía plástica.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12h6m-3-3v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 2L4 6v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V6l-8-4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-coral-light",
    iconColor: "text-coral",
  },
  {
    title: "Inmobiliarias",
    description:
      "Escaparate de propiedades con fichas cuidadas, calculadora de inversión y captura de leads internacionales. Ideal para compradores de USA y Europa.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 21h18M5 21V7l7-4 7 4v14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21v-6h6v6M9 10h1m4 0h1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
  },
  {
    title: "Restaurantes y Eventos",
    description:
      "Reservas de mesa, menú digital, peticiones de catering y confirmación automática. Adiós a las llamadas perdidas.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 3v18M18 9h-4a2 2 0 01-2-2V3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 3v7m0 0v11m0-11H4m2 0h2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-[#FCE7F3]",
    iconColor: "text-[#DB2777]",
  },
  {
    title: "Servicios Profesionales",
    description:
      "Abogados, contadores, consultores. Formularios de solicitud, seguimiento de casos y presupuestos automáticos.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
  },
];

export default function Sectores() {
  return (
    <section
      id="sectores"
      className="py-20 bg-surface-soft border-y border-border-subtle/80"
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
          {sectores.map((sector, index) => (
            <ScrollReveal key={sector.title} direction="up" delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-float border border-border-subtle/80 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${sector.iconBg} ${sector.iconColor} flex items-center justify-center mb-4`}
                >
                  {sector.icon}
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
                  Ver solución
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
