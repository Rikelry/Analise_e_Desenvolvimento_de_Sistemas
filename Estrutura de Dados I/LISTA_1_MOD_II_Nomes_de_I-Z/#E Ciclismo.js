const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
const X = parseFloat(input);

const fator = 1.823 * 0.9144;
const metros = X * fator;

console.log(metros.toFixed(2));
