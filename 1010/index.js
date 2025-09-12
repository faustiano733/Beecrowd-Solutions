let input = require('fs').readFileSync('./input.txt','utf8')
let [product1Data,product2Data] = input.split('\n')

let [,quantity1,price1] = product1Data.split(' ')
let [,quantity2,price2] = product2Data.split(' ')

let total = (Number(quantity1)*Number(price1)) + (Number(quantity2)*Number(price2))

console.log(`VALOR A PAGAR = R$ ${total.toFixed(2)}`)