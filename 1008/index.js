let input = require('fs').readFileSync('./input.txt','utf8')
let [number, workedHours, payForHour] = input.split('\n')

console.log(`NUMBER = ${number}\nSALARY = U$ ${(Number(workedHours) * Number(payForHour)).toFixed(2)}`)