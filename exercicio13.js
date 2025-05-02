const readlineSync = require('readline-sync');

let soma = 0;
let contador = 0;
let numeroDigitado; 

console.log("--- Calculadora de Média Aritmética ---");
console.log("Digite números decimais. Digite '0' (zero) para calcular a média e sair.");

do {
  
  numeroDigitado = readlineSync.questionFloat(`( ${contador + 1} ) Digite um numero decimal (ou 0 para finalizar): `);


  if (numeroDigitado !== 0) {

    soma += numeroDigitado;
    
    contador++;
  }

} while (numeroDigitado !== 0); 

console.log("\n--- Resultado ---");


if (contador > 0) {

  const media = soma / contador;

  
  console.log(`Foram digitados ${contador} números válidos (excluindo o 0).`);
  
  console.log(`A média aritmética dos números digitados é: ${media.toFixed(2).replace('.', ',')}`);

} else {

  console.log("Nenhum número válido foi digitado para calcular a média.");
}

console.log("-----------------");