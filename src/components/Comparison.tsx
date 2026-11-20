"use client";

import { Check, Warning, X } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const rows = [
  {
    feature: "Tiempo de entrega",
    kinetic: "2 semanas",
    agency: "2–6 meses",
    diy: "Meses de frustración",
  },
  {
    feature: "Gestor de clientes + WhatsApp",
    kinetic: "Integrado, sin software extra",
    agency: "Te cobran otro software aparte",
    diy: "Plugins que fallan",
  },
  {
    feature: "Diseño",
    kinetic: "100% a tu medida",
    agency: "Reciclan plantillas",
    diy: "Idéntica a miles de páginas",
  },
  {
    feature: "Propiedad",
    kinetic: "El código es tuyo, sin permanencia",
    agency: "Te amarran con contratos",
    diy: "Atrapado en su plataforma",
  },
  {
    feature: "Soporte",
    kinetic: "WhatsApp directo (< 30 min)",
    agency: "Tickets de 72 horas",
    diy: "Chatbots sin solución",
  },
  {
    feature: "Precio",
    kinetic: "Desde $997 USD con todo",
    agency: "$2,000–5,000+ sin gestor",
    diy: "$0 pero tu tiempo vale más",
  },
];

export default function Comparison() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide mb-4">
            Transparencia Total
          </span>
          <TextReveal
            as="h2"
            className="text-fluid-h2 font-extrabold text-navy-deep leading-tight"
          >
            ¿Por qué somos la{" "}
            <span className="text-primary">mejor opción</span>?
          </TextReveal>
        </div>

        {/* Comparison Table */}
        <ScrollReveal direction="up">
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold text-slate-light py-4 px-5 w-1/4">
                    Característica
                  </th>
                  <th className="text-center py-4 px-5 w-1/4 bg-primary rounded-t-2xl">
                    <div className="flex items-center justify-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                        <path
                          d="M6 3v16l5-4.5L16 19V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Z"
                          fill="white"
                          fillOpacity="0.3"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm font-bold text-white tracking-wide uppercase">
                        KINETIC Web
                      </span>
                    </div>
                  </th>
                  <th className="text-center text-sm font-semibold text-slate-light py-4 px-5 w-1/4">
                    Agencia Local RD
                  </th>
                  <th className="text-center text-sm font-semibold text-slate-light py-4 px-5 w-1/4">
                    Hacerlo tú mismo (Wix/WordPress)
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx < rows.length - 1 ? "border-b border-border-subtle" : ""}
                  >
                    {/* Feature label */}
                    <td className="text-sm font-medium text-navy-deep py-4 px-5">
                      {row.feature}
                    </td>

                    {/* KINETIC — green check */}
                    <td
                      className={`text-center py-4 px-5 bg-primary-light/40 ${
                        idx === rows.length - 1 ? "rounded-b-2xl" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <Check
                          weight="bold"
                          size={16}
                          className="text-primary shrink-0"
                        />
                        <span className="text-sm font-bold text-primary">
                          {row.kinetic}
                        </span>
                      </div>
                    </td>

                    {/* Agency — warning amber */}
                    <td className="text-center py-4 px-5">
                      <div className="flex items-center justify-center gap-1.5">
                        <Warning
                          weight="bold"
                          size={15}
                          className="text-amber-500 shrink-0"
                        />
                        <span className="text-sm text-slate-text">{row.agency}</span>
                      </div>
                    </td>

                    {/* DIY — red X */}
                    <td className="text-center py-4 px-5">
                      <div className="flex items-center justify-center gap-1.5">
                        <X
                          weight="bold"
                          size={15}
                          className="text-rose-400 shrink-0"
                        />
                        <span className="text-sm text-slate-light">{row.diy}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
