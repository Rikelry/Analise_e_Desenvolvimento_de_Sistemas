// Crie uma função que receba a idade de uma pessoa e retorne:
// "Menor de idade" se for < 18
// "Maior de idade" se for >= 18

function verificaIdade(idade: number): string {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}
console.log(verificaIdade(20));