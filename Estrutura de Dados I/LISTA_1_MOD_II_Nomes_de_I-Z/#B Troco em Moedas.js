const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
let C = parseInt(input);

const moedas = [100, 50, 25, 10, 5, 1];
let qtd = [];
let total = 0;

for (let i = 0; i < moedas.length; i++) {
    let valor = moedas[i];
    let usar = Math.floor(C / valor);
    qtd.push(usar);
    total += usar;
    C -= usar * valor;
}

console.log(total);
for (let i = 0; i < qtd.length; i++) {
    console.log(qtd[i]);
}
