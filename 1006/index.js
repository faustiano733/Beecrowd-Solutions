var input = require('fs').readFileSync('./input.txt','utf8')
const [A, B, C] = input.split('\n')
let soma = (Number(A)*2) + (Number(B)*3) + (Number(C)*5)
let media = soma/(2+3+5)

console.log(`MEDIA = ${media.toFixed(1)}`)