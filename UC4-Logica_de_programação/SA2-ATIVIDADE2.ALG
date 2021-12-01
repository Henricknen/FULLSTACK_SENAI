Algoritmo "SA2-Atividade2"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 25/10/2021
Var
   // Seção de Declarações das variáveis
   total : real
   j : logico
   resposta : caracter
   produto : caracter
   precoUnitario : real
   quantidade : inteiro


Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   j := verdadeiro
   total := 0

   enquanto j = verdadeiro faça

      escreva("Produto: ")
      leia(produto)

      escreva("Preço Unitatio: ")
      leia(precoUnitario)

      escreva("Quantidade: ")
      leia(quantidade)

      total := total + (quantidade * precoUnitario)

      escreval("-------------------")
      escreva("Continua ? (s/n)")
      leia(resposta)
      se resposta = "n" então
         j:= falso
      fimse

   fimenquanto
   
   escreval("-------------------")
   escreva("Total do pedido: ",total)


Fimalgoritmo