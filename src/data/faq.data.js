// FAQ Data
export const faqData = [
    {
        id: 1,
        category: 'General',
        question: '¿Qué es IDHET?',
        answer: 'IDHET es una empresa tecnológica dominicana creada para desarrollar soluciones digitales que simplifiquen la vida cotidiana de la población, con enfoque especial en movilidad urbana y pagos electrónicos.'
    },
    {
        id: 2,
        category: 'MetroCard',
        question: '¿Qué es MetroCard?',
        answer: 'MetroCard es la única aplicación que permite recargar la tarjeta del Metro y Teleférico de Santo Domingo completamente online, en menos de 30 segundos y desde cualquier lugar.'
    },
    {
        id: 3,
        category: 'MetroCard',
        question: '¿Cómo puedo recargar mi tarjeta del metro?',
        answer: 'Descarga la app MetroCard, registra tu tarjeta, selecciona el monto a recargar, realiza el pago de forma segura y tu recarga estará disponible en segundos. Todo el proceso toma menos de 30 segundos.'
    },
    {
        id: 4,
        category: 'MetroCard',
        question: '¿Es seguro recargar mi tarjeta por la app?',
        answer: 'Sí, absolutamente. Utilizamos tecnología de encriptación de última generación y cumplimos con todos los estándares de seguridad internacionales para proteger tus datos y transacciones.'
    },
    {
        id: 5,
        category: 'Pagos',
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos tarjetas de crédito, tarjetas de débito, transferencias bancarias y otros métodos de pago electrónico populares en República Dominicana.'
    },
    {
        id: 6,
        category: 'Servicios',
        question: '¿Qué otros servicios ofrece IDHET además de MetroCard?',
        answer: 'Ofrecemos soluciones de pagos electrónicos, plataformas de movilidad urbana y desarrollo de soluciones digitales personalizadas para empresas y instituciones.'
    },
    {
        id: 7,
        category: 'Soporte',
        question: '¿Cómo puedo contactar al soporte técnico?',
        answer: 'Puedes contactarnos a través del formulario de contacto en nuestro sitio web, por correo electrónico o a través de nuestras redes sociales. Nuestro equipo de soporte está disponible 24/7.'
    },
    {
        id: 8,
        category: 'General',
        question: '¿Dónde están ubicados?',
        answer: 'IDHET está ubicada en Santo Domingo, República Dominicana. Operamos en todo el territorio nacional con presencia digital.'
    },
    {
        id: 9,
        category: 'MetroCard',
        question: '¿Cuánto tiempo tarda en reflejarse mi recarga?',
        answer: 'Las recargas se reflejan de forma inmediata en tu tarjeta, generalmente en menos de 30 segundos después de completar el pago.'
    },
    {
        id: 10,
        category: 'General',
        question: '¿Puedo solicitar una solución personalizada para mi empresa?',
        answer: 'Sí, ofrecemos servicios de desarrollo de soluciones digitales personalizadas. Contáctanos a través del formulario de contacto para discutir tus necesidades específicas.'
    }
];

// Group FAQs by category
export const faqCategories = ['Todos', 'General', 'MetroCard', 'Pagos', 'Servicios', 'Soporte'];

export const getFAQsByCategory = (category) => {
    if (category === 'Todos') return faqData;
    return faqData.filter(faq => faq.category === category);
};
