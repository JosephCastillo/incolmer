/**
 * modules/renderers/equipment.js
 * Responsabilidad: renderizar el catálogo de equipos y suministros.
 * Contenedor objetivo: #equipment-grid (equipos.html)
 */

import { EQUIPMENT_DATA } from '../../data/equipment.js';

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);

const cardTemplate = item => `
    <article class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between group">
        <div>
            <div class="relative aspect-video overflow-hidden bg-slate-100">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)} - INCOLMER INGENIERÍA S.A.S." loading="lazy" width="600" height="400" class="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-105">
                <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 bg-brand-dark/90 backdrop-blur-md text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md">
                        ${escapeHtml(item.category)}
                    </span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-lg font-bold text-slate-900 mb-2">${escapeHtml(item.title)}</h3>
                <p class="text-slate-600 text-xs leading-relaxed">${escapeHtml(item.description)}</p>
            </div>
        </div>
        <div class="p-6 pt-0">
            <a href="contacto.html?equipo=${encodeURIComponent(item.title)}" class="w-full block text-center py-3 bg-brand-dark hover:bg-brand-gold hover:text-brand-dark text-white text-xs font-bold rounded-xl transition-all shadow-sm">
                Solicitar Cotización
            </a>
        </div>
    </article>`;

export function renderEquipment() {
    const container = document.getElementById('equipment-grid');
    if (!container) return;

    container.innerHTML = EQUIPMENT_DATA.map(cardTemplate).join('');
}