/* =====================================
    VALIDACIÓN DEL LOGIN
    Verifica que los campos no estén vacíos
    y que el correo tenga un formato válido.
===================================== */

/* Seleccionamos el formulario */
const formularioLogin = document.querySelector("form");

/* Seleccionamos los campos */
const correo = document.querySelector('input[type="email"]');
const contraseña = document.querySelector('input[type="password"]');

/* =====================================
    EVENTO SUBMIT
===================================== */

if (formularioLogin) {

    formularioLogin.addEventListener("submit", function(evento) {

        /* Evita que el formulario se envíe */
        evento.preventDefault();

        /* Quitamos espacios */
        const email = correo.value.trim();
        const password = contraseña.value.trim();

        /* Verificamos si están vacíos */
        if (email === "" || password === "") {

            alert("Debe completar todos los campos.");

            return;
        }

        /* Verificamos que el correo tenga formato válido */
        if (!email.includes("@") || !email.includes(".")) {

            alert("Ingrese un correo válido.");

            return;
        }

        /* Si todo está correcto */
        alert("Inicio de sesión correcto.");

    });

}