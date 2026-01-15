//DESTRUCTURING

/*const fruits = ['apple', 'banana', 'cherry'];

// Asignación tradicional
const firstFruit = fruits[0];
const secondFruit = fruits[1];

// Usando desestructuración
const [first, second, third] = fruits;

console.log(first);  // Output: 'apple'
console.log(second); // Output: 'banana'
console.log(third);  // Output: 'cherry'


//DESTRUCTURING DE OBJETOS

const person = {
  name: 'John Doe',
  age: 30, 
  profession: 'Developer'
};

// Asignación tradicional
const personName = person.name;
const personAge = person.age;

// Usando desestructuración
const { name, age, profession } = person;

console.log(name);       // Output: 'John Doe'
console.log(age);        // Output: 30
console.log(profession); // Output: 'Developer'



//VALORES POR DEFECTO

const person = {
  name: 'Jane Doe'
};

// Usando desestructuración con valores por defecto
const { name, age = 25 } = person;

console.log(name); // Output: 'Jane Doe'
console.log(age);  // Output: 25 (valor por defecto)



//DESTRUCTURING ANIDADO

const user = {
  id: 101,
  info: {
    name: 'Alice',
    location: {
      city: 'Wonderland',
      country: 'Fantasy'
    }
  }
};

// Usando desestructuración anidada
const { info: { name, location: { city, country } } } = user;

console.log(name);    // Output: 'Alice'
console.log(city);    // Output: 'Wonderland'
console.log(country); // Output: 'Fantasy'


//INTERCAMBIO DE VARIABLES

let a = 1;
let b = 2;

// Usando desestructuración

[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1


//SPREAD OPERATOR

const avengers = ['Iron Man', 'Thor', 'Hulk'];
const guardians = ['Star-Lord', 'Gamora', 'Drax'];

const combinedTeam = [...avengers, ...guardians];
console.log(combinedTeam); // Output: ['Iron Man', 'Thor', 'Hulk', 'Star-Lord', 'Gamora', 'Drax']


//Rest Parameter

const assembleAvengers = (...heroes) => {
  return heroes.join(', ');
}

console.log(assembleAvengers('Iron Man', 'Thor', 'Hulk', 'Black Widow')); // Output: Iron Man, Thor, Hulk, Black Widow


// REST PARAMETER EN FUNCIONES 

const assembleAvengers = (leader,...members) =>{
    console.log(`Leader:${leader}`)
    console.log(`Members:${members.join(', ')}`)
}



//CASOS DE USO COMBINADO

const droids = ['R2-D2', 'C-3PO', 'BB-8'];

function repairDroids(repairman, ...droids) {
  return `Repairman ${repairman} will fix: ${droids.join(', ')}`;
}

console.log(repairDroids('Anakin', ...droids)); // Output: Repairman Anakin will fix: R2-D2, C-3PO, BB-8
*/