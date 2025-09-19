const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
const D = parseInt(input);

let pontos;

if (D <= 800) {
    pontos = 1;
} else if (D <= 1400) {
    pontos = 2;
} else {
    pontos = 3;
}

console.log(pontos);