import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component implements OnInit {

  framework: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  changeFramework(framework: string): void {
    this.framework = framework
  }
}
