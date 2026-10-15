# Pruebas — Moda Urbana (Entregable 3)

Marca ✅ o ❌ en la columna "Obtenido" y anota la fecha. Guarda las capturas en una carpeta `evidencias/` (sin datos personales reales).

**Fecha:** __________  **Navegador:** __________

## 1. Menú móvil (ancho menor de 768 px)

| # | Prueba | Esperado | Obtenido |
|---|--------|----------|----------|
| 1 | Cargar la página | El menú está cerrado y se ve el botón "Menú" | ✅ |
| 2 | Clic en el botón | El menú se abre y `aria-expanded="true"` | ✅ |
| 3 | Segundo clic | El menú se cierra y `aria-expanded="false"` | ✅ |
| 4 | Tab hasta el botón y Enter o Espacio | Abre y cierra con el teclado, foco visible | ✅ |
| 5 | Menú abierto y tecla Escape | Se cierra y el foco vuelve al botón | ✅ |
| 6 | Elegir un enlace del menú | Se cierra y la página baja a la sección | ✅ |
| 7 | Agrandar la ventana a más de 768 px | El botón desaparece y el menú queda en fila |✅ |

## 2. Formulario de contacto

| # | Entrada | Esperado | Obtenido |
|---|---------|----------|----------|
| 8 | Enviar con todo vacío | 3 errores, aviso general y foco en Nombre | ✅ |
| 9 | Nombre solo con espacios | "Escriba su nombre." | ✅ |
| 10 | Nombre de 1 letra | "El nombre debe tener al menos 2 caracteres." | ✅ |
| 11 | Correo `ana.com` (sin arroba) | Error de formato | ✅ |
| 12 | Correo `ana@@example.com` | Rechazado | ✅ |
| 13 | Correo `ana @example.com` | "No puede contener espacios…" | ✅ |
| 14 | Correo `ana@example` | "Introduzca un dominio de correo válido." | ✅ |
| 15 | Correo `ana..lopez@example.com` | Rechazado | ✅ |
| 16 | Correo `ana@-example.com` | Rechazado | ✅ |
| 17 | Mensaje vacío | "Escriba su mensaje." | ✅ |
| 18 | Mensaje `hola` | "Debe tener al menos 10 caracteres." | ✅ |
| 19 | Mensaje con `<script>alert(1)</script>` y signos | Se acepta como texto y no se ejecuta nada | ✅ |
| 20 | Corregir un campo con error | El error desaparece al escribir | ✅ |
| 21 | Todos los datos correctos y Enviar | Se limpia el formulario y aparece "¡Mensaje enviado!" | ✅ |
| 22 | Escribir después del mensaje de enviado | El mensaje desaparece | ✅ |
| 23 | Recorrer todo el formulario solo con teclado | Se puede completar y enviar, foco siempre visible | ✅ |

## 3. General

| # | Prueba | Esperado | Obtenido |
|---|--------|----------|----------|
| 24 | Consola del navegador (F12) | Sin errores en rojo; no muestra datos escritos | ✅ |
| 25 | Ancho móvil (375 px) | Sin scroll horizontal | ✅ |
| 26 | Ancho intermedio (768 px) | Sin scroll horizontal | ✅ |
| 27 | Ancho amplio (1440 px) | Sin scroll horizontal | ✅ |
| 28 | Validador W3C (HTML y CSS) | Sin errores | ✅ |

## Pendientes y observaciones

-
