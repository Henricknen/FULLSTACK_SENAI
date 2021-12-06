// comentario de uma linha

/* comentarioi
    de
        mais linhas */

console.log('Ola, mundo!')      // este comando faz o print de alguma menssagem na tela


                     // vaiaveis
//const idade = 20;               // variavel "const", não pode ser modificada

var idade = 30;                       // "var", é o mais ultilizado

//let idade =40;                                  // mais usual com escopo

console.log(idade);

var numUm = 95;
var numDois = 60;
var total = numUm + numDois;
console.log(total);

var nome = 'Luis Henrique';
var sobrenome = 'silva ferreira';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

console.log('Me chamo ' + nome + ' e tenho ' + idade + ' anos!');

console.log(`Me chamo ${nome} e tenho ${idade} anos!!`);     //interpolação de variaveis