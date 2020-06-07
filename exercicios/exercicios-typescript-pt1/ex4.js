"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
console.log('Exercicio 4');
// Celsius
var cel = rs.question('Digite uma temperatura em graus Celsius');
// Fahrenheit
var fah = (Number(cel) * 1.8) + 32;
// Kelvin
var kel = Number(cel) + 273.15;
// Resultados
console.log('Celsius inserido: ' + cel);
console.log('Fahrenheit: ' + fah);
console.log('Kelvin: ' + kel);
