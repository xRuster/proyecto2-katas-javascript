const divEmpty = document.createElement("div")
document.body.appendChild(divEmpty)

const parrafoDiv = document.createElement("p")
divEmpty.appendChild(parrafoDiv)


const div6p = document.createElement("div")
document.body.appendChild(div6p)

for (let i=0; i<6; i++){
    const parrafo = document.createElement("p")
    div6p.appendChild(parrafo)
}

const p = document.createElement("p")
document.body.appendChild(p)

p.textContent = "Soy dinámico!"


const h2 = document.querySelector(".fn-insert-here")
h2.textContent = "Wubba Lubba dub dub"


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul")
document.body.appendChild(ul)
for (let element of apps){
    const li = document.createElement("li")
    li.textContent = element
    ul.appendChild(li)
}

const fn = document.querySelectorAll(".fn-remove-me")


for (let element of fn){
    element.remove()
}

const divs = document.querySelectorAll("div")

const parrafoMiddle = document.createElement("p")
parrafoMiddle.textContent = "Voy en medio!"

divs[0].after(parrafoMiddle)










const divFn = document.querySelectorAll(".fn-insert-here")



for (let element of divFn){
    const pVoyDentro = document.createElement("p")
    pVoyDentro.textContent = "Voy dentro!"
    element.appendChild(pVoyDentro)
}



