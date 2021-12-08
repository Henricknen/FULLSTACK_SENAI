                                       //comando_de_repetição
                    // while
let contador = 0;
while(contador <= 10) {     // enquanto
    console.log(contador);
    contador += 1; 
}  

                     // do while
let cont = 0;
do {
    console.log(cont);
    cont ++;
} while (cont <= 12);        // faça_enquanto

                    // for
for (let cont = 0; cont <= 14; cont ++) {
    console.log(cont);
    cont = cont + 1;        // até
}

                    // for_no_array
var frutas = ['Maça', 'Goiaba', 'Pera', 'banana', 'Caju'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

                    // foreach
frutas.forEach(function (elemento, indice, array) {     
    console.log(elemento);
});                         // função_de_callback