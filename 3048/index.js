var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let array = lines.map(element=>element.split('\r')[0])
array = array.filter(element=>element != '')

function maxSequence(array){
    let lastNumber = array[0]
    let tot = 1

    array.forEach(element => {
        if(lastNumber!=element){
            lastNumber = element
            tot += 1
        }
    });
    
    return tot
}

console.log(maxSequence(array.slice(1)))