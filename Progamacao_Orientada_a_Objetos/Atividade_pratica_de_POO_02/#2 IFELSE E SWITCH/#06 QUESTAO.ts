//Receba o nome de um animal via prompt.
//Use switch para classificar como:
//"Cachorro" ou "Gato" → "Mamífero"
//"Papagaio" → "Ave"
//Outros → "Animal não identificado"

let animal = prompt("Digite o nome de um animal:")?.toLowerCase();
//[?.]             Garante que o codigo so vai chamar '.toLowerCase()' se o resultado de 'prompt' nao for 'null' ou 'undefined'.
//[.toLowerCase()] Transforma a string em minúscula.

switch (animal) {
  case "Cachorro":
  case "Gato":
    alert("Mamífero");
    break;
  case "Papagaio":
    alert("Ave");
    break;
  default:
    alert("Animal não identificado");
}