"use client";

import { useRef } from "react";
import { Star, Quotes } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Carolina Reyes",
    role: "Dueña, Restaurante El Bohío",
    location: "Santo Domingo, RD",
    initials: "CR",
    stars: 5,
    quote:
      "Antes la gente nos encontraba solo de boca en boca. Desde que tenemos la web, recibimos entre 15 y 20 reservaciones nuevas por semana que antes simplemente no llegaban. El link de bio en Instagram fue lo que más nos sorprendió.",
  },
  {
    name: "Dr. Ernesto Villalba",
    role: "Director, Clínica Dental Villalba",
    location: "Ciudad de Panamá, Panamá",
    initials: "EV",
    stars: 5,
    quote:
      "Con la nueva web empezamos a aparecer cuando alguien busca dentista en el área, y eso se tradujo en más o menos el doble de consultas nuevas al mes. El CRM me ayuda a saber exactamente qué pacientes no han vuelto en meses.",
  },
  {
    name: "Natalia Obando",
    role: "Propietaria, Studio N Beauty",
    location: "San José, Costa Rica",
    initials: "NO",
    stars: 5,
    quote:
      "Mis clientas me decían que antes no podían encontrar mis precios ni mis servicios en ningún lado. Ahora entran al link de mi Instagram, ven todo, y me escriben ya decididas. Las citas por semana me subieron casi el triple.",
  },
  {
    name: "Rafael Almonte",
    role: "Gerente, Almonte Propiedades",
    location: "Santiago, RD",
    initials: "RA",
    stars: 5,
    quote:
      "Lo que más cambió fue el CRM. Antes llevaba mis contactos en un cuaderno y se me iban prospectos porque no les daba seguimiento a tiempo. Ahora tengo todo organizado y cerré tres ventas en el primer mes que se me hubieran escapado.",
  },
  {
    name: "Mariana Fonseca",
    role: "Administradora, Hotel Casa Verde",
    location: "Tamarindo, Costa Rica",
    initials: "MF",
    stars: 5,
    quote:
      "Teníamos presencia en Booking pero no teníamos web propia y eso nos hacía ver pequeños. Ahora los turistas nos encuentran directo en Google, nos escriben al WhatsApp desde la web, y hemos reducido la dependencia de las plataformas.",
  },
  {
    name: "Jorge Cisneros",
    role: "Fundador, Cisneros Fit Studio",
    location: "Panamá Oeste, Panamá",
    initials: "JC",
    stars: 5,
    quote:
      "Me lo entregaron todo en menos de dos semanas. La página quedó exactamente como yo quería y el link de bio reemplazó el grupo de WhatsApp donde mandaba los horarios. Los alumnos nuevos llegan ya con toda la info.",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  return (
    <div
      className="sticky top-24 will-change-transform"
      style={{ zIndex: index + 1 }}
    >
      <div
        className="rounded-3xl overflow-hidden mx-auto max-w-6xl"
        style={{
          backgroundColor: "#1A1A2E",
          boxShadow: "0 -4px 40px rgba(0,0,0,0.2)",
          marginTop: index === 0 ? 0 : "-2rem",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[320px] lg:min-h-[380px]">
          {/* Left: Visual element */}
          <div
            className="relative flex items-center justify-center p-10 lg:p-16"
            style={{
              backgroundColor: index % 2 === 0 ? "rgba(15,118,110,0.15)" : "rgba(232,66,42,0.1)",
            }}
          >
            {/* Large decorative quote */}
            <Quotes
              weight="fill"
              className="absolute top-8 left-8 text-white/[0.06]"
              size={120}
            />
            {/* Avatar */}
            <div className="relative z-10 flex flex-col items-center gap-5">
              <div
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: index % 2 === 0 ? "rgba(15,118,110,0.4)" : "rgba(232,66,42,0.3)",
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
              >
                <span className="text-2xl lg:text-3xl font-bold text-white/90 tracking-wide">
                  {testimonial.initials}
                </span>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/50 mt-0.5">{testimonial.role}</p>
                <p className="text-xs text-white/30 mt-0.5">{testimonial.location}</p>
              </div>
            </div>
          </div>

          {/* Right: Quote content */}
          <div className="flex flex-col justify-center p-8 lg:p-14">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} weight="fill" size={18} className="text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-base lg:text-lg text-white/80 leading-relaxed font-medium">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Step indicator */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-semibold text-white/25 uppercase tracking-widest">
                {index + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll<HTMLElement>(".sticky");

    cards.forEach((card, i) => {
      if (i === cards.length - 1) return; // skip last card

      ScrollTrigger.create({
        trigger: card,
        start: "top 96px",
        endTrigger: cards[i + 1],
        end: "top 96px",
        onUpdate: (self) => {
          const scale = 1 - self.progress * 0.04;
          const brightness = 1 - self.progress * 0.3;
          gsap.set(card.children[0], {
            scale,
            filter: `brightness(${brightness})`,
          });
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section
      id="testimonios"
      className="py-28 lg:py-36 bg-warm-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Rating pill */}
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft border border-border-subtle mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" size={16} className="text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-navy-deep">4.9/5</span>
              <span className="text-xs text-slate-light">· +140 negocios</span>
            </div>
          </ScrollReveal>
          <TextReveal
            as="h2"
            className="text-fluid-h2 font-extrabold text-navy-deep leading-tight"
          >
            Lo que dicen nuestros{" "}
            <span className="text-primary">clientes</span>
          </TextReveal>
        </div>

        {/* Stacked cards */}
        <div ref={containerRef} className="relative">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={{ paddingTop: i === 0 ? 0 : "3rem" }}
            >
              <TestimonialCard testimonial={t} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
