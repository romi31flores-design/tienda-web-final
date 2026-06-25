/* =====================================
   VALIDACIÓN DEL REGISTRO
   Controla que los campos estén completos
   y que las contraseñas coincidan
===================================== */

/* Seleccionamos el formulario */
const formularioRegistro = document.querySelector("#form-registro");

/* Seleccionamos el mensaje donde se mostrará el resultado */
const mensajeRegistro = document.querySelector("#mensaje-registro");

/* =====================================
   EVENTO SUBMIT DEL FORMULARIO
===================================== */

if (formularioRegistro) {

    formularioRegistro.addEventListener("submit", function(evento) {

        /* Evita que la página se recargue */
        evento.preventDefault();

        /* Tomamos los valores escritos por el usuario */
        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const confirmarPassword = document.querySelector("#confirmarPassword").value;

        /* Validamos campos vacíos */
        if (
            nombre === "" ||
            email === "" ||
            password === "" ||
            confirmarPassword === ""
        ) {
            mensajeRegistro.textContent = "Complete todos los campos.";
            return;
        }

        /* Validamos correo */
        if (!email.includes("@")) {
            mensajeRegistro.textContent = "Ingrese un correo válido.";
            return;
        }

        /* Validamos que las contraseñas coincidan */
        if (password !== confirmarPassword) {
            mensajeRegistro.textContent = "Las contraseñas no coinciden.";
            return;
        }

        /* Mensaje correcto */
        mensajeRegistro.textContent = "Registro realizado correctamente.";

    });

}