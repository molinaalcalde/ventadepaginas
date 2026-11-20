"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { WhatsappLogo, GoogleLogo, ShieldCheck } from "@phosphor-icons/react";

export default function TrustBar() {
  return (
    <section className="py-12 lg:py-16 bg-white border-y border-border-subtle/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <p className="text-center text-sm font-medium text-slate-light mb-8 tracking-wide uppercase">
            Tecnología mundial, atención dominicana
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            <div className="flex items-center gap-2.5 text-slate-text">
              <WhatsappLogo weight="duotone" size={28} className="text-[#25D366]" />
              <span className="text-sm font-semibold">WhatsApp Business</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-text">
              <GoogleLogo weight="duotone" size={28} className="text-[#4285F4]" />
              <span className="text-sm font-semibold">Optimizado para Google</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-text">
              <ShieldCheck weight="duotone" size={28} className="text-primary" />
              <span className="text-sm font-semibold">SSL y datos protegidos</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-text">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#0070F3]">
                <path d="M14 4L24 24H4L14 4Z" fill="currentColor" />
              </svg>
              <span className="text-sm font-semibold">Hosting en Vercel</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
