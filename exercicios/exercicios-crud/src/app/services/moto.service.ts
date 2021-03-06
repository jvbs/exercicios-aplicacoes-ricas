import { Injectable } from '@angular/core';
import { Moto } from '../models/moto';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  private motos = new Array<Moto>();
  private autoGeneratedId = 0;

  constructor() { }

  save(){
    localStorage.setItem('motos', JSON.stringify(this.motos));
    localStorage.setItem('motosAutoGeneratedId', this.autoGeneratedId.toString());
  }

  load(){
    this.motos = JSON.parse(localStorage.getItem('motos'));
    if(this.motos == null){
      this.motos = new Array<Moto>();
    }

    let autoId = localStorage.getItem('motosAutoGeneratedId');
    if(autoId){
      this.autoGeneratedId = Number(autoId);
    }
  }

  insert(moto: Moto){
    moto.id = this.autoGeneratedId;
    this.motos.push(moto);
    this.autoGeneratedId++;

    this.save();
  }

  list(): Array<Moto> {
    this.load();
    return this.motos;
  }

  remove(id: number){
    for(let i = 0; i < this.motos.length; i++){
      const moto = this.motos[i];

      if(id === moto.id){
        this.motos.splice(i, 1);
        break;
      }
    }

    this.save();
  }

  update(moto: Moto){
    for(let i = 0; i < this.motos.length; i++){
      const m = this.motos[i];
      if(m.id == moto.id){
        this.motos[i] = moto;
        break;
      }
    }

    this.save();
  }
}
