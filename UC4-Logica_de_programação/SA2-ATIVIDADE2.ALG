Algoritmo "SA2-Atividade2"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2021
Var
   // Se��o de Declara��es das vari�veis
   total : real
   j : logico
   resposta : caracter
   produto : caracter
   precoUnitario : real
   quantidade : inteiro


Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   j := verdadeiro
   total := 0

   enquanto j = verdadeiro fa�a

      escreva("Produto: ")
      leia(produto)

      escreva("Pre�o Unitatio: ")
      leia(precoUnitario)

      escreva("Quantidade: ")
      leia(quantidade)

      total := total + (quantidade * precoUnitario)

      escreval("-------------------")
      escreva("Continua ? (s/n)")
      leia(resposta)
      se resposta = "n" ent�o
         j:= falso
      fimse

   fimenquanto
   
   escreval("-------------------")
   escreva("Total do pedido: ",total)


Fimalgoritmo