//Funcion que rec iba un string y devuelva al reves

/* function reverseString(str){
    let reversed = "";
    for(let i = str.length -1; i>= 0; i--){
        reversed+=str[i]
    }

    return reversed;
}

console.log(reverseString("Hola")) */

//Reversed con Split
/* function reverseString(str){
    return str.split("").reverse().join("");
    
}

console.log(reverseString("Help")) */


//Numeros duplicados

/* function unicos(array){
    const resultado = [];

    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado;
}

console.log(unicos([1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,8,8,9,10])) */

//Numero aparece como su valor

/* function repetir(arr){
    const resultado = [];
    for(let i = 0; i < arr.length; i++){
        const num = arr[i];

        for(let j = 0; j < num; j++){
            resultado.push(num)
        }
    }
     return resultado;
}

console.log(repetir([1,2,3,5,6,7,10])) */

//Array de numeros y suma total

function sumArray(numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma +=numeros[i]
    }

    return suma;
}

console.log(sumArray([1,2,4,5,6,100]))