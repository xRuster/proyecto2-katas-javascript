const pointsList = [32, 54, 21, 64, 75, 43]

const copyPointsList = [...pointsList];

console.log(copyPointsList)


//2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiedToy = {...toy}

console.log(copiedToy)

//3

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const totalPointsList = [...pointsList1,...pointsList2]

console.log(totalPointsList)


//4

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toyImproved = {...toy1,...toyUpdate}
console.log(toyImproved)

// 5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copia = ['rojo','azul','amarillo',...colors];

const updateColors = ['rojo','azul',...colors];

console.log(updateColors)

let colorsModify = []

for (let color of colors){
    if (color === colors[2]){
        continue
    }
    colorsModify.push(color)
}

console.log(colorsModify)

