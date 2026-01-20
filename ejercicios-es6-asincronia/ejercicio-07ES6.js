const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]

const rpgGame = videogames.filter(videogame => videogame.genders.includes("RPG"))
let rpgLength = rpgGame.length
let mediaRpgGame = rpgGame.reduce((acc,rpgGame) => acc + rpgGame.score / rpgLength,0)

console.log(`Los media de score de los videojuegos RPG es ${mediaRpgGame}`)