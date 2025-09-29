// Crie um array com frutas.
// Pergunte ao usuário o nome de uma fruta e diga se ela está ou não no array.

let frutas: Array<string> = ["maçã", "banana", "laranja", "uva", "morango"];
let fruta = prompt("Digite o nome de uma fruta");

switch (fruta) {
    case "maçã":
    case "banana":
    case "laranja":
    case "uva":
    case "morango":
        alert("A fruta está no array!");
        break;
    default:
        alert("A fruta não está no array.");
        break;
}