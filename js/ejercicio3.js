// 3 vectore v1 v2 y v3
// 3 strings

// Si la variable spiderman está en peligro, debe lanzar el mensaje

// Como decía el tio Ben, recuerda lo siguiente, ten cuidado con el duende

// Y si no está en peligro, escribir:
// Como decía el tio ben, un gran poder requiere una gran responsabilidad

// hacer con arrowfunctions


const v1 = "tio ben";
const v2 = "recuerda lo siguiente!";
const v3 = "un gran poder requiere una gran responsabilidad";
const v4 = "Ten cuidado con el duende";

let danger = true;

let msg = (danger) => {
    if (danger) {
        msg1 = `Como decía el ${v1}, ${v2} ${v4}`
        return msg1
    } else {
        msg2 = `Como decía el ${v1}, ${v2} ${v3}`;
        return msg2
    }

}

const boton = document.createElement("button");
const boton1 = document.createElement("button");
boton1.innerText = "NO Peligro"
boton1.style = "background-color: cyan";
document.body.appendChild(boton1);
boton1.addEventListener("click", () => {
    // Inicializa el mensaje y el primer estado del botón
    mensajeFinal();
})
const boton2 = document.createElement("button");
boton2.innerText = "Peligro";
boton2.style = "background-color: red";
document.body.appendChild(boton2);
boton2.addEventListener("click", () => {
    danger=false;
    // Inicializa el mensaje y el primer estado del botón
    mensajeFinal(danger);
})

const mensajeFinal = () => {
    document.body.innerHTML = msg(danger);
    boton.innerText = danger ? "No Peligro" : "Peligro";
    boton.style.backgroundColor = danger ? "cyan" : "red";
    document.body.appendChild(boton);
    danger = !danger;
};

boton.addEventListener("click", mensajeFinal);


console.log(msg(danger));
