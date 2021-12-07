// operadores relacionais
console.log(5 == 5);       // compara_os_dois_valores     

console.log("5" === 5);     // compara_o_valor_e_o_tipo_da_variavel

console.log(7 != 4);        // diferente

console.log(25 > 12);       // >_maior_<_menor

console.log(100 >= 150);    // >=_maior_ou_igual_<=_menor_ou_igual


// condicionais
var media  = 8;
var faltas = 3;
if(media >= 7) {              // se
    console.log("Aprovado!!!");
} else if (media >= 5 && faltas < 2) {        // se_não_se
    console.log("Recuperação!!!");
} else {                      // se_não
    console.log("Reprovado!!!"); 
}


solteiro = true;
formado = true;
console.log(solteiro && formado)

console.log((media > 7) ? 'Aprovado' : 'Reprovadp');       // ternario