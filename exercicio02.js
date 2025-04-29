const readlineSync = require('readline-sync');

let entrada = readlineSync.question("Informe a sua idade: ");

let idade = parseInt(entrada);

if (isNaN(idade) || idade < 0) {
  console.log("Idade Inválida. Por favor, insira uma idade válida.");
} else {
  if (idade < 12) {
    console.log('Categoria: Criança');
  } else if (idade >= 12 && idade < 18) {
    console.log('Categoria: Adolescente');
  } else if (idade >= 18 && idade < 60) {
    console.log('Categoria: Adulto');
  } else {
    console.log('Categoria: Idoso');
  }
};
