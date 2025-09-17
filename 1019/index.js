const input = require('fs').readFileSync('./input.txt','utf8')

let secondsGived = Number(input)

let hour = 0
let minutes = 0
let seconds = 0

while(secondsGived != 0){
    secondsGived -= 1
    seconds += 1
    if(seconds === 60){
        seconds = 0
        minutes += 1
        if(minutes === 60){
            minutes = 0
            hour +=1
        }
    }
}

console.log(`${hour}:${minutes}:${seconds}`)