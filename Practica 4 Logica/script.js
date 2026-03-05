//Reversed
/* function reversedString(str){
    let reversed = "";
    for(let i = str.length -1; i>=0; i--){
        reversed+=str[i]
    }

    return reversed
}

console.log(reversedString("Hola")) */

//Reversed with join ,split and reverse

/* function reversedString2(str){
    return str.split("").reverse().join("");

}

   console.log(reversedString2("Alancito")) */

//Funcion que recibe array y devuelve solo numeros unicos NO DUPLICADOS
/* 
function unicos(array){
    const resultado = [];

    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado;
}

console.log(unicos([1,1,2,3,3,3,5,6,6,6,6])) */


//Array que devuelve un nuevo array donde cada numero aparece tantas veces como su valor

function repetir(arr){
    const resultado = [];
    for(let i = 0; i < arr.length; i++){
        const num = arr[i];

        for(let j = 0; j < num; j++){
            resultado.push(num)
        }

        return resultado
    }
}

console.log(repetir([1,3,2]))

//Array que reciba numeros y devuelva suma total

function sumArray(numeros){
    let suma = 0;
    for(let i = 0; i< numeros.length; i++){
        suma+=numeros[i]
    }

    return suma;
}

console.log(sumArray([1,2,3,4,5,6]))