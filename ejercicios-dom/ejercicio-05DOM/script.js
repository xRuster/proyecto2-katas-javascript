const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];



const album = document.createElement("ul")
album.className = "lista-album"
document.body.appendChild(album)

const h1 = document.createElement("h1")
h1.textContent = "MEJORES ALBUMES"
album.appendChild(h1)

const div = document.createElement("div")
album.appendChild(div)

const changeBgColor = (event) => {
  event.target.classList.toggle("changeBGC")
}


for (let cancion of albums){
    const li = document.createElement("li")
    li.className = "listaElemento"
    li.textContent = cancion
    
    li.addEventListener("click",changeBgColor)

    album.appendChild(li)

}


