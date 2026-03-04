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