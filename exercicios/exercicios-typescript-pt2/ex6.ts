import * as rs from "readline-sync";

let numPar = 0,
    ksc = "";

while (numPar <= 12) {
  if (numPar == 12) {
    ksc += numPar;
    break;
  }
  if (numPar % 2 != 0) {
    ksc += "";
  } else {
    ksc += numPar + ",";
  }
  numPar++;
}

console.log(ksc);
