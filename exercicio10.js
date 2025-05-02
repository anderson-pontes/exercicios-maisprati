const readlineSync = require('readline-sync');

console.log("--- Repetidor de Número 10 Vezes ---");

const numero = readlineSync.questionInt('Digite um numero inteiro: ');


console.log(`\nExibindo o número ${numero} na tela 10 vezes:`);


for (let i = 1; i <= 10; i++) {
  
  console.log(numero);
}

console.log("\n----------------------------------");