document.getElementsByClassName('minhaClasse')[0].innerHTML = '----------------------------';
document.getElementsByClassName('minhaClasse')[2].innerHTML = '----------------------';

setTimeout (function () {
    document.getElementsByClassName('minhaClasse')[1].innerHTML = '<b>Ola, mundo....</b>';
}, 3000);