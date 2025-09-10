var input = require('fs').readFileSync('./input.txt','utf8')
const [number1, number2] = input.split('\n')
const soma = Number(number1) + Number(number2)
console.log(`SOMA = ${soma}`)
