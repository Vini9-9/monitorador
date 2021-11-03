// importando um módulo dentro do Node
const os = require('os');


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
        usado: `${percents} %`
    }
    console.clear();
    console.table(stats);
    console.log(`Dados de : ${data.getHours()} : ${data.getMinutes()} : ${data.getSeconds()}`);
}

var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual a frequência desejada do monitoramento em segundos?\n", function(answer) {
    var resp = answer;
    segundos = parseInt(resp)* 1000;
    console.log("\Os dados serão processados daqui '" + resp + "' segundos");
    leitor.close();
    setInterval(getDadosOS, segundos);
});