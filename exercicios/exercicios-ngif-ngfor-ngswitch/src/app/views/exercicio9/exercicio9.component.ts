import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  templateUrl: './exercicio9.component.html',
  styleUrls: ['./exercicio9.component.css']
})
export class Exercicio9Component implements OnInit {

  channel: string;

  constructor() { }

  ngOnInit(): void {
  }

  lowercase(word:string): string {
    return word.toLowerCase()
  }

}
