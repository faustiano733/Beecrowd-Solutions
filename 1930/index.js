var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');
const intLines = lines.map(line=>parseInt(line))

function somaTomada(array){
    if(array.length != 1){
        return (array[0] - 1) + somaTomada(array.slice(1))
    }
    return array[0]
}

console.log(somaTomada(intLines))