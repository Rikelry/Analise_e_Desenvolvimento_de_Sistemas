// Escreva um código que pergunte ao usuário uma letra.
// Se for "a", "e", "i", "o" ou "u", exiba "Vogal".
// Caso contrário, "Consoante".

let opcao = prompt("Digite uma letra:");

if (opcao === "a" || opcao === "e" || opcao === "i" || opcao === "o" || opcao === "u") {
  alert("Vogal");
} else {
  alert("Consoante");
}