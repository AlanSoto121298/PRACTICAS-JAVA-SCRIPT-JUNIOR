



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

/* function obtenerProductosDisponibles(productos){
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

  console.log(resultado) */



/*
Crea una función llamada calcularPromedioAprobados que:

Reciba el array de estudiantes.

Considere aprobados solo a los estudiantes con calificación mayor o igual a 6.

Calcule el promedio de las calificaciones de los estudiantes aprobados.

Devuelva ese promedio como número.

No modifique el array original.

const estudiantes = [
{ nombre: "Carlos", calificacion: 8 },
{ nombre: "Lucía", calificacion: 5 },
{ nombre: "Miguel", calificacion: 9 },
{ nombre: "Ana", calificacion: 4 },
{ nombre: "Sofía", calificacion: 7 }
];

 */

/* function calcularPromedioAprobados(estudiantes){
   let sumaCalificacines = 0;
   let cantidadAprobados = 0;

   for(let i = 0; i < estudiantes.length; i++){
    if(estudiantes[i].calificacion >= 6){
        sumaCalificacines += estudiantes[i].calificacion;
        cantidadAprobados++
    }
   }
  return sumaCalificacines / cantidadAprobados;

}

const resultado = calcularPromedioAprobados([
  { nombre: "Carlos", calificacion: 8 },
  { nombre: "Lucía", calificacion: 5 },
  { nombre: "Miguel", calificacion: 9 },
  { nombre: "Ana", calificacion: 4 },
  { nombre: "Sofía", calificacion: 7 }
]);

console.log(resultado);


 */

/*
🧠 Ejercicio: obtenerUsuariosActivos
Dado el siguiente array:
const usuarios = [
  { nombre: "Ana", edad: 28, activo: true },
  { nombre: "Luis", edad: 35, activo: false },
  { nombre: "Carlos", edad: 22, activo: true },
  { nombre: "Marta", edad: 40, activo: false },
  { nombre: "Sofía", edad: 30, activo: true }
];

📌 Consigna

Crea una función llamada obtenerUsuariosActivos que:

Reciba el array de usuarios.

Devuelva un nuevo array.

Incluya solo los usuarios que estén activos.

Del array resultante, devuelva solo los nombres.

No modifique el array original. */

/* function obtenerUsuariosActivos(usuarios){
   const array = [];

   for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].activo === true){
        array.push(usuarios[i].nombre)
    }
   }

   return array;
}  

const resultado = obtenerUsuariosActivos([{ nombre: "Ana", edad: 28, activo: true },
  { nombre: "Luis", edad: 35, activo: false },
  { nombre: "Carlos", edad: 22, activo: true },
  { nombre: "Marta", edad: 40, activo: false },
  { nombre: "Sofía", edad: 30, activo: true }])


  console.log(resultado); */

//VERSION CON  FILTER Y MAP

/*   function obtenerUsuariosActivos(usuarios){
    return usuarios
    .filter(usuario => usuario.activo === true)
    .map(usuario => usuario.nombre);
  }

  const resultado = obtenerUsuariosActivos([
  { nombre: "Ana", edad: 28, activo: true },
  { nombre: "Luis", edad: 35, activo: false },
  { nombre: "Carlos", edad: 22, activo: true },
  { nombre: "Marta", edad: 40, activo: false },
  { nombre: "Sofía", edad: 30, activo: true }
]);

console.log(resultado);
 */


/*
Crea una función llamada procesarPedidos que:

Reciba el array de pedidos.

Devuelva un nuevo array.

Incluya solo los pedidos que estén entregados.

Del array resultante, devuelva solo los nombres de los clientes.

No modifique el array original.

const pedidos = [
  { cliente: "Juan", total: 120, entregado: true },
  { cliente: "Ana", total: 80, entregado: false },
  { cliente: "Pedro", total: 200, entregado: true },
  { cliente: "Lucía", total: 50, entregado: false },
  { cliente: "Marcos", total: 150, entregado: true }
];
*/

/* function procesarPedidos(pedidos){
    const pedidosEntregados = [];
    let totalEntregado = 0;

    for(let i = 0; i < pedidos.length; i++){
        if(pedidos[i].entregado === true){
            pedidosEntregados.push(pedidos[i].cliente);
            totalEntregado += pedidos[i].total;
        }
    }

    return {
        pedidosEntregados: pedidosEntregados,
        totalEntregado: totalEntregado
    }
}

const resultado = procesarPedidos([
  { cliente: "Juan", total: 120, entregado: true },
  { cliente: "Ana", total: 80, entregado: false },
  { cliente: "Pedro", total: 200, entregado: true },
  { cliente: "Lucía", total: 50, entregado: false },
  { cliente: "Marcos", total: 150, entregado: true }
]);

console.log(resultado) */


