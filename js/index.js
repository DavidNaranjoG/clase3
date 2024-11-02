let numero=2; //Variable que puede cambiar
const numero2= 1; //constante que no cambia

let boolean = true; //variable que cambia solo a falso o verdadero
let nulo= null //lo pone el desarrollador
//let undefined = undefined // lo pone el sistema

//let simboloUnico = Symbol('unico')

console.log("Hola mundo: ", numero2);

let carro= { //objeto
    color: "rojo",
    velocidadMaxima: 30,
    marca: "mazda"
}

let verduras =  ["zanahoria", "tomate", "lechuga"];
console.log("Verduara: ", verduras[0]);

let string1 = "Hola cómo estás?";
let string2 = "Espero no del todo mal"
let string3 = `${string1} ${string2}`;

console.log(string3);
console.log(string3.length);
console.log(string3.toLocaleUpperCase());
console.log(string3.toLocaleLowerCase());
console.log(string3.substring(3,27));
