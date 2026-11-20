"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Users, Timer, Star, WhatsappLogo } from "@phosphor-icons/react";

export default function TrustBar() {
  return (
    <section className="py-10 lg:py-14 bg-warm-peach/60 border-y border-coral/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center">
                <Users weight="duotone" size={22} className="text-coral" />
              </div>
              <div>
                <p className="text-lg font-bold text-navy-deep">140+</p>
                <p className="text-xs text-slate-light">negocios ya venden online</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Timer weight="duotone" size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-navy-deep">14 días</p>
                <p className="text-xs text-slate-light">de la idea a vender</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                <Star weight="fill" size={22} className="text-amber-400" />
              </div>
              <div>
                <p className="text-lg font-bold text-navy-deep">4.9/5</p>
                <p className="text-xs text-slate-light">valoración promedio</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <WhatsappLogo weight="fill" size={22} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-lg font-bold text-navy-deep">&lt; 2 horas</p>
                <p className="text-xs text-slate-light">tiempo de respuesta</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
