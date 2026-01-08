const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array,index1,index2){
    let ind1 = array.indexOf(index1)
    let ind2 = array.indexOf(index2)
    if(ind1 >= 0 && ind2 >= 0){
        const auxiliar = array[ind1]
        array[ind1] = array[ind2]
        array[ind2] = auxiliar
    }
    
    return array
}

console.log(swap(fantasticFour,"Mr. Fantástico","La antorcha humana"))
