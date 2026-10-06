/**
 * data/services.js
 * Modelo de datos: líneas de negocio (unidades de servicio) de INCOLMER.
 * Los iconos son SVG inline porque dependen del color de marca (currentColor)
 * y deben heredarlo del contenedor donde se renderizan.
 */

export const SERVICES_DATA = [
    {
        id: 'biomedica',
        title: "Tecnología Biomédica y Hospitalaria",
        description: "Mantenimiento preventivo, correctivo, diagnóstico técnico, inventario, gestión de tecnología y mobiliario hospitalario para equipos de soporte vital, diagnóstico, imagenología y laboratorio.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.166a2 2 0 01-2.612 1.233l-2.612-1.233a2 2 0 01-1.233-2.612l1.233-2.612a2 2 0 012.612-1.233l2.612 1.233a2 2 0 011.233 2.612l-1.233 2.612a2 2 0 01-2.612 1.233l-2.612-1.233a2 2 0 01-1.233-2.612l1.233-2.612a2 2 0 012.612-1.233l2.612 1.233a2 2 0 011.233 2.612l-1.233 2.612a2 2 0 01-2.612 1.233l-2.612-1.233a2 2 0 01-1.233-2.612l1.233-2.612z"></path></svg>`,
        features: ["Equipos de soporte vital y monitoreo", "Hojas de vida y trazabilidad técnica", "Asesoría para adquisición y renovación"]
    },
    {
        id: 'infraestructura',
        title: "Infraestructura Hospitalaria",
        description: "Mantenimiento y gestión de sistemas electromecánicos y redes críticas que soportan la operación continua de instituciones de salud e instalaciones complejas.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
        features: ["Plantas eléctricas y tableros", "Sistemas HVAC y confort térmico", "Redes de gases medicinales y vacío"]
    },
    {
        id: 'industrial',
        title: "Mantenimiento Industrial",
        description: "Soluciones de mantenimiento preventivo, correctivo y electromecánico para equipos, maquinaria e infraestructura industrial, comercial e institucional.",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.415.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
        features: ["Sistemas de bombeo y compresores", "Calderas y equipos a presión", "Gestión integral de activos"]
    },
    {
        id: 'suministros',
        title: "Suministro y Comercialización",
        description: "Provisión de equipos, maquinaria, componentes, accesorios, materiales y repuestos certificados para aplicaciones hospitalarias e industriales.",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>`,
        features: ["Repuestos biomédicos y electromecánicos", "Componentes eléctricos e hidráulicos", "Instrumentación y consumibles técnicos"]
    },
    {
        id: 'proyectos',
        title: "Instalación y Proyectos",
        description: "Diseño, montaje, adecuación, instalación y puesta en marcha de equipos y sistemas técnicos especializados para infraestructura crítica.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`,
        features: ["Montajes electromecánicos", "Instalación de redes técnicas", "Pruebas funcionales y entrega"]
    },
    {
        id: 'consultoria',
        title: "Ingeniería, Asesoría y Consultoría",
        description: "Servicios especializados basados en más de 20 años de experiencia para la gestión de tecnología biomédica, auditorías técnicas y planes de mantenimiento.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`,
        features: ["Gestión de tecnología biomédica", "Auditorías y diagnósticos técnicos", "Elaboración de planes de mantenimiento"]
    }
];