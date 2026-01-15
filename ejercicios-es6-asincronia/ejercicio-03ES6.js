//1

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNames = users.map(user => user.name)
console.log(usersNames)


//2

let users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const newUsers = users1.map(user => {
  if (user.name.startsWith("A")) {
    return {
      ...user,
      name: "Anacleto"
    };
  }
  return user;
});

console.log(newUsers);

//3

const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];



const citiesVisited = cities.filter(city => city.isVisited === true)
console.log(citiesVisited)


const citiesVisitedFinal = []

for (city of cities){
    if (citiesVisited.includes(city)){
        city.name = `${city.name} (Visitado)`
        citiesVisitedFinal.push(city)
    }else{
        
        citiesVisitedFinal.push(city)
    }
    
}

console.log(citiesVisitedFinal)


//4 

