/**
 * data/services.js
 * Modelo de datos: líneas de negocio (unidades de servicio) de INCOLMER.
 * Los iconos son SVG inline porque dependen del color de marca (currentColor)
 * y deben heredarlo del contenedor donde se renderizan.
 */

export const SERVICES_DATA = [
    {
        id: 'equipos',
        title: "Mantenimiento de Equipos y Maquinaria",
        description: "Mantenimiento preventivo, correctivo, diagnóstico técnico, inventario y gestión de activos para maquinaria de producción, equipos de proceso y activos productivos.",
        image: "assets/img/servicio-mantenimiento-maquinaria.jpg",
        imageWebp: "assets/img/servicio-mantenimiento-maquinaria.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.166a2 2 0 01-2.612 1.233l-2.612-1.233a2 2 0 01-1.233-2.612l1.233-2.612a2 2 0 012.612-1.233l2.612 1.233a2 2 0 011.233 2.612l-1.233 2.612a2 2 0 01-2.612 1.233l-2.612-1.233a2 2 0 01-1.233-2.612l1.233-2.612z"></path></svg>`,
        features: ["Equipos de producción y proceso", "Hojas de vida y trazabilidad técnica", "Asesoría para adquisición y renovación"]
    },
    {
        id: 'infraestructura',
        title: "Infraestructura e Instalaciones Técnicas",
        description: "Mantenimiento y gestión de sistemas electromecánicos y redes críticas que soportan la operación continua de plantas, edificios comerciales e instalaciones corporativas.",
        image: "assets/img/servicio-instalaciones-tecnicas.jpg",
        imageWebp: "assets/img/servicio-instalaciones-tecnicas.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
        features: ["Plantas eléctricas y tableros", "Sistemas HVAC y confort térmico", "Redes eléctricas, hidráulicas y de datos"]
    },
    {
        id: 'electromecanico',
        title: "Mantenimiento Electromecánico",
        description: "Soluciones de mantenimiento preventivo, correctivo y electromecánico para maquinaria, motores y sistemas auxiliares en plantas y grandes instalaciones.",
        image: "assets/img/servicio-mantenimiento-electromecanico.jpg",
        imageWebp: "assets/img/servicio-mantenimiento-electromecanico.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.415.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
        features: ["Sistemas de bombeo y compresores", "Calderas y equipos a presión", "Gestión integral de activos"]
    },
    {
        id: 'suministros',
        title: "Suministro Técnico y Repuestos",
        description: "Provisión de equipos, maquinaria, componentes, accesorios, materiales y repuestos certificados para aplicaciones industriales, comerciales y corporativas.",
        image: "assets/img/servicio-suministro-repuestos.jpg",
        imageWebp: "assets/img/servicio-suministro-repuestos.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>`,
        features: ["Repuestos electromecánicos e industriales", "Componentes eléctricos e hidráulicos", "Instrumentación y consumibles técnicos"]
    },
    {
        id: 'proyectos',
        title: "Adecuación, Instalación y Proyectos",
        description: "Diseño, montaje, adecuación, instalación y puesta en marcha de equipos y sistemas técnicos especializados para infraestructura crítica.",
        image: "assets/img/servicio-instalacion-proyectos.jpg",
        imageWebp: "assets/img/servicio-instalacion-proyectos.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`,
        features: ["Montajes electromecánicos", "Instalación de redes técnicas", "Pruebas funcionales y entrega"]
    },
    {
        id: 'consultoria',
        title: "Ingeniería, Diagnóstico y Asesoría",
        description: "Servicios especializados basados en más de 20 años de experiencia para la gestión de activos, auditorías técnicas y planes de mantenimiento.",
        image: "assets/img/servicio-ingenieria-asesoria.jpg",
        imageWebp: "assets/img/servicio-ingenieria-asesoria.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`,
        features: ["Gestión integral de activos", "Auditorías y diagnósticos técnicos", "Elaboración de planes de mantenimiento"]
    }
];
