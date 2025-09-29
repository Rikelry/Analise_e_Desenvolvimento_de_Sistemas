// Crie uma função que receba um array de números e retorne somente os números pares.

function numerosPares(numeros: number[]): number[] {
    return numeros.filter(n => n % 2 === 0);
}
console.log(numerosPares([1, 2, 3, 4, 5, 6]));