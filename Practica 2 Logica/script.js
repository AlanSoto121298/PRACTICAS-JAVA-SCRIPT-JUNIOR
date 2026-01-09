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
