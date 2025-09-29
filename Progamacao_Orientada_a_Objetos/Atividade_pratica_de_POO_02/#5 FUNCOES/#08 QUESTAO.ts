// Crie uma função que receba um número e retorne sua tabuada como uma string formatada.

function tabuada(numero: number): string {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    return resultado;
}
console.log(tabuada(5));