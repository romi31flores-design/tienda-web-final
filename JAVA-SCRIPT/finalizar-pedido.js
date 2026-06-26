const formulario = document.querySelector("#form-finalizar");
const modalCompra = document.querySelector("#modal-compra");
const cerrarModal = document.querySelector("#cerrar-modal");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        modalCompra.style.display = "flex";
        formulario.reset();
    });
}

if (cerrarModal) {
    cerrarModal.addEventListener("click", function() {
        modalCompra.style.display = "none";
        window.location.href = "index.html";
    });
}