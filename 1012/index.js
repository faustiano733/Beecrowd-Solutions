const input = require('fs').readFileSync('./input.txt','utf8')
let [A,B,C] = input.split(' ')
const PI = 3.14159
A = Number(A)
B = Number(B)
C = Number(C)

const triangulo = ((A * C)/2).toFixed(3)
const circulo = ((C ** 2)*PI).toFixed(3)
const trapezio = (((A + B)*C)/2).toFixed(3)
const quadrado = (B ** 2).toFixed(3)
const retangulo = (A * B).toFixed(3)

console.log(`TRIANGULO: ${triangulo}\nCIRCULO: ${circulo}\nTRAPEZIO: ${trapezio}\nQUADRADO: ${quadrado}\nRETANGULO: ${retangulo}`)