# Día 16 — Accesibilidad: navegación con teclado

**Fecha:** 15/10/2026 **Navegador:** Chrome.

## 1. Orden de navegación revisado

Recorrido con Tab en escritorio (en móvil el botón "Menú" aparece y los enlaces del menú solo reciben foco cuando está abierto):

| Orden | Elemento |
|-------|----------|
| 1 | Logo (enlace a Inicio) |
| 2 | Botón "Menú" (solo en pantallas estrechas) |
| 3 a 6 | Enlaces Inicio, Nosotros, Servicios, Contacto |
| 7 | Botón "Ver colección" |
| 8 | Enlace de correo |
| 9 a 11 | Instagram, TikTok, WhatsApp |
| 12 a 14 | Campos Nombre, Correo, Mensaje |
| 15 | Botón "Enviar mensaje" |

El orden sigue el del contenido y no se usa `tabindex` en ningún elemento: no hizo falta.

## 2. Lista de comprobación

Marca cada punto cuando lo pruebes tú en el navegador.

- ✅ La página puede recorrerse con Tab y Shift + Tab.
- ✅ El foco es visible en los elementos interactivos (también sobre fondo claro y oscuro).
- ✅ El orden de navegación es lógico.
- ✅ Los enlaces y botones funcionan con Enter (y Espacio en botones).
- ✅ El menú puede utilizarse sin ratón (abrir, recorrer, cerrar con Escape).
- ✅ El formulario puede completarse y enviarse con el teclado.
- ✅ Los errores del formulario se identifican (texto bajo el campo, `aria-invalid`, `aria-describedby`).
- ✅ Se repitieron las pruebas después de las correcciones.

## 3. Hallazgos

| # | Hallazgo | Cómo se detectó | Por qué es un problema |
|---|----------|-----------------|------------------------|
| 1 | El anillo de foco turquesa casi no se distingue sobre el fondo claro (barra de navegación): contraste 2.05:1. | Cálculo de contraste del color `#12b8a6` contra `#ece9e2`. | WCAG 2.2 pide al menos 3:1 para el indicador de foco. Sobre fondo oscuro sí cumplía (7.40:1). |
| 2 | La barra de navegación es fija (`sticky`) y podía tapar un elemento al recibir el foco al avanzar con Tab. El desplazamiento solo estaba definido para los enlaces a secciones. | Revisión del CSS: `scroll-margin-top` solo en `section`. | WCAG 2.2 (foco no oculto): el elemento enfocado no debe quedar tapado por otro contenido. |
| 3 | Al pasar el mouse o enfocar un enlace del menú, el texto se volvía naranja: contraste 2.77:1 sobre el fondo claro. | Cálculo de contraste de `#ff4a24` contra `#ece9e2`. | Texto con poco contraste en el estado hover, difícil de leer. |

No se encontraron problemas en: orden de Tab, botón "Menú" (`aria-expanded`, `aria-controls`, `aria-label`), cierre con Escape, labels del formulario ni mensajes de error asociados.

## 4. Correcciones aplicadas (`css/styles.css`)

| # | Corrección |
|---|-----------|
| 1 | El foco ahora es un contorno negro de 3 px (15.19:1) sobre fondos claros. Sobre `.hero`, `.seccion-oscura` y `footer` se mantiene turquesa (7.40:1). |
| 2 | Se agregó `scroll-padding-top: var(--altura-header)` en `html` y se quitó el `scroll-margin-top` de `section`, para no duplicar el desplazamiento. |
| 3 | En los enlaces del menú, el hover ya no cambia el color del texto: solo aparece el subrayado naranja. |

## 5. Criterio de finalización

La página se puede utilizar con el teclado, el foco se distingue visualmente, el recorrido es comprensible y los problemas detectados están corregidos o documentados.
