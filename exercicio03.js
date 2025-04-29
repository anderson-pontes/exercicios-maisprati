const readlineSync = require('readline-sync');

console.log("------------------------------------");
console.log("   Classificador de Notas +PraTI   ");
console.log("------------------------------------");

let entrada = readlineSync.question("Digite a nota (entre 0 e 10): ");

let nota = parseFloat(entrada);

if (isNaN(nota)) {
  console.log("Entrada inválida. Por favor, digite um número.");
}
else if (nota < 0 || nota > 10) {
  console.log("Nota inválida. Por favor, digite uma nota entre 0 e 10.");
}
else {

  console.log(`\nNota recebida: ${nota.toFixed(1)}`);

  if (nota >= 7.0) {
    console.log("Classificação: Aprovado");

  } else if (nota >= 5.0) {

    console.log("Classificação: Recuperação");
  } else {
    
    console.log("Classificação: Reprovado");
  }
}


console.log("------------------- Obrigado!!! ----------------------");