import * as rs from "readline-sync";

console.log("1 - Michael Jackson");
console.log("2 - Felipe Massa");
console.log("3 - Adriane Galisteu");
console.log("4 - Gabriel da Cruz");
console.log("5 - Yago Dora");

let q1 = Number(rs.question(" quem na lista é Surfista?\n"));

if (q1 == 5) {
    console.log("Você acertou!");
} else {
    console.log("Você errou! \n A resposta correta é a 5");
}
