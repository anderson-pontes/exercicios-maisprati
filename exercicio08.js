const readlineSync = require('readline-sync');


console.log("--- Ordenador de Dois Valores ---");
console.log("Por favor, digite dois valores numéricos diferentes.");


const valor1 = readlineSync.questionFloat('Digite o primeiro valor: ');


let valor2 = readlineSync.questionFloat('Digite o segundo valor: ');


while (valor1 === valor2) {
    console.log("\nErro: Os valores não podem ser iguais.");
    valor2 = readlineSync.questionFloat('Por favor, digite um segundo valor DIFERENTE do primeiro: ');
}

console.log("\nValores em ordem crescente:");

if (valor1 < valor2) {
  
  console.log(valor1);
  console.log(valor2);  
  
} else {
  
  console.log(valor2);
  console.log(valor1);
  
}

console.log("\n---------------------------------");