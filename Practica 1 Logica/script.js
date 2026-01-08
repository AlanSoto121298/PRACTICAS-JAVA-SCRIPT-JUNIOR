//Suma en una función con 2 parametros
/* function suma(a, b) {

    const resultado = a + b;
    console.log(resultado)

}

suma(20, 30) */

//Multiplicar con 2 parametros usando return y guardando en variable

/* function multiplicacion(a, b) {

    return a * b;

}

const resultado = multiplicacion(5, 5)

console.log(resultado) */

//Funcion llamada comparar 2 parametros a,b  si a es mayor  muestra de lo contrario b

/* function mayorMenor(a, b) {
    if (a > b) {
        return "A ES MAYOR QUE B "
    } else if(a < b ){
        return "B ES MAYOR QUE A "
    } else{
        return "A Y B SON IGUALES"
    }
}
 */
/* const resultado2 = mayorMenor(50,30);
console.log(resultado2) */

//FUNCION CON BUCLE FOR

/* function imprimirHasta(n){
    for(let i = 1; i <= n; i++){
        console.log(i)
    }
}
imprimirHasta(20)
 */


//FUNCION DE SUMAR

/* function sumarHasta(n){
  let suma = 0;

  for(let i = 1; i <= n; i++){
    suma+=i;
  }

  return suma
}

const resultado = sumarHasta(2);

console.log(resultado)
 */

//Escribimos una función con un parametro de un array, vamos agregar los numeros pares a ese array

/* function numPar(array){
    const array2 = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            array2.push(array[i])
        }
    }

    return array2;
}

const resultado = numPar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
console.log(resultado);
 */
//Escribe una función que reciba un array de números y
// devuelva un nuevo array con los números mayores que 10.

/* function numMayor(array){
  const arrayNew = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] > 10){
        arrayNew.push(array[i])
    }
  }

  return arrayNew;
}

const resultado = numMayor([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

console.log(resultado);

 */

/*Escribe una función que reciba un array de números y
devuelva un nuevo array solo con los números pares y suma esos pares . */

/* function numPares(array){
    let suma = 0;
    const array2 = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
           array2.push(array[i])
           suma+=array[i];
        }
    }

    return suma;
}

const resultado = numPares([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
console.log(resultado); */


/*
Escribe una función que reciba un array de números y
devuelva un nuevo array con los números multiplicados por 2. */

/* function Multi(array){
    const array2 = [];

   for(let i = 0; i < array.length; i++){
    array2.push(array[i] * 2)
   }

   return array2;
}

const resultado = Multi([1,2,3,4,5,6,7,8,9,10])
console.log(resultado)
 */

/*
Escribe una función que reciba un array de números y devuelva un nuevo
array solo con los números impares al cubo. */

/* function numImpar(array){
    const array2  = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 1){
            array2.push(array[i] ** 3)
        }
    }

    return array2;
}

const resultado = numImpar([1,2,3,4,5]);
console.log(resultado);
 */


/*
Escribe una función que reciba un array de números y devuelva el número más grande
 y el más pequeño en un objeto con
 esta estructura:
 entrada: [3, 7, 1, 9, 4] */

/*  function numMayorMenor(){
   const resultado = {"Alan": 27, "Mildred": 26, "juan M":27}

   const maxNumero = Math.max(...Object.values(resultado));
   const minNumero = Math.min(...Object.values(resultado));
   console.log(`Max: ${maxNumero}`)
   console.log(`Min: ${minNumero}`)

 }

numMayorMenor() */

/* function numMayorMenor(array) {
    let max = array[0];
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) max = array[i];
        if (array[i] < min) min = array[i];
    }

    return { max, min };
}

const resultado = numMayorMenor([3, 7, 1, 9, 4]);
console.log(resultado); // { max: 9, min: 1 }
 */

/* function statsArray(array){
    let max = array[0];
    let min = array [0];
    let suma = 0;

    for(let i = 0; i < array.length; i++){
        const num = array[i]
        if(num > max) max =num;
        if(num < min) min =num;

        suma+=num;
    }

    const promedio = suma / array.length;
    return {max,min,promedio};
}

const resultado = statsArray([2,4,6,8,10]);
console.log(resultado) */

/*Escribe una función llamada esParOImpar que reciba un número y devuelva:

"par" si el número es par

"impar" si el número es impar */

/* function esParOImpar(num){
  if(num % 2 === 0){
     return "ES PAR"
  } else{
     return "ES IMPAR"
  }
}

console.log(esParOImpar(4));
console.log(esParOImpar(7)); */

/*
Escribe una función llamada filtrarMayores que reciba un array de números y devuelva
 un nuevo array solo con los números mayores a 5. */

//filtrarMayores([2, 6, 3, 8, 1, 10])

/* function filtrarMayores(array) {
    const array2 = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5)
            array2.push(array[i])
    }

    return array2;

}

const resultado = filtrarMayores([2, 6, 3, 8, 1, 10]);

console.log(resultado);
 */

/* function devolverObjeto(persona) {
    return `${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`;
}

const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};

console.log(devolverObjeto(persona));

 */

//CLOUSURE JS 

/* function movie(){
    const name = "El señor de los anillos";
    function funcionPeli(){
        console.log(name)
    }

    return funcionPeli;
}

const myFunc = movie();
myFunc();
 */


/*Escribe una función que:

Devuelva solo los números pares

Multiplique cada par por 2
[1, 2, 3, 4, 5, 6]

Devuelva el resultado en un nuevo array */

/* function numPares(array) {
    const array2 = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array2.push(array[i] * 2);
        }
    }

    return array2;

}

const resultado = numPares([1,2,3,4,5,6]); 
console.log(resultado); */