// Se supone que tienes este arreglo:
// const numeros = [1, 2, 3, 4, 5];

// Queremos:
// 1️⃣ Crear un nuevo arreglo que contenga cada número multiplicado por 2
// 2️⃣ Filtrar solo los números mayores a 5
// 3️⃣ Mostrar el resultado final en consola

// Escribí tu código aquí:

/* function multiplicarFiltrar(numeros){
    const arrayMultiplicada = [];
    const arrayFiltrar = [];

    for(let i = 0; i < numeros.length; i++){
        arrayMultiplicada.push(numeros[i] * 2);
    }

    for(let j = 0; j < numeros.length; j++){
        if(arrayMultiplicada[j] > 5){
            arrayFiltrar.push(arrayMultiplicada[j])
        }
    }
    return arrayFiltrar;
}

const resultado = multiplicarFiltrar([1, 2, 3, 4, 5]);
console.log(resultado); */

//VERSION MÁS CORTA
/* const numeros =[1,2,3,4,5];

const resultado = numeros
.map(n=> n * 2)
.filter(n => n > 5);

console.log(resultado) */


/*
const personas = [
  { nombre: "Ana", edad: 15 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Marta", edad: 18 },
  { nombre: "Juan", edad: 30 },
  { nombre: "Sofía", edad: 12 }
];

Tareas:

    Crear un nuevo array solo con las personas mayores de 18.

    Transformar ese array para que contenga solo sus nombres en mayúsculas.

    Mostrar el resultado en consola. */

/* function people(personas){
    const personasMayores = [];

    for(let i = 0; i < personas.length; i++){
        if(personas[i].edad > 18){
            personasMayores.push(personas[i].nombre.toUpperCase())
        }
    }

    return personasMayores
}

const resultado = people([
  { nombre: "Ana", edad: 15 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Marta", edad: 18 },
  { nombre: "Juan", edad: 30 },
  { nombre: "Sofía", edad: 12 }
]);
 

console.log(resultado) */

//CON FILTRO
/* const personas = [
  { nombre: "Ana", edad: 15 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Marta", edad: 18 },
  { nombre: "Juan", edad: 30 },
  { nombre: "Sofía", edad: 12 }
];

const resultado = personas
.filter(p => p.edad > 18)
.map(p => p.nombre.toUpperCase());

console.log(resultado);
 */


/*
const productos = [
  { nombre: "Camisa", precio: 250, stock: 10 },
  { nombre: "Pantalón", precio: 400, stock: 0 },
  { nombre: "Zapatos", precio: 800, stock: 5 },
  { nombre: "Gorra", precio: 150, stock: 20 },
  { nombre: "Chaqueta", precio: 1200, stock: 2 }
];

Tareas:

    Filtrar los productos que estén en stock (stock > 0).

    Aplicar un descuento del 10% a todos los productos filtrados.

    Crear un nuevo array que contenga objetos con nombre y precio con descuento solamente.

    Mostrar el resultado en consola. */



/* function descuentoFiltrar(productos){
    const productosConDescuento = [];
   

    for(let i = 0; i < productos.length; i++){
        if(productos[i].stock > 0){
            const precioDescuento = productos[i].precio * 0.9

            productosConDescuento.push({
                nombre : productos[i].nombre,
                precio: precioDescuento
            })
        }

            
    }

    return productosConDescuento;

   
}

const resultado = descuentoFiltrar([ { nombre: "Camisa", precio: 250, stock: 10 },
  { nombre: "Pantalón", precio: 400, stock: 0 },
  { nombre: "Zapatos", precio: 800, stock: 5 },
  { nombre: "Gorra", precio: 150, stock: 20 },
  { nombre: "Chaqueta", precio: 1200, stock: 2 }])

  console.log(resultado);    */


//Palindromo 

/*  function esPalindromo(palabra){
   palabra = palabra.toLowerCase();
   let longitud = palabra.length;

   for(let i = 0; i < longitud /2; i++){
       if(palabra[i] !== palabra[longitud -1 -i]){
           return false;
       }
   }

   return true;
 }

 console.log(esPalindromo("reconocer"));
   console.log(esPalindromo("alancito"));
*/

