// importando um módulo dentro do Node
const os = require('os');

console.log(os.platform());

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

console.table(stats);