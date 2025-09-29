// Peça um número e exiba todos os números pares de 0 até esse número.

let nuumero = Number(prompt("Digite um número:"));

for (let i = 0; i <= nuumero; i++) {
  if (i % 2 === 0) {
    alert(i);
  }
}