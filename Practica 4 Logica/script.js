//1-Funcion que reciba un string y lo devuelve al reves

/* function reverseString(str){
    let reversed = " ";
    
    for(let i = str.length -1; i >= 0; i--){
        reversed+=str[i]
    }

    return reversed
}

console.log(reverseString("Hola")); */

//2- Usando reversed con Split reverse y join

/* function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("Hola"));  */

//3- Escribe una funcion que recibe un array de numeros y devuelve un nuevo array con solo numeros unicos(No duplicados)

/* function unicos(array){
    const resultado = [];

    for(let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado
}

console.log(unicos([1,2,2,3,3,4,5,6,7,9,9,9])) */

/*4-Escribe una funcion que reciba un array de numeros y devuelve un nuevo array donde cada numero
aparece tantas veces como su valor  */

/* function repetir(arr){
    const resultado = [];

    for(let i = 0; i < arr.length; i++){
        const num = arr[i];

        for(let j = 0; j < num; j++){
            resultado.push(num)
        }
    }

    return resultado;
}

console.log(repetir([1,3,2,5])) */


//Funcion que regresa la cantidad de Vocales

/* function vocales(texto){
    texto=texto.toLowerCase();
    let letra = "aeiou";
    let contador = 0;

    for(let i = 0; i < texto.length; i++){
        if(letra.includes(texto[i])){
            contador++
        }
    }
    return contador;
}

console.log(vocales("Hola buenos dias")) */



//Pares con FILTER
/* const filtrarPares= arr => arr.filter(n=> n % 2 === 0)
const resultado = filtrarPares([1,2,3,4,5,6,7,8,9,10])
console.log(resultado) */


//FizBuzz
/* for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log("FizzBuzz")
    }else if(i % 3 === 0){
        console.log("Fizz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else{
        console.log(i)
    }
} */


/* function usersAge(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            console.log(users[i]);
        }
    }
}

function usersActive(users){
    for(let i = 0; i < users.length; i++){
        if(users[i].active === true){
             console.log(users[i]);
        }
    }
}

function usersAge2(users){
    for(let i = 0 ; i < users.length; i++){
        if(users[i].age < 18){
            console.log(users[i])
        }
    }
}

usersAge([
  { id: 1, name: "Ana", age: 22, active: true },
  { id: 2, name: "Luis", age: 17, active: false },
  { id: 3, name: "Carlos", age: 28, active: true },
  { id: 4, name: "Marta", age: 15, active: true },
  { id: 5, name: "Sofía", age: 34, active: false }
]);
usersAge2([
  { id: 1, name: "Ana", age: 22, active: true },
  { id: 2, name: "Luis", age: 17, active: false },
  { id: 3, name: "Carlos", age: 28, active: true },
  { id: 4, name: "Marta", age: 15, active: true },
  { id: 5, name: "Sofía", age: 34, active: false }
]);

usersActive([
  { id: 1, name: "Ana", age: 22, active: true },
  { id: 2, name: "Luis", age: 17, active: false },
  { id: 3, name: "Carlos", age: 28, active: true },
  { id: 4, name: "Marta", age: 15, active: true },
  { id: 5, name: "Sofía", age: 34, active: false }
]);
 */


function numPar(array){
    const pares = [];

    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        pares.push(array[i])
      }
    }
    return pares;
}

const resultado = numPar ([1,2,3,4,5,6,7,8,9,10])
console.log(resultado)