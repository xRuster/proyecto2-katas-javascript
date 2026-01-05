const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
    let sumaNumeros = 0; 
    let sumaLetras = 0;
    let sumaTotal = 0;
    let average = 0;
    for(let element of list){
        if (typeof element === "number"){
            sumaNumeros += element
        }
        else if (typeof element === "string"){
            sumaLetras += element.length
        }
    }
    sumaTotal = sumaLetras + sumaNumeros
    average = sumaTotal / list.length
    return average 

} 

console.log(averageWord(mixedElements))