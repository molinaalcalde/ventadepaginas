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
  title: "KINETIC — Tu web profesional con CRM y WhatsApp integrado",
  description:
    "Creamos la página web de tu negocio con CRM y WhatsApp integrado. Recibe clientes, organiza tu agenda y crece sin complicaciones. República Dominicana, Panamá y Costa Rica.",
  keywords: [
    "diseño web República Dominicana",
    "página web para negocios",
    "CRM para pymes",
    "diseño web Santo Domingo",
    "web profesional con WhatsApp",
    "agencia digital RD",
  ],
  openGraph: {
    title: "KINETIC — Tu web profesional con CRM y WhatsApp integrado",
    description:
      "Una web que enamora a tus clientes y te llena la agenda. Con CRM y WhatsApp incluido.",
    type: "website",
    locale: "es_DO",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-text selection:bg-primary-light selection:text-primary">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
