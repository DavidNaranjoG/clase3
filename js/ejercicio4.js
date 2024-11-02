const boton = document.getElementById("enviar");
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");


boton.addEventListener("click", ()=> {
    if (!nombre.value && !email.value && !pass.value) {
        alert("No has escrito nada en el formulario.");
        return;
    }
    if (nombre.value.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }

    if (email.value.length < 8) {
        alert("El campo de email debe tener al menos 8 caracteres.");
        return;
    }
    if (pass.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    alert("Formulario enviado correctamente.");
})

