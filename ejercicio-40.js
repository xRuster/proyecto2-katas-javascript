

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
    let indice;
    for(let character of array){
        if (character === text){
            indice = array.indexOf(character)
        }else{
            throw new Error ("El texto que estas buscando no corresponde a ningun elemento de la lista")
        }
    }
    return indice + 1
}
try{
console.log(findArrayIndex(mainCharacters,"caca"))
}catch (error){
    console.log(error.message)
}