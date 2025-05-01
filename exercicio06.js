const readlineSync = require('readline-sync');

/**
 *
 * @param {number} a - Comprimento do lado A.
 * @param {number} b - Comprimento do lado B.
 * @param {number} c - Comprimento do lado C.
 * @returns {string} - A classificação do triângulo ou uma mensagem indicando que não forma um triângulo.
 */
function classificarTriangulo(a, b, c) {
  
  if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Por favor, forneça comprimentos de lado positivos e válidos.";
  }

  
  const formaTriangulo = a < b + c && b < a + c && c < a + b;

  if (formaTriangulo) {
    if (a === b && b === c) {
      return "Triângulo Equilátero (todos os lados iguais)";
    } else if (a === b || a === c || b === c) {
      return "Triângulo Isósceles (dois lados iguais)";
    } else {
      
      return "Triângulo Escaleno (todos os lados diferentes)";
    }
  } else {
   
    return "Os lados fornecidos não formam um triângulo.";
  }
}



console.log("--- Classificador de Triângulos ---");


const ladoA = parseFloat(readlineSync.question("Digite o comprimento do lado A: "));
const ladoB = parseFloat(readlineSync.question("Digite o comprimento do lado B: "));
const ladoC = parseFloat(readlineSync.question("Digite o comprimento do lado C: "));


const resultado = classificarTriangulo(ladoA, ladoB, ladoC);


console.log("\nResultado:"); 
console.log(resultado);

