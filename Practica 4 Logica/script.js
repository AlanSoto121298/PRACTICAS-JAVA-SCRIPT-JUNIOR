//Reversed
function reversedString(str){
    let reversed = "";
    for(let i = str.length -1; i>=0; i--){
        reversed+=str[i]
    }

    return reversed
}

console.log(reversedString("Hola"))

//Reversed with join ,split and reverse

function reversedString2(str){
    return str.split("").reverse().join("");

}

   console.log(reversedString2("Alancito"))

//Funcion que recibe array y devuelve solo numeros unicos NO DUPLICADOS

function unicos(array){
    const resultado = [];

    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado;
}

console.log(unicos([1,1,2,3,3,3,5,6,6,6,6]))