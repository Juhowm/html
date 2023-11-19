'use strict';
const num1 = parseInt(prompt("Anna ensimmäinen luku"));
const num2 = parseInt(prompt("Anna toinen luku"));
const num3 = parseInt(prompt("Anna kolmas luku"));
const sum = num1 + num2 + num3;
const tulo = num1 * num2 * num3;
const avg = sum / 3;
document.querySelector('#summa').innerHTML =
    'Summa on '+sum+', tulo on '+tulo+' ja keskiarvo on '+avg+'';