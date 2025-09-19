class Tabuada {
    public numero: number;
    constructor(numero: number) {
        this.numero = numero;
    }
    gerar(): string {
        let resultado = "";
        for (let i = 1; i <= 10; i++) {
            resultado += `${this.numero} x ${i} = ${this.numero * i}\n`;
        }
        return resultado;
    }
}
let tabuada = new Tabuada(Number(prompt("Digite um número para a tabuada:")));
alert(tabuada.gerar());
