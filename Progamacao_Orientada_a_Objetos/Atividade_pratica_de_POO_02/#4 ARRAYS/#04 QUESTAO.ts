// Peça ao usuário 5 números e armazene-os em um array.
// Em seguida, mostre o maior número.

let nummeros: Array<number> = [];

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Digite um número:"));
    nummeros.push(numero);
}

let maior = nummeros[0];

for (let i = 1; i < nummeros.length; i++) {
    if (nummeros[i] > maior) {
        maior = nummeros[i];
    }
}

alert("O maior número é: " + maior);