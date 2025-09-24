const input = require('fs').readFileSync('./input.txt','utf8')

let value = Number(input)

const notes = [100, 50, 20,10, 5, 2]

const coins = [1.00, 0.50,0.25, 0.10,0.05,0.01]

console.log('NOTAS:')
notes.map(note=>{
    let manyNotes = Math.floor(value/note)
    console.log(`${manyNotes} nota(s) de R$ ${note.toFixed(2)}`)

    value -= manyNotes * note
    
})

console.log('MOEDAS:')

coins.map(coin=>{
    let manyCoins = Math.floor(value/coin)
    console.log(`${manyCoins} moeda(s) de R$ ${coin.toFixed(2)}`)
    value = ((value*100) - ((manyCoins * coin)*100))/100
})
