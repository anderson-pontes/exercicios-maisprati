const readlineSync = require('readline-sync');

console.log("--- Calculadora de Fatorial (n!) ---");

const numero = readlineSync.questionInt(
    'Digite um numero inteiro NAO NEGATIVO para calcular o fatorial: ',
    {
        limitMessage: 'Por favor, digite um numero inteiro valido.' 
    }
);


if (numero < 0) {
  console.log("\nErro: Fatorial não é definido para números negativos.");
} else {
  
  let fatorial = 1n;

  for (let i = 2n; i <= BigInt(numero); i++) {
      fatorial *= i; 
  }

  
  console.log(`\nO fatorial de ${numero} (${numero}!) é:`);
  
  console.log(fatorial.toString());

}

console.log("------------------------------------");