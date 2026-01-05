const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};



function getCapital(country) {
    
    for (let property in capitals){
            if (property === country){
                return capitals[property]
            }
        }   
        throw new Error("El pais que buscas no esta en la lista")
           
}

try{
console.log(getCapital("France"))
}catch(error){
    console.log(error.message)
}
