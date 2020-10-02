const translateButton = document.querySelector(".translate__button");
const translateMorseButton = document.querySelector(".translate__morse__button");
const clearButton = document.querySelector(".clear__button");
const englishText = document.querySelector(".english-input");
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const morsecode =[
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..'
]
 
translateButton.addEventListener("click", e => {
    for(i = 0; i < alphabet.length; i++){
        if (englishText.value.includes(alphabet[i])){
            document.querySelector(".output").innerHTML += morsecode[i];
        }
    }})
translateMorseButton.addEventListener("click", e => {
    for (i = 0; i < morsecode.length; i++){
        if (englishText.value == morsecode[i]){
            document.querySelector(".output").innerHTML += alphabet[i];
        }
    }
})

