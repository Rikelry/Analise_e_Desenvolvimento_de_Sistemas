const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
//.trim - Remove espaços em branco
//.split - Divide a string em partes
//.map - Converte cada elemento do array de string para número

const A = input[0];
const B = input[1];

const media = Math.floor((A * 4 + B * 6) / 10);

console.log(media);
