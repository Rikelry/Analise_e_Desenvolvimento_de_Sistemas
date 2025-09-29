// Peça ao usuário para digitar 5 números.
// Some todos eles
// Mostre o resultado final

let soma = 0;

for (let i = 1; i <= 5; i++) {
  let numero = Number(prompt(`Digite o ${i}º número:`));
  soma += numero;
}

alert("A soma dos números é: " + soma);