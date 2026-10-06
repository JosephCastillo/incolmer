/**
 * modules/contact-form.js
 * Responsabilidad: validación y feedback de envío del formulario de contacto.
 * Formulario objetivo: #contact-form (contacto.html)
 *
 * Nota: no hay backend conectado, por lo que se simula la llamada al servidor.
 * Cuando exista un endpoint real, sustituir sendRequest() por un fetch().
 */

const SIMULATED_REQUEST_MS = 1500;

const sendRequest = () => new Promise(resolve => setTimeout(resolve, SIMULATED_REQUEST_MS));

export function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form || form.dataset.formInitialized) return;
    form.dataset.formInitialized = 'true';

    const submitBtn = form.querySelector('button[type="submit"]');
    const statusBox = form.querySelector('[data-form-status]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const originalLabel = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

        if (statusBox) {
            statusBox.textContent = 'Enviando su solicitud...';
            statusBox.className = 'form-status text-xs font-semibold text-slate-500';
        }

        try {
            await sendRequest();
            form.reset();
            if (statusBox) {
                statusBox.textContent = 'Gracias por su mensaje. Un especialista técnico se pondrá en contacto con usted en breve.';
                statusBox.className = 'form-status text-xs font-semibold text-emerald-600';
            }
        } catch (error) {
            if (statusBox) {
                statusBox.textContent = 'No fue posible enviar su solicitud. Por favor intente nuevamente.';
                statusBox.className = 'form-status text-xs font-semibold text-red-600';
            }
            console.error('Error al enviar el formulario de contacto:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
            submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        }
    });
}