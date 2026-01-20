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

const parrafo = document.querySelector("#mensaje");
const boton = document.querySelector("#toggle");

boton.addEventListener("click", () => {
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block"
    } else{
        parrafo.style.display = "none"
    }

})