Algoritmo "matriz"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2021
Var
   // Se��o de Declara��es das vari�veis
   matrizDeInteiros : vetor[0..4, 0..4] de inteiro
   matrizDeReal :vetor[0..4, 0..4] de real
   matrizDeCaracter : vetor[0..4, 0..4] de caracter

   //contadores
   linha, coluna : inteiro


Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   matrizDeInteiros[1, 1] := 0
   matrizDeReal[2, 3] := 1,9
   matrizDECaracter[3, 1] := "A"

   //preenchendo a matriz
   para linha de 0 at� 4 fa�a
      para coluna de 0 at� 4 fa�a
         matrizDeInteiros[linha, coluna] := randi(99)
      fimpara
   fimpara

   matrizDeInteiros[3, 4] := 200
   
   //mostrar a matriz
   para linha de 0 at� 4 fa�a
      escreval ("--------------")
      para coluna de 0 at� 4 fa�a
         escreva(matrizDeInteiros[linha, coluna], " | ")
      fimpara
      escreval("")
   fimpara


Fimalgoritmo