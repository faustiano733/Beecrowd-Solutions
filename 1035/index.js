var input = require('fs').readFileSync('./input.txt', 'utf8');
let [A, B, C, D] = input.split(' ').map(number=>Number(number));

if(B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && (A % 2) === 0 ){
    console.log("Valores aceitos")
}else{
    console.log("Valores nao aceitos")
}