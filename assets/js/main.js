/**
 * BioTech Solutions - Main JavaScript
 * Senior Frontend Approach: Clean, modular, and performance-oriented.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    initFormValidation();
    initRevealAnimations();
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

/**
 * Header Scroll Effects
 */
function initScrollEffects() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('shadow-sm', 'bg-white/95');
            header.classList.remove('bg-white/80');
        } else {
            header.classList.remove('shadow-sm', 'bg-white/95');
            header.classList.add('bg-white/80');
        }
    });
}

/**
 * Simple Contact Form Handling
 */
function initFormValidation() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic UI Feedback
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Enviando...';
            btn.disabled = true;
            btn.classList.add('opacity-70', 'cursor-not-allowed');

            // Simulate API Call
            setTimeout(() => {
                alert('Gracias por su mensaje. Un especialista técnico se pondrá en contacto con usted en breve.');
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
                btn.classList.remove('opacity-70', 'cursor-not-allowed');
            }, 1500);
        });
    }
}

/**
 * Reveal Animations on Scroll (SEO & UX)
 */
function initRevealAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to service cards and sections
    const itemsToReveal = document.querySelectorAll('#servicios > div > div, #nosotros, #contacto');
    
    itemsToReveal.forEach(item => {
        item.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
        observer.observe(item);
    });
}
