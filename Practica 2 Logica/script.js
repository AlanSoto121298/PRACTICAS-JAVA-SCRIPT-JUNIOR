//FUNCION  QUE RECIBA UN STRING Y LO DEVUELVA AL REVES  CON FOR 
/* function reverseString(str){
    let reversed = "";
    for(let i = str.length -1; i >= 0; i--){
        reversed +=str[i];
    }

    return reversed;
}

console.log(reverseString("Alancito"));
console.log(reverseString("Mucho gusto alancito")); */

//FUNCION  QUE RECIBA UN STRING Y LO DEVUELVA AL REVES  CON SPLT

/* function reverseString(str){
    return str.split("").reverse().join("");
}


console.log(reverseString("estoy hasta la madre"));
console.log(reverseString("TE ODIO JAVA SCRIPT NO ENTIENDO NI MADRES")); */



//LOGICA 19-1-2026
//SCOPE LEXICO
/* let comida = "pizza";

function comer() {
  console.log(comida);
}

function casa() {
  let comida = "hamburguesa";
  comer();
}

casa(); */

//Ejemplos de promesa con .then()
function obtenerDatos(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve ("Datos recibidos"),1000)
    });
}

obtenerDatos().then(data => console.log(data));  //Datos recibidos 

//con async/await
async function mostrarDatos() {
    const data  = await obtenerDatos();
    console.log(data);
}

mostrarDatos();