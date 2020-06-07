import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  num: number;

  constructor() { }

  ngOnInit(): void {
  }

  checkNum(num: number): string {
    if(num > 0){
      return 'positivo'
    }
  }
}
