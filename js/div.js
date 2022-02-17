function selecionador() {

    var escolha = document.getElementById('cifradecesar').value;
    var saida = document.querySelector('[data-output]');

    if (true) {


    } else {
        if (document.querySelector('codifica')) {
            return verifica()
        } else {
            return transfor()
        }

    }
}


// cifra de cesar // cifra de cesar // cifra de cesar

var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var key = +document.getElementById("key").innerHTML;

function menos() {
    if (key > 1) {
        key--;
        document.getElementById("key").innerHTML = key;
    }
}

function mais() {
    if (key < 25) {
        key++;
        document.getElementById("key").innerHTML = key;
    }
}




function calculate() {
    var input = document.getElementById("input").value.toUpperCase();
    var result = "";

    for (var i = 0; i < input.length; i++) { //Passa por cada caracter do input

        var posicaoDaLetraNoAlfabeto = input.charCodeAt(i) - 64; //Identifica qual letra é do alfabeto
        var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
        letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
        result += values[letraComDeslocamento - 1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
    }

    document.getElementById("output").innerHTML = result;
}

function decodificaCifra(string, chave) {
    var result = [];
    var lista = string.split("");
    for (var i = 0; i < lista.length; i++) {
        var codigo = lista[i].charCodeAt();

        if ((codigo - 97 - chave) < 0) var resultado = ((codigo - 97 - chave + 26) % 26) + 97;
        else var resultado = ((codigo - 97 - chave) % 26) + 97;

        result.push(String.fromCharCode(resultado));
    }
    return result.join("");
}



function decodificaCifra(string, chave) {
    var result = [];
    var lista = string.split("");
    for (var i = 0; i < lista.length; i++) {
        var codigo = lista[i].charCodeAt();

        if ((codigo - 97 - chave) < 0) var resultado = ((codigo - 97 - chave + 26) % 26) + 97;
        else var resultado = ((codigo - 97 - chave) % 26) + 97;

        result.push(String.fromCharCode(resultado));
    }
    return result.join("");
}


// base 64  // base 64 // base 64
function verifica() {
    let result = document.getElementById('entrada').value;
    var codific = btoa(result)
    document.getElementById("saida").innerHTML = codific;

}

function transfor() {
    let result = document.getElementById('entrada').value;
    var decodi = atob(result)
    document.getElementById("saida").innerText = decodi;

}
