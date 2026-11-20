"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Phone,
  EnvelopeSimple,
  Clock,
  MapPin,
  WhatsappLogo,
  ShieldCheck,
  ArrowRight,
} from "@phosphor-icons/react";

const includeLinks = [
  { label: "Web Ultra Rápida", href: "#que-incluye" },
  { label: "Gestor de clientes", href: "#que-incluye" },
  { label: "Avisos WhatsApp", href: "#que-incluye" },
  { label: "Dominio y Servidor", href: "#que-incluye" },
  { label: "Soporte 30 min", href: "#que-incluye" },
];

const sectorLinks = [
  { label: "Hoteles y Resorts", href: "#sectores" },
  { label: "Clínicas y Consultorios", href: "#sectores" },
  { label: "Bienes Raíces", href: "#sectores" },
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
              Páginas web profesionales con CRM, reservas y WhatsApp integrado.
              Todo listo en 2 semanas.
            </p>
            <p className="text-sm text-slate-light mb-5">
              Santo Domingo, República Dominicana
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-light bg-surface-soft px-3 py-1.5 rounded-full border border-border-subtle">
              <ShieldCheck size={14} weight="duotone" />
              Protección de datos garantizada
            </span>
          </ScrollReveal>

          {/* Que incluye */}
          <ScrollReveal direction="up" delay={0.1}>
            <h4 className="text-sm font-semibold text-navy-deep uppercase tracking-wider mb-4">
              ¿Qué incluye?
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
                <Phone size={16} weight="duotone" className="text-slate-light flex-shrink-0" />
                +1 809 XXX XXXX
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeSimple size={16} weight="duotone" className="text-slate-light flex-shrink-0" />
                hola@kineticweb.com
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} weight="duotone" className="text-slate-light flex-shrink-0" />
                Lunes a Viernes de 8:00 AM a 6:00 PM (hora RD)
              </li>
            </ul>
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-coral hover:text-coral-hover transition-colors"
            >
              <WhatsappLogo size={16} weight="fill" />
              Escribirnos por WhatsApp
              <ArrowRight size={14} weight="bold" />
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
