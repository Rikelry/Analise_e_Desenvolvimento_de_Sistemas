// Crie uma função que receba um número e retorne se ele é par ou ímpar.

function ehParOuImpar(n: number): string {
    if (n % 2 === 0) {
        return 'O número é Par';
    } else {
        return 'O número é Ìmpar';
    }
}
alert(ehParOuImpar(0));
alert(ehParOuImpar(1));