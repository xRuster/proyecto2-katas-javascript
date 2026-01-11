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

const imgBg = document.createElement("img")
imgBg.className = "img-bg"
imgBg.src ="../ejercicio-05DOM/media/gettyimages-523347032-612x612.jpg"
document.body.appendChild(imgBg)

const div = document.createElement("div")
album.appendChild(div)

const changeBgColor = (event) => {
  event.target.classList.toggle("changeBGC")
}


for (let cancion of albums){
    
    let li = document.createElement("li")
    li.className = "listaElemento"
    li.textContent = cancion
    li.dataset.nombre = cancion
    
    //li.addEventListener("click",changeBgColor)

    album.appendChild(li)


}




const changeLetterColor = (event) => {
    event.target.classList.toggle("colorClassTitle")
}

h1.addEventListener("click",changeLetterColor)



const mostrarImgDisco = (event) => {
  event.target.classList.toggle("img-desplegar")
  if(event.target.classList.contains("img-desplegar")){
    event.target.textContent = ""
  }else{
    event.target.textContent = event.target.dataset.nombre
    
  }
}


document.querySelector("li").addEventListener("click",mostrarImgDisco)

