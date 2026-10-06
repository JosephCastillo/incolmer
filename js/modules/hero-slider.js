/**
 * modules/hero-slider.js
 * Responsabilidad: crossfade automático del slider de imágenes del hero.
 * Cambia la opacidad de cada diapositiva cada SLIDE_INTERVAL_MS.
 */

const SLIDE_INTERVAL_MS = 4000;

export function initHeroSlider() {
    const slides = document.querySelectorAll('.slider-img');

    if (!slides.length) return;

    // Se fijan los estilos por JS para que la transición funcione incluso si
    // Tailwind aún no ha generado las utilidades de opacidad.
    const show = slide => {
        slide.style.opacity = '1';
        slide.classList.add('opacity-100');
        slide.classList.remove('opacity-0');
    };

    const hide = slide => {
        slide.style.opacity = '0';
        slide.classList.add('opacity-0');
        slide.classList.remove('opacity-100');
    };

    slides.forEach((slide, i) => {
        slide.style.transition = 'opacity 1000ms ease-in-out';
        i === 0 ? show(slide) : hide(slide);
    });

    let currentIndex = 0;

    setInterval(() => {
        hide(slides[currentIndex]);
        currentIndex = (currentIndex + 1) % slides.length;
        show(slides[currentIndex]);
    }, SLIDE_INTERVAL_MS);
}