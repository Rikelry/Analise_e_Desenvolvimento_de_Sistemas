// Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somarArray(n: Array<number>): number {
    let soma: number = 0;
    for (let i = 0; i < n.length; i++) {
        soma += n[i];
    }
    return soma;
}
alert(somarArray([1, 2, 3, 4]));