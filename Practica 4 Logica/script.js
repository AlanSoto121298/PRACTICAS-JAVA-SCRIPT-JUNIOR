//Funcion que reciba string al reves


/* function reverseString(str){
    let reversed = "";
    for(let i = str.length -1; i >= 0; i--){
        reversed+=str[i]
    }

    return reversed;
}

console.log(reverseString("Hola alan")) */



//ARRAY DE NUMEROS Y RECIBA UNO NORMAL

/* function unicos(array){
    const resultado = [];
    for ( let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado
}

console.log(unicos([1,2,2,3,3,4,5,5,5,5,7]))
 */

//Suma numeros

function sumArray(numeros){
    let suma = 0;

    for(let i = 0; i< numeros.length; i++){
        suma += numeros[i]
    }

    return suma
}

console.log(sumArray([1,2,3,4,6,7,8,10]))