const titulo =  document.createElement("h1");

titulo.innerText = "Hola soy Spiderman";

// Agregamos el elemento al body del documento para que se muestre en la página
document.body.appendChild(titulo);

const boton = document.createElement("button");
boton.innerText = "click"
boton.style = "background-color: cyan";
document.body.appendChild(boton);
boton.addEventListener("click", () => {
    document.body.innerHTML = `
        <h1>Hola campista</h1>
    `;
});
