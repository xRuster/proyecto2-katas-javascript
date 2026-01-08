const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const clasificadosGenero = {
    metal : [],
    rock : [],
    pop : [],
    country : [],
    grunge : [],
    pop : [],
    rock : [],
}


for (let track of tracks){
  switch(track.genre){  
    case "Metal":
        clasificadosGenero["metal"].push(track)
        break
    case "Rock":
        clasificadosGenero["rock"].push(track)
        break
    case "Pop":
        clasificadosGenero["pop"].push(track)
        break
    case "Country": 
        clasificadosGenero["country"].push(track)
        break
    case "Grunge":
        clasificadosGenero["grunge"].push(track)
  }
}

console.log(clasificadosGenero)
