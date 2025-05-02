const readlineSync = require('readline-sync');

let soma = 0;

const quantidadeNumeros = 5;

console.log(`--- Calculadora de Soma de ${quantidadeNumeros} Números ---`);
console.log(`Por favor, digite ${quantidadeNumeros} números.`);


for (let i = 1; i <= quantidadeNumeros; i++) {
  
  const numeroDigitado = readlineSync.questionFloat(`Digite o ${i} numero: `);

  soma += numeroDigitado;
}

console.log(`\nA soma total dos ${quantidadeNumeros} números digitados é: ${soma}`);
console.log(`------------------------------------------`);