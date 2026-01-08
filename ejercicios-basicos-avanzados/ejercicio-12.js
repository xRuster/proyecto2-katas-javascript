const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
    let uniqueArray = [];
    
    for (let element of list) {
        let alreadyExists = false;
        
        for (let item of uniqueArray) {
            if (item === element) {
                alreadyExists = true;
                break;
            }
        }
        
        if (!alreadyExists) {
            uniqueArray.push(element);
        }
    }
    
    return uniqueArray;
}

console.log(removeDuplicates(duplicates));
