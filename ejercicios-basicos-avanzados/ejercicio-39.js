const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];


let conteoFavoriteSounds = {
    
    Waves: 0,
    Rain: 0,
    FireCamp: 0,
    Train: 0,
    Shower: 0,
    Wind: 0,
}
for (let user of users){
    for(let propiedad in user.favoritesSounds){
        if( propiedad === "waves"){
            conteoFavoriteSounds.Waves += 1
        }else if(propiedad === "rain"){
            conteoFavoriteSounds.Rain += 1
        }else if(propiedad === "firecamp"){
            conteoFavoriteSounds.FireCamp +=1
        }else if(propiedad === "train"){
            conteoFavoriteSounds.Train += 1
        }else if(propiedad === "shower"){
            conteoFavoriteSounds.Shower += 1
        }else if(propiedad === "wind"){
            conteoFavoriteSounds.Wind += 1
        }
        
    }    
}


for (let key in conteoFavoriteSounds){
    
        console.log(`El sonido ${key} tiene ${conteoFavoriteSounds[key]} favoritos`)
        
}