import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      <Header />
      <main>
        <Hero />
        <Sectores />
        <Features />
        <Process />
        <Comparison />
        <Testimonials />
        <FAQ />
        {/* Gamified Contact Form */}
        <section
          id="contacto"
          className="py-20 lg:py-28 bg-gradient-to-br from-navy-deep via-navy-slate to-navy-soft relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-coral/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary-light uppercase tracking-wider mb-6">
                Solo te toma 2 minutos
              </span>
              <h2 className="text-fluid-h2 font-display font-extrabold text-white mb-4">
                Cuéntanos de tu negocio
              </h2>
              <p className="text-slate-300 text-lg max-w-xl mx-auto">
                Responde 5 preguntas rápidas y te enviamos una propuesta personalizada por WhatsApp en menos de 2 horas.
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
