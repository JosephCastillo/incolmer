/**
 * config/tailwind.js
 * Tokens de diseño de la marca (paleta cromática y tipografía).
 * Se carga como script clásico inmediatamente después del CDN de Tailwind,
 * por lo que debe ejecutarse de forma síncrona y sin `type="module"`.
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-gold': '#D4AF37',
                'brand-gold-dark': '#B8860B',
                'brand-dark': '#121212',
                'brand-slate': '#1E293B',
                'brand-steel': '#94A3B8',
                'brand-silver': '#C0C0C0'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif']
            }
        }
    }
};