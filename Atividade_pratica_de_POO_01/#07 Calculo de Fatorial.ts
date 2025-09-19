class Fatorial {
    public numero: number;
    constructor(numero: number) {
        this.numero = numero;
    }
    calcular(): number {
        let fatorial = 1;
        for (let i = 2; i <= this.numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}
let n = Number(prompt("Digite um número para calcular o fatorial:"));
let fatorial = new Fatorial(n);
alert(`Fatorial de ${n} é ${fatorial.calcular()}`);
