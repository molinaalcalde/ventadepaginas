import { JsonLd } from "./schema";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Sectores from "@/components/Sectores";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GamifiedForm from "@/components/GamifiedForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Sectores />
        <Features />
        <Process />
        <Comparison />
        <Testimonials />
        <FAQ />
        {/* Gamified Contact Form */}
        <section
          id="contacto"
          className="py-20 lg:py-28 bg-warm-peach relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-coral/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary-light px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
                Solo te toma 2 minutos
              </span>
              <h2 className="text-fluid-h2 font-display font-extrabold text-navy-deep mb-4">
                Descubre qué incluye tu web
              </h2>
              <p className="text-slate-text text-lg max-w-xl mx-auto">
                Responde 5 preguntas rápidas y recibe una propuesta personalizada por WhatsApp en menos de 2 horas.
              </p>
            </div>
            <GamifiedForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
