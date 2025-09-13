let input = require('fs').readFileSync('./input.txt', 'utf8')
let [a, b, c] = input.split(' ')

const maiorAB = (Number(a) + Number(b) + Math.abs(Number(a) - Number(b)))/2
const maiorABC = (maiorAB + Number(c) + Math.abs(maiorAB - Number(c)))/2

console.log(`${maiorABC} eh o maior`)