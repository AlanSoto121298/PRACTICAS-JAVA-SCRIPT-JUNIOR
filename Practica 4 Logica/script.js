//Reversed

/* function reverseString(str){
    let reversed = "";
    for(let i = str.length -1; i >= 0; i--){
        reversed += str[i];
    }

    return reversed ;
}

console.log(reverseString("Alancio"))
 */

//Reversed con split

/* function reverseStringTwo(str){
    return str.split("").reverse().join("");
    
}

console.log(reverseStringTwo("Help")) */

//Devuelva un array sin numeros duplicados

function unicos(array){
    const resultado = [];
    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado;

}

console.log(unicos([1,1,2,3,3,3,4,5,8,9,10,10,11]))