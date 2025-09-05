import pegaArquivo from "./app.js";
import validaURL from "./http-validacao.js";
import chalk from "chalk";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminho[3] === "validar"){
        console.log(chalk.bgGreen.black('Lista de links'), validaURL(resultado));
    } else {
        console.log(chalk.bgRed.black('Lista de links'), resultado);
    }
}
//console.log(pegaArquivo(caminho[2]));
processaTexto(caminho);

