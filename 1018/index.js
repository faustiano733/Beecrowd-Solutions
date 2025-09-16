const input = require('fs').readFileSync('./input.txt', 'utf8')

const cells = [100, 50, 20, 10, 5, 2 ,1]

let value = Number(input)
console.log(value)
cells.map(cell=>{
    notes = Math.floor(value/cell)
    console.log(`${notes} nota(s) de R$ ${cell},00`)
    value = value - (notes * cell)
})