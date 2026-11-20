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
    author: "KINETIC",
    headings: [
      {
        id: "realidad-digital-rd",
        text: "La realidad digital en República Dominicana",
        level: 2,
      },
      {
        id: "clientes-buscan-google",
        text: "Tus clientes te buscan en Google (aunque no lo sepas)",
        level: 2,
      },
      {
        id: "web-vs-redes-sociales",
        text: "Web profesional vs. solo redes sociales",
        level: 2,
      },
      {
        id: "que-debe-tener",
        text: "Qué debe tener tu web para vender",
        level: 2,
      },
      {
        id: "cuanto-cuesta-no-tener",
        text: "¿Cuánto te cuesta NO tener web?",
        level: 2,
      },
    ],
    content: `
      <h2 id="realidad-digital-rd">La realidad digital en República Dominicana</h2>
      <p>Según datos recientes, más de 78,000 negocios en República Dominicana operan sin una página web profesional. Mientras tanto, el 87% de los dominicanos con acceso a internet buscan productos y servicios en Google antes de comprar.</p>
      <p>¿Qué significa esto? Que si tu negocio no aparece en Google, estás perdiendo clientes todos los días — clientes que terminan comprándole a tu competencia.</p>

      <h2 id="clientes-buscan-google">Tus clientes te buscan en Google (aunque no lo sepas)</h2>
      <p>Piensa en la última vez que necesitaste un dentista, un hotel o un restaurante. ¿Qué hiciste? Probablemente abriste Google y buscaste. Tus clientes hacen exactamente lo mismo.</p>
      <p>Sin una web profesional, tu negocio es <strong>invisible</strong> para estas personas. No importa qué tan bueno sea tu producto o servicio — si no te encuentran, no te compran.</p>
      <blockquote>El 92% de los consumidores confían más en un negocio que tiene página web profesional que en uno que solo tiene redes sociales.</blockquote>

      <h2 id="web-vs-redes-sociales">Web profesional vs. solo redes sociales</h2>
      <p>Muchos dueños de negocios creen que con una página de Instagram o Facebook es suficiente. La verdad es que las redes sociales son un complemento, no un sustituto.</p>
      <ul>
        <li><strong>Las redes sociales no te pertenecen</strong> — Facebook puede cambiar su algoritmo mañana y tu alcance cae a cero</li>
        <li><strong>No apareces en Google</strong> — nadie busca "mejor dentista Santo Domingo" en Instagram</li>
        <li><strong>No puedes recibir reservas ni citas</strong> — solo puedes chatear por DM</li>
        <li><strong>No transmites profesionalismo</strong> — una web propia dice "este negocio es serio"</li>
      </ul>

      <h2 id="que-debe-tener">Qué debe tener tu web para vender</h2>
      <p>No cualquier web funciona. Para que tu página realmente te traiga clientes, necesita:</p>
      <ol>
        <li><strong>Diseño profesional</strong> que genere confianza en los primeros 3 segundos</li>
        <li><strong>Velocidad de carga</strong> menor a 2 segundos (el 53% abandona si tarda más)</li>
        <li><strong>Adaptada a celulares</strong> — el 70% de las visitas en RD vienen del celular</li>
        <li><strong>Conexión con WhatsApp</strong> para que el cliente te escriba en un clic</li>
        <li><strong>Optimizada para Google</strong> para que aparezcas en las búsquedas</li>
      </ol>

      <h2 id="cuanto-cuesta-no-tener">¿Cuánto te cuesta NO tener web?</h2>
      <p>Hagamos un ejercicio rápido. Si tu negocio pierde al menos 5 clientes potenciales por semana por no tener web (una estimación conservadora), y cada cliente vale en promedio $50 USD:</p>
      <p><strong>5 clientes × $50 × 4 semanas = $1,000 USD al mes que estás dejando sobre la mesa.</strong></p>
      <p>En un año, eso son $12,000 USD en ventas perdidas. ¿Vale la pena seguir sin web?</p>
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
    author: "KINETIC",
    headings: [
      {
        id: "por-que-whatsapp",
        text: "Por qué WhatsApp es clave para tu negocio",
        level: 2,
      },
      {
        id: "configurar-perfil",
        text: "Configura tu perfil profesional",
        level: 2,
      },
      {
        id: "respuestas-rapidas",
        text: "Respuestas rápidas que cierran ventas",
        level: 2,
      },
      {
        id: "catalogo-productos",
        text: "Tu catálogo de productos en WhatsApp",
        level: 2,
      },
    ],
    content: `
      <h2 id="por-que-whatsapp">Por qué WhatsApp es clave para tu negocio</h2>
      <p>En República Dominicana, el 95% de la población con smartphone usa WhatsApp diariamente. No es solo la app de mensajería más popular — es donde tus clientes esperan comunicarse contigo.</p>
      <p>Cuando conectas WhatsApp Business a tu web, cada visitante puede escribirte con un solo toque. Sin formularios largos, sin esperas, sin fricción.</p>

      <h2 id="configurar-perfil">Configura tu perfil profesional</h2>
      <p>Tu perfil de WhatsApp Business es tu tarjeta de presentación digital. Asegúrate de completar:</p>
      <ul>
        <li><strong>Foto de perfil</strong> — tu logo, no una foto personal</li>
        <li><strong>Descripción</strong> — qué haces y dónde estás en 2 líneas</li>
        <li><strong>Horarios</strong> — para que sepan cuándo esperar respuesta</li>
        <li><strong>Dirección y web</strong> — genera confianza</li>
      </ul>

      <h2 id="respuestas-rapidas">Respuestas rápidas que cierran ventas</h2>
      <p>Configura respuestas rápidas para las preguntas más frecuentes. Cuando un cliente te escribe "¿cuánto cuesta?", no quiere esperar 3 horas por una respuesta.</p>
      <p>Con respuestas rápidas, escribes "/" y seleccionas el mensaje predefinido. Respuesta en 5 segundos = cliente más satisfecho = más ventas cerradas.</p>

      <h2 id="catalogo-productos">Tu catálogo de productos en WhatsApp</h2>
      <p>WhatsApp Business te permite crear un catálogo con fotos, descripciones y precios de tus productos o servicios. Es como tener una mini-tienda dentro de WhatsApp.</p>
      <p>Cuando un cliente pregunta "¿qué servicios ofrecen?", le envías el catálogo completo en un toque.</p>
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
    author: "KINETIC",
    headings: [
      {
        id: "problema-excel",
        text: "El problema con Excel y los papelitos",
        level: 2,
      },
      {
        id: "que-es-gestor",
        text: "Qué es un gestor de clientes (explicado fácil)",
        level: 2,
      },
      {
        id: "beneficios-reales",
        text: "Beneficios reales para tu negocio",
        level: 2,
      },
    ],
    content: `
      <h2 id="problema-excel">El problema con Excel y los papelitos</h2>
      <p>¿Te ha pasado que un cliente te escribió hace 2 semanas y se te olvidó responderle? ¿O que no recuerdas qué le cotizaste a alguien? Si usas Excel, libretas o notas en el celular para llevar tus clientes, esto te pasa más de lo que crees.</p>
      <p>El resultado: clientes que se van a la competencia porque no les diste seguimiento.</p>

      <h2 id="que-es-gestor">Qué es un gestor de clientes (explicado fácil)</h2>
      <p>Imagina una libreta inteligente donde se guardan automáticamente todos tus clientes. Cada vez que alguien te escribe por WhatsApp o llena un formulario en tu web, aparece ahí con su nombre, teléfono y qué necesita.</p>
      <p>Además, te avisa cuándo es momento de darle seguimiento. Es como tener un asistente personal que nunca se le olvida nada.</p>

      <h2 id="beneficios-reales">Beneficios reales para tu negocio</h2>
      <ul>
        <li><strong>Nunca se te pierde un cliente</strong> — todo queda registrado automáticamente</li>
        <li><strong>Seguimiento sin esfuerzo</strong> — te avisa cuándo llamar o escribir</li>
        <li><strong>Más ventas cerradas</strong> — porque respondes rápido y no olvidas a nadie</li>
        <li><strong>Desde tu celular</strong> — no necesitas computadora ni conocimientos técnicos</li>
      </ul>
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
    author: "KINETIC",
    headings: [
      { id: "error-1", text: "1. Web lenta que espanta visitantes", level: 2 },
      {
        id: "error-2",
        text: "2. No funciona bien en celulares",
        level: 2,
      },
      { id: "error-3", text: "3. Sin conexión a WhatsApp", level: 2 },
      { id: "error-4", text: "4. No aparece en Google", level: 2 },
      {
        id: "error-5",
        text: "5. Diseño que no genera confianza",
        level: 2,
      },
    ],
    content: `
      <h2 id="error-1">1. Web lenta que espanta visitantes</h2>
      <p>Si tu web tarda más de 3 segundos en cargar, el 53% de los visitantes la abandona. Así de simple. Pierdes más de la mitad de tus potenciales clientes antes de que vean tu contenido.</p>

      <h2 id="error-2">2. No funciona bien en celulares</h2>
      <p>En República Dominicana, el 70% de las visitas a sitios web vienen desde celulares. Si tu web no se ve bien en un teléfono, estás perdiendo 7 de cada 10 visitantes.</p>

      <h2 id="error-3">3. Sin conexión a WhatsApp</h2>
      <p>El dominicano quiere escribirte por WhatsApp, no llenar formularios eternos ni llamar por teléfono. Si tu web no tiene un botón de WhatsApp visible, estás poniendo una barrera entre tú y tu próximo cliente.</p>

      <h2 id="error-4">4. No aparece en Google</h2>
      <p>De nada sirve tener la web más bonita del mundo si nadie la encuentra. La optimización para Google (SEO) no es opcional — es lo que hace que tus clientes te descubran cuando buscan lo que tú vendes.</p>

      <h2 id="error-5">5. Diseño que no genera confianza</h2>
      <p>Tu web es tu primera impresión. Si se ve anticuada, desorganizada o poco profesional, el visitante asume que tu negocio también lo es. Un diseño moderno y limpio dice "aquí hay un negocio serio".</p>
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
    author: "KINETIC",
    headings: [
      {
        id: "comisiones-ota",
        text: "El costo real de depender de Booking y Expedia",
        level: 2,
      },
      {
        id: "reservas-directas",
        text: "Cómo captar reservas directas",
        level: 2,
      },
      {
        id: "caso-real",
        text: "Caso real: Hotel Boutique Casa Colonial",
        level: 2,
      },
    ],
    content: `
      <h2 id="comisiones-ota">El costo real de depender de Booking y Expedia</h2>
      <p>Las OTAs (Booking, Expedia, etc.) cobran entre 15% y 25% de comisión por cada reserva. Si tu hotel factura $10,000 USD al mes, estás pagando entre $1,500 y $2,500 en comisiones.</p>
      <p>¿Y si pudieras recibir esas reservas directamente desde tu propia web? Ese dinero se queda en tu bolsillo.</p>

      <h2 id="reservas-directas">Cómo captar reservas directas</h2>
      <p>La clave es tener una web que inspire confianza y haga fácil reservar:</p>
      <ul>
        <li>Fotos profesionales de las habitaciones y áreas comunes</li>
        <li>Formulario de reserva simple y rápido</li>
        <li>Botón de WhatsApp para preguntas inmediatas</li>
        <li>Reseñas de huéspedes anteriores</li>
        <li>Precios claros y transparentes</li>
      </ul>

      <h2 id="caso-real">Caso real: Hotel Boutique Casa Colonial</h2>
      <p>María del Carmen, dueña de Hotel Boutique Casa Colonial en Santo Domingo, pagaba más de $3,000 mensuales en comisiones a plataformas. Desde que tiene su web con KINETIC, el 60% de sus huéspedes reservan directo. En 6 meses recuperó toda la inversión.</p>
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
    author: "KINETIC",
    headings: [
      { id: "situacion-inicial", text: "La situación inicial", level: 2 },
      { id: "solucion", text: "La solución", level: 2 },
      { id: "resultados", text: "Los resultados en números", level: 2 },
    ],
    content: `
      <h2 id="situacion-inicial">La situación inicial</h2>
      <p>El Centro Dental Sonríe en Santiago no tenía página web. Todos sus pacientes llegaban por recomendación boca a boca. El Dr. Méndez sabía que había un mercado de pacientes internacionales (americanos que viajan a RD por turismo dental), pero no tenía forma de captarlos.</p>

      <h2 id="solucion">La solución</h2>
      <p>KINETIC le diseñó una web bilingüe (español e inglés) con citas online, galería de trabajos realizados y conexión directa a WhatsApp. En 14 días estaba online.</p>

      <h2 id="resultados">Los resultados en números</h2>
      <ul>
        <li><strong>3x más consultas</strong> de pacientes internacionales en 3 meses</li>
        <li><strong>70% menos llamadas</strong> de agenda — los pacientes agendan solos</li>
        <li><strong>15 reseñas de 5 estrellas</strong> en Google en el primer trimestre</li>
      </ul>
      <p>Hoy, el Centro Dental Sonríe es uno de los más buscados en Google para "dentista Santiago RD".</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}
