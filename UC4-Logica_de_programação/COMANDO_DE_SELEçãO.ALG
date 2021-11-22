Algoritmo "comando_de_seleção"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2021
Var
   // Seção de Declarações das variáveis
   letra : caractere


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva ("Digite uma letra: ")
   leia(letra)

   escolha letra
   caso "A"
      escreval ("letra A")
      caso "A", "D"
      escreval ("letra A ou D")
   caso "B"
      escreval ("letra B")
   caso "C"
      escreval ("letra C")
   outrocaso
      escreval ("Não é A, B e nem C")
   fimescolha



Fimalgoritmo