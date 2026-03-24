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

function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("Hola"))