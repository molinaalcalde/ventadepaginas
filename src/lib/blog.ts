export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  featured?: boolean;
  image?: string;
  author: string;
  headings: { id: string; text: string; level: number }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "por-que-tu-negocio-necesita-web-profesional",
    title: "¿Por qué tu negocio en RD necesita una web profesional en 2025?",
    excerpt:
      "El 78% de los negocios en República Dominicana aún no tienen presencia web. Descubre por qué los que sí la tienen están vendiendo más.",
    category: "Estrategia Digital",
    categoryColor: "bg-primary/15 text-primary border-primary/20",
    date: "15 Nov 2026",
    readTime: "8 min",
    featured: true,
    author: "Alejandro Molina",
    headings: [
      {
        id: "realidad-digital-rd",
        text: "¿Cuál es la realidad digital de los negocios en República Dominicana?",
        level: 2,
      },
      {
        id: "clientes-buscan-google",
        text: "¿Tus clientes te buscan en Google?",
        level: 2,
      },
      {
        id: "web-vs-redes-sociales",
        text: "¿Es mejor tener web propia o solo redes sociales?",
        level: 2,
      },
      {
        id: "que-debe-tener",
        text: "¿Qué debe tener una web para generar clientes?",
        level: 2,
      },
      {
        id: "cuanto-cuesta-no-tener",
        text: "¿Cuánto te cuesta NO tener web?",
        level: 2,
      },
    ],
    content: `
      <p><strong>En resumen:</strong> Un negocio en República Dominicana que no tiene página web profesional pierde aproximadamente $1,000 USD al mes en clientes potenciales. Más de 78,000 negocios dominicanos operan sin web, mientras el 87% de los consumidores buscan productos y servicios en Google antes de comprar. Tener una web profesional con diseño moderno, velocidad de carga rápida y conexión a WhatsApp Business es lo que convierte visitantes en clientes.</p>

      <h2 id="realidad-digital-rd">¿Cuál es la realidad digital de los negocios en República Dominicana?</h2>
      <p>Más de 78,000 negocios en República Dominicana operan sin una página web profesional. Mientras tanto, el 87% de los dominicanos con acceso a internet buscan productos y servicios en Google antes de comprar. Esto significa que si tu negocio no aparece en Google, estás perdiendo clientes todos los días que terminan comprándole a tu competencia.</p>

      <h2 id="clientes-buscan-google">¿Tus clientes te buscan en Google?</h2>
      <p>Sí. El 87% de los consumidores con acceso a internet en RD buscan negocios en Google antes de tomar una decisión de compra. Piensa en la última vez que necesitaste un dentista, un hotel o un restaurante. Probablemente abriste Google y buscaste. Tus clientes hacen exactamente lo mismo.</p>
      <p>Sin una web profesional, tu negocio es <strong>invisible</strong> para estas personas. No importa qué tan bueno sea tu producto o servicio. Si no te encuentran, no te compran.</p>
      <blockquote>El 92% de los consumidores confían más en un negocio que tiene página web profesional que en uno que solo tiene redes sociales.</blockquote>

      <h2 id="web-vs-redes-sociales">¿Es mejor tener web propia o solo redes sociales?</h2>
      <p>Una página web profesional es significativamente mejor que depender solo de redes sociales. Las redes son un complemento importante, pero no un sustituto de tu propia web. Con una web propia, apareces en Google, recibes reservas y citas directamente, y transmites profesionalismo. Con solo redes sociales, dependes de algoritmos que pueden cambiar en cualquier momento.</p>
      <ul>
        <li><strong>Las redes sociales no te pertenecen</strong>. Facebook puede cambiar su algoritmo mañana y tu alcance cae a cero</li>
        <li><strong>No apareces en Google</strong>. Nadie busca "mejor dentista Santo Domingo" en Instagram</li>
        <li><strong>No puedes recibir reservas ni citas</strong>. Solo puedes chatear por DM</li>
        <li><strong>No transmites profesionalismo</strong>. Una web propia dice "este negocio es serio"</li>
      </ul>

      <h2 id="que-debe-tener">¿Qué debe tener una web para generar clientes?</h2>
      <p>Una web que genera clientes necesita cinco elementos esenciales: diseño profesional que genere confianza en los primeros 3 segundos, velocidad de carga menor a 2 segundos, diseño adaptado a celulares (el 70% de las visitas en RD son móviles), conexión directa con WhatsApp Business, y optimización para aparecer en Google. Sin estos cinco elementos, una web es solo una tarjeta de presentación digital que nadie visita.</p>

      <h2 id="cuanto-cuesta-no-tener">¿Cuánto te cuesta NO tener web?</h2>
      <p>Un negocio sin presencia web pierde aproximadamente $1,000 USD al mes en ventas potenciales. El cálculo es simple: si tu negocio pierde al menos 5 clientes potenciales por semana por no tener web (una estimación conservadora), y cada cliente vale en promedio $50 USD, eso son 5 clientes multiplicado por $50 multiplicado por 4 semanas, igual a $1,000 USD al mes que estás dejando sobre la mesa.</p>
      <p>En un año, eso son <strong>$12,000 USD en ventas perdidas</strong>. ¿Vale la pena seguir sin web?</p>
    `,
  },
  {
    slug: "whatsapp-business-vender-mas",
    title: "Cómo usar WhatsApp Business para vender más (guía práctica)",
    excerpt:
      "WhatsApp no es solo para chatear. Aprende a convertirlo en tu mejor herramienta de ventas con estas estrategias probadas.",
    category: "WhatsApp",
    categoryColor: "bg-[#25D366]/15 text-[#25D366] border-[#25D366]/20",
    date: "10 Nov 2026",
    readTime: "6 min",
    author: "Alejandro Molina",
    headings: [
      {
        id: "por-que-whatsapp",
        text: "¿Por qué WhatsApp Business es clave para vender más?",
        level: 2,
      },
      {
        id: "configurar-perfil",
        text: "¿Cómo configurar un perfil profesional en WhatsApp Business?",
        level: 2,
      },
      {
        id: "respuestas-rapidas",
        text: "¿Cómo usar respuestas rápidas para cerrar más ventas?",
        level: 2,
      },
      {
        id: "catalogo-productos",
        text: "¿Cómo crear un catálogo de productos en WhatsApp?",
        level: 2,
      },
    ],
    content: `
      <p><strong>En resumen:</strong> WhatsApp Business es la herramienta de ventas más poderosa para negocios en República Dominicana, donde el 95% de los usuarios de smartphone usan WhatsApp diariamente. Para aprovecharla al máximo, necesitas un perfil profesional completo, respuestas rápidas configuradas para las preguntas frecuentes, y un catálogo de productos activo. Cuando conectas WhatsApp Business a tu página web, cada visitante puede escribirte con un solo toque, eliminando la fricción que mata ventas.</p>

      <h2 id="por-que-whatsapp">¿Por qué WhatsApp Business es clave para vender más?</h2>
      <p>En República Dominicana, el 95% de la población con smartphone usa WhatsApp diariamente. No es solo la app de mensajería más popular: es el canal donde tus clientes esperan comunicarse contigo. Cuando conectas WhatsApp Business a tu web, cada visitante puede escribirte con un solo toque. Sin formularios largos, sin esperas, sin fricción. Los negocios que integran WhatsApp Business en su web reportan tasas de respuesta hasta 3 veces mayores que los que usan solo formularios de contacto.</p>

      <h2 id="configurar-perfil">¿Cómo configurar un perfil profesional en WhatsApp Business?</h2>
      <p>Un perfil profesional de WhatsApp Business necesita cuatro elementos: foto de perfil con tu logo (no una foto personal), una descripción de dos líneas con lo que haces y dónde estás, horarios de atención para que el cliente sepa cuándo esperar respuesta, y tu dirección con enlace a tu web para generar confianza. Completar estos cuatro elementos establece credibilidad inmediata con cada nuevo contacto.</p>

      <h2 id="respuestas-rapidas">¿Cómo usar respuestas rápidas para cerrar más ventas?</h2>
      <p>Las respuestas rápidas de WhatsApp Business te permiten responder las preguntas más frecuentes en 5 segundos. Configúralas para preguntas como "¿cuánto cuesta?", "¿qué incluye?" y "¿cómo funciona?". Cuando un cliente escribe, tú tecleas "/" y seleccionas el mensaje predefinido. Respuesta en 5 segundos significa cliente más satisfecho y más ventas cerradas. Los negocios que no responden en menos de una hora pierden el 78% de los leads.</p>

      <h2 id="catalogo-productos">¿Cómo crear un catálogo de productos en WhatsApp?</h2>
      <p>WhatsApp Business incluye una función de catálogo que funciona como una mini tienda dentro de la aplicación. Puedes agregar fotos, descripciones y categorías de tus productos o servicios. Cuando un cliente pregunta "¿qué servicios ofrecen?", le envías el catálogo completo con un solo toque. Es gratis, no requiere conocimientos técnicos, y tus clientes pueden navegarlo sin salir de WhatsApp.</p>
    `,
  },
  {
    slug: "gestor-clientes-vs-excel",
    title: "Gestor de clientes vs. Excel: por qué estás perdiendo ventas",
    excerpt:
      "Si todavía usas Excel o papelitos para llevar tus clientes, estás dejando dinero sobre la mesa. Te explicamos por qué.",
    category: "Gestión",
    categoryColor: "bg-coral/15 text-coral border-coral/20",
    date: "5 Nov 2026",
    readTime: "5 min",
    author: "Alejandro Molina",
    headings: [
      {
        id: "problema-excel",
        text: "¿Por qué Excel no funciona para gestionar clientes?",
        level: 2,
      },
      {
        id: "que-es-gestor",
        text: "¿Qué es un gestor de clientes y cómo funciona?",
        level: 2,
      },
      {
        id: "beneficios-reales",
        text: "¿Qué beneficios reales tiene un CRM para pymes?",
        level: 2,
      },
    ],
    content: `
      <p><strong>En resumen:</strong> Un gestor de clientes (CRM) supera a Excel en todo lo que importa para un negocio pequeño: registra clientes automáticamente cuando te escriben por WhatsApp o tu web, te avisa cuándo darles seguimiento, y nunca se le olvida nada. Los negocios que usan un CRM venden hasta un 29% más porque responden más rápido y no pierden oportunidades. Excel y los papelitos simplemente no pueden competir con eso.</p>

      <h2 id="problema-excel">¿Por qué Excel no funciona para gestionar clientes?</h2>
      <p>Excel no funciona para gestionar clientes porque depende de que tú recuerdes actualizar la información manualmente. Se te olvida responder a un cliente que escribió hace dos semanas. No recuerdas qué le cotizaste a alguien. Pierdes el teléfono de un contacto importante. Si usas Excel, libretas o notas en el celular para llevar tus clientes, esto te pasa más de lo que crees. El resultado: clientes que se van a la competencia porque no les diste seguimiento a tiempo.</p>

      <h2 id="que-es-gestor">¿Qué es un gestor de clientes y cómo funciona?</h2>
      <p>Un gestor de clientes (también llamado CRM) es una herramienta digital que registra automáticamente todos tus contactos y te ayuda a darles seguimiento sin esfuerzo. Funciona como una libreta inteligente: cada vez que alguien te escribe por WhatsApp o llena un formulario en tu web, aparece automáticamente con su nombre, teléfono y lo que necesita. Además, te avisa cuándo es momento de darle seguimiento. Es como tener un asistente personal que nunca se le olvida nada y está disponible desde tu celular.</p>

      <h2 id="beneficios-reales">¿Qué beneficios reales tiene un CRM para pymes?</h2>
      <p>Los cuatro beneficios principales de usar un CRM en tu negocio son: primero, nunca se te pierde un cliente porque todo queda registrado automáticamente. Segundo, el seguimiento se vuelve fácil porque el sistema te avisa cuándo llamar o escribir. Tercero, cierras más ventas porque respondes rápido y no olvidas a nadie. Cuarto, funciona desde tu celular sin necesitar computadora ni conocimientos técnicos. Los negocios que implementan un CRM ven un incremento promedio del 29% en sus ventas durante los primeros 6 meses.</p>
    `,
  },
  {
    slug: "5-errores-web-negocios-rd",
    title: "5 errores que cometen los negocios en RD con su página web",
    excerpt:
      "Tener web no es suficiente. Estos son los errores más comunes que hacen que tu página no te traiga clientes.",
    category: "Estrategia Digital",
    categoryColor: "bg-primary/15 text-primary border-primary/20",
    date: "1 Nov 2026",
    readTime: "7 min",
    author: "Alejandro Molina",
    headings: [
      { id: "error-1", text: "¿Tu web tarda más de 3 segundos en cargar?", level: 2 },
      {
        id: "error-2",
        text: "¿Tu web funciona bien en celulares?",
        level: 2,
      },
      { id: "error-3", text: "¿Tu web tiene botón de WhatsApp?", level: 2 },
      { id: "error-4", text: "¿Tu web aparece en Google?", level: 2 },
      {
        id: "error-5",
        text: "¿Tu diseño web genera confianza?",
        level: 2,
      },
    ],
    content: `
      <p><strong>En resumen:</strong> Los cinco errores más comunes que impiden que una página web genere clientes en República Dominicana son: velocidad de carga lenta (más de 3 segundos), diseño no adaptado a celulares, falta de botón de WhatsApp, cero optimización para Google, y diseño anticuado que no genera confianza. Corregir estos cinco problemas puede multiplicar por 3 los contactos que recibes a través de tu web.</p>

      <h2 id="error-1">¿Tu web tarda más de 3 segundos en cargar?</h2>
      <p>Si tu web tarda más de 3 segundos en cargar, el 53% de los visitantes la abandona antes de ver tu contenido. Pierdes más de la mitad de tus potenciales clientes sin que siquiera vean qué ofreces. Una web profesional debe cargar en menos de 2 segundos para retener al máximo de visitantes.</p>

      <h2 id="error-2">¿Tu web funciona bien en celulares?</h2>
      <p>En República Dominicana, el 70% de las visitas a sitios web vienen desde celulares. Si tu web no se ve bien en un teléfono, estás perdiendo 7 de cada 10 visitantes. Google además penaliza en sus resultados de búsqueda a las webs que no son responsive, lo que reduce tu visibilidad aún más.</p>

      <h2 id="error-3">¿Tu web tiene botón de WhatsApp?</h2>
      <p>El consumidor dominicano quiere escribirte por WhatsApp, no llenar formularios eternos ni llamar por teléfono. Si tu web no tiene un botón de WhatsApp visible, estás poniendo una barrera entre tú y tu próximo cliente. Un botón de WhatsApp reduce la fricción de contacto y puede aumentar las consultas en un 40%.</p>

      <h2 id="error-4">¿Tu web aparece en Google?</h2>
      <p>De nada sirve tener la web más bonita del mundo si nadie la encuentra. La optimización para Google (SEO) no es opcional para un negocio que quiere crecer. Es lo que hace que tus clientes te descubran cuando buscan exactamente lo que tú vendes. Sin SEO, tu web es como un local comercial en una calle sin tráfico.</p>

      <h2 id="error-5">¿Tu diseño web genera confianza?</h2>
      <p>Tu web es tu primera impresión. Los visitantes deciden en 3 segundos si confían en tu negocio basándose en el diseño de tu página. Si se ve anticuada, desorganizada o poco profesional, el visitante asume que tu negocio también lo es. Un diseño moderno y limpio dice "aquí hay un negocio serio".</p>
    `,
  },
  {
    slug: "turismo-digital-punta-cana",
    title:
      "Turismo digital: cómo los hoteles en Punta Cana están captando huéspedes directos",
    excerpt:
      "Los hoteles que venden directo por su web se ahorran hasta un 20% en comisiones. Así lo están haciendo en Punta Cana.",
    category: "Turismo",
    categoryColor: "bg-blue-100 text-blue-600 border-blue-200",
    date: "28 Oct 2026",
    readTime: "6 min",
    author: "Alejandro Molina",
    headings: [
      {
        id: "comisiones-ota",
        text: "¿Cuánto paga un hotel en comisiones a Booking y Expedia?",
        level: 2,
      },
      {
        id: "reservas-directas",
        text: "¿Cómo puede un hotel captar reservas directas por su web?",
        level: 2,
      },
      {
        id: "caso-real",
        text: "¿Qué resultados reales obtiene un hotel con web propia?",
        level: 2,
      },
    ],
    content: `
      <p><strong>En resumen:</strong> Los hoteles en Punta Cana y República Dominicana que tienen su propia web profesional se ahorran entre el 15% y 25% en comisiones que cobran plataformas como Booking y Expedia. Un hotel que factura $10,000 USD al mes puede recuperar entre $1,500 y $2,500 mensuales al captar reservas directas. La clave es tener una web con fotos profesionales, formulario de reserva simple, botón de WhatsApp y reseñas de huéspedes verificadas.</p>

      <h2 id="comisiones-ota">¿Cuánto paga un hotel en comisiones a Booking y Expedia?</h2>
      <p>Las OTAs (Online Travel Agencies) como Booking y Expedia cobran entre 15% y 25% de comisión por cada reserva procesada. Para un hotel que factura $10,000 USD al mes, eso significa entre $1,500 y $2,500 en comisiones mensuales. Al año, son hasta $30,000 USD que podrían quedarse en el bolsillo del hotel si las reservas llegaran directamente a través de su propia página web.</p>

      <h2 id="reservas-directas">¿Cómo puede un hotel captar reservas directas por su web?</h2>
      <p>Un hotel puede captar reservas directas cuando su web cumple cinco condiciones: fotos profesionales de habitaciones y áreas comunes, un formulario de reserva simple que se complete en menos de 2 minutos, un botón de WhatsApp visible para preguntas inmediatas, reseñas reales de huéspedes anteriores, y una experiencia de navegación rápida y fácil desde el celular. Estos elementos generan la confianza necesaria para que el huésped reserve directamente sin pasar por Booking.</p>

      <h2 id="caso-real">¿Qué resultados reales obtiene un hotel con web propia?</h2>
      <p>Hotel Boutique Casa Colonial en Santo Domingo pagaba más de $3,000 mensuales en comisiones a plataformas de reserva. Desde que tiene su web profesional con KINETIC, el 60% de sus huéspedes reservan directamente. En 6 meses recuperó toda la inversión en la web. Hoy ahorra más de $1,800 USD al mes en comisiones y tiene una relación directa con sus huéspedes desde antes de que lleguen al hotel.</p>
    `,
  },
  {
    slug: "clinica-dental-pacientes-online",
    title:
      "Cómo una clínica dental en Santiago triplicó sus pacientes con una web",
    excerpt:
      "Dr. Rafael Méndez pasó de 0 presencia online a recibir pacientes internacionales en solo 3 meses.",
    category: "Casos de Éxito",
    categoryColor: "bg-emerald-100 text-emerald-600 border-emerald-200",
    date: "20 Oct 2026",
    readTime: "4 min",
    author: "Alejandro Molina",
    headings: [
      { id: "situacion-inicial", text: "¿Puede una clínica dental crecer solo con presencia online?", level: 2 },
      { id: "solucion", text: "¿Qué necesita una clínica dental en su página web?", level: 2 },
      { id: "resultados", text: "¿Qué resultados obtiene una clínica dental con web profesional?", level: 2 },
    ],
    content: `
      <p><strong>En resumen:</strong> Centro Dental Sonríe en Santiago, República Dominicana, triplicó sus consultas de pacientes internacionales en 3 meses después de lanzar una web profesional. Pasaron de depender exclusivamente del boca a boca a captar turismo dental de Estados Unidos. Con citas online y WhatsApp integrado, redujeron un 70% las llamadas de agenda y obtuvieron 15 reseñas de 5 estrellas en Google en su primer trimestre.</p>

      <h2 id="situacion-inicial">¿Puede una clínica dental crecer solo con presencia online?</h2>
      <p>Sí. Centro Dental Sonríe en Santiago, RD, es prueba de ello. Antes de tener web, todos sus pacientes llegaban por recomendación boca a boca. El Dr. Méndez sabía que existía un mercado de turismo dental (americanos que viajan a República Dominicana por procedimientos dentales), pero sin presencia online no tenía forma de captarlos. El turismo dental en RD mueve millones de dólares al año, y la mayoría de estos pacientes buscan opciones en Google antes de viajar.</p>

      <h2 id="solucion">¿Qué necesita una clínica dental en su página web?</h2>
      <p>Una clínica dental necesita cuatro elementos clave en su web para captar pacientes: una versión bilingüe (español e inglés) si quiere atraer pacientes internacionales, un sistema de citas online donde el paciente pueda agendar sin llamar, una galería con fotos de trabajos realizados que genere confianza, y conexión directa a WhatsApp para responder preguntas al instante. KINETIC le diseñó todo esto al Centro Dental Sonríe y en 14 días estaba funcionando.</p>

      <h2 id="resultados">¿Qué resultados obtiene una clínica dental con web profesional?</h2>
      <p>Los resultados del Centro Dental Sonríe en sus primeros 3 meses con web profesional fueron: consultas de pacientes internacionales multiplicadas por 3, reducción del 70% en llamadas de agenda porque los pacientes agendan solos, y 15 reseñas de 5 estrellas en Google Maps en el primer trimestre. Hoy, Centro Dental Sonríe es uno de los resultados más visibles en Google para "dentista Santiago RD" y recibe pacientes de turismo dental sin depender de intermediarios.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}
