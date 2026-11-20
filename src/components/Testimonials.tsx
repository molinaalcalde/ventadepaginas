"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";

const testimonials = [
  {
    name: "María del Carmen Núñez",
    role: "Directora, Hotel Boutique Casa Colonial, Santo Domingo",
    initials: "MC",
    color: "bg-primary",
    quote:
      "Pagábamos una fortuna en comisiones de Booking y Expedia. Desde que KINETIC nos montó la web con reservas directas, el 60% de nuestros huéspedes reservan sin intermediarios. El panel es tan fácil que cualquier miembro del equipo lo maneja.",
  },
  {
    name: "Dr. Rafael Méndez",
    role: "Director, Centro Dental Sonríe, Santiago",
    initials: "RM",
    color: "bg-coral",
    quote:
      "Necesitábamos una web que atrajera pacientes internacionales. KINETIC nos hizo la página en español e inglés, con citas online y WhatsApp automático. En 3 meses triplicamos las consultas de americanos.",
  },
  {
    name: "Carolina Reyes",
    role: "Socia, Reyes & Asociados Bienes Raíces, Punta Cana",
    initials: "CR",
    color: "bg-primary",
    quote:
      "Nuestro problema era que los leads de compradores extranjeros se nos perdían en emails. Con el CRM de KINETIC todo queda organizado, me llega un aviso al WhatsApp y respondo en segundos. Las ventas subieron un 40%.",
  },
];

function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="text-amber-400"
    >
      <path
        d="M9 1.5l2.12 4.3 4.74.69-3.43 3.34.81 4.72L9 12.26l-4.24 2.29.81-4.72L2.14 6.5l4.74-.7L9 1.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 lg:py-28 bg-surface-soft border-y border-border-subtle/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Star rating pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft border border-border-subtle mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="text-sm font-bold text-navy-deep">4.9/5</span>
            <span className="text-xs text-slate-light">
              · +45 negocios en RD
            </span>
          </div>
          <TextReveal as="h2" className="text-fluid-h2 font-extrabold text-navy-deep leading-tight">
            Lo que dicen nuestros{" "}
            <span className="text-primary">clientes</span>
          </TextReveal>
        </div>

        {/* Testimonial Cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.15}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-soft border border-border-subtle flex flex-col gap-5 transition-shadow hover:shadow-float"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-text leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                {/* Initials avatar */}
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center`}
                >
                  <span className="text-xs font-bold text-white tracking-wide">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-deep">{t.name}</p>
                  <p className="text-xs text-slate-light">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
