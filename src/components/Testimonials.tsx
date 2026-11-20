"use client";

import { Star } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";

const testimonials = [
  {
    name: "María del Carmen Núñez",
    role: "Directora, Hotel Boutique Casa Colonial",
    location: "Santo Domingo, RD",
    initials: "MC",
    color: "bg-primary",
    metric: "60% reservas directas",
    before:
      "Antes dependíamos 100% de Booking y Expedia. Pagábamos una fortuna en comisiones.",
    after:
      "Desde que KINETIC nos montó la web con reservas directas, el 60% de nuestros huéspedes reservan sin intermediarios. En 6 meses recuperamos la inversión.",
  },
  {
    name: "Dr. Rafael Méndez",
    role: "Director, Centro Dental Sonríe",
    location: "Santiago, RD",
    initials: "RM",
    color: "bg-coral",
    metric: "3x más pacientes internacionales",
    before:
      "No teníamos web y los pacientes internacionales no nos encontraban.",
    after:
      "KINETIC nos hizo una página en español e inglés con citas online. En 3 meses triplicamos las consultas de americanos. Mi recepcionista ya no se pasa el día contestando llamadas.",
  },
  {
    name: "Carolina Reyes",
    role: "Socia, Reyes & Asociados Bienes Raíces",
    location: "Punta Cana, RD",
    initials: "CR",
    color: "bg-primary",
    metric: "+40% en ventas",
    before:
      "Antes se me perdían los leads en papelitos y chats de WhatsApp.",
    after:
      "Con el gestor de clientes de KINETIC todo queda organizado. Me llega un aviso al WhatsApp cada vez que alguien se interesa en una propiedad. Las ventas subieron un 40%.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-28 lg:py-36 bg-surface-soft border-y border-border-subtle/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Rating pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft border border-border-subtle mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} weight="fill" size={16} className="text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-navy-deep">4.9/5</span>
            <span className="text-xs text-slate-light">· +140 negocios en RD</span>
          </div>
          <TextReveal
            as="h2"
            className="text-fluid-h2 font-extrabold text-navy-deep leading-tight"
          >
            Lo que dicen nuestros{" "}
            <span className="text-primary">clientes</span>
          </TextReveal>
        </div>

        {/* Testimonial Cards — static grid (no carousel) */}
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.15}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-soft border border-border-subtle flex flex-col gap-5 transition-shadow hover:shadow-float"
            >
              {/* Metric badge pill */}
              <div className="self-start">
                <span className="inline-block px-3 py-1 rounded-full bg-coral-light text-coral text-xs font-bold tracking-wide">
                  {t.metric}
                </span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" size={16} className="text-amber-400" />
                ))}
              </div>

              {/* Before → After quote */}
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-xs font-semibold text-slate-light uppercase tracking-widest">
                  Antes
                </p>
                <p className="text-sm text-slate-text leading-relaxed italic">
                  &ldquo;{t.before}&rdquo;
                </p>
                <div className="flex items-center gap-2 my-1">
                  <div className="flex-1 h-px bg-border-subtle" />
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                    Ahora
                  </span>
                  <div className="flex-1 h-px bg-border-subtle" />
                </div>
                <p className="text-sm text-navy-deep leading-relaxed font-medium">
                  &ldquo;{t.after}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}
                >
                  <span className="text-xs font-bold text-white tracking-wide">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-deep">{t.name}</p>
                  <p className="text-xs text-slate-light">{t.role}</p>
                  <p className="text-xs text-slate-light/70">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
