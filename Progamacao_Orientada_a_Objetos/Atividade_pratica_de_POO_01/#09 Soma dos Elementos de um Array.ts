class SomaArray {
    public numeros: number[];
    constructor(numeros: number[]) {
        this.numeros = numeros;
    }
    somar(): number {
        let soma = 0;
        for (let i = 0; i < this.numeros.length; i++) {
            soma += this.numeros[i];
        }
        return soma;
    }
}
let nums9: number[] = [];
for (let i = 0; i < 5; i++) {
    nums9.push(Number(prompt(`Digite o número ${i + 1}:`)));
}
let somaArray = new SomaArray(nums9);
alert(`Soma dos elementos: ${somaArray.somar()}`);
