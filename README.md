# Repositório Lista de Exercícios 1 - Estudando as estruturas básicas em JavasScript;

Este repositório contém exemplos simples de esturturas básicas criados para fins de resolução da atividade do curso Full Stack Jr. da +PraTI.

## Scripts Disponíveis

1.  **Verificador de Par ou Ímpar** (`exercicio01.js` - "1 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.")

2.  **Classificador de Idade** (`exercicio02.js` - "2 - Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else." )

3. **Classificador de Notas +PraTI** (`exercicio03.js` - `3 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.)

4. **MENU PRINCIPAL DE EXERCÍCIOS** (`exercicio04.js` - "4 - Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.)

5. **Calculadora de IMC e Categoria** (`exercicio05.js` - "5 - Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. )

6. **Classificador de Triângulos** (`exercicio06.js` - "6 - Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) 
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) 
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) )

7. **Calculadora de Preços** (`exercicio07.js` - "7 - As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.)

8. **Ordenador de Dois Valores** (`exercicio08.js` - "8 - Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.)

9. **Contagem Regressiva** (`exercicio09.js` - "9 -Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for. )

10. **Repetidor de Número 10 Vezes** (`exercicio10.js` - "10 - Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.)

11. **Somador de Números** (`exercicio11.js` - "11 - Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for. )

12. **Tabuada de um Número** (`exercicio12.js` - "12 - Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. )

13. **Média Aritmética** (`exercicio13.js` - "13 - Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. )

14. **Fatorial de um Número** (`exercicio14.js` - "14 - Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while. )

15. **Gerador de Sequência de Fibonacci** (`exercicio15.js` - "15 - Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.)


---

### 1. Exemplo para execução de Scripts - Verificador de Par ou Ímpar (`exercicio01.js`)

**Descrição:**
Este script solicita ao usuário que digite um número inteiro e, em seguida, verifica se o número fornecido é par ou ímpar.

**Como usar:**

1.  **Pré-requisitos:**
    * Ter o [Node.js](https://nodejs.org/) instalado.
    * Ter o `npm` (geralmente vem com o Node.js) para instalar dependências.

2.  **Instalação:**
    * Navegue até a pasta do projeto no terminal.
    * Instale a dependência `readline-sync` executando:
      ```bash
      npm install readline-sync
      ```

3.  **Execução:**
    * Execute o script no terminal usando o Node.js:
      ```bash
      node exercicio01.js
      ```
    * O script solicitará que você digite um número. Após inserir o número e pressionar Enter, ele exibirá se o número é par ou ímpar.

