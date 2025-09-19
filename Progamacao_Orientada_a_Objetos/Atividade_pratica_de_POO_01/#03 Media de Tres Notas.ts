class Aluno {
    public notas: number[];
    constructor(notas: number[]) {
        this.notas = notas;
    }
    media(): number {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        let media = soma / this.notas.length;
        return media;
    }
    aprovado(): boolean {
        let m = this.media();
        return m >= 7;
    }
}
let notas: number[] = [];
for (let i = 0; i < 3; i++) {
    notas.push(Number(prompt(`Digite a nota ${i + 1}:`)));
}
let aluno = new Aluno(notas);
alert(`Média: ${aluno.media().toFixed(2)} - ${aluno.aprovado() ? "Aprovado" : "Reprovado"}`);