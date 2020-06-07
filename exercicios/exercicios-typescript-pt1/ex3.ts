import * as rs from "readline-sync";

const vl1 = rs.question("Digite a base");
const vl2 = rs.question("Digite a altura");

const result: number = (parseInt(vl1) * parseInt(vl2)) / 2;

console.log("Area do triangulo: " + result);
