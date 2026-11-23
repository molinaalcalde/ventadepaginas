import { JsonLd } from "./schema";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sectores from "@/components/Sectores";
import Features from "@/components/Features";
import MarqueeBanner from "@/components/MarqueeBanner";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import GamifiedForm from "@/components/GamifiedForm";
import Footer from "@/components/Footer";
import { ScrollRevealText } from "@/components/animations/ScrollRevealText";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Sectores />
        <Features />
        <MarqueeBanner />
        <Process />
        <Comparison />
        <Testimonials />
        <Portfolio />
        <Stats />
        <FAQ />

        {/* Scroll-reveal impact text before contact form */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollRevealText
              text="Tus clientes ya están buscando un negocio como el tuyo en internet. La pregunta es: ¿te van a encontrar a ti o a tu competencia?"
              className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-navy-deep leading-tight tracking-tighter"
              highlightWords={["ti", "competencia"]}
              highlightClassName="text-coral"
            />
          </div>
        </section>

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
                Tu vitrina digital empieza aquí
              </h2>
              <p className="text-slate-text text-lg max-w-xl mx-auto">
                Responde 4 preguntas rápidas y recibe una propuesta personalizada para tu negocio.
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
