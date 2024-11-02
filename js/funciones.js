//comparar tres numeros

//averiruguar que numero es el amyor de eso tres numeros 
//y si hay numeros repetidos que también imprima por consola cual es numero repetido

let list1 = [1,3,5,7,9];
let list2 = [0,2,4,60,8];
let numeroMayor1 = list1[0];
let numeroMayor2 = list2[0];
let numeroRepetido = 0;
let pos1 = 0;
let pos2 = 0;

console.log("Lista 1: ", list1)
console.log("Lista 2: ", list2)

//forma rapida
let list1_1 = list1.sort((a, b) => a - b);
let list2_1 = list2.sort((a, b) => a - b);

let mayor= Math.max(list1_1[list1_1.length-1], list2_1[list2_1.length-1])
console.log("el numero mayor es: ", mayor);

//forma larga para entender los ciclos for


function mayorNumero(a,b,c, d){
    // Mayor lista 1
for (let i = 0; i <  a.length; i++){
    if(a[i]> c){
        c = a[i];
    }
}

// Mayor lista 2
for (let i = 0; i <  b.length; i++){
    if(b[i]> d){
        d = b[i];
    }
}

if(c>d){
    return c;
}else{
    return d;
}
}

let mayorFinal = mayorNumero(list1, list2, numeroMayor1, numeroMayor2);
console.log("el numero mas grande es: ", mayorFinal);