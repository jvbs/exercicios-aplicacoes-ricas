import * as rs from "readline-sync";

const vl1 = rs.question("Digite a primeira nota");
const vl2 = rs.question("Digite a segunda nota");
const vl3 = rs.question("Digite a terceira nota");

const result: number =
  (parseInt(vl1) * 2 + parseInt(vl2) * 3 + parseInt(vl3) * 5) / 10;

console.log("Media: " + result);
