/* =====================================
    BUSCADOR DE PRODUCTOS
        Este archivo permite filtrar productos
        según lo que escriba el usuario
===================================== */

/* Seleccionamos el input del buscador */
const buscadorProductos = document.querySelector("#buscador-productos");

/* Seleccionamos todas las tarjetas de productos */
const tarjetasProductos = document.querySelectorAll(".card-producto");

/* =====================================
    FUNCIÓN PARA BUSCAR PRODUCTOS
===================================== */

function filtrarProductos() {

    /* Guardamos lo que escribe el usuario en minúscula */
    const textoBuscado = buscadorProductos.value.toLowerCase();

    /* Recorremos cada tarjeta de producto */
    tarjetasProductos.forEach(function(tarjeta) {

        /* Tomamos todo el texto de la tarjeta */
        const textoProducto = tarjeta.textContent.toLowerCase();

        /* Si el producto coincide con la búsqueda, se muestra */
        if (textoProducto.includes(textoBuscado)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }

    });

}

/* =====================================
    EVENTO INPUT
        Se ejecuta cada vez que el usuario escribe
===================================== */

if (buscadorProductos) {

    buscadorProductos.addEventListener("input", filtrarProductos);

}