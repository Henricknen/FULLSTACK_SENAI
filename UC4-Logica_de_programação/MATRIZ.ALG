Algoritmo "matriz"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2021
Var
   // Seção de Declarações das variáveis
   matrizDeInteiros : vetor[0..4, 0..4] de inteiro
   matrizDeReal :vetor[0..4, 0..4] de real
   matrizDeCaracter : vetor[0..4, 0..4] de caracter

   //contadores
   linha, coluna : inteiro


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   matrizDeInteiros[1, 1] := 0
   matrizDeReal[2, 3] := 1,9
   matrizDECaracter[3, 1] := "A"

   //preenchendo a matriz
   para linha de 0 até 4 faça
      para coluna de 0 até 4 faça
         matrizDeInteiros[linha, coluna] := randi(99)
      fimpara
   fimpara

   matrizDeInteiros[3, 4] := 200
   
   //mostrar a matriz
   para linha de 0 até 4 faça
      escreval ("--------------")
      para coluna de 0 até 4 faça
         escreva(matrizDeInteiros[linha, coluna], " | ")
      fimpara
      escreval("")
   fimpara


Fimalgoritmo