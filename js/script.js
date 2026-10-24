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
const botonMenu = document.querySelector("#btn-menu");
const navegacionPrincipal = document.querySelector("#menu-principal");
const formularioContacto = document.querySelector("#formulario-contacto");
const estadoFormulario = document.querySelector("#estado-formulario");
const botonesCategoria = document.querySelectorAll(".btn-categoria");
const botonesCerrarProductos = document.querySelectorAll(".btn-cerrar-productos");
const gruposProductos = document.querySelectorAll(".productos-grupo");
const campoNombre = document.querySelector("#nombre");
const campoCorreo = document.querySelector("#correo");
const campoMensaje = document.querySelector("#mensaje");
const errorNombre = document.querySelector("#error-nombre");
const errorCorreo = document.querySelector("#error-correo");
const errorMensaje = document.querySelector("#error-mensaje");

const camposFormulario = [{
    elemento: campoNombre,
    error: errorNombre
  },
  {
    elemento: campoCorreo,
    error: errorCorreo
  },
  {
    elemento: campoMensaje,
    error: errorMensaje
  },
];

/* =====================================================
   2. VARIABLES
===================================================== */

const pantallaAncha = window.matchMedia("(min-width: 48rem)");

const elementosEsperados = [{
    nombre: "Barra de navegación",
    selector: ".barra-nav",
    resultado: barraNavegacion
  },
  {
    nombre: "Menú principal",
    selector: ".menu",
    resultado: menuPrincipal
  },
  {
    nombre: "Enlaces del menú",
    selector: ".menu a",
    resultado: enlacesMenu
  },
  {
    nombre: "Título del hero",
    selector: ".hero-title",
    resultado: tituloHero
  },
  {
    nombre: "Sección servicios",
    selector: "#servicios",
    resultado: seccionServicios
  },
  {
    nombre: "Tarjetas de servicios",
    selector: ".tarjeta",
    resultado: tarjetasServicios
  },
  {
    nombre: "Enlace de correo",
    selector: ".correo",
    resultado: enlaceCorreo
  },
  {
    nombre: "Botón del menú",
    selector: "#btn-menu",
    resultado: botonMenu
  },
  {
    nombre: "Navegación principal",
    selector: "#menu-principal",
    resultado: navegacionPrincipal
  },
  {
    nombre: "Formulario de contacto",
    selector: "#formulario-contacto",
    resultado: formularioContacto
  },
  {
    nombre: "Mensaje de estado",
    selector: "#estado-formulario",
    resultado: estadoFormulario
  },
  {
    nombre: "Botones de categoría",
    selector: ".btn-categoria",
    resultado: botonesCategoria
  },
  {
    nombre: "Grupos de productos",
    selector: ".productos-grupo",
    resultado: gruposProductos
  },
  {
    nombre: "Campos del formulario",
    selector: "#nombre, #correo, #mensaje",
    resultado: camposFormulario
  },
];

/* =====================================================
   3. FUNCIONES
===================================================== */

const comprobarElemento = ({
  nombre,
  selector,
  resultado
}) => {
  const esLista = Array.isArray(resultado) || resultado instanceof NodeList;
  const cantidad = esLista ? resultado.length : Number(resultado !== null);

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

const establecerMenu = (abierto) => {
  navegacionPrincipal.classList.toggle("is-open", abierto);
  botonMenu.setAttribute("aria-expanded", String(abierto));
  botonMenu.setAttribute(
    "aria-label",
    abierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"
  );
};

const alternarMenu = () => {
  const estaAbierto = botonMenu.getAttribute("aria-expanded") === "true";
  establecerMenu(!estaAbierto);
};

const cerrarMenu = () => {
  establecerMenu(false);
};

const cerrarConEscape = (event) => {
  if (event.key === "Escape" && botonMenu.getAttribute("aria-expanded") === "true") {
    cerrarMenu();
    botonMenu.focus();
  }
};

const establecerError = (campo, elementoError, texto) => {
  campo.setCustomValidity(texto);
  campo.setAttribute("aria-invalid", texto ? "true" : "false");
  elementoError.textContent = texto;
};

const validarNombre = () => {
  const valor = campoNombre.value.trim();
  let error = "";

  if (valor.length === 0) {
    error = "Escriba su nombre.";
  } else if (valor.length < 2) {
    error = "El nombre debe tener al menos 2 caracteres.";
  } else if (valor.length > 80) {
    error = "El nombre no puede superar 80 caracteres.";
  } else if (/[\u0000-\u001F\u007F]/u.test(valor)) {
    error = "El nombre contiene caracteres de control no permitidos.";
  }

  establecerError(campoNombre, errorNombre, error);
  return error === "";
};

const validarMensaje = () => {
  const valor = campoMensaje.value.trim();
  let error = "";

  if (valor.length === 0) {
    error = "Escriba su mensaje.";
  } else if (valor.length < 10) {
    error = "El mensaje debe tener al menos 10 caracteres.";
  } else if (valor.length > 1000) {
    error = "El mensaje no puede superar 1000 caracteres.";
  } else if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u.test(valor)) {
    error = "El mensaje contiene caracteres de control no permitidos.";
  }

  establecerError(campoMensaje, errorMensaje, error);
  return error === "";
};

