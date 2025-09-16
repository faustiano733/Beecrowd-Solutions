let input = require('fs').readFileSync('./input.txt','utf8')

const [time, velocity] = input.split('\n')

const liter = (Number(time)*Number(velocity))/12

console.log(liter.toFixed(3))
