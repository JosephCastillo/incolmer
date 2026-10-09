# AGENTS.md — INCOLMER INGENIERÍA S.A.S.

Sitio estático puro (5 páginas HTML: `index`, `nosotros`, `servicios`, `equipos`, `contacto`). Sin build, sin framework, sin bundler. `netlify.toml` publica la raíz; **está en `.gitignore`** junto con `prompts-imagenes.md` y `PROMPTS-IMAGENES-SERVICIOS.md` (solo sirven como referencia local).

## Verificación (no hay lint/test)

- JS: `node --check js/...` (Node disponible).
- Al tocar HTML: verificar que el archivo siga en **CRLF** sin `\n` sueltos (los HTML usan CRLF; JS, CSS, sitemap y robots usan LF).
- Al añadir/referenciar imágenes: verificar que existan y que las URLs `og:`/`canonical` sean absolutas.
- Navegador: abrir cada `.html` directamente (Tailwind CDN renderiza en runtime).

## Gotchas críticos

- **`Set-Content`/`Out-File` corrompen UTF-8.** Editar HTML siempre con el tool de edición, o con scripts Python que normalicen `\r\n`→`\n`, reemplacen y restablezcan `\r\n` (no con PowerShell para escribir archivos).
- **Tailwind CDN + config**: `js/config/tailwind.js` debe cargarse como script clásico (sin `type="module"`) justo después del CDN. Paleta: `brand-gold #D4AF37`, `brand-dark #121212`, `brand-slate #1E293B`, `brand-steel`, `brand-silver`. Tipografía fluida ya definida en `css/main.css` (`clamp` en `html`).
- **JS modular**: único entry `js/main.js` (`<script type="module">` al final de cada página). Cada módulo es idempotente (guarda con `dataset.*Initialized` o `if (!container) return`). Migrar código SIEMPRE a `js/modules`+`js/data`, reutilizando las funciones ya exportadas.
- **`equipos.html` = página "Suministros"** (menú navbar "Suministros" apunta ahí). Su hero usa `assets/img/suministros.jpg/.webp`; el renderer `renderEquipment()` quedó **inerte** (no hay `#equipment-grid`) y `EQUIPMENT_DATA` está vacío, pero ambos siguen exportados en `js/main.js`/`js/modules/renderers/equipment.js` — no romperlos.
- **Contenido duplicado**: las tarjetas de servicio en `index.html` están hardcodeadas; el resto se inyecta desde `js/data/services.js` en `#services-grid` (`servicios.html`). Al cambiar servicios, actualizar datos, renderer Y las tarjetas de `index.html`.
- **JSON-LD y `sitemap.xml` se actualizan a mano** en paralelo con HTML/JS.

## Imágenes

- Mapa: fuentes `.jfif` aportadas por el usuario → convertir con Pillow (Python) a **JPG+WebP**, dimensiones según uso (1600×900 principales, 1280×720 heroes, 960×540 tarjetas, 1200×630 og). Optimizar (quality ~80-82). Borrar el `.jfif` después.
- Reemplazar referencias en: `js/data/*.js` (`image` + `imageWebp`), `sitemap.xml`, y (si aplica) JSON-LD. Ojo: `sitemap.xml` aún lista imágenes viejas de servicios que ya no existen — mantenerlo al día.
- Los `og-*.jpg` van solo por URL absoluta en meta tags; el validador los marca como "sin uso": es falso positivo.
- Prompts de regeneración: `PROMPTS-IMAGENES-SERVICIOS.md` (basados en escenas reales de cada servicio, estilo fotorrealista, cero texto/logos en la imagen).

## Datos de contacto

- Centralizados en `js/config/site.js` (WhatsApp, teléfono, email). Siguen habiendo **placeholders pendientes** (teléfono `+57 300 123 4567`, dirección "Calle Principal, Bogotá", `correo@institucion.com`) — confirmar con el usuario antes de inventar datos reales.

## Dominio

- URLs absolutas (`canonical`, `og:*`, `twitter:*`, JSON-LD `url`) hoy apuntan a `https://josephcastillo.github.io/incolmer` (GitHub Pages). `sitemap.xml` y `robots.txt` aún usan `https://incolmer.com/`. Al cambiar de dominio, actualizar ambos lados.

## Commits

- Estilo: Conventional Commits en español (`feat:`, `fix:`, `style(scope):`), mensajes descriptivos de una línea + cuerpo opcional. Solo commitear lo que pida el usuario.