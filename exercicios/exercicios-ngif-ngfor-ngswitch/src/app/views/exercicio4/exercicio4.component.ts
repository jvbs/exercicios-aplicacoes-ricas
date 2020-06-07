import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

  num1: number;
  num2: number;
  resultado: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(operacao:string){
    if(operacao === 'somar'){
      this.resultado = this.num1 + this.num2
    } else if(operacao === 'subtrair'){
      this.resultado = this.num1 - this.num2
    } else if(operacao === 'multiplicar'){
      this.resultado = this.num1 * this.num2
    } else {
      this.resultado = this.num1 / this.num2
    }
  }

}
