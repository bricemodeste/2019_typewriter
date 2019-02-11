"use strict";
let fullText = document.querySelector("#typewriter").textContent;
const typeSonUn = document.getElementById("typekey1");
const typeSonDeux = document.getElementById("typekey2");
const typeSonTrois = document.getElementById("typespace");

let counter = 0;
document.querySelector("#typewriter").textContent = "";

setInterval(() => {
  if (counter < fullText.length) {
    document.querySelector("#typewriter").textContent = fullText.substring(
      0,
      counter + 1
    );
  } else {
    counter = 0;
  }
  counter++;
}, 100);
