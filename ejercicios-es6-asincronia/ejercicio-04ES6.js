//1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ageGreatesThan18 = ages.filter( age => age > 18)
console.log(ageGreatesThan18)


//2

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pairAges = ages.filter( age => age % 2 === 0)

console.log(pairAges)

//3

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const streamersLOL = streamers.filter( streamer => streamer.gameMorePlayed === "League of Legends")

console.log(streamersLOL)


//4

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersWithU = streamers2.filter(streamer => streamer.name.includes("u"))

console.log(streamersWithU)


//5

const streamersLegends = streamers.filter(streamer =>
  streamer.gameMorePlayed.includes("Legends")
)

const streamersLegendsFormatted = streamersLegends
  .filter(streamer => streamer.age > 35)
  .map(streamer => ({
    ...streamer,
    gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
  }))

console.log(streamersLegendsFormatted)


