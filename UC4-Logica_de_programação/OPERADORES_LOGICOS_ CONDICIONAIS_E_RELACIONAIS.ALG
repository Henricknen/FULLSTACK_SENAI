Algoritmo "condicionais"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 24/10/2021
Var
// Seção de Declarações das variáveis
   notaUm : real
   notaDois : real
   total : real
   faltas : inteiro
   
   //opcao : inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   notaUm := 8
   notaDois := 7
   
   total := (notaUm + notaDois) / 2
   
   faltas := 5
   
   se (total > 7) e (faltas < 10) então
             escreval ("Aprovado")
   senão
             escreval ("Reprovado")
   fimse

   //opcao:= 12345
   //      enquanto opcao <> 0 faca
   //               escreval ("Digite um numero, digite 0 para sair...: ")
   //               leia (opcao)
   //      fimenquanto
         
         
         
   //operadores relacionais
   // = igual
   // <> diferente
   // > maior
   // < menor
   // >= maior ou igual
   // <= menor ou igual
   
   //operadores logicas
   // não
   // e
   // ou


Fimalgoritmo