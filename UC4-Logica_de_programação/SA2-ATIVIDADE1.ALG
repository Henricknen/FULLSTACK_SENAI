Algoritmo "SA2-Atividade1"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2021
// R$:1.000,00 R$:2.999,99 30% do salario do cliente
// R$:3.000,00 R$:4.999,99 35% do salario do cliente
Var
   // Seção de Declarações das variáveis
   renda : real


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("Digite a renda do cliente: ")
   leia(renda)

   se(renda >= 1000) e (renda <= 2999) então
      escreval("O cliente esta na faixa 1, e pode comprar até: ", renda * 0.30:2:2)
   senão
      se(renda >= 3000) e (renda <= 4999) então
         escreval("O cliente esta na faixa 2, e pode comprar até: ", renda * 0.35:2:2)
      senão
         escreval("renda do cliente fora das faixas")
      fimse
   fimse


Fimalgoritmo