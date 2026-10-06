/**
 * modules/renderers/services.js
 * Responsabilidad: renderizar la grilla de servicios desde el modelo de datos.
 * Contenedor objetivo: #services-grid (servicios.html)
 */

import { SERVICES_DATA } from '../../data/services.js';

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);

const featureList = features => features
    .map(feature => `
        <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-gold"></span> ${escapeHtml(feature)}
        </li>`)
    .join('');

const cardTemplate = service => `
    <article class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:-translate-y-1 hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col justify-between group">
        <div>
            <div class="relative aspect-video overflow-hidden bg-slate-100">
                <img src="${escapeHtml(service.image)}" alt="${escapeHtml(service.title)} - INCOLMER INGENIERÍA S.A.S." loading="lazy" width="600" height="400" class="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-105">
                <div class="absolute top-4 left-4">
                    <div class="w-12 h-12 bg-white/90 backdrop-blur-md text-brand-gold rounded-xl flex items-center justify-center shadow-md">
                        ${service.icon}
                    </div>
                </div>
            </div>
            <div class="p-8">
                <h3 class="text-xl font-bold text-slate-900 mb-3">${escapeHtml(service.title)}</h3>
                <p class="text-slate-600 text-sm leading-relaxed mb-6">${escapeHtml(service.description)}</p>
                <ul class="text-xs font-semibold text-slate-700 uppercase tracking-wider space-y-2.5 border-t border-slate-100 pt-4">
                    ${featureList(service.features)}
                </ul>
            </div>
        </div>
        <div class="p-8 pt-0">
            <a href="contacto.html?servicio=${encodeURIComponent(service.id)}" class="w-full block text-center py-3.5 bg-brand-dark hover:bg-brand-gold hover:text-brand-dark text-white text-xs font-bold rounded-xl transition-all shadow-sm">
                Cotizar Servicio
            </a>
        </div>
    </article>`;

export function renderServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    container.innerHTML = SERVICES_DATA.map(cardTemplate).join('');
}