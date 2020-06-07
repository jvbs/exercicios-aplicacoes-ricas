"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
do {
    var palavra = String(rs.question("Digite uma palavra que comece com a letra (p) ou contenha a letra (f): "));
    var letra = palavra;
    var texto = palavra.search("f");
    console.log(texto);
} while (letra != "p" || texto === -1);
console.log("Positivo");
