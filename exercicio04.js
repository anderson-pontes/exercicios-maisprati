const readlineSync = require('readline-sync');

function executarExercicio1() {
  console.log("\n--- [Executando Exercício 1: Par ou Ímpar] ---");
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
  console.log("--- [Fim Exercício 1] ---");
}


function executarExercicio2() {
  console.log("\n--- [Executando Exercício 2: Classificar Idade] ---");
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
  }
  console.log("--- [Fim Exercício 2] ---");
}

function executarExercicio3() {
  console.log("\n--- [Executando Exercício 3: Classificar Nota] ---");
  
  let entrada = readlineSync.question("Digite a nota (entre 0 e 10): ");
  let nota = parseFloat(entrada);

  if (isNaN(nota)) {
    console.log("Entrada inválida. Por favor, digite um número.");
  } else if (nota < 0 || nota > 10) {
    console.log("Nota inválida. Por favor, digite uma nota entre 0 e 10.");
  } else {
    console.log(`\nNota recebida: ${nota.toFixed(1)}`);
    if (nota >= 7.0) {
      console.log("Classificação: Aprovado");
    } else if (nota >= 5.0) {
      console.log("Classificação: Recuperação");
    } else {
      console.log("Classificação: Reprovado");
    }
  }
  console.log("--- [Fim Exercício 3] ---");
}



while (true) {
  console.log("\n======================================== ");
  console.log("     MENU PRINCIPAL DE EXERCÍCIOS      ");
  console.log("=======================================");
  console.log("     Escolha um exercício para executar:");
  console.log("----------------------------------------");
  console.log(" 1. Verificar Par ou Ímpar              ");
  console.log(" 2. Classificar Idade                   ");
  console.log(" 3. Classificar Nota                    ");
  console.log("----------------------------------------");
  console.log("0. Sair                                ");
  console.log("========================================");

  
  let escolha = readlineSync.question("Digite o numero da opcao desejada: ");

  
  switch (escolha) {
    case '1':
      executarExercicio1(); 
      break;
    case '2':
      executarExercicio2(); 
      break;
    case '3':
      executarExercicio3(); 
      break;
    case '0':
      console.log("\n-- Saindo do menu... Obrigado por usar! --");
      break; 
    default:
      console.log("\n-- Erro: Opção inválida! --");
      console.log("   Por favor, escolha um número válido do menu (0 a 3).");
      break;
  }

  
  if (escolha === '0') {
    break; 
  }
  
  readlineSync.keyInPause("\nPressione qualquer tecla para voltar ao menu principal...");
}

console.log("\nPrograma finalizado.");