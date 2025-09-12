let input = require('fs').readFileSync('./input.txt','utf8')

const PI = 3.14159
const constante = 4/3
let number = Number(input)

volume = constante * PI * (number ** 3)

console.log(`VOLUME = ${volume.toFixed(3)}`)