/* function esPalindromo(palabra){
 palabra = palabra.toLowerCase();

 let palabraInvertida = palabra.split('').reverse().join('');

 return palabra === palabraInvertida;
 
}

 console.log(esPalindromo("reconocer"));
    console.log(esPalindromo("alancito"));
 */



//Ejemplo de patrones de diseño
/*
Ejercicio 1 — Reglas diferentes (MUY básico)
🧾 Vida real

Una tienda cobra descuento diferente según el tipo de cliente:

normal → 5%

socio → 10%

empleado → 20% */

/* const descuentos = {
    normal: monto => monto * 0.05,
    socio: monto => monto * 0.10,
    empleado: monto => monto * 0.20
};

function calcularDescuento(monto, tipoCliente){
    return descuentos[tipoCliente](monto)
}

console.log(calcularDescuento(1000, 'normal'));
console.log(calcularDescuento(1000, 'socio'));
console.log(calcularDescuento(1000, 'empleado'));
 */


//Ejercicip par e impar JS 

/*👉 Escribí una función que reciba un número y determine si es par o impar.

Retornar "par" o "impar"

No uses librerías */

/* function parImpar(numero) {

    if (numero % 2 === 0) {
        return "Es par"
    } else {
        return "Es impar"
    }

}

console.log(parImpar(2));
console.log(parImpar(3)); */

/*
Escribí una función que reciba un string y devuelva ese string invertido. */

/* function inverse(str){
    let invertida = "";
    for(let i = str.length -1; i >= 0; i--){
        invertida+=str[i]

    }
    return invertida;
}

console.log(inverse("Hola"))


function reverseStr(str){
    return str.split('').reduce((acc,char) => char+acc,'')
}

console.log(inverse("pene")) */



/*Escribí una función que reciba un array de números y devuelva un
 nuevo array con solo los números únicos (sin duplicados). */

/*  function unicos(array){
    const resultado = [];

    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado;
 }

 console.log(unicos([1,2,2,3,4,4,5])); */

/**
 * Escribí una función que reciba un array de números y devuelva un nuevo array 
  donde cada número aparece tantas veces como su valor.
  repetir([1, 3, 2])
// Resultado: [1, 3, 3, 3, 2, 2]

 */

/* function repetir(arr){
   const resultado = [];

   for(let i = 0; i < arr.length; i++){
    const num = arr[i];

    for(let j = 0; j < num; j++){
        resultado.push(num);
    }
   }
   return resultado
}

console.log(repetir([1, 3, 2]));  */

/*
Escribí una función que reciba un array de números y devuelva un nuevo array donde:

Cada número par se multiplica por 2

Cada número impar se multiplica por 3 */
/* 
function parImpar(arr) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultado.push(arr[i] * 2);
        } else {
            resultado.push(arr[i] * 3);
        }
    }
    return resultado;
}

console.log(parImpar([1,2,3,4,5,6,7,8,10])) */


//Escribe una función que reciba un array de números y devuelva la suma total.

/*sumarArray([1, 2, 3, 4]) // 10
sumarArray([5, 10])     // 15
 */

/* function sumaArray(numeros){

    let suma = 0;

    for(let i = 0 ; i < numeros.length; i++){
        suma += numeros[i];
    }

    return suma;

}

console.log(sumaArray([1,2,3,4,5])); */

//Suma con reduce
/* const sumaArray = numeros =>
    numeros.reduce((acc, n) => acc + n, 0);
console.log(sumaArray([1, 2, 3, 4, 5])); */

//Escribe una función que reciba un array de números y devuelva un nuevo array solo con los números pares.

/* function numPares(arr){
    const pares = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            pares.push(arr[i])
        }
    }

    return pares;
}


const resultado = numPares([1,2,3,4,5,6]);
console.log(resultado); */

//Con metodo filter

/* const filtrarPares = arr => arr.filter(n=> n % 2 === 0);

const resultado = filtrarPares([1,2,3,4,5,6]);
console.log(resultado); */


//Escribe una función que reciba un string y devuelva la cantidad de vocales que contiene.

/* function vocales(texto) {
    texto = texto.toLowerCase();

    let letra = "aeiou"
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (letra.includes(texto[i])) {
           contador++

        }
    }
    return contador;

}

console.log(vocales("Hola alancito")) */

