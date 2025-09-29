// Crie um array com 6 números.
// Some todos os números
// Mostre a média

let numeeros: Array<number> = [2, 4, 6, 8, 10, 12];
let soma = 0;

for (let numero of numeeros) {
    soma += numero;
}

let media = soma / numeeros.length;

alert(`Média: ${media}`);