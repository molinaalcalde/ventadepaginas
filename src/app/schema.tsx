export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ventadepaginas.vercel.app/#organization",
        name: "KINETIC Cloud & Web",
        url: "https://ventadepaginas.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://ventadepaginas.vercel.app/opengraph-image",
        },
        description:
          "Agencia de diseno web profesional con CRM y WhatsApp integrado para pymes en Republica Dominicana, Panama y Costa Rica.",
        email: "hola@kineticweb.com",
        telephone: "+18091234567",
        foundingDate: "2024",
        areaServed: [
          { "@type": "Country", name: "Dominican Republic" },
          { "@type": "Country", name: "Panama" },
          { "@type": "Country", name: "Costa Rica" },
        ],
        sameAs: [
          "https://www.instagram.com/kineticweb",
          "https://www.facebook.com/kineticweb",
          "https://www.tiktok.com/@kineticweb",
          "https://www.linkedin.com/company/kineticweb",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ventadepaginas.vercel.app/#business",
        name: "KINETIC Cloud & Web",
        description:
          "Diseno web profesional con CRM y WhatsApp integrado para negocios en Republica Dominicana, Panama y Costa Rica.",
        url: "https://ventadepaginas.vercel.app",
        telephone: "+18091234567",
        email: "hola@kineticweb.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santo Domingo",
          addressRegion: "Distrito Nacional",
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
          { "@type": "Country", name: "Dominican Republic" },
          { "@type": "Country", name: "Panama" },
          { "@type": "Country", name: "Costa Rica" },
        ],
        parentOrganization: {
          "@id": "https://ventadepaginas.vercel.app/#organization",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios KINETIC",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diseno Web Profesional con CRM Integrado",
                description:
                  "Pagina web profesional con gestor de clientes, WhatsApp Business y tarjeta digital. Entrega en 14 dias.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://ventadepaginas.vercel.app/#website",
        url: "https://ventadepaginas.vercel.app",
        name: "KINETIC Cloud & Web",
        publisher: {
          "@id": "https://ventadepaginas.vercel.app/#organization",
        },
        inLanguage: "es",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ventadepaginas.vercel.app/#breadcrumb-home",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://ventadepaginas.vercel.app",
          },
        ],
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
