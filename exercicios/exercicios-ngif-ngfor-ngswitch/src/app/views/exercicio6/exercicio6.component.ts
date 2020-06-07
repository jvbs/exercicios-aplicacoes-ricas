import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component implements OnInit {

  paises = ['Jordania', 'Croacia', 'Brasil', 'Espanha'];
  capitais = ['Amã', 'Zagrebe', 'Brasilia', 'Madrid'];

  constructor() { }

  ngOnInit(): void {
  }

  showCapital(index: number): void {
    alert(this.capitais[index]);
  }

}
