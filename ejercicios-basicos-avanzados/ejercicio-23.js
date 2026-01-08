const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

let peliculasPequeña = [];
let peliculasMedianas = [];
let peliculasGrandes = [];

for (let movie of movies){
    if (movie.durationInMinutes < 100){
        peliculasPequeña.push(movie)
    }
    else if(movie.durationInMinutes > 100 && movie.durationInMinutes < 200){
        peliculasMedianas.push(movie)
    }    
    else{
        peliculasGrandes.push(movie)
    }
}

let nombresPequeñas = peliculasPequeña
    .map(movie => movie.name)
    .join(', ')

let nombresMedianas = peliculasMedianas
    .map(movie => movie.name)
    .join(', ')    

let nombresGrandes = peliculasGrandes
    .map(movie => movie.name)
    .join(', ')   
    
console.log(`Peliculas pequeñas: ${nombresPequeñas}\nPeliculas medianas: ${nombresMedianas}\nPeliculas grandes: ${nombresGrandes}`)
