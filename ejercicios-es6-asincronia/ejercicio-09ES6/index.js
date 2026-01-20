URL = `https://pokeapi.co/api/v2/pokemon?limit=151`

const getPokemonsFirstG = async() =>{
  try{
    const res = await fetch(URL)
    if (!res.ok){
        throw new Error (`El estado de HTTP es ${res.status}`)
        
    }
    const data = await res.json()
    return data.results
    
  } catch(error){
    console.log(error)
    return null
  }   
}

const getDetail = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

const init = async () => {
    const pokemonsFG = await getPokemonsFirstG()
    let dataPokemons = []
    
    
    for (let pokemon of pokemonsFG){
        const detail = await getDetail(pokemon.url)
        dataPokemons.push(detail)
    
    }

    
    const randomIndex = Math.floor(Math.random() * dataPokemons.length) 
    const randomPokemon = dataPokemons[randomIndex]

    const imagenPokemon = document.querySelector(".random-image")
    imagenPokemon.src = randomPokemon.sprites.front_default
    
}

init()