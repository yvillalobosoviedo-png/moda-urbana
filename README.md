# Moda Urbana

Sitio web one-page para una tienda ficticia de ropa y accesorios streetwear (hoodies, camisetas oversize, gorras, joggers y sneakers), desarrollado como proyecto de curso.

## Tecnologías

- HTML5 semántico
- CSS3 (variables, Flexbox, Grid, nesting nativo, mobile-first)
- JavaScript (DOM, eventos, validación de formularios)
- Git / GitHub

## Estructura del proyecto

```
moda-urbana/
├── index.html
├── favicon.ico
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
│   ├── hero-mobile.webp, hero-tablet.webp, hero-desk.webp
│   ├── hoodies.webp, camisetas.webp, gorras.webp,
│   │   joggers.webp, sneakers.webp, accesorios.webp
│   ├── logo.svg, favicon.svg, favicon-32.png, apple-touch-icon.png
├── Requerimientos.md
├── PRUEBAS.md
├── ACCESIBILIDAD.md
└── README.md
```

## Cómo verlo en local

1. Clonar o descargar este repositorio.
2. Abrir la carpeta en VS Code.
3. Instalar la extensión Live Server (si no la tienes).
4. Clic derecho sobre `index.html` → "Open with Live Server".

## Comportamiento JavaScript (`js/script.js`)

El archivo se carga con `defer` y está organizado en cinco bloques: elementos del DOM, variables, funciones, eventos e inicialización.

**Selección y diagnóstico (Día 12).** Al cargar, el script busca los elementos principales con `querySelector` y deja en la consola un ✅ si los encuentra o un ❌ si no. También comprueba que cada enlace del menú apunte a un id existente.

**Menú móvil (Día 13).** En pantallas menores de 48rem el menú está cerrado y se abre con un `<button>`.
- Alterna la clase `is-open` en la navegación.
- Actualiza `aria-expanded` y `aria-label` ("Abrir/Cerrar menú de navegación").
- Se cierra con la tecla Escape (el foco vuelve al botón), al elegir un enlace y al pasar a pantalla ancha.

**Formulario de contacto (Días 14 y 15).**
- Valida nombre (2 a 80 caracteres), correo (política estricta: una sola arroba, dominio con punto y etiquetas válidas) y mensaje (10 a 1000 caracteres). Usa `setCustomValidity` y `aria-invalid`.
- Valida mientras se escribe y al enviar. El evento `submit` se intercepta con `preventDefault()`.
- Si hay errores: muestra el mensaje de cada campo, un aviso general y mueve el foco al primer campo inválido. Los errores desaparecen cuando se corrigen.
- Si todo es válido: limpia el formulario y muestra "¡Mensaje enviado!". El mensaje se oculta al volver a escribir.
- Seguridad: los textos se insertan con `textContent` (nunca `innerHTML`), no se usa `eval()` y no se registran datos personales en la consola.

**Limitación actual.** El envío es simulado: no hay servidor. Al integrar WordPress se deberán validar, sanear y escapar los datos también del lado del servidor.

## Pruebas

Los casos de prueba y sus resultados están en [PRUEBAS.md](PRUEBAS.md). La revisión de navegación con teclado (hallazgos y correcciones) está en [ACCESIBILIDAD.md](ACCESIBILIDAD.md).

## Estado del proyecto

- [x] Semana 1 — Fundamentos web (HTML5 semántico, variables CSS, hero)
- [x] Semana 2 — Layout responsive (Flexbox, Grid, organización del CSS, mobile-first)
- [x] Semana 3 — JavaScript y control de versiones (DOM, menú móvil, validación y confirmación del formulario)

## Validación

El HTML y CSS se validan periódicamente con el [W3C Markup Validation Service](https://validator.w3.org/) y el [CSS Validator](https://jigsaw.w3.org/css-validator/).
