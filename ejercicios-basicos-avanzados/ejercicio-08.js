const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
  let longestWorld = "";
  for (let element of stringList){
   
    let palabraDivididaChar = element.split("")
    let longitudCaracteres = palabraDivididaChar.length

    if (longitudCaracteres > longestWorld.length){
        longestWorld = element
    }
        
    else {
        continue
    }    
  } return longestWorld
} 
console.log(findLongestWord(avengers))