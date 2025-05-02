console.log("--- Primeiros 10 números da Sequência de Fibonacci ---");

const numeroDeTermos = 10;

let termoAnterior = 0;
let termoAtual = 1;


if (numeroDeTermos >= 1) {
  console.log(termoAnterior);
}
if (numeroDeTermos >= 2) {
  console.log(termoAtual); 
}

for (let i = 3; i <= numeroDeTermos; i++) {
  
  const proximoTermo = termoAnterior + termoAtual;

  console.log(proximoTermo);

  termoAnterior = termoAtual;
  
  termoAtual = proximoTermo;
}

console.log("--------------------------------------------------");