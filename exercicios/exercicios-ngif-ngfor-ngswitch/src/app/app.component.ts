import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicios-ngif-ngfor';

  search:number;

  setSearch(search: number): void {
    this.search = search;
  }
}
