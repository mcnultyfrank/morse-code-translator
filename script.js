const translateButton = document.querySelector(".translate__button");
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
            document.querySelector(".output").innerHTML += morsecode[i] + " ";
        }
    }})
    clearButton.addEventListener("click", e => {
        document.querySelector(".output").innerHTML = "";
    })


