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

Extra: función que devuelva "fizz" si divisible por 3, "buzz" si divisible por 5, "fizzbuzz" 
si ambos, y el número si ninguno. */

/*
Día 2 – Loops y sumas

Objetivo: Pensamiento secuencial.

Ejercicios:

Sumar todos los números del 1 al n.

Crear un array con los primeros n números pares.

Sumar solo los números impares de 1 a n.

Tips:

Escribí pseudo-código antes del for o while.

Observá patrones, no solo copiés sintaxis. */


/*
Día 3 – Arrays y manipulación básica

Objetivo: Manejar colecciones de datos.

Ejercicios:

Encontrar el número mayor en un array.

Contar cuántos elementos son pares.

Invertir un array sin usar métodos integrados.

Tips:

Recorrer arrays con for o for...of.

Pensar en cada paso: “qué quiero hacer con este elemento”. */

/*
Día 4 – Strings y lógica

Objetivo: Analizar cadenas y patrones.

Ejercicios:

Contar cuántas vocales hay en un string.

Ver si un string es un palíndromo (igual al revés).

Reemplazar todas las a por * en un string.

Tips:

Piensa carácter por carácter.

Esto entrena atención a detalle, clave para lógica. */

/*Día 5 – Secuencias y Fibonacci

Objetivo: Pensar en lógica iterativa + secuencias.

Ejercicios:

Generar los primeros n números de Fibonacci.

Generar una secuencia donde cada número es la suma de los dos anteriores empezando en [2, 3].

Bonus: función que devuelva solo el último número de Fibonacci para ahorrar memoria.

Tips:

Escribí primero cómo se genera cada número paso a paso.

Esto fortalece pensamiento algorítmico. */

/*
Día 6 – Mini desafíos combinados

Objetivo: Pensamiento más abstracto.

Ejercicios:

Dado un array de números, devolver un array solo con los números pares multiplicados por 2.

Dado un string, devolver cuántas veces aparece cada letra.

Dado un array de strings, devolver un array solo con los palíndromos.

Tips:

Descomponé el problema: primero filtros, luego transformación.

Esto simula lo que hace un programador en la vida real. */

/* Tienes tres cajas cerradas:

Una contiene solo manzanas

Una contiene solo naranjas

Una contiene mezcla de manzanas y naranjas

Cada caja está mal etiquetada, es decir, ninguna etiqueta es correcta.

Solo puedes sacar una fruta de una caja (sin mirar dentro).
¿Puedes re-etiquetar correctamente todas las cajas? ¿Cómo lo harías?

🔹 Claves del ejercicio

No se trata de código, se trata de razonamiento lógico

Hay un truco en la información disponible

La pregunta clave: “¿De qué caja saco la fruta?” */

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
console.log(resultado);