Algoritmo "SA2-Atividade1"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2021
// R$:1.000,00 R$:2.999,99 30% do salario do cliente
// R$:3.000,00 R$:4.999,99 35% do salario do cliente
Var
   // Se��o de Declara��es das vari�veis
   renda : real


Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva("Digite a renda do cliente: ")
   leia(renda)

   se(renda >= 1000) e (renda <= 2999) ent�o
      escreval("O cliente esta na faixa 1, e pode comprar at�: ", renda * 0.30:2:2)
   sen�o
      se(renda >= 3000) e (renda <= 4999) ent�o
         escreval("O cliente esta na faixa 2, e pode comprar at�: ", renda * 0.35:2:2)
      sen�o
         escreval("renda do cliente fora das faixas")
      fimse
   fimse


Fimalgoritmo