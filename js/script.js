/* =====================================================
   1. ELEMENTOS DEL DOM
===================================================== */

const barraNavegacion = document.querySelector(".barra-nav");
const menuPrincipal = document.querySelector(".menu");
const enlacesMenu = document.querySelectorAll(".menu a");
const tituloHero = document.querySelector(".hero-title");
const seccionServicios = document.querySelector("#servicios");
const tarjetasServicios = document.querySelectorAll(".tarjeta");
const enlaceCorreo = document.querySelector(".correo");

/* =====================================================
   2. VARIABLES
===================================================== */

const elementosEsperados = [
  { nombre: "Barra de navegación", selector: ".barra-nav", resultado: barraNavegacion },
  { nombre: "Menú principal", selector: ".menu", resultado: menuPrincipal },
  { nombre: "Enlaces del menú", selector: ".menu a", resultado: enlacesMenu },
  { nombre: "Título del hero", selector: ".hero-title", resultado: tituloHero },
  { nombre: "Sección servicios", selector: "#servicios", resultado: seccionServicios },
  { nombre: "Tarjetas de servicios", selector: ".tarjeta", resultado: tarjetasServicios },
  { nombre: "Enlace de correo", selector: ".correo", resultado: enlaceCorreo },
];

/* =====================================================
   3. FUNCIONES
===================================================== */

const comprobarElemento = ({ nombre, selector, resultado }) => {
  const cantidad = resultado instanceof NodeList ? resultado.length : Number(resultado !== null);

  if (cantidad > 0) {
    console.log(`✅ ${nombre} (${selector}): ${cantidad} encontrado(s)`, resultado);
  } else {
    console.warn(`❌ ${nombre} (${selector}): no se encontró. Revisa el selector o el HTML.`);
  }
};

const comprobarEnlacesMenu = () => {
  enlacesMenu.forEach((enlace) => {
    const destino = enlace.getAttribute("href");
    const existe = document.querySelector(destino) !== null;
    console.log(`${existe ? "✅" : "❌"} "${enlace.textContent}" apunta a ${destino}`);
  });
};

/* =====================================================
   4. INICIALIZACIÓN
===================================================== */

console.log("✅ script.js cargado correctamente");

elementosEsperados.forEach(comprobarElemento);
comprobarEnlacesMenu();

