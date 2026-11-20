"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const faqs = [
  {
    question: "¿Tengo que pagar algo extra por el gestor de clientes?",
    answer:
      "No. El gestor de clientes está integrado directamente en tu web. No necesitas pagar HubSpot, Salesforce ni ningún programa adicional. Todo viene incluido en tu plan.",
  },
  {
    question: "¿Me llegan los mensajes al WhatsApp?",
    answer:
      "¡Claro! Conectamos tu WhatsApp Business para que cada formulario, reserva o consulta te llegue directo al celular. También puedes responder desde la web.",
  },
  {
    question: "¿Puedo actualizar la web yo mismo?",
    answer:
      "Sí. Te dejamos un panel súper sencillo donde puedes cambiar fotos, textos y precios sin tocar código. Y si necesitas ayuda, nos escribes por WhatsApp.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista?",
    answer:
      "14 días exactos desde nuestra primera conversación. Incluye diseño, desarrollo, gestor de clientes y lanzamiento.",
  },
  {
    question: "¿Qué pasa si necesito ayuda después?",
    answer:
      "Tienes soporte directo por WhatsApp con una persona real. Te respondemos en menos de 30 minutos en horario laboral. Nada de bots ni tickets.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Nuestros planes arrancan desde $997 USD e incluyen todo: web + gestor de clientes + WhatsApp + dominio + hosting. Consulta nuestras opciones de pago flexibles.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="preguntas" className="py-28 lg:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Dudas Resueltas
          </span>
          <TextReveal
            as="h2"
            className="text-fluid-h2 font-bold text-navy-deep tracking-tight"
          >
            Preguntas Frecuentes
          </TextReveal>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={index}
                delay={index * 0.08}
                direction="up"
                distance={20}
              >
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
                      <CaretDown weight="bold" size={22} />
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
