const readlineSync = require('readline-sync');


console.log("\n++++++++++++++++++++++++++++++++++++++++");
console.log("    Calculadora de IMC e Categoria      ");
console.log("++++++++++++++++++++++++++++++++++++++++");


let pesoKg;
while (true) {
    let pesoEntrada = readlineSync.question("Digite seu peso em quilogramas (ex: 72.5): ");
    pesoKg = parseFloat(pesoEntrada);
    
    if (!isNaN(pesoKg) && pesoKg > 0) {
        break; 
    } else {
        console.log("Erro: Peso inválido. Por favor, digite um número positivo.");
    }
}


let alturaM;
while (true) {
    let alturaEntrada = readlineSync.question("Digite sua altura em METROS (ex: 1.65): ");
    alturaM = parseFloat(alturaEntrada);
    
    if (!isNaN(alturaM) && alturaM > 0) {
        break; 
    } else {
        console.log("Erro: Altura inválida. Por favor, digite um número positivo em metros.");
    }
}


const imc = pesoKg / (alturaM * alturaM); 
let categoriaPeso;

if (imc < 18.5) {
    categoriaPeso = "Abaixo do peso";
} else if (imc < 25) { 
    categoriaPeso = "Peso normal";
} else if (imc < 30) { 
    categoriaPeso = "Sobrepeso";
} else { 
    categoriaPeso = "Obesidade";
}


console.log("\n---------------- RESULTADO ----------------");

console.log(`Seu IMC calculado é: ${imc.toFixed(1)}`);
console.log(`Sua categoria de peso é: ${categoriaPeso}`);
console.log("-------------------------------------------");
console.log("IMPORTANTE: Este cálculo é uma estimativa.");
console.log("Consulte um profissional de saúde para uma avaliação completa.");
console.log("++++++++++++++++++++++++++++++++++++++++");