const args = process.argv.slice(2);
const path = require('path');
const { convertProcessSignalToExitCode } = require('util');
const fs = require('fs').promises;
const exists = require('fs').existsSync;
const [action, exercise, optionalArg] =  args

async function createExercise(exercise, extension = 'js'){
    const dirPath = path.resolve(`${exercise}`);
    const indexPath = path.resolve(`${exercise}/index.${extension}`);
    const introductionPath = path.resolve(`${exercise}/introduction.md`);
    const inputPath = path.resolve(`${exercise}/input.txt`);
    
    try{
        // const areExercise = await fs.existsSync()
        if(exists(dirPath)) throw new Error("Exercicio já existe")
        await fs.mkdir(dirPath)
        await fs.writeFile(indexPath,' ')
        await fs.writeFile(introductionPath,' ')
        await fs.writeFile(inputPath,' ')
    }catch(erro){
        console.log('alguma coisa correu mal')
        console.log(erro.message)
        process.exit()

    }
    
}

switch(action.toLowerCase()){
    case 'create:exercise':
        console.log(`Criando exercicio ${exercise}`)
        createExercise(exercise)

        break;
    default:
        console.log("argumento invalido digite --help ver os argumentos")
        process.exit()
        break;
}

console.log("exercicio Pronto")
