//Cambiar parrafo con un boton
const parrafo = document.querySelector("#texto");
const boton = document.querySelector("#btn");

boton.addEventListener("click",() =>{
    if(parrafo.textContent === "Cambiar") {
        parrafo.textContent = "Texto cambiadisimo amigo"
        parrafo.style.color = "red"
    } else{
        parrafo.textContent = "Texto cambiadisimo amigo"
        parrafo.textContent = "Cambiar"
        parrafo.style.color = "blue"

    }
})

