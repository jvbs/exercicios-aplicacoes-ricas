import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  templateUrl: './exercicio7.component.html',
  styleUrls: ['./exercicio7.component.css']
})
export class Exercicio7Component implements OnInit {

  div1 = 'show'
  div2 = 'hide'
  div3 = 'hide'
  currentDiv = 'div1'

  constructor() { }

  ngOnInit(): void {
  }

  changeDiv(): void {
    if(this.currentDiv === 'div1'){
      this.currentDiv = 'div2'
      this.div1 = 'hide'
      this.div2 = 'show'
      this.div3 = 'hide'
    } else if(this.currentDiv === 'div2'){
      this.currentDiv = 'div3'
      this.div1 = 'hide'
      this.div2 = 'hide'
      this.div3 = 'show'
    } else {
      this.currentDiv = 'div1'
      this.div1 = 'show'
      this.div2 = 'hide'
      this.div3 = 'hide'
    }
  }

}
