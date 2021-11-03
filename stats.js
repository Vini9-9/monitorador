// importando um módulo dentro do Node
const os = require('os');
const log = require('./logger');

function getDadosOS (){
    var data = new Date();
    const { freemem , totalmem } = os;

    // cálculo para MB
    function toMB(number) {
        return (number / 1024 / 1024);
    }

    const total = parseInt(toMB(totalmem()));
    const mem = parseInt(toMB(freemem()));
    const percents = parseInt((mem / total) * 100);

    const stats = {
        livre: `${mem} MB`,
        total: `${total} MB`,
        usado: `${percents}%`
    }
    console.clear();
    console.log("|  DADOS DE ARMAZENAMENTO  |");
    console.table(stats);
    dataMessage = `Dados de : ${data.getHours()} : ${data.getMinutes()} : ${data.getSeconds()}`;
    console.log(dataMessage);

    log(`${dataMessage} -> ${JSON.stringify(stats)}\n`);
}

var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("==================================================");
console.log("|💻 BEM VINDO AO MONITARADOR DE ARMAZENAMENTO 💻|");
console.log("==================================================");

leitor.question("Qual a frequência desejada do monitoramento em segundos?\n", function(answer) {
    var resp = answer;

    log(`Input do usuário :  ${resp}\n`);

    resp = (resp <= 0 | isNaN(resp) ? 1 : resp);
    segundos = parseInt(resp)* 1000;

    log("frequência : " + segundos/1000 + " segundos\n");

    console.log("\Os dados serão processados daqui '" + segundos/1000 + "' segundos");
    leitor.close();
    
    setInterval(getDadosOS, segundos);
});