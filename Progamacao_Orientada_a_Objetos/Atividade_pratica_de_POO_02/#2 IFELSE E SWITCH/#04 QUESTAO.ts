// Escreva um programa que peça o nome de um mês e exiba quantos dias ele tem.
// Use switch para resolver.

let mes = prompt("Digite o nome de um mês:")?.toLowerCase();
//[?.] Garante que o codigo so vai chamar '.toLowerCase()' se o resultado de 'prompt' nao for 'null' ou 'undefined'.
//[.toLowerCase()] Transforma a string em minúscula.

switch (mes) {
    case "janeiro":
        alert("Janeiro tem 31 dias");
        break;
    case "março":
        alert("Março tem 31 dias");
        break;
    case "maio":
        alert("Maio tem 31 dias");
        break;
    case "julho":
        alert("Julho tem 31 dias");
        break;
    case "agosto":
        alert("Agosto tem 31 dias");
        break;
    case "outubro":
        alert("Outubro tem 31 dias");
        break;
    case "dezembro":
        alert("Dezembro tem 31 dias");
        break;
    case "abril":
        alert("Abril tem 30 dias");
        break;
    case "junho":
        alert("Junho tem 30 dias");
        break;
    case "setembro":
        alert("Setembro tem 30 dias");
        break;
    case "novembro":
        alert("Novembro tem 30 dias");
        break;
    case "fevereiro":
        alert("Fevereiro tem 28 ou 29 dias");
        break;
    default:
        alert("Mês inválido");
        break;
}