const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

let contadorCamiseta = 0;
for (let element of products){
    
    if(element.includes("Camiseta"))
        contadorCamiseta += 1
        

}
console.log("Cantidad de camisetas: ", contadorCamiseta)