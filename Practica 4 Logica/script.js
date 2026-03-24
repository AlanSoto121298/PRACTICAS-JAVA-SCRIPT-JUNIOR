//Funcion que reciba string y de vuelva al re vez
/* function reverseString(str){
    let reversed = "";

    for(let i = str.length -1; i >=0  ; i--){
        reversed+=str[i];
    }

    return reversed
}

console.log(reverseString("Hola")) */

//Version con split reverse y JOIN
/* 
function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("Hola")) */

//Numeros unicos sin duplicados

/* function unicos(array){

    const resultado = [];
    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado;
}

console.log(unicos([1,2,3,3,3,3,5,6,6,6,30,30,245])) */


//Funcion que reciba un array de numeros y devuelva la suma total

function sumaArray(numeros){
    let suma = 0;
    for(let i = 0; i< numeros.length; i++){
        suma+=numeros[i]
    }

    return suma
}

console.log(sumaArray([1,2,3,4,5,6,7,8]))