// Receba um número via prompt e conte quantos dígitos ele tem.

let numeroo = Number(prompt("Digite um número:"));
let qtdDigitos = 0;

while (numeroo > 0) {
  numeroo = (numeroo - (numeroo % 10)) / 10;
  qtdDigitos++;
}

alert("Esse número tem " + qtdDigitos + " dígitos.");