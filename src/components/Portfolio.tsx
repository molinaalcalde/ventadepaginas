"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TiltCard } from "@/components/animations/TiltCard";
import { motion } from "motion/react";

const projects = [
  {
    title: "Hotel Boutique Casa Colonial",
    sector: "Hoteles y Turismo",
    description:
      "Reservas directas integradas con WhatsApp. Redujo dependencia de Booking un 60%.",
    color: "from-primary/20 via-primary/5 to-primary-light",
    accentColor: "bg-primary",
    url: "tunegocio.com",
  },
  {
    title: "Centro Dental Sonríe",
    sector: "Clínicas y Estética",
    description:
      "Citas online bilingüe con gestor de pacientes integrado. 3x más pacientes internacionales.",
    color: "from-coral/15 via-coral/5 to-coral-light",
    accentColor: "bg-coral",
    url: "centrosonrie.com",
  },
  {
    title: "Reyes & Asociados Bienes Raíces",
    sector: "Inmobiliarias",
    description:
      "Catálogo de propiedades con CRM integrado y alertas por WhatsApp. +40% en ventas.",
    color: "from-violet-500/15 via-violet-500/5 to-violet-50",
    accentColor: "bg-violet-500",
    url: "reyesbienes.com",
  },
];

export default function Portfolio() {
  return (
    <section className="py-28 lg:py-36 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold tracking-wide mb-4">
              Resultados reales
            </span>
          </ScrollReveal>
          <TextReveal
            as="h2"
            className="text-fluid-h2 font-extrabold text-navy-deep leading-tight"
          >
            Lo que hemos{" "}
            <span className="text-primary">construido</span>
          </TextReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-4 text-slate-light text-base sm:text-lg leading-relaxed">
              Cada proyecto es único, diseñado para las necesidades específicas de cada negocio.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              direction="up"
              delay={index * 0.15}
            >
              <TiltCard
                className="relative h-full"
                tiltMax={8}
                glareOpacity={0.06}
              >
                <div className="bg-white rounded-2xl border border-border-subtle shadow-soft overflow-hidden h-full flex flex-col group">
                  {/* Browser frame preview */}
                  <div className="relative">
                    {/* Mini browser chrome */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-soft border-b border-border-subtle">
                      <span className="w-2 h-2 rounded-full bg-rose-300" />
                      <span className="w-2 h-2 rounded-full bg-amber-300" />
                      <span className="w-2 h-2 rounded-full bg-emerald-300" />
                      <span className="text-[10px] text-slate-light ml-2">
                        {project.url}
                      </span>
                    </div>

                    {/* Preview area */}
                    <div
                      className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                    >
                      {/* Wireframe-style content */}
                      <div className="p-5 space-y-3">
                        <div className="w-16 h-1.5 rounded bg-black/10" />
                        <div className="w-3/4 h-3 rounded bg-black/10" />
                        <div className="w-1/2 h-3 rounded bg-black/8" />
                        <div className="flex gap-2 mt-3">
                          <div className="w-16 h-6 rounded-md bg-black/10" />
                          <div className="w-16 h-6 rounded-md border border-black/10" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                          <div className="h-14 rounded-lg bg-white/60" />
                          <div className="h-14 rounded-lg bg-white/60" />
                          <div className="h-14 rounded-lg bg-white/60" />
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-navy-deep/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="flex items-center gap-2 text-white font-semibold text-sm">
                          <ArrowUpRight size={18} weight="bold" />
                          Ver caso de éxito
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`w-2 h-2 rounded-full ${project.accentColor}`}
                      />
                      <span className="text-xs font-semibold text-slate-light uppercase tracking-wider">
                        {project.sector}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-navy-deep mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-text leading-relaxed flex-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
