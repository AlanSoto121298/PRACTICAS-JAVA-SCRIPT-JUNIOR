//Suma en una función con 2 parametros 
function suma(a, b) {

    const resultado = a + b;
    console.log(resultado)

}

suma(20, 30)

//Multiplicar con 2 parametros usando return y guardando en variable

function multiplicacion(a, b) {

    return a * b;

}

const resultado = multiplicacion(5, 5)

console.log(resultado)

//Funcion llamada comparar 2 parametros a,b  si a es mayor  muestra de lo contrario b

function mayorMenor(a, b) {
    if (a > b) {
        return "A ES MAYOR QUE B "
    } else if(a < b ){
        return "B ES MAYOR QUE A "
    } else{
        return "A Y B SON IGUALES"
    }
}

const resultado2 = mayorMenor(50,30);
console.log(resultado2)

