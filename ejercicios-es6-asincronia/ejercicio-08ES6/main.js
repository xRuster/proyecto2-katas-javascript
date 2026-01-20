URL_API = `https://thronesapi.com/api/v2/Characters`


// fase de conectividad entre el cliente y el servidor

// me traigo todos los personajes con un endpoint que la documentacion de la API me facilita para obtenerlos
// utilizo el fetch "para inyectar la ruta del endpoint donde estan guardados esos datos" si no pongo ningun metodo por defecto es get
// si la respuesta ha sido exitosa  
const getAllCharacterData = async() => {
  try{
    const res = await fetch(URL_API)
    if(!res.ok){
        throw new Error (`Error HTTP: ${res.status}`)
    }
    const charactersData = await res.json()
    return charactersData;
  }catch (error){
    console.log(`Error de la llamada API: ${error}`)
  }
    return null
}
const init = async() => {
    const data = await getAllCharacterData()

    const characterList = document.querySelector("#character-list")

    const select = document.createElement("select")
    select.id = "characters-options"

    const imagen = document.querySelector(".character-image")
    //para cada personaje construyo un elemento que sera una opcion dentro del elemento select.
    for (let character of data){
        const opcion = document.createElement("option")
        opcion.value = character.id
        opcion.textContent = character.fullName
        opcion.dataset.image = character.image;
        select.appendChild(opcion)
        
    }
    // una vez que he creado todas las opciones las situo dentro del select
    characterList.appendChild(select)


    // para poder cambiar el personaje necesitamos añadir un evento que de la interaccion que necesitamos para que cuando seleccione un personaje salga la imagen del personaje correspondiente
    select.addEventListener("change", (event) => {
    const characterSelected = event.target.options[event.target.selectedIndex]
    imagen.src = characterSelected.dataset.image
    })






}

init()