/* 
function vocales(texto){
    texto = texto.toLowerCase();
    let letra = "aeiou"
    let contador = 0;

    for(let i = 0; i < texto.length; i++){
        if(letra.includes(texto[i])){
            contador++
        }
    }
    return contador;
}

console.log(vocales("Hola alancito")) */

//Crea una función en JavaScript que reciba un array de números y devuelva el número más grande.

/* function numeroMayor(arr){
    let mayor = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > mayor){
            mayor = arr[i]
        }
    }

    return mayor;
}

console.log(numeroMayor([1,2,3,4,5,6,7,8,9,10])) */


/* function parImpar(numero){
    if(numero % 2 === 0){
        return "Par"
    } else{
        return "Impar"
    }
}
console.log(parImpar(2));
console.log(parImpar(1)); */


//Dado un array de números, devuelve un nuevo array solo con los números mayores a 5.
/*filtrarMayores([2, 6, 1, 8, 4])
// Resultado: [6, 8]
 */

/* function filtrarMayores(array){
    const mayores = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] > 5){
          mayores.push(array[i])
        }
    }

    return mayores;
}

const resultado  = filtrarMayores(([2, 6, 1, 8, 4]))
console.log(resultado);
 */


//👉 Escribe una función que reciba un array de números y devuelva el número más grande.

/*
maximo([3, 9, 2, 10, 4]) // 10
 */

/* function numMayor(arr){
    let mayor = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > mayor){
            mayor = arr[i]
        }
    }

    return mayor;
}

function maximo(arr){
    let mayor = arr[0];
    
    for(let i = 1 ; i < arr.length; i++){
        if(arr[i] > mayor){
            mayor = arr[i]
        }
    }

    return mayor;
}

console.log(maximo([3, 9, 2, 10, 4]))
 */


 //FizBuzz
 /*
 Imprimir números del 1 al 100:

“Fizz” si es múltiplo de 3

“Buzz” si es múltiplo de 5

“FizzBuzz” si es múltiplo de ambos */

/* function fizzBuzz(){
 for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log("FizBuzz")
    } else if (i % 3 === 0){
     console.log("Fiz")
    }else if (i % 5 === 0){
    console.log("Buzz")
   } else{
      console.log(i)
   }
}}

fizzBuzz()
    */

//Palindromo con FOR
/* function esPalindromo(texto){
    const limpio = texto.toLowerCase().replace(/\s/g,'') //Con esto pasamos todo a minusculas y luego le quitamos los espacios

    for(let i = 0; i < limpio.length / 2; i++){ //Recorremos con for hasta la mitad del string
        if(limpio[i] !== limpio[limpio.length -1 - i]){  //Comparamos la letra de la izquierda con la de la derecha
            return false; //Sino es palindromo salimos

        }

    }

    return true; //Si es palindromo todo coool
}

const resultado = esPalindromo("Ana");
console.log(resultado);
 */


//Creá una función llamada sumarPares que reciba un array de números y devuelva la suma de todos los números pares.

/* function sumarPares(array){
    let suma = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            suma+=array[i]
        }
    }

    return suma;
}

const resultado = sumarPares(([1,2,3,4,5,6,7,8,9,10]))

console.log(resultado) */

//Con filter y reduce{}
/* const sumarPares = (array) =>
    array
.filter(n=> n % 2 === 0)
.reduce((acc,n) => acc + n,0);

const resultado = sumarPares(([1,2,3,4,5,6,7,8,9,10]))

console.log(resultado) */

// Dado un array de números, devuelve un nuevo array solo con los números pares.

/* function numPares(numero){
    const pares = []
    for(let i = 0; i < numero.length; i++){
        if(numero[i] % 2 === 0){
            pares.push(numero[i])
        } 
    }
    return pares;
}
const resultado = numPares(([1,2,3,4,5,6]));
console.log(resultado)
 */

//Function contar letras
/* function contarLetras(texto){
    const resultado = {};
    for(let i = 0 ; i < texto.length; i++){
        const letra = texto[i];

        if(resultado[letra]){
            resultado[letra] = resultado[letra] +1
        } else{
            resultado[letra] = 1;
        }
    }

    return resultado
}

console.log(contarLetras("Hola buenos dias")) */

const contarLetras = texto => 
[...texto].reduce((acc,letra) =>{
    acc[letra] = (acc[letra] || 0) + 1;
    return acc;
},{});

console.log(contarLetras("Hola"))
