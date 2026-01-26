var input = require('fs').readFileSync("./input.txt", "utf8");

const number = parseFloat(input);
console.log(number)
const intervals = [[0,25],[25.0001,50],[50.0001,75],[75.0001,100]];


function binarySearchMiddleArray(value, array){
    let min = 0;
    let max = array.length - 1;
    while(min <= max){
       const middle = Math.floor((min + max)/2)
       const subArray= array[middle]

       if(isInMiddle(value, subArray)){
           return middle;
        }else if(isLess(value, subArray)){
            max = middle - 1;
        }else if(isGreater(value, subArray)){
            min = middle + 1;
       }
    }
    return null

    
}

function isInMiddle(value, array){
    const min = array[0];
    const max = array[array.length - 1];
    
    if(value >= min && value <= max){
        return true
    }

    return false
}

function isGreater(value, array){
    return value > array[array.length - 1]
}

function isLess(value, array){
    return value < array[0]
}

// const index = binarySearchMiddleArray(number, intervals)
// console.log()
console.log(`${number} === ${25}: ${number > 25}`)