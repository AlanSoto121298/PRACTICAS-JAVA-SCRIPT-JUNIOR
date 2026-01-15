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

//sacar numeros pares y sumarlos

/* function sumPares(array){
    let suma = 0;
    const array2 = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            array2.push(array[i]);
            suma+=array[i]
        }
    }

    return suma;
}
const resultado = sumPares([1,2,3,4,5,6,7,8,umer9,10]);
console.log(resultado) */

/* function sumPares(array){
    return array.filter(n => n % 2 === 0).reduce((acc,n) => acc + n,0);
}

const resultado = sumPares([1,2,3,4,5,6,7,8,9,10]);
console.log(resultado) */

/*
Tienes 3 interruptores fuera de una habitación y 3 bombillas dentro.
Cada interruptor corresponde a una bombilla, pero no sabes cuál.

Solo puedes entrar una vez a la habitación para observar las bombillas.
¿Cómo haces para saber qué interruptor corresponde a cada bombilla? */

/*
Cómo debería explicarse la solución (sin código)

La solución correcta es conceptual:

Encendés el interruptor 1 y lo dejás un rato

Lo apagás

Encendés el interruptor 2

Entrás a la habitación:

Bombilla encendida → interruptor 2

Bombilla apagada pero caliente → interruptor 1

Bombilla apagada y fría → interruptor 3

 Usás dos variables: luz y calor. */


//FIBONNACI

/*  function fibonacci(n){
    let fib = [0,1];  //empezamos con estos
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib [i-2];  // suma de los numeros anteriores 
    }

    return fib;
 }

 console.log(fibonacci(100)); */


/*
Día 1 – Condicionales básicas

Objetivo: Pensar en decisiones simples (if/else).

Ejercicios:

Escribir una función que reciba un número y diga "positivo", "negativo" o "cero".

Escribir una función que diga si un número es par o impar.



/* 
function numPar(array){
   
   const array2 = [];

   for(let i = 0; i < array.length; i++){
       if(array[i] % 2 === 0){
           array2.push(array[i]*2);
           
       }
   }

  return array2;
}

const resultado = numPar([1,2,3,4,5,6,7,8,9,10]);
console.log(resultado); */

//Funcion que te duvuelve numero m ayor con este array const numeros = [3, 7, 2, 9, 4];

/* function numMayor(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max;
}

const resultado = numMayor([3,7,2,9,4]);
console.log(resultado)
 */

//Numero mayor con REDUCE

/* function numMayor(){
    const numeros = [3,7,2,9,4];
    const mayor = numeros.reduce((ant,act) =>{
        return act > ant ? act : ant;
        
    })
    console.log(mayor)
}

numMayor() */

//Cambiar Contenido del Boton del HTML

/* const parrafo = document.querySelector("#texto");
const boton = document.querySelector("#btn");

boton.addEventListener("click", () => {
  if (parrafo.textContent === "Texto original") {
    parrafo.textContent = "Texto cambiado";
    parrafo.style.color = "red";
  } else {
    parrafo.textContent = "Texto original";
    parrafo.style.color = "black";
  }
});
 */


//Pequeño ejercicio de ciberseguridad evitar inner.html  y usar .textCont
//si usamos inner.html  y el usuario pone <script>alert('hack')</script>
// Es un ataaque (Cross-Site Scripting)

/* const input = document.querySelector("#nombre");
const boton = document.querySelector("#btn");
const resultado  = document.querySelector("#resultado");

boton.addEventListener("click",() =>{
  
    //Tomamos el valor que ingrese el usuario desde el input
    const nombreUsuario = input.value;

    //Aqui lo mostramos en el "p" de forma segura
    resultado.textContent = nombreUsuario;
    //Con esto tendriamos una ventana emergente  resultado.innerHTML = nombreUsuario;


    //limpiamos el input
    input.value = "";
}) */


//FizzBuzz Imprimir números del 1 al 100:

/* "Fizz" si es múltiplo de 3

"Buzz" si es múltiplo de 5

"FizzBuzz" si es de ambos */
/* 
function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
   if( i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz")
   } else if (i % 3 === 0){
      console.log("Fizz")
   } else if(i % 5 === 0){
     console.log("Buzz")
   } else{
      console.log(i)
   }
  }
}

 fizzBuzz() */

/*Escribí una función en JavaScript que recorra los números del 1 al 50.

Para cada número:

Si es múltiplo de 4, imprimí "Four".

Si es múltiplo de 6, imprimí "Six".

Si es múltiplo de 4 y de 6, imprimí "FourSix".

Si no cumple ninguna condición, imprimí el número.

Cada resultado debe mostrarse en una línea separada.

*/

