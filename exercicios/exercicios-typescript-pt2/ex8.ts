import * as rs from "readline-sync";

var result = 0;

for (let i = 1; i <= 10; i++) {
    let n: number = Number(rs.question("Digite um numero " + i + ": "));
    result += n;
}

console.log("A soma de todos os numeros digitados é: " + result);
