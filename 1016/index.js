var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = Number(input);

const MINUTES = 60

const timeInMinutes = Math.round((MINUTES * lines)/30)

console.log(`${timeInMinutes} minutos`)
