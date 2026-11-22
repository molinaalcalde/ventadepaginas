"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const projects = [
  {
    title: "Hotel Boutique Casa Colonial",
    sector: "Hoteles y Turismo",
    result: "60% reservas directas",
    color: "from-primary/8 via-primary/3 to-transparent",
    url: "casacolonial.com",
  },
  {
    title: "Centro Dental Sonríe",
    sector: "Clínicas y Estética",
    result: "3x pacientes internacionales",
    color: "from-coral/8 via-coral/3 to-transparent",
    url: "centrosonrie.com",
  },
  {
    title: "Reyes & Asociados Bienes Raíces",
    sector: "Inmobiliarias",
    result: "+40% en ventas",
    color: "from-violet-500/8 via-violet-500/3 to-transparent",
    url: "reyesbienes.com",
  },
];

export default function Portfolio() {
  return (
    <section className="py-28 lg:py-36 bg-white">
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
            className="text-fluid-h2 font-bold text-navy-deep"
          >
            Lo que hemos construido
          </TextReveal>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              direction="up"
              delay={index * 0.12}
            >
              <div className="group bg-surface-soft rounded-2xl overflow-hidden border border-border-subtle hover:shadow-float cursor-pointer"
                style={{ transition: "box-shadow 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)" }}
              >
                {/* Browser frame preview */}
                <div className="relative">
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white border-b border-border-subtle">
                    <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                    <span className="text-[11px] text-slate-light ml-2 font-medium">
                      {project.url}
                    </span>
                  </div>

                  <div className={`h-52 bg-gradient-to-br ${project.color} bg-surface-soft relative overflow-hidden`}>
                    {/* Wireframe content */}
                    <div className="p-6 space-y-3">
                      <div className="w-20 h-1.5 rounded bg-navy-deep/8" />
                      <div className="w-3/4 h-3.5 rounded bg-navy-deep/8" />
                      <div className="w-1/2 h-3.5 rounded bg-navy-deep/6" />
                      <div className="flex gap-2 mt-4">
                        <div className="w-20 h-8 rounded-md bg-navy-deep/8" />
                        <div className="w-20 h-8 rounded-md border border-navy-deep/8" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-16 rounded-lg bg-white/80" />
                        <div className="h-16 rounded-lg bg-white/80" />
                        <div className="h-16 rounded-lg bg-white/80" />
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/80 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      style={{ transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)" }}
                    >
                      <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                        <ArrowUpRight size={18} weight="bold" />
                        Ver caso de éxito
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-xs font-medium text-slate-light uppercase tracking-wider mb-1">
                    {project.sector}
                  </p>
                  <h3 className="text-base font-bold text-navy-deep mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold">
                    {project.result}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
