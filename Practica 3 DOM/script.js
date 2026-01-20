//Cambiar parrafo con un boton
const parrafo = document.querySelector("#texto");
const boton = document.querySelector("#btn");

boton.addEventListener("click",() =>{
    parrafo.textContent = "Texto cambiadisimo amigo"
})