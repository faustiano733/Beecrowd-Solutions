var input = require('fs').readFileSync('./input.txt', 'utf8')
const [A, B, C] = input.split(' ')

const getDescriminant = (a,b,c) =>{
    return ((b)**2) - (4*(c*a))

}

const getBhaskara = (a,b,c)=>{
    const descriminant = getDescriminant(a,b,c)
    const r1 = (-(b) + (descriminant**0.5))/(2*a)
    const r2 = (-(b) - (descriminant**0.5))/(2*a)
    return [r1, r2]
}

function main(){
    if(Number(A) === 0.0  ){
        console.log("Impossivel calcular")
        return
    }

    const descriminant = getDescriminant(Number(A), Number(B), Number(C))

    if(descriminant <= 0){
        console.log("Impossivel calcular")
        return
    }

    const [r1, r2] = getBhaskara(Number(A), Number(B), Number(C))

    console.log(`R1 = ${(r1).toFixed(5)}`)
    console.log(`R2 = ${(r2).toFixed(5)}`)
    return  
}

main()