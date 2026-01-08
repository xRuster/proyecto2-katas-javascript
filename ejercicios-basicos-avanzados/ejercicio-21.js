const users = [
    {name: "Tony", 
    years: 43 },
    {name: "Peter", 
    years: 18 },
    {name: "Natasha", 
    years: 14 },
    {name: "Bruce", 
    years: 32 },
    {name: "Khamala", 
    years: 16 },
];
let mayoresEdad = [];
let menoresEdad = [];
for (let user of users){
    if (user.years < 18){
        menoresEdad.push(user)
        
    }else{
        mayoresEdad.push(user)
        
    }
}

let nombresMenores = menoresEdad
    .map(user => user.name)
    .join(', ')

let nombreMayores = mayoresEdad
    .map(user=> user.name)
    .join(', ')


console.log("Usuarios menores de edad:",nombresMenores)
console.log("Usuarios mayores de edad:",nombreMayores)