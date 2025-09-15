let input = require('fs').readFileSync('./input.txt','utf8')
const [distance, liter] = input.split('\n')
const consumo = (Number(distance)/Number(liter)).toFixed(3)

console.log(`${consumo} km/l`)