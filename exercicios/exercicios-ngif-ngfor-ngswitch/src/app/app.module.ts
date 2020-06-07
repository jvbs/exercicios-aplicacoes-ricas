import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio3Component } from './views/exercicio3/exercicio3.component';
import { FormsModule } from '@angular/forms';
import { Exercicio4Component } from './views/exercicio4/exercicio4.component';
import { Exercicio5Component } from './views/exercicio5/exercicio5.component';
import { Exercicio6Component } from './views/exercicio6/exercicio6.component';
import { Exercicio1Component } from './views/exercicio1/exercicio1.component';
import { Exercicio2Component } from './views/exercicio2/exercicio2.component';
import { Exercicio7Component } from './views/exercicio7/exercicio7.component';
import { Exercicio8Component } from './views/exercicio8/exercicio8.component';
import { Exercicio9Component } from './views/exercicio9/exercicio9.component';
import { SobreMimComponent } from './views/sobre-mim/sobre-mim.component'

@NgModule({
  declarations: [
    AppComponent,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio6Component,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio7Component,
    Exercicio8Component,
    Exercicio9Component,
    SobreMimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
