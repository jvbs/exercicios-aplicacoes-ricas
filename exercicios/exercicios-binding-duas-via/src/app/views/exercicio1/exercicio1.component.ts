import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  num1: number;
  num2: number;

  constructor() { }

  ngOnInit(): void {
  }

  soma(num1: number, num2: number){
    return num1 + num2;
  }

}
