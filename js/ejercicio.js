//comparar tres numeros

//averiruguar que numero es el amyor de eso tres numeros 
//y si hay numeros repetidos que también imprima por consola cual es numero repetido

let num1 = 3;
let num2 = 6;
let num3 = 3;
let elMayor = 0;
let numeroRepetido = 0;

//mayor numero
//Manera corta
let numeroMayor = Math.max(num1, num2, num3);
console.log("El numero mayor es: ", numeroMayor);

//manera larga
if (num1>num2){
    elMayor = num1;
    if (elMayor > num3){
        console.log("El numero amyor es: ", elMayor);
    } else {
        console.log("El numero mayor es: ", num3);
    }
}else{
    elMayor = num2;
    if (elMayor > num3){
        console.log("El numero amyor es: ", elMayor);
    } else {
        console.log("El numero mayor es: ", num3);
    }
}


//numero repetido

if(num1===num2){
    numeroRepetido = num1;    
} else if (num1 === num3){
    numeroRepetido = num1;
}else if (num2 == num3){
    numeroRepetido = num2;
}else{
    console.log ("no hay numeros repetidos");
}

console.log("El numero repetido es: ", numeroRepetido);