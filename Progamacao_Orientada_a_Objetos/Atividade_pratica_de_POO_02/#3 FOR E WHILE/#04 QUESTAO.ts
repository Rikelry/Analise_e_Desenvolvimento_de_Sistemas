// Crie um programa que peça um número e exiba a tabuada desse número de 1 a 10.

let numero = Number(prompt("Digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
  alert(`${numero} x ${i} = ${numero * i}`);
}