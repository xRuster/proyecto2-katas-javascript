

function rollDice(numeroCaras){
    
        
    resultado = Math.floor(Math.random() * numeroCaras) + 1

    return resultado
    }


console.log(rollDice(5))