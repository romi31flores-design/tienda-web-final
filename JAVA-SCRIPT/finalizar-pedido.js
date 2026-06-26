/* =====================================
   FINALIZAR PEDIDO
===================================== */

/* Seleccionamos el formulario */
const formulario = document.querySelector("#form-finalizar");

/* Seleccionamos el modal */
const modalCompra = document.querySelector("#modal-compra");

/* Seleccionamos el botón aceptar del modal */
const cerrarModal = document.querySelector("#cerrar-modal");

/* Cuando se envía el formulario */
if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        /* Evita que se recargue la página */
        evento.preventDefault();

        /* Muestra el modal */
        modalCompra.style.display = "flex";

        /* Limpia los campos */
        formulario.reset();

    });

}

/* Cuando se aprieta aceptar */
if (cerrarModal) {

    cerrarModal.addEventListener("click", function() {

        /* Oculta el modal */
        modalCompra.style.display = "none";

        /* Recién ahí vuelve al inicio */
        window.location.href = "../index.html";

    });

}