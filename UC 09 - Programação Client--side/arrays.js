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
;