                                    // array
var nome = [
    'Luis',
    'Henrique',
    'Silva',
    'Ferreira',
];

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);           // interação_dentro_de_array
}

console.log(nome[1]);              // ver_por_posiçãO

console.log(nome);                 // mostra o conteudo do array

console.log(nome.length);          // mostra o tamanho do array



var frutas = new Array(
    'Banana', 'Manga', 'Maça', 'Abacaxi', 'Goiaba',
);
console.log(frutas);

frutas[2] = 'Pera';                 // alterando_o_valor(item)_de_uma_posição
console.log(frutas);

frutas.push('mamão');               // adiciona_um_item_no_final_do_array
console.log(frutas);

frutas.unshift('Morango');          // adiciona_um_item_no_inicio_do_array
console.log(frutas);

frutas.pop();                       // remove_o_ultimo_item_do_array
console.log(frutas);

frutas.shift();                     // remove_o_primeiro_item_do_array
console.log(frutas);

frutas.splice(3, 1);               // remove o item do indice_escolhido[3]_e_mostra_a_quantidade_de_elemento[1]_que_quer_remove
console.log(frutas);


console.log(frutas.join(' - '));    // colocando_um_separador_"-"_entre_os_elementos

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.reverse());     // traz_o_array_de_reverso

var numeros = [6, 3, 8,  1, 5];
console.log(numeros.sort());        // ordena_o_vetor_em_ordem_crecente


console.log(frutas.indexOf('Kiwi')); // indexOf_busca_o_elemnto_e_retorna_sua_posição_se_não_encontra_retorna_-1


var dias = [4, 6, 9, 14, 21, 6, 8];
console.log(dias.lastIndexOf(6));    // verifica_se_existe_o-elemento_e_indica_a_ultmia_posição_dele_se_não_retorna_-1


console.log(nome.concat(frutas));   // devolve_uma_copia_concatenada


console.log(frutas.slice(1,3));     // seleciona_o_elemento_Da_posição_indicada_e_mostra_o_elemento_antes_da_ultima_indicação

console.log(dias.toString());       // transforma_em_string
console.log(dias);

console.log(frutas);
var frutasMaiusculo = frutas.map(function(item) {
    return item.toUpperCase()         // mapeia o array e faz alguma coisa que determinamos_(transformar_em_maiusculas)
});
console.log(frutasMaiusculo);


var valores = [33, 55, 12, 34, 55, 12, 12, 03, 15, 21, 40, 26];
console.log(valores);
var valoresRepetidos =  valores.filter(function (item) { 
    return item == 55;                // percorre o arraye retorna algo especifico
});
console.log(valoresRepetidos);


var menores = valores.every(function (item) {
    return item < 26;               // retorna_true_se_todos_corresponderem_ao_teste_dentro_da_função
});
console.log(menores);


var maiores = valores.some(function (item) {
    return item > 29;               // retorna_true_se_pelo_menos_um_corresponder_ao_teste
});
console.log(maiores);


var resultado = valores.reduce(function (valorAnterior, valorCorrente, indexCorrente, items) {
    return valorAnterior + valorCorrente;
});                                 // soma os valores do array de frente pra traz 
console.log(resultado);