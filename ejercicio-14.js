const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  let contadorCode = 0;
  let contadorRepeat = 0;
  let contadorEat = 0;
  let contadorSleep = 0;
  for (let element of list){
    if(element === "code"){
        contadorCode += 1
    }else if(element === "repeat"){
        contadorRepeat += 1
    }else if(element === "eat"){
        contadorEat += 1
    }else if(element === "sleep"){
        contadorSleep += 1
    }
  }
  return `
    Code: ${contadorCode}, 
    Repeat: ${contadorRepeat},
    Eat:  ${contadorEat},
    Sleep: ${contadorSleep}`
                    
  
}

console.log(repeatCounter(words))