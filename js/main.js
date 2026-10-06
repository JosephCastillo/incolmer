/**
 * main.js
 * Punto de entrada único de la aplicación.
 * Orquesta los módulos de responsabilidad única y garantiza que cada uno se
 * ejecute una sola vez, sin importar el momento en que el DOM esté listo.
 */

import { renderServices } from './modules/renderers/services.js';
import { renderEquipment } from './modules/renderers/equipment.js';
import { initNavigation } from './modules/navigation.js';
import { initFloatingWidget } from './modules/floating-widget.js';
import { initHeroSlider } from './modules/hero-slider.js';
import { initContactForm } from './modules/contact-form.js';

let initialized = false;

function init() {
    if (initialized) return;
    initialized = true;

    renderServices();
    renderEquipment();
    initNavigation();
    initFloatingWidget();
    initHeroSlider();
    initContactForm();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
    init();
}