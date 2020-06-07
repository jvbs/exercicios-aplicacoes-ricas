import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css']
})
export class DesafioComponent implements OnInit {

  num1: number;
  num2: number;
  operacao: string;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): number {
    if(this.operacao === '+'){
      return this.num1 + this.num2
    } else if(this.operacao === '-'){
      return this.num1 - this.num2
    } else if(this.operacao === '*'){
      return this.num1 * this.num2
    } else {
      return this.num1 / this.num2
    }
  }

}
