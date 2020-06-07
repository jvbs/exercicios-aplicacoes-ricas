import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component implements OnInit {

  img = 'assets/angular.svg'

  constructor() { }

  ngOnInit(): void {
  }

  changePicture(): void {
    if(this.img === 'assets/angular.svg'){
      this.img = 'assets/vue.png'
    } else {
      this.img = 'assets/angular.svg'
    }
  }

}
