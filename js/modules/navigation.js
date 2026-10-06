/**
 * modules/navigation.js
 * Responsabilidad: menú de navegación responsive (botón hamburguesa).
 */

export function initNavigation() {
    const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if (!btn || !menu || btn.dataset.menuInitialized) return;
    btn.dataset.menuInitialized = 'true';

    const close = () => menu.classList.add('hidden');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
    });

    menu.addEventListener('click', (e) => e.stopPropagation());

    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));

    document.addEventListener('click', (e) => {
        if (menu.contains(e.target) || btn.contains(e.target)) return;
        close();
    });
}