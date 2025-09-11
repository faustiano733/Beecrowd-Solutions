let input = require('fs').readFileSync('./input.txt', 'utf8')
let [, salary, sells] = input.split('\n')
let bonus = Number(sells) * 0.15

console.log(`TOTAL = R$ ${(Number(salary) + bonus).toFixed(2)}`)