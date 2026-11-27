"use client";

import {
  Lightning,
  DeviceMobile,
  MagnifyingGlass,
  WhatsappLogo,
  EnvelopeSimple,
  AddressBook,
  ShieldCheck,
  Headset,
  LockSimple,
  CheckCircle,
  LinkSimple,
} from "@phosphor-icons/react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { BrowserMockup } from "@/components/animations/BrowserMockup";

export default function Features() {
  return (
    <section id="que-incluye" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
              Todo incluido, sin complicaciones
            </span>
          </ScrollReveal>
          <TextReveal as="h2" className="text-fluid-h2 font-bold text-navy-deep leading-tight">
            Tu negocio profesional en internet, de principio a fin
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
                TU IMAGEN PROFESIONAL
              </span>
            </div>
            <h3 className="text-fluid-h3 font-bold text-navy-deep mb-4 leading-snug">
              Tu imagen profesional, donde todos te buscan
            </h3>
            <p className="text-slate-text mb-8 leading-relaxed">
              Hoy tus clientes te buscan en Google, le preguntan a ChatGPT, o te ven en Instagram. Si no tienes una web profesional, simplemente no existes para ellos. Te diseñamos tu vitrina digital: rápida, profesional y que genera confianza desde el primer segundo.
            </p>
            <ul className="space-y-5">
              <FeatureItem
                icon={<Lightning weight="bold" className="w-5 h-5" />}
                title="Carga ultra veloz <1s"
                description="Experiencia instantánea que retiene a cada visitante."
              />
              <FeatureItem
                icon={<DeviceMobile weight="bold" className="w-5 h-5" />}
                title="Adaptada a celulares"
                description="Perfecta en cualquier pantalla, sin excepciones."
              />
              <FeatureItem
                icon={<MagnifyingGlass weight="bold" className="w-5 h-5" />}
                title="Optimizada para Google"
                description="SEO técnico incluido para que te encuentren primero."
              />
              <FeatureItem
                icon={<LinkSimple weight="bold" className="w-5 h-5" />}
                title="Tu Tarjeta Digital para redes"
                description="Una mini-página con todos tus enlaces para Instagram, TikTok y WhatsApp. Incluida gratis."
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
                  <p className="text-xs text-slate-light mt-1">SEO Móvil</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-border-subtle">
                  <p className="text-2xl sm:text-3xl font-bold text-coral">
                    <AnimatedCounter value={0.4} suffix="s" />
                  </p>
                  <p className="text-xs text-slate-light mt-1">Respuesta</p>
                </div>
              </div>
              {/* Interactive browser mockup with scroll-linked content */}
              <BrowserMockup />
            </div>
          </ScrollReveal>
        </div>

        {/* ───────── Pillar 2: Gestión de Clientes ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* Visual */}
          <ScrollReveal direction="left" className="lg:col-span-7 order-1">
            <div className="bg-warm-cream rounded-2xl border border-border-subtle p-6 shadow-soft">
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-semibold text-navy-deep text-sm">Bandeja de Contactos</h4>
                <span className="text-xs text-slate-light">3 nuevos hoy</span>
              </div>
              <div className="space-y-3">
                <ContactRow
                  initials="CR"
                  initialsColor="bg-coral"
                  name="Carlos Rodríguez"
                  status="Alerta Email"
                  statusColor="text-emerald-600 bg-emerald-50"
                  time="Hace 5 min"
                />
                <ContactRow
                  initials="MP"
                  initialsColor="bg-primary"
                  name="María Pérez"
                  status="Presupuesto Enviado"
                  statusColor="text-amber-600 bg-amber-50"
                  time="Hace 2 h"
                />
                <ContactRow
                  initials="JH"
                  initialsColor="bg-violet-500"
                  name="José Hernández"
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
                Incluido por tiempo de lanzamiento
              </span>
            </div>
            <h3 className="text-fluid-h3 font-bold text-navy-deep mb-4 leading-snug">
              Cada cliente queda registrado, ninguno se te escapa
            </h3>
            <p className="text-slate-text mb-8 leading-relaxed">
              Cada persona que te escribe queda guardada con su nombre, teléfono y lo que necesita. El sistema te avisa cuándo darle seguimiento. Los negocios que usan un gestor de clientes venden hasta un 29% más. Y lo manejas todo desde tu celular.
            </p>
            <ul className="space-y-5">
              <FeatureItem
                icon={<EnvelopeSimple weight="bold" className="w-5 h-5" />}
                title="Alertas por correo"
                description="Cada nuevo contacto te llega directo a tu email al instante."
              />
              <FeatureItem
                icon={<AddressBook weight="bold" className="w-5 h-5" />}
                title="Fichas completas"
                description="Todo el historial del cliente en un solo lugar."
              />
              <FeatureItem
                icon={<ShieldCheck weight="bold" className="w-5 h-5" />}
                title="Sin programas adicionales"
                description="Todo integrado en tu web, sin instalar nada más."

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
              Tú vendes, nosotros nos encargamos de lo técnico
            </h3>
            <p className="text-slate-text mb-8 leading-relaxed">
              Dominio, servidor, seguridad, actualizaciones... todo eso lo manejamos nosotros. Tú solo te concentras en lo que sabes hacer: atender a tu gente.
            </p>
            <ul className="space-y-5">
              <FeatureItem
                icon={<Headset weight="bold" className="w-5 h-5" />}
                title="Soporte personal"
                description="Una persona real que responde, no un chatbot genérico."
              />
              <FeatureItem
                icon={<LockSimple weight="bold" className="w-5 h-5" />}
                title="Seguridad incluida"
                description="SSL, backups diarios y protección anti-hackeo activa."
              />
              <FeatureItem
                icon={<CheckCircle weight="bold" className="w-5 h-5" />}
                title="Hosting y mantenimiento incluido"
                description="Servidor veloz, backups y actualizaciones. Si ya tienes dominio lo enlazamos, si no te orientamos para comprarlo."
              />
            </ul>
          </ScrollReveal>

          {/* Visual */}
          <ScrollReveal direction="right" className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-surface-soft rounded-2xl border border-border-subtle p-6 shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center">
                  <Headset size={28} weight="duotone" className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-navy-deep">Tu asesor técnico</p>
                  <p className="text-sm text-slate-light">
                    Siempre disponible para lo que necesites
                  </p>
                </div>
              </div>
              {/* Commitment badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-light text-coral text-sm font-semibold">
                  <CheckCircle size={16} weight="bold" />
                  &lt; 30 min
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                  <ShieldCheck size={16} weight="bold" />
                  Respuesta garantizada
                </span>
              </div>
              {/* Mini checklist */}
              <div className="space-y-3">
                {["Hosting veloz incluido en tu plan", "Copias de seguridad diarias", "Certificado SSL activo", "Actualizaciones automáticas"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <CheckCircle size={12} weight="bold" className="text-emerald-600" />
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
        {description && <p className="text-slate-light text-sm">{description}</p>}
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
