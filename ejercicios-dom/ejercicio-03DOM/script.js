
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


const countriess = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


for (let country of countriess){
    for(let element in country){
        const divCountry = document.createElement("div")
        divCountry.setAttribute("class","divCountry")
        document.body.appendChild(divCountry)
        const h4 = document.createElement("h4")
        h4.textContent = country.title
        divCountry.appendChild(h4)
        const img = document.createElement("img")
        img.src = country.imgUrl
        h4.appendChild(img)
        console.log(element)
    }    
}


const removeBottom = document.createElement("button")
removeBottom.textContent = "Eliminar último"
document.body.appendChild(removeBottom)

const divCountries = document.querySelectorAll(".divCountry")
const removeLastElement = () => {
    for (let div of divCountries){
        
        if (div === divCountries[divCountries.length -1]){
            div.remove()
            
        }
        
       
    }
    
}
removeBottom.addEventListener('click',removeLastElement)


for(let div1 of divCountries){
    const removeIButton = document.createElement("button")
    removeIButton.textContent = "Eliminar div"
    div1.appendChild(removeIButton) 
}




const removeDiv = () => {
    for (div of divCountries){
        if (div)
    }
}


removeIButton.addEventListener('click',removeDiv)
    
