function tekstNaMorse(tekst) {
    let morse = "";
    for (let c of tekst.toUpperCase()) {
        switch (c) {
            case 'A': morse += ".- "; break;
            case 'B': morse += "-... "; break;
            case 'C': morse += "-.-. "; break;
            case 'D': morse += "-.. "; break;
            case 'E': morse += ". "; break;
            case 'F': morse += "..-. "; break;
            case 'G': morse += "--. "; break;
            case 'H': morse += ".... "; break;
            case 'I': morse += ".. "; break;
            case 'J': morse += ".--- "; break;
            case 'K': morse += "-.- "; break;
            case 'L': morse += ".-.. "; break;
            case 'M': morse += "-- "; break;
            case 'N': morse += "-. "; break;
            case 'O': morse += "--- "; break;
            case 'P': morse += ".--. "; break;
            case 'Q': morse += "--.- "; break;
            case 'R': morse += ".-. "; break;
            case 'S': morse += "... "; break;
            case 'T': morse += "- "; break;
            case 'U': morse += "..- "; break;
            case 'V': morse += "...- "; break;
            case 'W': morse += ".-- "; break;
            case 'X': morse += "-..- "; break;
            case 'Y': morse += "-.-- "; break;
            case 'Z': morse += "--.. "; break;
            case '1': morse += ".---- "; break;
            case '2': morse += "..--- "; break;
            case '3': morse += "...-- "; break;
            case '4': morse += "....- "; break;
            case '5': morse += "..... "; break;
            case '6': morse += "-.... "; break;
            case '7': morse += "--... "; break;
            case '8': morse += "---.. "; break;
            case '9': morse += "----. "; break;
            case '0': morse += "----- "; break;
            case ' ': morse += "/ "; break;
            default: morse += "? "; break;
        }
    }
    return morse;
}

function morseNaTekst(morse) {
    let tekst = "";
    let znak = "";
    morse += " ";

    for (let c of morse) {
        if (c !== ' ' && c !== '/') {
            znak += c;
        } else if (znak) {
            switch (znak) {
                case ".-": tekst += "A"; break;
                case "-...": tekst += "B"; break;
                case "-.-.": tekst += "C"; break;
                case "-..": tekst += "D"; break;
                case ".": tekst += "E"; break;
                case "..-.": tekst += "F"; break;
                case "--.": tekst += "G"; break;
                case "....": tekst += "H"; break;
                case "..": tekst += "I"; break;
                case ".---": tekst += "J"; break;
                case "-.-": tekst += "K"; break;
                case ".-..": tekst += "L"; break;
                case "--": tekst += "M"; break;
                case "-.": tekst += "N"; break;
                case "---": tekst += "O"; break;
                case ".--.": tekst += "P"; break;
                case "--.-": tekst += "Q"; break;
                case ".-.": tekst += "R"; break;
                case "...": tekst += "S"; break;
                case "-": tekst += "T"; break;
                case "..-": tekst += "U"; break;
                case "...-": tekst += "V"; break;
                case ".--": tekst += "W"; break;
                case "-..-": tekst += "X"; break;
                case "-.--": tekst += "Y"; break;
                case "--..": tekst += "Z"; break;
                case ".----": tekst += "1"; break;
                case "..---": tekst += "2"; break;
                case "...--": tekst += "3"; break;
                case "....-": tekst += "4"; break;
                case ".....": tekst += "5"; break;
                case "-....": tekst += "6"; break;
                case "--...": tekst += "7"; break;
                case "---..": tekst += "8"; break;
                case "----.": tekst += "9"; break;
                case "-----": tekst += "0"; break;
                default: tekst += "?"; break;
            }
            znak = "";
        }
        if (c === '/') tekst += " ";
    }
    return tekst;
}

function main() {
    const wybor = prompt("1. Zamien tekst na Morse'a\n2. Zamien Morse'a na tekst\nWybierz opcje:");
    if (wybor === "1") {
        const tekst = prompt("Podaj tekst:");
        console.log("Kod Morse'a: " + tekstNaMorse(tekst));
    } else if (wybor === "2") {
        const morse = prompt("Podaj kod Morse'a (oddziel znaki spacjami, slowa ukośnikiem '/'): ");
        console.log("Tekst: " + morseNaTekst(morse));
    } else {
        console.log("Nieprawidłowa opcja!");
    }
}

main();