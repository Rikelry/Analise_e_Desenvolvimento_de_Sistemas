// Crie uma função que receba um número e retorne true se ele for primo e false caso contrário.

function ehPrimo(numero: number): boolean {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
console.log(ehPrimo(7));