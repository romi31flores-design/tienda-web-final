/* =====================================
   FINALIZAR PEDIDO
===================================== */

/* Seleccionamos el formulario */
const formulario = document.querySelector("#form-finalizar");

/* Seleccionamos el mensaje */
const mensaje = document.querySelector("#mensaje-finalizar");

/* Evento al enviar el formulario */
if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        /* Evita que la página se recargue */
        evento.preventDefault();

        /* Muestra el mensaje debajo del botón */
        mensaje.textContent = "✅ Compra realizada correctamente.";
        mensaje.style.color = "green";
        mensaje.style.fontWeight = "bold";

        /* Muestra una alerta */
        alert("🎉 ¡Compra realizada con éxito!\n\nMuchas gracias por elegir Bebote Indumentaria.\nNos comunicaremos con vos a la brevedad para coordinar el envío.");

        /* Limpia el formulario */
        formulario.reset();

    });

}