class Primo {
    public numero: number;
    constructor(numero: number) {
        this.numero = numero;
    }
    verificar(): boolean {
        if (this.numero <= 1) return false;
        for (let i = 2; i <= Math.sqrt(this.numero); i++) {
            if (this.numero % i === 0) return false;
        }
        return true;
    }
}
let n8 = Number(prompt("Digite um número para verificar se é primo:"));
let primo = new Primo(n8);
alert(primo.verificar() ? "É primo" : "Não é primo");
