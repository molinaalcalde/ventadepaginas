export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
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
          "Páginas web profesionales con gestor de clientes y WhatsApp Business integrado. Entrega en 2 semanas. Hosting y soporte incluido.",
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
            name: "¿Necesito pagar licencias adicionales por el gestor de clientes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. El gestor de clientes está integrado directamente en tu web, no necesitas pagar licencias de HubSpot, Salesforce ni ningún software adicional. Todo viene incluido en tu plan.",
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
              text: "2 semanas exactas desde nuestra primera conversación. Incluye diseño, desarrollo, gestor de clientes y lanzamiento.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué incluye exactamente?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Todo lo que necesitas: web profesional, gestor de clientes integrado, conexión con WhatsApp Business, tu Tarjeta Digital para redes sociales, hosting de alta velocidad y soporte directo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué es un gestor de clientes y por qué lo necesito?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Es como la libreta donde antes anotabas los datos de tus clientes, pero inteligente. Guarda quién te llamó, qué te pidió, cuándo fue la última vez que le escribiste y si ya te pagó. Los negocios que usan un gestor de clientes venden hasta un 29% más.",
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
