const fs = require("fs");

const tokens = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const L = tokens[0];
const C = tokens[1];

const tipo1 = 2 * L * C - L - C + 1;
const tipo2 = 2 * L + 2 * C - 4;

console.log(tipo1);
console.log(tipo2);
