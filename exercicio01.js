const readlineSync = require('readline-sync');

let entrada = readlineSync.question("Digite um numero inteiro: ");

let numero = parseInt(entrada);

if (isNaN(numero)) {
  console.log("Entrada inválida. Por favor, digite um numero inteiro.");
} else {
  
  if (numero % 2 === 0) {
    console.log(`O numero ${numero} é par.`);
  } else {
    console.log(`O numero ${numero} é impar.`);
  }
}