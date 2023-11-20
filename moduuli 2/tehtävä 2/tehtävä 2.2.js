'use strict';
const amnt = prompt("How many participants?");
const nimet = [];
for (let i = 1; i <= amnt; i++){
  nimet.push(prompt("Give "+i+". name."));
}
nimet.sort()
const ol = document.createElement("ol");
let li = document.createElement("li");
document.querySelector("#list").appendChild(ol);
nimet.forEach((nimi) => {
  li.innerHTML += nimi;
  ol.appendChild(li);
  li = document.createElement("li");
});