/*
Consigna

Escribe una función llamada sumarParesImpares que reciba un array de 
números y devuelva un objeto con la suma de los números pares y la suma de los números impares. */
/* 
function sumarParesImpares(array) {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares += array[i];
    } else {
      impares += array[i];
    }
  }

  return { pares, impares };
}

console.log(sumarParesImpares([1,2,3,4,5])); 
// { pares: 6, impares: 9 }

console.log(sumarParesImpares([10,15,20]));  */
// { pares: 30, impares: 15 }


/* function sumPares(array){
   const array2 = [];
   let suma  = 0;

   for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
        array2.push(array[i])
        suma+=array[i]
    }
   }

   return suma;
}

const resultado = sumPares([1, 2, 3, 4, 5, 6]);
console.log(resultado) */

/* function sumPares(arr){
    return arr
    .filter(numero => numero % 2 === 0)
    .reduce((acc,num) => acc+num,0);
}

const numeros = [1,2,3,4,5,6,7,8,9,10];
const resultado = sumPares(numeros);
console.log(resultado)
 */
        


/*
Mini-Test Final – Pasos a seguir

Selecciona los elementos del DOM

Botón con id btn

Lista <ul> con id lista

Crea un array de números

const numeros = [1,2,3,4,5,6,7,8,9,10];


Agrega un event listener al botón

Que escuche el evento "click"

Dentro del event listener:

4.1 Filtra los números pares del array

4.2 Calcula la suma de los números pares

4.3 Limpia la lista <ul> antes de agregar nuevos elementos

4.4 Agrega cada número par como un <li> dentro de la lista

4.5 Muestra debajo de la lista un <p> con el texto: "Suma total: X" (reemplazando X por la suma)

Opcional:

Puedes usar .filter() y .reduce() para filtrar y sumar

Recuerda que cada click debe actualizar la lista y la suma, no duplicar elementos */

/* const boton = document.querySelector("#btn");
const lista = document.querySelector("#lista");
const parrafoSuma = document.querySelector("#suma")
const numeros = [1,2,3,4,5,6,7,8,9,10];

boton.addEventListener("click",() => {
     
    //filtramos pares
    const pares = numeros.filter(numero => numero % 2 === 0);
    //sumamos pares
    const suma = pares.reduce((acc,num) => acc + num,0);

    //limpiamos la lista ul
     lista.innerHTML = "";

     //agregamos los numeros par a la lista usando ForEach
     pares.forEach(num =>{
        const li = document.createElement("li");
        li.textContent = num;
        lista.appendChild(li);

     });

     //Mostramos la suma en el P
     parrafoSuma.textContent = `La suma total es: ${suma}`;
})

 */

//CALL STACKS MICROTASKS MACROTASKS
/* console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D"); */

// PRIMERO SE EJECUTA A síncrono (call stack)
//DESPUES SE EJECUTA D síncrono (call stack)
//DESPUES SE EJECUTA C microtask (Promise)
// AL FINAL SE EJECUTA B (setTimeout)

/* CALL STACK 
console.log()
function foo() {}
foo()

if / for / while
Math.random()
JSON.parse()
 */

/* MICROTACKS
Promise.then()
Promise.catch()
Promise.finally()

async / await   // lo que va DESPUÉS del await
queueMicrotask()

MutationObserver
 */

/*MACROTASKS
setTimeout()
setInterval()

setImmediate()     // Node.js
requestAnimationFrame()

DOM events:
click
scroll
keydown
load

I/O (Node.js)

 */

/* const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#btn");

boton.addEventListener("click", () => {
     if (parrafo.textContent === "Cambiame") {
        parrafo.textContent = "Cambiado";
        parrafo.style.color = "red";
     } else {
        parrafo.textContent = "Cambiame";
        parrafo.style.color = "black"; // importante resetear color
     }
});
 */

/* const app = document.querySelector("#app");
const input = document.querySelector("#taskInput");
const boton = document.querySelector("#addBtn");
const lista= document.querySelector("#taskList");

boton.addEventListener("click", () => {
    const tarea = input.value.trim(); // obtenemos el valor del input
    if (tarea === "") return; // no hace nada si el input está vacío

    const li = document.createElement("li"); // creamos li de la tarea
    li.textContent = tarea;

    const doneBtn = document.createElement("button"); // creamos el botón "Hecho"
    doneBtn.textContent = "Hecho";

    // Listener del botón "Hecho" dentro del click del botón agregar
    doneBtn.addEventListener("click", () => {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none"; // quitamos tachado
        } else {
            li.style.textDecoration = "line-through"; // agregamos tachado
        }
    });

    li.appendChild(doneBtn); // agregamos el botón al li
    lista.appendChild(li);   // agregamos el li a la lista

    input.value = ""; // limpiamos el input
}); */

/* Tu tarea es escribir una función procesarNumeros que:

Elimine los números duplicados.

Filtre solo los números positivos (mayores que 0).

Ordene los números de menor a mayor.

Devuelva el array resultante.

Puedes usar Set para eliminar duplicados.

.filter() para filtrar positivos.

.sort() para ordenar.

Trata de no mutar el array original. */

function procesarNumeros(){
const numeros = [3, -1, 4, 3, 0, -2, 4, 5, 0, 2];

const setNumeros = new Set (numeros);
const numerosArray = [...setNumeros];

const filtrar = numerosArray.filter(numero => numero > 0);

 filtrar.sort((a, b) => a - b);

console.log(filtrar)
}

procesarNumeros();



