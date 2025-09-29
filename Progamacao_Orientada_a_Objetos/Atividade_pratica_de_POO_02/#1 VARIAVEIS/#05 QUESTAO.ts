// Corrija o erro no código abaixo e explique o motivo do erro:
// let numero = prompt("Digite um número"); let resultado = numero + 10; alert("Resultado: " + resultado);

//let numero = prompt("Digite um número");
//let resultado = numero + 10;
//alert("Resultado: " + resultado);
//O prompt retorna uma string. Ao somar com 10, ocorre concatenação em vez de soma numérica.

let numero = Number(prompt("Digite um número"));
let resultado = numero + 10;
alert("Resultado: " + resultado);