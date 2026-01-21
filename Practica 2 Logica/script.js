



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
/* function obtenerDatos(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve ("Datos recibidos"),1000)
    });
}

obtenerDatos().then(data => console.log(data)); */  //Datos recibidos 

//con async/await
/* async function mostrarDatos() {
    const data  = await obtenerDatos();
    console.log(data);
}

mostrarDatos(); */
/* 
function reversedString(str){
    let reversed = "";
    for(let i = str.length -1; i >= 0; i--){
        reversed+=str[i];
    }

    return reversed ;
}
 */
/* console.log(reversedString("Hola"))

function reversedString2(str){
    return  str.split("").reverse().join("")
}

console.log(reversedString2("Coco")); */

//Escribe una función sumarUnicos que reciba un array de números 
// y devuelva la suma de los números que no se repiten.
/* 
function sumarUnicos(arr){
    let suma = 0;

    for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    let contador  = 0;
    //Contar cuantas veces aparece arr en todo el array
    for(let j = 0; j < arr.length; j++){
        if(arr[j] === num){
            contador++;
        }
    }
    //Si aparece solo 1 vez sumarlo
    if(contador === 1){
        suma += num;
    }
    }

    return suma;
}

console.log(sumarUnicos([1,2,3,2,4])); */

//Forma mas corta

/* function sumarUnicos(arr){
    return arr
    .filter(num => arr.indexOf(num)=== arr.lastIndexOf(num))
    .reduce((suma,num) => suma +num,0)
}

console.log(sumarUnicos([1, 2, 3, 2, 4])) */ // 8

/* 
function sumarUnicos(arr){
    return arr
    .filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((suma,num) => suma+num,0)
}

console.log(sumarUnicos([1, 2, 3, 3, 2, 4, 5])) */

//Funciones pares e impares
/* function numImpar(array){
   
      if(array % 2 === 0){
           return "Es par"
      } else{
         return "Es impar"
      }
    
   
}

console.log(numImpar(2));
console.log(numImpar(1)); */


//Escribe una función que reciba un array de números y devuelva la suma de todos los números pares.

/* function sumPares(array){
    let suma = 0;
   

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
          
            suma+= array[i]
        }
    }

    return suma
}

const resultado = sumPares([1,2,3,4,5,6,7,8,9,10]) //2,4,6,8,10

console.log(resultado) */

//Dado un array de números, devuelve un nuevo array con los
//  números multiplicados por 2, pero solo si son mayores que 5.

/* function sumaMayores(array){
    const array2 =[];
    
    for(let i = 0; i < array.length; i++){
        if(array[i] > 5){
            array2.push(array[i] * 2)
        }
    }

    return array2;
}

const resultado = sumaMayores([1,2,3,4,5,6,7,8,9,10]); //
console.log(resultado)  */

/*
Crea una función llamada obtenerUsuariosMayores que:

Reciba el array de usuarios como parámetro.

Devuelva un nuevo array que contenga solo los usuarios mayores o iguales a 18 años.

El array devuelto debe tener solo los nombres de esos usuarios.

No debe modificar el array original.
const usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "María", edad: 19 },
  { nombre: "Pedro", edad: 15 },
  { nombre: "Sofía", edad: 30 }
];
 */

/* function obtenerUsuariosMayores(usuarios) {
    const array2 = [];

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].edad >= 18) {
            array2.push(usuarios[i].nombre);
        }
    }

    return array2;

}

const resultado = obtenerUsuariosMayores([{ nombre: "Ana", edad: 17 },
{ nombre: "Luis", edad: 22 },
{ nombre: "María", edad: 19 },
{ nombre: "Pedro", edad: 15 },
{ nombre: "Sofía", edad: 30 }])

console.log(resultado)
 */

/*
Crea una función llamada obtenerProductosDisponibles que:

Reciba el array de productos.

Devuelva un nuevo array con solo los productos que estén disponibles.

Del array resultante, devuelve solo los nombres de los productos.

No modifiques el array original.
const productos = [
  { nombre: "Laptop", precio: 1200, disponible: true },
  { nombre: "Mouse", precio: 25, disponible: true },
  { nombre: "Teclado", precio: 45, disponible: false },
  { nombre: "Monitor", precio: 300, disponible: true },
  { nombre: "Impresora", precio: 200, disponible: false }
];
 */

function obtenerProductosDisponibles(productos){
   const productosDisponibles = [];

   for(let i = 0; i < productos.length; i++){
         if(productos[i].disponible === true){
              productosDisponibles.push(productos[i].nombre)
         }
   }

   return productosDisponibles
}

const resultado = obtenerProductosDisponibles([{ nombre: "Laptop", precio: 1200, disponible: true },
  { nombre: "Mouse", precio: 25, disponible: true },
  { nombre: "Teclado", precio: 45, disponible: false },
  { nombre: "Monitor", precio: 300, disponible: true },
  { nombre: "Impresora", precio: 200, disponible: false }])

  console.log(resultado)