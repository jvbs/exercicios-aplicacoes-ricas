import * as rs from 'readline-sync';

const vl1 = rs.question('Digite um numero');
const vl2 = rs.question('Digite outro numero');
const vl3 = rs.question('Digite outro numero novamente');

const result: number = parseInt(vl1) * parseInt(vl2) * parseInt(vl3);

console.log('Resultado é: ' + result);