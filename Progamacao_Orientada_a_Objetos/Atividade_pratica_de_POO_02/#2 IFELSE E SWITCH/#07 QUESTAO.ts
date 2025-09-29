// Crie um programa que receba dois números e mostre:
// Maior número: X" se um deles for maior
// "Os números são iguais" se forem iguais

let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

if (n1 > n2) {
  alert("Maior número: " + n1);
} else if (n2 > n1) {
  alert("Maior número: " + n2);
} else {
  alert("Os números são iguais");
}