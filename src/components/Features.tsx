"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export default function Features() {
  return (
    <section id="que-incluye" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
              Todo lo necesario, nada de paja
            </span>
          </ScrollReveal>
          <TextReveal as="h2" className="text-fluid-h2 font-bold text-navy-deep leading-tight">
            Las 3 cosas que hacen \u00fanico a nuestro sistema
          </TextReveal>
        </div>

        {/* ───────── Pillar 1: Presencia y Velocidad ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* Text */}
          <ScrollReveal direction="left" className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-coral text-white text-sm font-bold">
                1
              </span>
              <span className="text-sm font-semibold text-coral uppercase tracking-wide">
                Presencia y Velocidad
              </span>
            </div>
            <h3 className="text-fluid-h3 font-bold text-navy-deep mb-4 leading-snug">
              Una web r\u00e1pida y bonita que da confianza al primer vistazo
            </h3>
            <p className="text-slate-text mb-8 leading-relaxed">
              Tu negocio se juega la primera impresi\u00f3n en 3 segundos. Creamos
              p\u00e1ginas limpias, modernas y ultrarr\u00e1pidas que cargan al instante en
              cualquier celular. Sin plantillas pesadas ni men\u00fas confusos que
              espanten ventas.
            </p>
            <ul className="space-y-5">
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                }
                title="Carga ultra veloz <1s"
                description="Experiencia instant\u00e1nea que retiene a cada visitante."
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                }
                title="Adaptada a celulares"
                description="Perfecta en cualquier pantalla, sin excepciones."
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                }
                title="Optimizada para Google"
                description="SEO t\u00e9cnico incluido para que te encuentren primero."
              />
            </ul>
          </ScrollReveal>

          {/* Visual */}
          <ScrollReveal direction="right" className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-surface-soft rounded-2xl border border-border-subtle p-6 shadow-soft">
              {/* Performance scores */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 text-center border border-border-subtle">
                  <p className="text-2xl sm:text-3xl font-bold text-emerald-500">
                    <AnimatedCounter value={99} />
                  </p>
                  <p className="text-xs text-slate-light mt-1">Velocidad</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-border-subtle">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    <AnimatedCounter value={100} />
                  </p>
                  <p className="text-xs text-slate-light mt-1">SEO M\u00f3vil</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-border-subtle">
                  <p className="text-2xl sm:text-3xl font-bold text-coral">
                    <AnimatedCounter value={0.4} suffix="s" />
                  </p>
                  <p className="text-xs text-slate-light mt-1">Respuesta</p>
                </div>
              </div>
              {/* Gradient placeholder image */}
              <div className="w-full h-44 sm:h-56 rounded-xl bg-gradient-to-br from-primary/20 via-coral/10 to-primary-light overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/80 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 text-primary/40">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ───────── Pillar 2: Gesti\u00f3n de Clientes ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* Visual */}
          <ScrollReveal direction="left" className="lg:col-span-7 order-1">
            <div className="bg-surface-soft rounded-2xl border border-border-subtle p-6 shadow-soft">
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-semibold text-navy-deep text-sm">Bandeja de Contactos</h4>
                <span className="text-xs text-slate-light">3 nuevos hoy</span>
              </div>
              <div className="space-y-3">
                <ContactRow
                  initials="CR"
                  initialsColor="bg-coral"
                  name="Carlos Rodr\u00edguez"
                  status="Alerta WhatsApp"
                  statusColor="text-emerald-600 bg-emerald-50"
                  time="Hace 5 min"
                />
                <ContactRow
                  initials="MP"
                  initialsColor="bg-primary"
                  name="Mar\u00eda P\u00e9rez"
                  status="Presupuesto Enviado"
                  statusColor="text-amber-600 bg-amber-50"
                  time="Hace 2 h"
                />
                <ContactRow
                  initials="JH"
                  initialsColor="bg-violet-500"
                  name="Jos\u00e9 Hern\u00e1ndez"
                  status="Cita Agendada"
                  statusColor="text-primary bg-primary-light"
                  time="Ayer"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" className="lg:col-span-5 order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-coral text-white text-sm font-bold">
                2
              </span>
              <span className="text-sm font-semibold text-coral uppercase tracking-wide">
                Gesti\u00f3n de Clientes F\u00e1cil
              </span>
            </div>
            <h3 className="text-fluid-h3 font-bold text-navy-deep mb-4 leading-snug">
              CRM tan sencillo que cualquiera puede usarlo
            </h3>
            <p className="text-slate-text mb-8 leading-relaxed">
              Olv\u00eddate de CRMs complicados en ingl\u00e9s que nadie en tu equipo sabe
              usar. Con nuestro gestor, cada vez que alguien pide presupuesto o
              reserva, te suena el WhatsApp, respondes en un clic y tienes todo
              organizado.
            </p>
            <ul className="space-y-5">
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                    <path d="M14.05 6A5 5 0 0 1 18 10" />
                  </svg>
                }
                title="Alertas por WhatsApp"
                description="Cada nuevo contacto te avisa al instante en tu celular."
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                }
                title="Fichas completas"
                description="Todo el historial del cliente en un solo lugar."
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                }
                title="Sin cuotas mensuales"
                description="Incluido en tu plan, sin sorpresas ni costes extra."
              />
            </ul>
          </ScrollReveal>
        </div>

        {/* ───────── Pillar 3: Cero Dolores de Cabeza ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <ScrollReveal direction="left" className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-coral text-white text-sm font-bold">
                3
              </span>
              <span className="text-sm font-semibold text-coral uppercase tracking-wide">
                Cero Dolores de Cabeza
              </span>
            </div>
            <h3 className="text-fluid-h3 font-bold text-navy-deep mb-4 leading-snug">
              Tranquilidad absoluta: nosotros nos encargamos de todo lo t\u00e9cnico
            </h3>
            <p className="text-slate-text mb-8 leading-relaxed">
              Dominio, servidor de alta velocidad, copias de seguridad diarias y
              certificados de seguridad. T\u00fa no te preocupas de nada t\u00e9cnico. Y si
              necesitas cambiar algo, nos escribes y lo tienes resuelto en menos
              de 30 minutos.
            </p>
            <ul className="space-y-5">
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
                title="Soporte personal"
                description="Una persona real que responde, no un chatbot gen\u00e9rico."
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                    <circle cx="12" cy="16" r="1" />
                  </svg>
                }
                title="Seguridad incluida"
                description="SSL, backups diarios y protecci\u00f3n anti-hackeo activa."
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                }
                title="Todo verificado"
                description="Dominio, hosting y mantenimiento gestionado por nosotros."
              />
            </ul>
          </ScrollReveal>

          {/* Visual */}
          <ScrollReveal direction="right" className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-surface-soft rounded-2xl border border-border-subtle p-6 shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-primary">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-deep">Tu asesor t\u00e9cnico</p>
                  <p className="text-sm text-slate-light">
                    Siempre disponible para lo que necesites
                  </p>
                </div>
              </div>
              {/* Commitment badge */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-light text-coral text-sm font-semibold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  &lt; 30 min
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Respuesta garantizada
                </span>
              </div>
              {/* Mini checklist */}
              <div className="space-y-3">
                {["Dominio y hosting gestionado", "Copias de seguridad diarias", "Certificado SSL activo", "Actualizaciones autom\u00e1ticas"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-emerald-600">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-sm text-slate-text">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────── Sub-components ──────────── */

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex-shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
        {icon}
      </span>
      <div>
        <p className="font-semibold text-navy-deep text-sm">{title}</p>
        <p className="text-slate-light text-sm">{description}</p>
      </div>
    </li>
  );
}

function ContactRow({
  initials,
  initialsColor,
  name,
  status,
  statusColor,
  time,
}: {
  initials: string;
  initialsColor: string;
  name: string;
  status: string;
  statusColor: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 border border-border-subtle">
      <span
        className={`flex-shrink-0 w-10 h-10 rounded-full ${initialsColor} text-white text-sm font-bold flex items-center justify-center`}
      >
        {initials}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-navy-deep text-sm truncate">{name}</p>
        <span className={`inline-block mt-0.5 px-2 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
          {status}
        </span>
      </div>
      <span className="text-xs text-slate-light whitespace-nowrap">{time}</span>
    </div>
  );
}
