const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let longitudNumberList = numberList.length
  let sum = 0
  for (let number of numberList){
        sum += number
  }
  let media = sum / longitudNumberList
  return media 
}
console.log(average(numbers))