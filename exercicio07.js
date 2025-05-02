const readlineSync = require('readline-sync');


const precoMenosDeDuzia = 0.30;
const precoDuziaOuMais = 0.25;


const quantidadeDuzia = 12;


const numeroMacas = readlineSync.questionInt('Digite o numero de macas compradas: ');


let custoTotal;


if (numeroMacas < quantidadeDuzia) {

  custoTotal = numeroMacas * precoMenosDeDuzia;
  console.log(`\nComprando ${numeroMacas} maçãs (menos de ${quantidadeDuzia}), o preço por unidade é R$ ${precoMenosDeDuzia.toFixed(2)}.`);
} else {
  
  custoTotal = numeroMacas * precoDuziaOuMais;
  console.log(`\nComprando ${numeroMacas} maçãs (${quantidadeDuzia} ou mais), o preço por unidade é R$ ${precoDuziaOuMais.toFixed(2)}.`);
}


console.log(`\nO valor total da compra é R$ ${custoTotal.toFixed(2).replace('.', ',')}`);