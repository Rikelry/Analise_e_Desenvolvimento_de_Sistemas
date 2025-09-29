// Faça um programa que receba uma lista de números e mostre-os em ordem crescente.

let numerros: Array<number> = [];
for (let i = 0; i < 5; i++) {
    numerros.push(Number(prompt("Digite um número:")));
}

numerros.sort((a, b) => a - b);

for (let numero of numerros) {
    alert(numero);
}