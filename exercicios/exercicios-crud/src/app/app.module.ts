import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotoComponent } from './views/moto/moto.component';
import { FormsModule } from '@angular/forms';
import { TipoComponent } from './views/tipo/tipo.component'

@NgModule({
  declarations: [
    AppComponent,
    MotoComponent,
    TipoComponent
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
