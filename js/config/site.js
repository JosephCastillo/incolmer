/**
 * config/site.js
 * Datos de contacto y enlaces sociales centralizados.
 * Evita repetir números de teléfono y URLs de WhatsApp en el código.
 */

const WHATSAPP_NUMBER = '573001234567';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const CONTACT = {
    phoneDisplay: '+57 300 123 4567',
    landlineDisplay: '+57 (1) 234 5678',
    email: 'contacto@incolmeringenieria.com',
    location: 'Bogotá D.C., Colombia'
};