const input = require('fs').readFileSync('./input.txt', 'utf8')
const [axle1, axle2] = input.split('\n')

const [x1, y1] = axle1.split(' ')
const [x2, y2] = axle2.split(' ')

const x = (Number(x2) - Number(x1)) ** 2
const y = (Number(y2) - Number(y1)) ** 2

const square = Math.sqrt(x + y)

console.log(square.toFixed(4))