// Semanas no ano regular
const weeks: number = 52;

// Dias por semana
const dias: number = 3;

// Minutos por dia
const min: number = 30;

// Resultado 1 - Dias no ano
let result: number = weeks * dias;

// Resultado 2 - Minutos no ano
result = result * min;

// Resultado 3 - Convertendo minutos em horas
result = result / 60;

// Resultado
console.log("Horas: " + result);
