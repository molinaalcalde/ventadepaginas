import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/providers/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ventadepaginas.vercel.app"),
  title: {
    default: "KINETIC | Diseño Web Profesional con CRM y WhatsApp | República Dominicana",
    template: "%s | KINETIC Cloud & Web",
  },
  description:
    "Creamos la página web de tu negocio con CRM y WhatsApp integrado. Diseño premium, entrega en 2 semanas. Santo Domingo, República Dominicana.",
  keywords: [
    "diseño web República Dominicana",
    "página web para negocios Santo Domingo",
    "CRM para pymes RD",
    "diseño web con WhatsApp integrado",
    "agencia digital Santo Domingo",
    "web profesional para hoteles RD",
    "web para clínicas República Dominicana",
    "web para inmobiliarias Punta Cana",
    "CRM WhatsApp Business",
    "diseño web premium Caribe",
  ],
  authors: [{ name: "KINETIC Cloud & Web" }],
  creator: "KINETIC Cloud & Web",
  publisher: "KINETIC Cloud & Web",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KINETIC | Diseño Web Profesional con CRM y WhatsApp Integrado",
    description:
      "Tu web profesional lista en 2 semanas con CRM y WhatsApp integrado. Sin complicaciones técnicas. República Dominicana.",
    type: "website",
    locale: "es_DO",
    siteName: "KINETIC Cloud & Web",
    url: "https://ventadepaginas.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "KINETIC | Diseño Web con CRM y WhatsApp Integrado",
    description:
      "Web profesional + CRM + WhatsApp en 2 semanas. Santo Domingo, RD.",
  },
  alternates: {
    canonical: "https://ventadepaginas.vercel.app",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-DO"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-text selection:bg-primary-light selection:text-primary overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
