const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, name) {
    let encontrado = false;
    let posicion = "";
    for (let element of nameList){
        
        if (element === name){
            encontrado = true;
            posicion = nameList.indexOf(element)
            break;
        }
        
    }
    return [encontrado, posicion + 1] 


}  

console.log(nameFinder(names,"Tony"))