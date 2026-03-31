//funcion que resiva un string al reves

/* function reverseString(str){
    let reversed = "";
    for(let i = str.length -1; i>=0; i--){
       reversed+=str[i]
    }

    return reversed;
}

console.log(reverseString("Alan")) */


/* function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("Alan"))  */


//Function unicos sin duplicados

function unicos(array){
    const resultado = [];
    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado
}

console.log(unicos([1,1,2,3,4,4,4,5,5,5,5,7,10]))
