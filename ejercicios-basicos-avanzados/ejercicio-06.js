//1.1
const array = [1,2,3,4,5,6,7,8,9]

for( let i=0;i<array.length;i++){
    console.log(array[i])
}

console.log("------------------")
//1.2
const array2 = [1,2,3,4,5,6,7,8,9]

for( let i=0;i<array.length;i++){
    let iterator = array2[i]
    if (iterator%2 === 0)
        console.log(iterator)
}

//1.3
for (let i=0; i<10; i++){
    let numero = i
    if(numero < 9){
        console.log("Intentando dormir 🐑")
    }
    else{
        console.log("¡Dormido!'")
    }

}    



