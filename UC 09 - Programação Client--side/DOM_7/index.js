// hasAttribute - perguta_se_tem_um_atributo
//document.write(document.getElementById('idqualquer').hasAttribute('class'));    // esta_perguntando_se_tem_uma_classe

//document.write(document.querySelector('.classsequalquer').hasAttribute('id'));       // pergunta_se_tem_um_id

// getAttribute - perguta_se_tem_e_traz_o_valor
//var atributoDiv = document.getElementById('idqualquer');

// vai_retornar_o_valor_que_esta_dentro_da_classe
//document.write(atributoDiv.getAttribute('class'));

// setattribute - altera_ou_aplica_o_atrbuto
var atributoDiv = document.getElementById('idqualquer');

// apllicando_um_eEstilo_direto
atributoDiv.setAttribute('style', 'background: #ccc');
