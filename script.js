// Słownik kodu Morse'a
const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': '/'
};

// Funkcja do tłumaczenia tekstu na kod Morse'a
function tekstNaMorse(tekst) {
    let morse = '';
    for (let char of tekst.toUpperCase()) {
        morse += morseCode[char] ? morseCode[char] + ' ' : '? ';
    }
    return morse.trim();
}

// Funkcja do tłumaczenia kodu Morse'a na tekst
function morseNaTekst(morse) {
    let tekst = '';
    let slowa = morse.split(' / ');
    for (let slowo of slowa) {
        let znaki = slowo.split(' ');
        for (let znak of znaki) {
            let found = false;
            for (let [letter, code] of Object.entries(morseCode)) {
                if (znak === code) {
                    tekst += letter;
                    found = true;
                    break;
                }
            }
            if (!found) {
                tekst += '?';
            }
        }
        tekst += ' ';
    }
    return tekst.trim();
}

// Funkcjonalność przycisków
document.getElementById('toMorseButton').addEventListener('click', function() {
    let input = document.getElementById('inputText').value;
    let result = tekstNaMorse(input);
    document.getElementById('outputText').value = result;
});

document.getElementById('toTextButton').addEventListener('click', function() {
    let input = document.getElementById('inputText').value;
    let result = morseNaTekst(input);
    document.getElementById('outputText').value = result;
});
