import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  templateUrl: './exercicio7.component.html',
  styleUrls: ['./exercicio7.component.css']
})
export class Exercicio7Component implements OnInit {

  titles = [
    'titulo 1',
    'titulo 2',
    'titulo 3',
  ];

  contents = [
    'conteudo post 1',
    'conteudo post 2',
    'conteudo post 3',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
