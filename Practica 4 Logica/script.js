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

console.log(vocales("Hola nena"))