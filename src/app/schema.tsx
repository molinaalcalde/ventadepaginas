export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://ventadepaginas.vercel.app/#business",
        name: "KINETIC Cloud & Web",
        description:
          "Diseño web profesional con CRM y WhatsApp integrado para negocios en República Dominicana.",
        url: "https://ventadepaginas.vercel.app",
        telephone: "+18091234567",
        email: "hola@kineticweb.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santo Domingo",
          addressCountry: "DO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.4861,
          longitude: -69.9312,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "45",
          bestRating: "5",
        },
        areaServed: [
          { "@type": "Country", name: "República Dominicana" },
          { "@type": "Country", name: "Panamá" },
          { "@type": "Country", name: "Costa Rica" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://ventadepaginas.vercel.app/#website",
        url: "https://ventadepaginas.vercel.app",
        name: "KINETIC Cloud & Web",
        publisher: {
          "@id": "https://ventadepaginas.vercel.app/#business",
        },
        inLanguage: "es",
      },
      {
        "@type": "Service",
        "@id": "https://ventadepaginas.vercel.app/#service-web",
        name: "Diseño Web Profesional con CRM Integrado",
        provider: {
          "@id": "https://ventadepaginas.vercel.app/#business",
        },
        serviceType: "Diseño y Desarrollo Web",
        description:
          "Páginas web profesionales con CRM y WhatsApp Business integrado. Entrega en 2 semanas. Incluye dominio, hosting y soporte.",
        offers: {
          "@type": "Offer",
          price: "997",
          priceCurrency: "USD",
          description: "Plan completo: Web + CRM + WhatsApp + Dominio + Hosting",
        },
        areaServed: {
          "@type": "Country",
          name: "República Dominicana",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://ventadepaginas.vercel.app/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Necesito pagar licencias adicionales por el CRM?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. El CRM está integrado directamente en tu web, no necesitas pagar licencias de HubSpot, Salesforce ni ningún software adicional. Todo viene incluido en tu plan.",
            },
          },
          {
            "@type": "Question",
            name: "¿Funciona con WhatsApp Business?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Conectamos tu WhatsApp Business para que cada formulario, reserva o consulta te llegue directo al celular. También puedes responder desde la web.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto tiempo tarda en estar lista mi web?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "2 semanas exactas desde nuestra primera conversación. Incluye diseño, desarrollo, CRM y lanzamiento.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto cuesta?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nuestros planes arrancan desde $997 USD e incluyen todo: web + CRM + WhatsApp + dominio + hosting. Consulta nuestras opciones de pago flexibles.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
