// Crie um array com 5 números e exiba somente os números pares.

let nuumeros: Array<number> = [1, 2, 3, 4, 5];

for (let i = 0; i < nuumeros.length; i++) {
    if (nuumeros[i] % 2 === 0) {
        console.log(nuumeros[i]);
    }
}