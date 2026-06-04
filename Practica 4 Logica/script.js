//Funcion que reciba string al reves


/* function reverseString(str){
    let reversed = "";
    for(let i = str.length -1; i >= 0; i--){
        reversed+=str[i]
    }

    return reversed;
}

console.log(reverseString("Hola alan")) */



//ARRAY DE NUMEROS Y RECIBA UNO NORMAL

/* function unicos(array){
    const resultado = [];
    for ( let i = 0; i < array.length; i++){
        if(!resultado.includes(array[i])){
            resultado.push(array[i])
        }
    }

    return resultado
}

console.log(unicos([1,2,2,3,3,4,5,5,5,5,7]))
 */

//Suma numeros

/* const sumaArray = numeros =>
    numeros.reduce((acc,n) => acc + n ,0);
     console.log(sumaArray([1,2,3,4,5])) */





//Numeros pa repetir

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


console.log(repetir([1,2,2,3,4,5,5,5,5,5,])) */


//Numeros PARES
/* 
function filtrarPares(arr){
    const pares = [];

    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            pares.push(arr[i])
        }
    }

    return pares;
}

const resultado = filtrarPares ([1,2,3,4,5,6,7,8,9,10]);
console.log(resultado) */

//Pares con Filter

const filtrarPares = arr => arr.filter(n=> n % 2 === 0);
const resultado = filtrarPares ([1,2,3,4,5,6,7,8,9,10]);
console.log(resultado)