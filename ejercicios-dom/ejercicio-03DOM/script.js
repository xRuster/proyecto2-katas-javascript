
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul")
document.body.appendChild(ul)

for (let country of countries){
    let li = document.createElement("li")
    li.textContent = country
    ul.appendChild(li)
    console.log(li)
}

const removeMe = document.querySelector(".fn-remove-me")
removeMe.remove()

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const divPrintHere = document.querySelector('[data-function="printHere"]')
const ulCars = document.createElement("ul")

divPrintHere.appendChild(ulCars)

for (let car of cars){
    const liCar = document.createElement("li")
    liCar.textContent = car
    ulCars.appendChild(liCar)
    console.log(liCar)
}