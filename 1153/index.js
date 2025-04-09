var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

function fat(x){
    if(x===1){
        return 1
    }{
        return x * fat(x - 1)
    }
    
}
console.log(lines)
//console.log(fat(Number(lines)))