import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Consejos para hacer crecer tu negocio",
  description:
    "Consejos prácticos para hacer crecer tu negocio con una web profesional, WhatsApp Business y gestión de clientes.",
  alternates: {
    canonical: "https://ventadepaginas.vercel.app/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const regularPosts = posts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-navy-deep pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-4">
              Blog KINETIC
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
              Recursos para hacer crecer tu negocio
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Consejos prácticos para hacer crecer tu negocio con una web
              profesional, WhatsApp Business y gestión de clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-surface-soft py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured post — full width */}
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block mb-10 rounded-3xl overflow-hidden shadow-float hover:shadow-xl transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="relative flex flex-col lg:flex-row min-h-[340px]">
              {/* Image placeholder */}
              <div className="relative lg:w-[52%] min-h-[260px] lg:min-h-full bg-gradient-to-br from-navy-deep via-navy-soft to-primary overflow-hidden flex-shrink-0">
                {/* Abstract decorative shapes */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-primary-container blur-3xl" />
                  <div className="absolute bottom-10 right-6 w-32 h-32 rounded-full bg-coral blur-3xl" />
                </div>
                {/* Featured badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-1.5 bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-coral">
                    Artículo destacado
                  </span>
                </div>
                {/* Category */}
                <div className="absolute bottom-6 left-6">
                  <span
                    className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm ${featuredPost.categoryColor}`}
                  >
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="font-display font-extrabold text-2xl lg:text-3xl text-navy-deep leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-text leading-relaxed text-base">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border-subtle">
                  <div className="flex items-center gap-4 text-sm text-slate-light">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} weight="duotone" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} weight="duotone" />
                      {featuredPost.readTime} lectura
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all duration-200">
                    Leer artículo
                    <ArrowRight size={15} weight="bold" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Regular posts grid — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border-subtle shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {/* Card image placeholder */}
                <div className="relative h-44 bg-gradient-to-br from-primary/20 to-coral/20 overflow-hidden flex-shrink-0">
                  {/* Subtle abstract decoration */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20 blur-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-primary/20 blur-2xl" />
                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${post.categoryColor}`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display font-bold text-navy-deep text-lg leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-text text-sm leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-subtle">
                    <div className="flex items-center gap-3 text-xs text-slate-light">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} weight="duotone" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} weight="duotone" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all duration-200">
                      Leer
                      <ArrowRight size={12} weight="bold" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-warm-peach py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-3xl text-navy-deep mb-4">
            ¿Listo para tener tu propia web profesional?
          </h2>
          <p className="text-slate-text text-lg mb-8">
            Habla con nosotros hoy y recibe una propuesta personalizada en 24
            horas.
          </p>
          <a
            href="https://wa.me/1809XXXXXXX?text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20KINETIC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white font-bold px-8 py-4 rounded-full shadow-coral hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Pedir mi propuesta gratis
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
