import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  num: number;

  constructor() { }

  ngOnInit(): void {
  }

  checkNum(num: number): string {
    if(num > 0){
      return 'positivo'
    } else if(num < 0) {
      return 'negativo'
    } else {
      return 'zero'
    }
  }

}
