import * as rs from "readline-sync";

var n = Number(rs.question("Digite um numero:"));

if (n % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}
