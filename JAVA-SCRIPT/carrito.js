/* =====================================
CARRITO DE COMPRAS
===================================== */

const contadorCarrito = document.querySelector("#contador-carrito");
const botonesAgregar = document.querySelectorAll(".btn-agregar");

let cantidadProductos = 0;

/* Actualiza el número del carrito */
function actualizarContador() {
    contadorCarrito.textContent = cantidadProductos;
}

/* Muestra un mensaje en consola */
function mostrarMensaje() {
    console.log("Producto agregado al carrito");
}

/* Recorremos todos los botones */
botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        cantidadProductos++;

        actualizarContador();

        mostrarMensaje();

    });

});