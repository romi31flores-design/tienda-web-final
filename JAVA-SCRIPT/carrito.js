/* =====================================
   CARRITO DE COMPRAS
   Este archivo maneja los botones
   "Agregar al carrito"
===================================== */

/* Seleccionamos el contador del carrito */
const contadorCarrito = document.querySelector("#contador-carrito");

/* Seleccionamos todos los botones que tengan la clase btn-agregar */
const botonesAgregar = document.querySelectorAll(".btn-agregar");

/* Variable para contar productos agregados */
let cantidadProductos = 0;

/* =====================================
   FUNCIÓN PARA ACTUALIZAR EL CONTADOR
===================================== */

function actualizarContador() {
    contadorCarrito.textContent = cantidadProductos;
}

/* =====================================
   EVENTO CLICK EN CADA BOTÓN
===================================== */

botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        cantidadProductos = cantidadProductos + 1;

        actualizarContador();

        alert("Producto agregado al carrito");

    });

});