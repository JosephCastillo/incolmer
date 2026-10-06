/**
 * modules/floating-widget.js
 * Responsabilidad: botón flotante de atención rápida (cotización / WhatsApp).
 * Se inyecta en el DOM para no duplicar su markup en cada página.
 * No se muestra en la página de contacto, que ya ofrece esos canales.
 */

import { WHATSAPP_URL } from '../config/site.js';

const TEMPLATE = `
    <div id="widget-menu" class="hidden bg-white rounded-2xl shadow-2xl p-5 mb-4 border border-slate-100 flex flex-col gap-4 w-72">
        <div class="pb-2 border-b border-slate-50">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Atención Inmediata</span>
        </div>
        <a href="contacto.html" class="flex items-center gap-3 text-slate-700 font-semibold hover:text-blue-700 transition-colors group">
            <span class="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">📝</span>
            <span class="text-sm">Solicitar Cotización</span>
        </a>
        <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-slate-700 font-semibold hover:text-emerald-600 transition-colors group">
            <span class="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">💬</span>
            <span class="text-sm">Asesoría Técnica WhatsApp</span>
        </a>
    </div>
    <button type="button" id="widget-toggle" aria-expanded="false" aria-controls="widget-menu" class="relative w-16 h-16 bg-blue-800 hover:bg-blue-900 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-900/40 transition-all hover:scale-110 active:scale-95 focus:outline-none cursor-pointer group">
        <span class="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-40 group-hover:opacity-0 transition-opacity"></span>
        <svg class="w-8 h-8 relative z-10 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
    </button>
`;

export function initFloatingWidget() {
    if (window.location.pathname.includes('contacto.html')) return;
    if (document.getElementById('floating-corporate-widget')) return;

    const container = document.createElement('div');
    container.id = 'floating-corporate-widget';
    container.className = 'fixed bottom-6 right-6 z-50 flex flex-col items-end';
    container.innerHTML = TEMPLATE;
    document.body.appendChild(container);

    const toggle = document.getElementById('widget-toggle');
    const menu = document.getElementById('widget-menu');

    const close = () => {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.toggle('hidden') === false;
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.addEventListener('click', (e) => e.stopPropagation());

    document.addEventListener('click', close);
}