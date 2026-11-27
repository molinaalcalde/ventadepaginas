import { NextResponse } from "next/server";

const content = `# KINETIC Cloud & Web

> Agencia de diseno web profesional con CRM y WhatsApp integrado para pymes en Republica Dominicana, Panama y Costa Rica. Entrega en 14 dias. Mas de 140 negocios atendidos.

## Servicios

- [Pagina principal](https://ventadepaginas.vercel.app): Informacion completa sobre nuestros servicios de diseno web con CRM integrado
- [Blog](https://ventadepaginas.vercel.app/blog): Consejos practicos para hacer crecer tu negocio con presencia digital

## Articulos del blog

- [Por que tu negocio necesita web profesional](https://ventadepaginas.vercel.app/blog/por-que-tu-negocio-necesita-web-profesional): Estadisticas y razones por las que un negocio en RD necesita presencia web
- [Como usar WhatsApp Business para vender mas](https://ventadepaginas.vercel.app/blog/whatsapp-business-vender-mas): Guia practica de WhatsApp Business para negocios
- [Gestor de clientes vs Excel](https://ventadepaginas.vercel.app/blog/gestor-clientes-vs-excel): Comparacion entre CRM y metodos tradicionales de gestion de clientes
- [5 errores web de negocios en RD](https://ventadepaginas.vercel.app/blog/5-errores-web-negocios-rd): Errores comunes que impiden que una web genere clientes
- [Turismo digital en Punta Cana](https://ventadepaginas.vercel.app/blog/turismo-digital-punta-cana): Como hoteles captan reservas directas y reducen comisiones de OTAs
- [Clinica dental triplico pacientes online](https://ventadepaginas.vercel.app/blog/clinica-dental-pacientes-online): Caso de exito de presencia digital para clinicas dentales

## Sectores que atendemos

- Hoteles y turismo: webs con reservas directas y WhatsApp
- Clinicas y estetica: citas online y gestion de pacientes
- Inmobiliarias: catalogo de propiedades y captacion de leads
- Restaurantes: menu digital, reservas y delivery
- Servicios profesionales: formularios y gestion de consultas

## Informacion de contacto

- Ubicacion: Santo Domingo, Republica Dominicana
- Cobertura: Republica Dominicana, Panama, Costa Rica
- Email: hola@kineticweb.com
- Horarios: Lunes a Viernes, 8:00 AM a 6:00 PM (hora RD)
`;

export function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
