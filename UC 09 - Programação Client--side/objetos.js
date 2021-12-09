var pessoa = {                    // objetos = conjunto de atributos
    nome: 'Luis_Henrique',
    sobrenome: 'Silva_Ferreira',
    idade: 30,

    nomeCompleto: function () {
        return this.nome + ' ' + this.sobrenome;//this referencia a variavel
    },
};
console.log(pessoa.nomeCompleto());

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);


pessoaDois = new Object();      // declarando_variavel_com_objeto
pessoaDois.nome = 'João',
pessoaDois.sobrenome = 'Almeida',
console.log(pessoaDois.nome);
console.log(pessoaDois.sobrenome);
console.log(pessoaDois);