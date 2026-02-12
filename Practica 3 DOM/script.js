//Cambiar parrafo con un boton
/* const parrafo = document.querySelector("#texto");
const boton = document.querySelector("#btn");

boton.addEventListener("click",() =>{
    if(parrafo.textContent === "Cambiar") {
        parrafo.textContent = "Texto cambiadisimo amigo"
        parrafo.style.color = "red"
    } else{
        parrafo.textContent = "Cambiar"
        parrafo.style.color = "blue"

    }
})

 */

//Cambiar texto de visible a invisible y viseversa 

/* const parrafo = document.querySelector("#mensaje");
const boton = document.querySelector("#toggle");

boton.addEventListener("click", () => {
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block"
    } else{
        parrafo.style.display = "none"
    }

}) */

//Contador que sume y reste

/* const parrafo = document.querySelector("#contador");
const botonSuma = document.querySelector("#sumar");
const botonResta = document.querySelector("#restar");
let contador = 0;

botonSuma.addEventListener("click", () => {
    contador++;
    parrafo.textContent = contador


})

botonResta.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        parrafo.textContent = contador

    }
}) */

/* const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#btn");
const lista = document.querySelector("#lista");

boton.addEventListener("click", () => {
    titulo.textContent = "Texto Cambiado con JavaScript";
    titulo.style.color = "blue";
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Item 3";
    lista.appendChild(nuevoLi);

}) */

/*
1️⃣ Al hacer click en el botón Agregar:

Toma el texto del input (#nuevo-item)

Crea un <li> con ese texto

Agrégalo al final de la lista (#lista-compra)

2️⃣ Después de agregarlo, limpia el input (que quede vacío para escribir otro item).

3️⃣ Si el input está vacío y se presiona el botón, no agregar 
nada y mostrar un alert que diga: "Escribe un item primero". */

/* const input = document.querySelector("#nuevo-item");
const boton = document.querySelector("#agregar");
const lista = document.querySelector("#lista-compra");


boton.addEventListener("click",() =>{
    if(input.value.trim() === ""){
        alert("Escribe un item primero");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li)

    input.value = "";
    
}) */


/*
1️⃣ Cada vez que se haga click en el botón, el número en <h2> debe incrementar en 1.
2️⃣ No necesitas alert ni input, solo actualizar el número. */


/* const titulo = document.querySelector("#contador");
const boton = document.querySelector("#click-btn");
let contador = 0;

boton.addEventListener("click", () => {
    contador++;
    titulo.textContent = contador;
    if (contador > 5) {
        titulo.style.color = "red"
    }
})
 */


/*
Crea una página HTML con:

Un input donde el usuario pueda escribir un número.

Un botón que diga "Verificar par/impar".

Un elemento (puede ser un <p> o <div>) donde se muestre el resultado "Par" o "Impar".

👉 Cuando el usuario haga click en el botón, la página debe 
mostrar si el número es par o impar usando JavaScript y DOM. */

/* const input = document.querySelector("#input");
const boton= document.querySelector("#btn");
const resultado = document.querySelector("#resultado")


boton.addEventListener("click",() => {
    const numero = Number(input.value);

    if(isNaN(numero)){
        resultado.textContent = "Por favor , ingresa un número valido"
    } else{
        if(numero % 2 === 0){
            resultado.textContent = "Es par";
        } else{
            resultado.textContent = "Es impar";
        }
    }


});


 */

/*
Crea una página HTML con:

Un input de texto donde el usuario pueda escribir cualquier frase o palabra.

Un botón que diga "Contar Vocales".

Un elemento <p> donde se mostrará cuántas vocales tiene el texto ingresado.

Cuando el usuario haga click en el botón, la página debe mostrar el resultado usando JavaScript y DOM. */

/* const input = document.querySelector("#inputTexto");
const boton = document.querySelector("#btnVocales");
const parrafo = document.querySelector("#resultadoVocales");

function contarVocales(texto){
    texto = texto.toLowerCase();
    let letras = "aeiou"
    let contador = 0;

    for(let i = 0; i < texto.length; i++){
        if(letras.includes(texto[i])){
            contador++
        }
    }

    return contador;
}

boton.addEventListener("click",() =>{
    const texto = inputTexto.value;

    if(texto.trim() === ""){
        parrafo.textContent = "Por favor, escribe algo bro"
    } else{
        const totalVocales = contarVocales(texto);
       parrafo.textContent = `El texto tiene ${totalVocales} vocales`;
    }
}); */


/* const boton = document.querySelector("#btn");
const parrafo= document.querySelector("#parrafo");

boton.addEventListener("click",() =>{
    if( parrafo.textContent === "Cambiame"){
         parrafo.textContent = "Ya te cambie bro"
    } else{

          parrafo.textContent = "Cambiame"
    }
   
}) */