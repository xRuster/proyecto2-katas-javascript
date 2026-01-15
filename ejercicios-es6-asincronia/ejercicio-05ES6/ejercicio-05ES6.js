//1

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const inputFilterStreamer = document.querySelector('[data-function="toFilterStreamers"]')
const resultados = document.querySelector('#results')


const toFilterStreamers = (text) => {
	results.innerHTML = ""
	
    const filtroNombre = streamers.filter(streamer => streamer.name.includes(text))
	for (let filtro of filtroNombre){
		const p = document.createElement("p")
		p.innerHTML = filtro.name
		document.body.appendChild(p)
		
	}
	
}
inputFilterStreamer.addEventListener('input',  (ev) => {
	
	const value = ev.target.value
	
	toFilterStreamers(value)
	
		
})


