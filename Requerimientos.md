# Requerimientos del Proyecto — Moda Urbana

## 1. Objetivo general
Desarrollar un sitio web one-page para una tienda ficticia de ropa urbana/streetwear, aplicando HTML5 semántico, CSS moderno (variables, Flexbox/Grid), interacción con JavaScript, accesibilidad y buenas prácticas de aseguramiento de calidad y publicación.

## 2. Público objetivo
- Jóvenes y adultos jóvenes (16–30 años) interesados en moda urbana/streetwear.
- Usuarios que navegan principalmente desde celular (mobile-first).

## 3. Quiénes somos, visión y misión

**Quiénes somos**
Moda Urbana es una tienda especializada en ropa y accesorios streetwear: hoodies, camisetas oversize, gorras, joggers y sneakers, con diseños inspirados en el arte callejero, el skate y el hip-hop.

**Visión**
Convertirnos en la tienda en línea de referencia para quienes buscan prendas urbanas con diseños originales y actuales, marcando tendencia en moda streetwear.

**Misión**
Vender ropa y accesorios urbanos de calidad, con diseños propios y actualizados a las tendencias, ofreciendo un catálogo fácil de explorar y comprar desde el sitio web.

## 4. Alcance (secciones del sitio)
1. **Inicio** — hero con propuesta de valor de la marca.
2. **Nosotros** — historia/identidad de la marca.
3. **Servicios** (o "Colecciones/Catálogo") — qué ofrece la tienda.
4. **Contacto** — formulario o datos de contacto.

## 5. Requisitos funcionales
- Navegación por anclas (scroll a cada sección desde el header).
- Estructura HTML5 semántica (`header`, `nav`, `main`, `section`, `footer`).
- Diseño responsive (Flexbox/Grid, mobile-first).
- Validación de formularios con JavaScript.

## 6. Requisitos no funcionales
- Código validado periódicamente con el **Validador W3C**.
- Accesibilidad: cumplimiento básico WCAG/ARIA, verificado con WAVE.
- Rendimiento verificado con Lighthouse.
- Control de versiones con Git/GitHub, usando ramas por fase.
- Metodología de trabajo: **SCRUM**, con checklist de cierre por etapa.

## 7. Identidad visual
- **Paleta:** definida con base en teoría del color (regla 60-30-10 + esquema complementario), sobre fondo claro:
  - Fondo (60%): `#f5f2ec` — neutro claro dominante.
  - Superficie (30%): `#e6e0d4` — diferencia secciones alternadas.
  - Texto: `#1a1a1a` — alto contraste sobre el fondo claro.
  - Acento (10%): `#c7401f` — naranja-rojo cálido (matiz ~12°).
  - Acento secundario (uso mínimo): `#0e8f82` — complementario (matiz ~190°), solo en hover/enlaces.
- **Tipografía:** `Anton` para títulos (bold/condensada, estética streetwear) y `Inter` para texto, con escala tipográfica definida en `rem`.

## 8. Tecnologías
- HTML5, CSS3 (variables, Flexbox, Grid)
- JavaScript ES6+ (DOM, validación)
- Git / GitHub
- Herramientas de QA: Validador W3C, WAVE, Lighthouse
- Editor: VS Code + Live Server

## 9. Estructura de carpetas propuesta
```
moda-urbana/
├── index.html 
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
└── README.md
```