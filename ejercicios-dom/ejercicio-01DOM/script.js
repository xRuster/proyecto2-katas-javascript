const showme = document.querySelector(".showme")
console.log(showme)

const pillado = document.querySelector("#pillado")
console.log(pillado)

const parrafo = document.querySelectorAll("p")
console.log(parrafo)

const pokemonClass = document.querySelector(".pokemon")
console.log(pokemonClass)

const testMe = document.querySelectorAll('[data-function="testMe"]')
console.log(testMe)

for (let element of testMe ){
    if(element === testMe[2]){
        console.log(element)
    }
}

