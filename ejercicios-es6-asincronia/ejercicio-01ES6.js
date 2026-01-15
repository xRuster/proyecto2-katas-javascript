//1
const game = {
    title: 'The Last of Us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
}

const title = game.title
const gender = game.gender
const year = game.year 

for (let prop in game){
    console.log(game[prop])
}

console.log("---------------")
//2

const fruits = ['Banana', 'Strawberry', 'Orange'];

const fruit1 = fruits[0]
console.log(fruit1)
const fruit2 = fruits[1]
console.log(fruit2)
const fruit3 = fruits[2]
console.log(fruit3)

console.log("--------------")
//3

const animal1 ={
    name: 'Bengal Tiger',
    race: 'Tiger'
}

const animalFunction = (animal1) => {
   
    return `${animal1.name} ${animal1.race}`
};


console.log(animalFunction(animal1))

console.log("---------------")

//4

const car = {
    name: 'Mazda 6', 
    itv: [2015, 2011, 2020] 
}


const {name, itv} = car;

const [ano1, ano2, ano3] = itv;

const anosItv = [ano1, ano2, ano3];

for (let ano of anosItv){
    console.log(ano)
}