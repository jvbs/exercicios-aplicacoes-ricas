import * as rs from "readline-sync";

// Celsius
const celsius = rs.question("Digite a temperatura em Celsius");

// Kelvin
const kelvin: number = Number(celsius) + 273.15;

// Fahrenheit
const fahrenheit: number = Number(celsius) * 1.8 + 32;

// Resultados
console.log("Celsius: " + celsius);
console.log("Fahrenheit: " + fahrenheit);
console.log("Kelvin: " + kelvin);
