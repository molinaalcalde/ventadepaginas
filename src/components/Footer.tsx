"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

const includeLinks = [
  { label: "Web Ultra Rapida", href: "#que-incluye" },
  { label: "Gestor CRM", href: "#que-incluye" },
  { label: "Avisos WhatsApp", href: "#que-incluye" },
  { label: "Dominio y Servidor", href: "#que-incluye" },
  { label: "Soporte 30 min", href: "#que-incluye" },
];

const sectorLinks = [
  { label: "Hoteles y Resorts", href: "#sectores" },
  { label: "Clinicas y Consultorios", href: "#sectores" },
  { label: "Bienes Raices", href: "#sectores" },
  { label: "Servicios Profesionales", href: "#sectores" },
  { label: "Restaurantes y Delivery", href: "#sectores" },
];

const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <ScrollReveal direction="up" delay={0} className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <span className="flex items-center justify-center w-9 h-9 bg-primary rounded-lg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4v16M6 12h7l5-8M13 12l5 8"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xl font-bold text-navy-deep tracking-tight">
                KINETIC
              </span>
            </a>
            <p className="text-slate-text leading-relaxed mb-3 max-w-sm">
              Paginas web profesionales con CRM, reservas y WhatsApp integrado.
              Todo listo en 2 semanas.
            </p>
            <p className="text-sm text-slate-light mb-5">
              Santo Domingo, Republica Dominicana
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-light bg-surface-soft px-3 py-1.5 rounded-full border border-border-subtle">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="11"
                  width="18"
                  height="11"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 11V7a5 5 0 0110 0v4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Proteccion de datos garantizada
            </span>
          </ScrollReveal>

          {/* Que incluye */}
          <ScrollReveal direction="up" delay={0.1}>
            <h4 className="text-sm font-semibold text-navy-deep uppercase tracking-wider mb-4">
              ¿Que incluye?
            </h4>
            <ul className="space-y-3">
              {includeLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-text hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Sectores */}
          <ScrollReveal direction="up" delay={0.2}>
            <h4 className="text-sm font-semibold text-navy-deep uppercase tracking-wider mb-4">
              Sectores
            </h4>
            <ul className="space-y-3">
              {sectorLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-text hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contacto Directo */}
          <ScrollReveal direction="up" delay={0.3}>
            <h4 className="text-sm font-semibold text-navy-deep uppercase tracking-wider mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-sm text-slate-text">
              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-slate-light flex-shrink-0"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                +1 809 XXX XXXX
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-slate-light flex-shrink-0"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M22 7l-10 7L2 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                hola@kineticweb.com
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-slate-light flex-shrink-0"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 6v6l4 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Lunes a Viernes de 8:00 AM a 6:00 PM (hora RD)
              </li>
            </ul>
            <a
              href="#contacto"
              className="inline-block mt-5 text-sm font-semibold text-coral hover:text-coral-hover transition-colors"
            >
              Escribirnos por WhatsApp &rarr;
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-light">
          <p>&copy; 2026 KINETIC Cloud &amp; Web. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
