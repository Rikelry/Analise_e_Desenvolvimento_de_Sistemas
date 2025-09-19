const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const [a, b, c, d] = input;

let resultado;

if ((a === c && b !== d) || (a !== c && b === d)) {
    resultado = "V";
} else {
    resultado = "F";
}

console.log(resultado);
