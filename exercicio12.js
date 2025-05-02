const readlineSync = require('readline-sync');

console.log("--- Gerador de Tabuada ---");

const numero = readlineSync.questionInt('Digite um numero inteiro para ver a sua tabuada (de 1 a 10): ');


console.log(`\n--- Tabuada do ${numero} ---`);


for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
  
  const resultado = numero * multiplicador;

  
  console.log(`${numero} x ${multiplicador} = ${resultado}`);
}


console.log(`------------------------`);