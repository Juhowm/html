'use strict';
const nimi = prompt("What is your name?");
let house
const num = Math.floor(Math.random()* 4 + 1);
if (num === 1)
  house = 'Gryffindor';
else if (num === 2)
  house = 'Ravenclaw';
else if (num === 3)
  house = 'Hufflepuff';
else
  house = 'Slytherin';
document.querySelector('#sanat').innerHTML =
    ''+nimi+', You are '+house+'!';