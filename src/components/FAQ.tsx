"use client";

import { useState } from "react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const faqs = [
  {
    question: "¿Tengo que pagar mensualidades por el CRM?",
    answer:
      "El CRM está integrado directamente en tu web, no necesitas pagar licencias de HubSpot, Salesforce ni ningún software adicional. Todo viene incluido en tu plan.",
  },
  {
    question: "¿Funciona con WhatsApp Business?",
    answer:
      "¡Claro! Conectamos tu WhatsApp Business para que cada formulario, reserva o consulta te llegue directo al celular. También puedes responder desde el panel web.",
  },
  {
    question: "¿Puedo actualizar la web yo mismo?",
    answer:
      "Sí. Te dejamos un panel súper sencillo. Cambiar un precio, subir una foto o editar un texto te toma 1 minuto. Y si prefieres, nos escribes y lo hacemos por ti.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista?",
    answer:
      "2 semanas exactas desde nuestra primera conversación. Cumplimos los plazos porque sabemos que tu negocio no puede esperar meses.",
  },
  {
    question: "¿Qué pasa si necesito ayuda después?",
    answer:
      "Tienes soporte directo por WhatsApp. Cualquier duda o cambio pequeño lo resolvemos en menos de 30 minutos. No hablamos con bots, hablamos contigo.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Nuestros planes arrancan desde $997 USD e incluyen todo: web + CRM + WhatsApp + dominio + hosting. Consulta nuestras opciones de pago flexibles.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="preguntas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Dudas Resueltas
          </span>
          <TextReveal as="h2" className="text-fluid-h2 font-bold text-navy-deep tracking-tight">
            Preguntas Frecuentes
          </TextReveal>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} delay={index * 0.08} direction="up" distance={20}>
                <div className="bg-surface-soft rounded-2xl transition-all duration-200">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full p-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-navy-deep leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 text-slate-light transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-slate-text leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
