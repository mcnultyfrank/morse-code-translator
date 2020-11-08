"use strict";

var translateButton = document.querySelector(".translate__button");
var clearButton = document.querySelector(".clear__button");
var englishText = document.querySelector(".english-input");
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var morsecode = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
translateButton.addEventListener("click", function (e) {
  for (i = 0; i < alphabet.length; i++) {
    if (englishText.value.includes(alphabet[i])) {
      document.querySelector(".output").innerHTML += morsecode[i] + " ";
    }
  }
});
clearButton.addEventListener("click", function (e) {
  document.querySelector(".output").innerHTML = "";
});