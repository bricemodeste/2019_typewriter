"use strict";
let fullText = document.querySelector("#typewriter").textContent;
const SonUn = document.getElementById("typekey1");
const SonDeux = document.getElementById("typekey2");
const SonTrois = document.getElementById("typespace");

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
