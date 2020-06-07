"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var anoBissexto = Number(rs.question('Digite um ano:'));
if (anoBissexto % 4 == 0 && anoBissexto % 100 != 0 || anoBissexto % 400 == 0) {
    console.log("Este ano é bissexto");
}
else {
    console.log("Este ano não é bissexto");
}
