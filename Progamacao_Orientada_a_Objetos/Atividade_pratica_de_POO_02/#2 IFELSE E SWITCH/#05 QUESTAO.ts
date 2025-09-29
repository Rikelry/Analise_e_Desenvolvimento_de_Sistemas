// Peça ao usuário sua idade e diga se ele pode votar, não pode votar ou se o voto é opcional.
// Regra:
// Menor de 16 anos → não pode votar
// 16 ou 17 anos → voto opcional
// 18 a 70 anos → voto obrigatório
// Acima de 70 anos → voto opcional

let idade = Number(prompt("Digite sua idade:"));

if (idade < 16) {
  alert("Não pode votar");
} else if (idade === 16 || idade === 17 || idade > 70) {
  alert("Voto opcional");
} else {
  alert("Voto obrigatório");
}