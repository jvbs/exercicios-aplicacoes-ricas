import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

  img1 = 'assets/1.jpg';
  img2 = 'assets/2.jpeg';
  img3 = 'assets/3.jpg';

  class_img1 = 'class_img1';
  class_img2 = 'class_img2';
  class_img3 = 'class_img3';

  constructor() { }

  ngOnInit(): void {
  }

}
