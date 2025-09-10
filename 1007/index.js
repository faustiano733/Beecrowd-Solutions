let input = require('fs').readFileSync('./input.txt', 'utf8')
let [A,B,C,D] = (input.split('\n'))

let diferenca = (Number(A)*Number(B)) - (Number(C)*Number(D))

console.log(`DIFERENCA = ${diferenca}`)