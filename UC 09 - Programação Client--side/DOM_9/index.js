// criar_um _elemento_<li>__e_o_nó_de_texto
// criar_o_nó_do_texto
var elemento = document.createElement('li');
var texto = document.createTextNode('Item_adicionado_no_fim_da_lista_por_appendChid');
elemento.appendChild(texto);

// recuperando_o_elemento_lista_e_anexando_o_elemento_<li>_ao_final_da_lista
var lista = document.getElementsByTagName('ul')[0];
lista.appendChild(elemento);



// insertBefore
var lista = document.getElementsByTagName('ul')[0];
var itens = document.getElementsByTagName('li');

// criando_o_elemento
var elemento = document.createElement('li');
elemento.textContent = 'novo_item';

// enserindo_o_valor_em_posição_especifica
lista.insertBefore(elemento, itens[2]);


// removechild
lista.removeChild(itens[4]);