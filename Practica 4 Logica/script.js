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

function unicos(array){
    const resultado = [];

    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado;
}

console.log(unicos([1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,8,8,9,10]))