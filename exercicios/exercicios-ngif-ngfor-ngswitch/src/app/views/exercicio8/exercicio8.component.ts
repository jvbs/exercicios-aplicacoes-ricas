import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio8',
  templateUrl: './exercicio8.component.html',
  styleUrls: ['./exercicio8.component.css']
})
export class Exercicio8Component implements OnInit {

  inputName:string = '';
  names = [];

  constructor() { }

  ngOnInit(): void {
  }

  pushName(name: string): void {
    this.names.push(this.inputName)
  }

}
