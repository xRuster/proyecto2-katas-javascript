/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click*/

const btnToClick = document.querySelector("#btnToClick")
btnToClick.textContent ="Pulsame para obtener info"
btnToClick.addEventListener('click', (event) =>{
    console.log(event)
})


const inputs = document.querySelectorAll("input")

for (let input of inputs){
    input.addEventListener("focus", (event) => {
        console.log(event.target.value)
    })
}

for (let input of inputs){
    input.addEventListener("input", (event) =>{
        console.log(event.target.value)
    })
}