/* function fourSix(){
    for(let i = 1; i <= 50; i++){
        if(i % 4 === 0 && i % 6 === 0){
            console.log("FourSix");
        } else if( i % 4 === 0){
            console.log("Four");

        } else if (i % 6 === 0){
            console.log("Six");
        } else{
            console.log(i)
        }
    }
}

fourSix(); */

/* function findMaxx(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max;
}

const resultado = findMaxx([3, 7, 2, 9, 4]);
console.log(resultado);
 */
/* function findMax(arr) {
  return arr.reduce((max, current) => {
    return current > max ? current : max;
  });
}

console.log(findMax([3, 7, 2, 9, 4]));
 */


//Numero mayor con REDUCE

/* function numMayor(){
    const numeros = [3,7,2,9,4];
    const mayor = numeros.reduce((ant,act) =>{
        return act > ant ? act : ant;
        
    })
    console.log(mayor)
}

numMayor() */


/*👉 Escribe una función en JavaScript que reciba un número
y retorne true si es par y false si es impar. */
/* function parImpar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Ejemplos:
console.log(parImpar(2)); // true
console.log(parImpar(3)); // false
 */


/*
En un HTML que tenga un <ul id="lista"></ul> y un <button id="boton">Agregar</button>,
cada vez que se haga click en el botón, se agregue un nuevo <li> a la lista con el texto "Elemento X",
donde X es el número del elemento (1, 2, 3…). */

/* const lista = document.querySelector("#lista");
const boton = document.querySelector("#boton");
let contador = 1;

boton.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = `Elemento ${contador}`;
    lista.appendChild(li);
    contador++;
})
 */

/* const div1 = document.querySelector(".clase1");
const div2 = document.querySelector(".clase2");
const boton = document.querySelector("#boton");
const boton2 = document.querySelector("#boton2");
let contador = 1;
let contador2 = 1;


boton.addEventListener("click", () => {
    div1.style.background = "blue"
    const li = document.createElement("li");
    li.textContent = `Elemento ${contador}`;
    div1.appendChild(li);
    contador++;

})

boton2.addEventListener("click", () => {
    div2.style.background = "gold";
    const li2 = document.createElement("li");
    li2.textContent = `Elemento ${contador2}`;
    div2.appendChild(li2);
    contador2++;
})

 */


//CONTADOR

/* const boton = document.querySelector("#mas");
const span = document.querySelector("#numero");
const boton2  = document.querySelector("#menos");
let numero = 0;

boton.addEventListener("click",() =>{
    numero++;
    span.textContent = numero;
})

boton2.addEventListener("click",() =>{
    numero--;
    span.textContent = numero;
}) */


/*
Problema:
Tienes un array de números y necesitas devolver un nuevo array con solo los números pares.

const numeros = [1, 2, 3, 4, 5, 6]; */

/* function numPar(array){
    const array2 = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            array2.push(array[i]);

        }
    }

    return array2;
}

const resultado = numPar([1,2,3,4,5,6]);
console.log(resultado); */

// con filter
/* const numPar = array => array.filter(n => n % 2 === 0);
console.log(numPar([2,400,520,2.4,6,10,12,11]))


 */

/*
Problema:
Escribe una función que reciba un número n y devuelva la suma de 
todos los números del 1 hasta n. 
// Ejemplo:
// sumaHasta(5) -> 15 (1+2+3+4+5)
*/

/* function sumaHasta(n){
    let suma = 0;
    for(let i = 1; i <= n ; i++){
         suma+=i
    }

    return suma
}

const resultado = sumaHasta(5);
console.log(resultado);
 */

/* const sumaHasta = n => (n* (n+1)) / 2;
console.log(sumaHasta(5));
 */

//Ejercicios

/* function restaHasta(n){
    let resta = 0;
    for(let i = 1; i <= n; i++){
        resta-=i;
    }

    return resta;
}

const resultado = restaHasta(5);
console.log(resultado); */


/*
Problema:
Dado un array de strings, devuelve un nuevo array con los strings 
en mayúscula y solo los que tengan más de 3 caracteres.

const palabras = ["sol", "luna", "mar", "estrella"]; */


const palabras = ["sol", "luna", "mar", "estrella"];

function filtrarMayuscula(array) {
    const resultado = [];

    for(let i = 0; i < array.length; i++){
        const palabra =array[i];

        if(palabra.length > 3){
            resultado.push(palabra.toUpperCase());
        }
    }

    return resultado;
}

console.log(filtrarMayuscula(palabras));