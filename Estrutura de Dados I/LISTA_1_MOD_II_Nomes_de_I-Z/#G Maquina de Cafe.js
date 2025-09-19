const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const [A1, A2, A3] = input;

function custo(pos) {
    return A1 * 2 * Math.abs(1 - pos) +
        A2 * 2 * Math.abs(2 - pos) +
        A3 * 2 * Math.abs(3 - pos);
}

const resposta = Math.min(custo(1), custo(2), custo(3));
console.log(resposta);