/* =====================================
   VALIDACIÓN DEL FORMULARIO DE CONTACTO
   Controla nombre, email y mensaje
===================================== */

/* Seleccionamos el formulario */
const formularioContacto = document.querySelector("#form-contacto");

/* Seleccionamos el mensaje de respuesta */
const mensajeContacto = document.querySelector("#mensaje-contacto");

/* =====================================
   EVENTO SUBMIT
===================================== */

if (formularioContacto) {

    formularioContacto.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const mensaje = document.querySelector("#mensaje").value;

        if (nombre === "" || email === "" || mensaje === "") {
            mensajeContacto.textContent = "Complete todos los campos.";
            return;
        }

        if (!email.includes("@")) {
            mensajeContacto.textContent = "Ingrese un correo válido.";
            return;
        }

        mensajeContacto.textContent = "Mensaje enviado correctamente.";

    });

}