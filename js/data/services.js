/**
 * data/services.js
 * Modelo de datos: líneas de negocio (unidades de servicio) de INCOLMER.
 * Los iconos son SVG inline porque dependen del color de marca (currentColor)
 * y deben heredarlo del contenedor donde se renderizan.
 */

export const SERVICES_DATA = [
    {
        id: 'biomedica',
        title: "Gestión de Tecnología Biomédica e Industrial",
        description: "Gestionamos integralmente el ciclo de vida de la tecnología y los activos técnicos, articulando la gestión técnica, administrativa y documental para optimizar su desempeño, confiabilidad, trazabilidad y disponibilidad.",
        image: "assets/img/servicio-gestion-biomedica.jpg",
        imageWebp: "assets/img/servicio-gestion-biomedica.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.166a2 2 0 01-2.612 1.233l-2.612-1.233a2 2 0 01-1.233-2.612l1.233-2.612a2 2 0 012.612-1.233l2.612 1.233a2 2 0 011.233 2.612l-1.233 2.612a2 2 0 01-2.612 1.233l-2.612-1.233a2 2 0 01-1.233-2.612l1.233-2.612z"></path></svg>`,
        features: ["Gestión integral del ciclo de vida de activos tecnológicos.", "Planeación y gestión técnica, documental y administrativa del mantenimiento.", "Evaluación de desempeño, riesgo, obsolescencia y renovación tecnológica."]
    },
    {
        id: 'metrologia',
        title: "Aseguramiento Metrológico",
        description: "Desarrollamos estrategias de aseguramiento metrológico y control de la confiabilidad de las mediciones, fortaleciendo la trazabilidad, el cumplimiento técnico y la gestión de riesgos asociados a equipos e instrumentos.",
        image: "assets/img/servicio-metrologia.jpg",
        imageWebp: "assets/img/servicio-metrologia.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.415.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 12.75c0 .621.504 2.25 1.5 2.25s1.5-1.629 1.5-2.25-.504-2.25-1.5-2.25-1.5 1.629-1.5 2.25zm4.5 0h.008v.008h-.008v-.008z"></path></svg>`,
        features: ["Gestión y control del programa de aseguramiento metrológico.", "Calibración, verificación y trazabilidad de equipos e instrumentos.", "Gestión documental y análisis de resultados metrológicos."]
    },
    {
        id: 'infraestructura',
        title: "Ingeniería e Infraestructura Técnica",
        description: "Diseñamos, integramos y gestionamos soluciones para infraestructura hospitalaria, industrial, comercial, educativa y corporativa, incluyendo redes y sistemas técnicos asociados.",
        image: "assets/img/servicio-infraestructura.jpg",
        imageWebp: "assets/img/servicio-infraestructura.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
        features: ["Diseño, adecuación y modernización de infraestructura técnica.", "Redes eléctricas, hidráulicas, gases medicinales y sistemas electromecánicos.", "Climatización, ventilación, refrigeración y sistemas de respaldo energético."]
    },
    {
        id: 'mantenimiento',
        title: "Mantenimiento y Continuidad Operativa",
        description: "Integramos la gestión del mantenimiento con la administración técnica de activos e infraestructura, orientada a maximizar disponibilidad, confiabilidad, seguridad y continuidad de las operaciones.",
        image: "assets/img/servicio-mantenimiento.jpg",
        imageWebp: "assets/img/servicio-mantenimiento.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/></svg>`,
        features: ["Estrategias y planes integrales de mantenimiento.", "Gestión de indicadores, riesgos y desempeño de activos.", "Mantenimiento y conservación de equipos, instalaciones e infraestructura."]
    },
    {
        id: 'consultoria',
        title: "Consultoría, Asesoría e Interventoría",
        description: "Acompañamos proyectos y organizaciones en gestión tecnológica, infraestructura, cumplimiento y desarrollo de proyectos, aportando conocimiento especializado para la toma de decisiones.",
        image: "assets/img/servicio-consultoria.jpg",
        imageWebp: "assets/img/servicio-consultoria.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`,
        features: ["Habilitación y acreditación en salud, tecnovigilancia, ambiente físico y gestión de tecnología.", "Diseño, construcción y dotación de infraestructura hospitalaria.", "Consultoría e interventoría técnica para proyectos y sistemas industriales."]
    },
    {
        id: 'suministros',
        title: "Suministro y Soluciones Técnicas",
        description: "Integramos el suministro y soporte de equipos, tecnología, repuestos, componentes y materiales, de acuerdo con las necesidades de cada proyecto.",
        image: "assets/img/servicio-suministros.jpg",
        imageWebp: "assets/img/servicio-suministros.webp",
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>`,
        features: ["Equipos biomédicos, hospitalarios e industriales.", "Repuestos, componentes, herramientas y materiales técnicos.", "Mobiliario, ferretería y soluciones para infraestructura y mantenimiento."]
    }
];