const validarCorreo = () => {
  /* limpia el error anterior para que validity.valid refleje solo las reglas del HTML */
  campoCorreo.setCustomValidity("");

  const valor = campoCorreo.value.trim();
  let error = "";

  if (valor.length === 0) {
    error = "Escriba su correo electrónico.";
  } else if (valor.length > 254) {
    error = "El correo no puede superar 254 caracteres.";
  } else if (/[\s\u0000-\u001F\u007F]/u.test(valor)) {
    error = "El correo no puede contener espacios ni caracteres de control.";
  } else if (!campoCorreo.validity.valid) {
    error = "Revise el formato del correo electrónico.";
  } else {
    const partes = valor.split("@");

    if (partes.length !== 2) {
      error = "Introduzca una sola dirección de correo.";
    } else {
      const [usuario, dominio] = partes;
      const etiquetas = dominio.split(".");

      if (
        usuario.length > 64 ||
        usuario.startsWith(".") ||
        usuario.endsWith(".") ||
        usuario.includes("..")
      ) {
        error = "Revise la parte del correo anterior a la arroba.";
      } else if (
        etiquetas.length < 2 ||
        etiquetas.some(
          (etiqueta) =>
          etiqueta.length === 0 ||
          etiqueta.length > 63 ||
          !/^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(etiqueta)
        )
      ) {
        error = "Introduzca un dominio de correo válido.";
      }
    }
  }

  establecerError(campoCorreo, errorCorreo, error);
  return error === "";
};

const mostrarEstado = (texto, esError = false) => {
  estadoFormulario.textContent = texto;
  estadoFormulario.classList.toggle("is-visible", texto !== "" && !esError);
  estadoFormulario.classList.toggle("is-error", texto !== "" && esError);
};

const enviarFormulario = (evento) => {
  evento.preventDefault();
  mostrarEstado("");

  const nombreValido = validarNombre();
  const correoValido = validarCorreo();
  const mensajeValido = validarMensaje();

  if (!nombreValido || !correoValido || !mensajeValido) {
    mostrarEstado("Revise los campos indicados antes de continuar.", true);
    formularioContacto.reportValidity();

    const primerInvalido = camposFormulario.find((item) => !item.elemento.validity.valid);
    if (primerInvalido) primerInvalido.elemento.focus();
    return;
  }

  formularioContacto.reset();
  mostrarEstado("✅ ¡Mensaje enviado! Gracias por escribirnos, te responderemos pronto.");
  console.log("✅ Formulario válido (los datos no se muestran en consola)");
};

const cerrarMenuAlSalir = (evento) => {
  if (!barraNavegacion.contains(evento.relatedTarget)) {
    cerrarMenu();
  }
};

const ocultarProductos = () => {
  gruposProductos.forEach((grupo) => {
    grupo.hidden = true;
  });

  botonesCategoria.forEach((boton) => {
    boton.setAttribute("aria-expanded", "false");
    boton.closest(".tarjeta").classList.remove("is-active");
  });
};

const alternarProductos = (boton) => {
  const grupo = document.getElementById(boton.getAttribute("aria-controls"));
  const estabaAbierto = boton.getAttribute("aria-expanded") === "true";

  ocultarProductos();
  if (estabaAbierto) return;

  grupo.hidden = false;
  boton.setAttribute("aria-expanded", "true");
  boton.closest(".tarjeta").classList.add("is-active");
  grupo.scrollIntoView({
    block: "start"
  });
  grupo.querySelector("h3").focus({
    preventScroll: true
  });
};

const cerrarProductos = (botonCerrar) => {
  const idGrupo = botonCerrar.closest(".productos-grupo").id;

  ocultarProductos();
  document.querySelector(`[aria-controls="${idGrupo}"]`).focus();
};

/* =====================================================
   4. EVENTOS
===================================================== */

if (botonMenu && navegacionPrincipal) {
  botonMenu.addEventListener("click", alternarMenu);
  document.addEventListener("keydown", cerrarConEscape);
  barraNavegacion.addEventListener("focusout", cerrarMenuAlSalir);
  enlacesMenu.forEach((enlace) => enlace.addEventListener("click", cerrarMenu));
  pantallaAncha.addEventListener("change", cerrarMenu);
}

if (formularioContacto && campoNombre && campoCorreo && campoMensaje) {
  formularioContacto.noValidate = true;
  formularioContacto.addEventListener("submit", enviarFormulario);

  campoNombre.addEventListener("input", validarNombre);
  campoCorreo.addEventListener("input", validarCorreo);
  campoMensaje.addEventListener("input", validarMensaje);
  formularioContacto.addEventListener("input", () => mostrarEstado(""));
}

botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", () => alternarProductos(boton));
});

botonesCerrarProductos.forEach((boton) => {
  boton.addEventListener("click", () => cerrarProductos(boton));
});

/* =====================================================
   5. INICIALIZACIÓN
===================================================== */

console.log("✅ script.js cargado correctamente");

ocultarProductos();

elementosEsperados.forEach(comprobarElemento);
comprobarEnlacesMenu();