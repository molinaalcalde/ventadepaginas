"use client";

import { TrendUp, Timer, Star, Users } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const stats = [
  {
    icon: Users,
    value: 140,
    suffix: "+",
    label: "Negocios confían en nosotros",
    description: "De República Dominicana, Panamá y Costa Rica",
  },
  {
    icon: Timer,
    value: 14,
    suffix: "",
    label: "Días de la idea a vender",
    description: "Diseño, desarrollo y lanzamiento incluidos",
  },
  {
    icon: TrendUp,
    value: 29,
    suffix: "%",
    label: "Más ventas con un gestor de clientes",
    description: "Dato comprobado en negocios como el tuyo",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Valoración de nuestros clientes",
    description: "Basada en reseñas verificadas",
  },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-navy-deep relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal
                key={stat.label}
                direction="up"
                delay={index * 0.12}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 mb-4">
                    <Icon size={24} weight="bold" className="text-primary-light" />
                  </div>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white/90 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs sm:text-sm text-white/50">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
