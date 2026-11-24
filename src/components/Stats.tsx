"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const stats = [
  {
    value: 140,
    suffix: "+",
    label: "negocios confían en nosotros",
  },
  {
    value: 14,
    suffix: "",
    label: "días de la idea a vender",
  },
  {
    value: 29,
    suffix: "%",
    label: "más ventas con gestor de clientes",
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "valoración de nuestros clientes",
  },
];

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-surface-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-light text-navy-deep tracking-tighter leading-none mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </p>
                <p className="text-sm text-slate-light leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
