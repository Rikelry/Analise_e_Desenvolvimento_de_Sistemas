class MaiorNumero {
    public numeros: number[];
    constructor(numeros: number[]) {
        this.numeros = numeros;
    }
    encontrarMaior(): number {
        let maior = this.numeros[0];
        for (let i = 1; i < this.numeros.length; i++) {
            if (this.numeros[i] > maior) {
                maior = this.numeros[i];
            }
        }
        return maior;
    }
}
let nums: number[] = [];
for (let i = 0; i < 5; i++) {
    nums.push(Number(prompt(`Digite o número ${i + 1}:`)));
}
let maiorNumero = new MaiorNumero(nums);
alert(`Maior número: ${maiorNumero.encontrarMaior()}`);