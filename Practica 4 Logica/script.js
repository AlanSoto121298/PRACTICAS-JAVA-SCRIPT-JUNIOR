//1-Funcion que reciba un string y lo devuelve al reves

/* function reverseString(str){
    let reversed = " ";
    
    for(let i = str.length -1; i >= 0; i--){
        reversed+=str[i]
    }

    return reversed
}

console.log(reverseString("Hola")); */

//2- Usando reversed con Split reverse y join

/* function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("Hola"));  */

//3- Escribe una funcion que recibe un array de numeros y devuelve un nuevo array con solo numeros unicos(No duplicados)

function unicos(array){
    const resultado = [];

    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado
}

console.log(unicos([1,2,2,3,3,4,5,6,7,9,9,9]))