// Crie um array com 4 nomes de cidades.
// Remova a primeira cidade
// Adicione uma nova cidade no final

let cidades: Array<string> = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"];

cidades.shift();
cidades.push("Fortaleza");

for (let cidade of cidades) {
    alert(cidade);
}