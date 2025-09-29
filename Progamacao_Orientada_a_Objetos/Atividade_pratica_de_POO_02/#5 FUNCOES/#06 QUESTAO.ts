// Faça uma função que receba um array de nomes e retorne o maior nome (em número de caracteres).

function maiorNome(nomes: string[]): string {
    let maior = "";
    for (let nome of nomes) {
        if (nome.length > maior.length) {
            maior = nome;
        }
    }
    return maior;
}

console.log(maiorNome(["Ana", "Rikelry", "João"]));