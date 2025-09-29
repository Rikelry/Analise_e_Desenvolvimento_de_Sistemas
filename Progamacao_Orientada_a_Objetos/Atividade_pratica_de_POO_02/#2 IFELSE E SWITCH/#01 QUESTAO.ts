// Peça ao usuário para digitar um número.
// Se o número for positivo, exiba "Positivo".
// Se for negativo, exiba "Negativo".
// Caso contrário, exiba "Zero".

let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
  alert("Positivo");
} else if (numero < 0) {
  alert("Negativo");
} else {
  alert("Zero");
}