class ParOuImpar {
    public numero: number;
    constructor(numero: number) {
        this.numero = numero;
    }
    verificar(): string {
        let resultado = this.numero % 2 === 0 ? "Par" : "Ímpar";
        return resultado;
    }
}
let parImpar = new ParOuImpar(Number(prompt("Digite um número:")));
alert(parImpar.verificar());