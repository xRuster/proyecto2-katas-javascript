const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'hfadnvilandv', power: 'teleportation'}
];

function findMutantByPower(mutants, power) {
  let encontrado = false;
  let poderUnico = 0;
  let mensajeFalse = "El poder no es unico"
  let mensajeTrue = "El poder es unico"

  for (let mutant of mutants){
    if( mutant.power === power){
        encontrado = true
        poderUnico += 1

    }if (poderUnico > 1){
        encontrado = false
    }
  }
  if (encontrado === false){
    return mensajeFalse
  }else{
  return mensajeTrue
  }
}

console.log(findMutantByPower(mutants,"magnetism"))