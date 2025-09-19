class Potencia {
    public base: number;
    public expoente: number;
    constructor(base: number, expoente: number) {
        this.base = base;
        this.expoente = expoente;
    }
    calcular(): number {
        let resultado = this.base ** this.expoente;
        return resultado;
    }
}
let base = Number(prompt("Digite a base:"));
let expoente = Number(prompt("Digite o expoente:"));
let potencia = new Potencia(base, expoente);
alert(`Resultado: ${potencia.calcular()}`);