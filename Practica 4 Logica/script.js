//Funcion que reciba string al reves




//Reciba un string al reves

function reverseString(str){
   let reversed = "";

   for(let i = str.length -1; i >= 0; i--){
    reversed+=str[i]
   }
}

console.log(reverseString("Hola alan")) 