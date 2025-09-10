var input = require('fs').readFileSync('./input.txt','utf8')

let [number1, number2] = input.split('\n')
let soma = (Number(number1)*3.5) + (Number(number2)*7.5)
let media = soma/(3.5 + 7.5)

console.log(`MEDIA = ${media.toFixed(5)}`)