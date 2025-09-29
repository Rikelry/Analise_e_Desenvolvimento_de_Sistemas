// Peça ao usuário para digitar 3 nomes e armazene-os em um array.
// Mostre todos os nomes com alert.

let nomes: Array<string> = [];

for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite um nome:") || "";
    nomes.push(nome);
}

alert("Nomes digitados: " + nomes);