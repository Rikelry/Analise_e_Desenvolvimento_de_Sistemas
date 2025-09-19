class ContadorPosNeg {
    public numeros: number[];
    constructor(numeros: number[]) {
        this.numeros = numeros;
    }
    contar(): { positivos: number; negativos: number } {
        let positivos = 0;
        let negativos = 0;
        for (let i = 0; i < this.numeros.length; i++) {
            if (this.numeros[i] > 0) positivos++;
            else if (this.numeros[i] < 0) negativos++;
        }
        return { positivos, negativos };
    }
}
let nums6: number[] = [];
for (let i = 0; i < 10; i++) {
    nums6.push(Number(prompt(`Digite o número ${i + 1}:`)));
}
let contador = new ContadorPosNeg(nums6);
let resultado = contador.contar();
alert(`Positivos: ${resultado.positivos}\nNegativos: ${resultado.negativos}`);
