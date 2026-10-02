/**
 * CONTROLADOR: app.js
 * Lógica para inyectar datos dinámicamente en la Vista (DOM) y control de widgets flotantes.
 * Optimizado para Core Web Vitals y SEO Técnico.
 */

import { SERVICES_DATA, EQUIPMENT_DATA } from './data.js';

let appInitialized = false;
function runApp() {
    if (appInitialized) return;
    appInitialized = true;

    renderServices();
    renderEquipment();
    initMobileMenu();
    initFloatingWidget();
    initHeroSlider();
}

document.addEventListener('DOMContentLoaded', runApp);

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(runApp, 10);
} else {
    window.addEventListener('load', runApp);
}

/**
 * Renderiza la sección de Servicios optimizada para SEO (alt descriptivos y lazy loading)
 */
function renderServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    container.innerHTML = SERVICES_DATA.map(service => `
        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:-translate-y-1 hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
                <div class="relative aspect-video overflow-hidden bg-slate-100">
                    <img src="${service.image}" alt="${service.title} - INCOLMER INGENIERÍA S.A.S." loading="lazy" class="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute top-4 left-4">
                        <div class="w-12 h-12 bg-white/90 backdrop-blur-md text-brand-gold rounded-xl flex items-center justify-center shadow-md">
                            ${service.icon}
                        </div>
                    </div>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-slate-900 mb-3">${service.title}</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-6">${service.description}</p>
                    <ul class="text-xs font-semibold text-slate-700 uppercase tracking-wider space-y-2.5 border-t border-slate-100 pt-4">
                        ${service.features.map(f => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-brand-gold"></span> ${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="p-8 pt-0">
                <a href="contacto.html?servicio=${service.id}" class="w-full block text-center py-3.5 bg-brand-dark hover:bg-brand-gold hover:text-brand-dark text-white text-xs font-bold rounded-xl transition-all shadow-sm">
                    Cotizar Servicio
                </a>
            </div>
        </div>
    `).join('');
}

/**
 * Renderiza el catálogo de equipos y suministros en equipos.html
 */
function renderEquipment() {
    const container = document.getElementById('equipment-grid');
    if (!container) return;

    container.innerHTML = EQUIPMENT_DATA.map(eq => `
        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
                <div class="relative aspect-video overflow-hidden bg-slate-100">
                    <img src="${eq.image}" alt="${eq.title} - INCOLMER INGENIERÍA S.A.S." loading="lazy" class="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute top-4 left-4">
                        <span class="px-3 py-1 bg-brand-dark/90 backdrop-blur-md text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md">
                            ${eq.category}
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-lg font-bold text-slate-900 mb-2">${eq.title}</h3>
                    <p class="text-slate-600 text-xs leading-relaxed">${eq.description}</p>
                </div>
            </div>
            <div class="p-6 pt-0">
                <a href="contacto.html?equipo=${encodeURIComponent(eq.title)}" class="w-full block text-center py-3 bg-brand-dark hover:bg-brand-gold hover:text-brand-dark text-white text-xs font-bold rounded-xl transition-all shadow-sm">
                    Solicitar Cotización
                </a>
            </div>
        </div>
    `).join('');
}

/**
 * Control del Widget Inteligente Flotante
 */
function initFloatingWidget() {
  // No mostrar en contacto
  if (window.location.pathname.includes('contacto.html')) return;

  // Si ya existe en el DOM, no lo recreamos para evitar perder referencias
  let widgetContainer = document.getElementById('floating-corporate-widget');
  
  if (!widgetContainer) {
    widgetContainer = document.createElement('div');
    widgetContainer.id = 'floating-corporate-widget';
    widgetContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col items-end';
    widgetContainer.innerHTML = `
        <!-- Dropdown Menu -->
        <div id="widget-menu" class="hidden bg-white rounded-2xl shadow-2xl p-5 mb-4 border border-slate-100 flex flex-col gap-4 w-72">
            <div class="pb-2 border-b border-slate-50">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Atención Inmediata</span>
            </div>
            <a href="contacto.html" class="flex items-center gap-3 text-slate-700 font-semibold hover:text-blue-700 transition-colors group">
                <span class="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">📝</span>
                <span class="text-sm">Solicitar Cotización</span>
            </a>
            <a href="https://wa.me/573000000000?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios%20para%20laboratorio." target="_blank" class="flex items-center gap-3 text-slate-700 font-semibold hover:text-emerald-600 transition-colors group">
                <span class="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">💬</span>
                <span class="text-sm">Asesoría Técnica WhatsApp</span>
            </a>
        </div>

        <!-- Trigger Button -->
        <button id="widget-toggle" class="relative w-16 h-16 bg-blue-800 hover:bg-blue-900 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-900/40 transition-all hover:scale-110 active:scale-95 focus:outline-none cursor-pointer group">
            <span class="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-40 group-hover:opacity-0 transition-opacity"></span>
            <svg class="w-8 h-8 relative z-10 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
        </button>
    `;
    document.body.appendChild(widgetContainer);
  }

  const widgetToggle = document.getElementById('widget-toggle');
  const widgetMenu = document.getElementById('widget-menu');

  if (widgetToggle && widgetMenu && !widgetToggle.dataset.initialized) {
    widgetToggle.dataset.initialized = 'true';

    widgetToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      widgetMenu.classList.toggle('hidden');
    });

    widgetMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      if (!widgetMenu.classList.contains('hidden')) {
        widgetMenu.classList.add('hidden');
      }
    });
  }
}

/**
 * Menú Móvil / Hamburguesa
 */
function initMobileMenu() {
    const btn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (btn && mobileMenu && !btn.dataset.menuInitialized) {
        btn.dataset.menuInitialized = 'true';

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && !btn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

/**
 * Lógica de Transición del Slider (Hero)
 * Transiciones suaves (fade) cada 4 segundos entre imágenes de imagenología médica
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.slider-img');
    
    if (!slides || slides.length === 0) return;

    // Asegurar estilos iniciales y transición suave vía JS por si Tailwind tarda en procesar
    slides.forEach((slide, index) => {
        slide.style.transition = 'opacity 1000ms ease-in-out';
        if (index === 0) {
            slide.style.opacity = '1';
            slide.classList.add('opacity-100');
        } else {
            slide.style.opacity = '0';
            slide.classList.add('opacity-0');
        }
    });

    let currentIndex = 0;

    setInterval(() => {
        const currentSlide = slides[currentIndex];
        currentIndex = (currentIndex + 1) % slides.length;
        const nextSlide = slides[currentIndex];

        // Manejo híbrido: Clases Tailwind + Estilos Inline para máxima compatibilidad
        currentSlide.style.opacity = '0';
        currentSlide.classList.remove('opacity-100');
        currentSlide.classList.add('opacity-0');

        nextSlide.style.opacity = '1';
        nextSlide.classList.remove('opacity-0');
        nextSlide.classList.add('opacity-100');
    }, 4000);
}
