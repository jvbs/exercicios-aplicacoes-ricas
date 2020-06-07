import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component implements OnInit {

  dogs = [
    'dalmata',
    'lhasa',
    'pug',
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(dog: string): void {
    alert(dog)
  }
}
