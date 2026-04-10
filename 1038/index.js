const input = require('fs').readFileSync('./input.txt', 'utf-8');

const products = {
    '1': 4.00,
    "2": 4.50,
    '3': 5.00,
    '4': 2.00,
    '5': 1.50   
}
const [code, quantity] = input.split(' ')
const price = products[code]
const total = price * Number(quantity)

console.log(`Total: R$ ${total.toFixed(2)}`)