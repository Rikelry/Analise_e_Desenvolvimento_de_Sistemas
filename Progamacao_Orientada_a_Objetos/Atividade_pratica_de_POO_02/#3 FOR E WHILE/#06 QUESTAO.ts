// Crie um programa que continue pedindo números ao usuário até que ele digite 0.
// Mostre a soma de todos os números digitados (exceto o 0).

let sooma = 0;
let nuumeero = Number(prompt("Digite um número (0 para parar):"));

while (nuumeero !== 0) {
  sooma += nuumeero;
  nuumeero = Number(prompt("Digite um número (0 para parar):"));
}

alert("A soma dos números digitados é: " + sooma);