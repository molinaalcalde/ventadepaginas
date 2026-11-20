import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogTOC from "@/components/blog/BlogTOC";

// --- Static params ---
export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// --- Metadata ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// --- Page ---
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-navy-deep pt-28 pb-14">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={15} weight="bold" />
            Volver al blog
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full border ${post.categoryColor}`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-sm">
              <Calendar size={14} weight="duotone" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-sm">
              <Clock size={14} weight="duotone" />
              {post.readTime} de lectura
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-sm">
              <User size={14} weight="duotone" />
              {post.author}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 xl:gap-16 items-start">

            {/* ── Article content ── */}
            <article className="flex-1 min-w-0 max-w-[720px]">
              <div
                className="
                  prose-article
                  [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-navy-deep [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-snug
                  [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-navy-deep [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3
                  [&_p]:text-slate-text [&_p]:leading-[1.85] [&_p]:mb-5 [&_p]:text-[1.0625rem]
                  [&_ul]:my-5 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul>li]:text-slate-text [&_ul>li]:leading-relaxed [&_ul>li]:list-disc [&_ul>li]:marker:text-primary
                  [&_ol]:my-5 [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol>li]:text-slate-text [&_ol>li]:leading-relaxed [&_ol>li]:list-decimal [&_ol>li]:marker:text-primary [&_ol>li]:marker:font-bold
                  [&_strong]:font-bold [&_strong]:text-navy-deep
                  [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-primary-light [&_blockquote]:pl-5 [&_blockquote]:pr-4 [&_blockquote]:py-3 [&_blockquote]:rounded-r-xl [&_blockquote]:my-6 [&_blockquote]:text-navy-deep [&_blockquote]:font-medium [&_blockquote]:italic [&_blockquote]:text-[1.0625rem]
                  [&_a]:text-primary [&_a]:font-medium [&_a:hover]:underline
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* ── Sticky Sidebar TOC ── */}
            {post.headings.length > 0 && (
              <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
                <div className="sticky top-28">
                  <BlogTOC headings={post.headings} />
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-warm-peach py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
            ¿Te quedó alguna duda?
          </span>
          <h2 className="font-display font-extrabold text-3xl text-navy-deep mb-4">
            ¿Listo para tener tu propia web profesional?
          </h2>
          <p className="text-slate-text text-lg mb-8 max-w-xl mx-auto">
            Escríbenos por WhatsApp y recibe una propuesta personalizada para tu
            negocio en menos de 24 horas.
          </p>
          <a
            href="https://wa.me/1809XXXXXXX?text=Hola,%20le%C3%AD%20su%20blog%20y%20quiero%20una%20propuesta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white font-bold px-8 py-4 rounded-full shadow-coral hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Pedir mi propuesta gratis
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-surface-soft py-14 lg:py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-navy-deep mb-8">
              También te puede interesar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border-subtle shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="relative h-36 bg-gradient-to-br from-primary/20 to-coral/20 overflow-hidden flex-shrink-0">
                    <div className="absolute bottom-3 left-3">
                      <span
                        className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border ${related.categoryColor}`}
                      >
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-navy-deep text-base leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-slate-text text-sm leading-relaxed line-clamp-2 flex-1">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-border-subtle text-xs text-slate-light">
                      <Clock size={12} weight="duotone" />
                      {related.readTime} lectura
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
