class Soma {
    public n1: number;
    public n2: number;
    constructor(n1: number, n2: number) {
        this.n1 = n1;
        this.n2 = n2;
    }
    calcular(): number {
        let resultado = this.n1 + this.n2;
        return resultado;
    }
}
let soma = new Soma(
    Number(prompt("Digite o primeiro número:")),
    Number(prompt("Digite o segundo número:"))
);
alert(`Soma: ${soma.calcular()}`);
