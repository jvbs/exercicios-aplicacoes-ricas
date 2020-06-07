import { Component, OnInit } from '@angular/core';
import { MotoService } from 'src/app/services/moto.service';
import { Moto } from 'src/app/models/moto';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  motos = new Array<Moto>();
  selectedMoto: Moto = null;
  modoEdicao = false;

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.refreshMotos();
  }

  refreshMotos(): void {
    this.motos = this.motoService.list();
  }

  selectMoto(moto: Moto){
    this.selectedMoto = moto;
    this.modoEdicao = true;
  }

  newMoto(){
    this.modoEdicao = false;
    this.selectedMoto = new Moto();
  }

  cancel(){
    this.selectedMoto = null;
  }

  save(){
    if(this.modoEdicao){
      this.motoService.update(this.selectedMoto);
    } else {
      this.motoService.insert(this.selectedMoto);
    }

    this.cancel();
    this.refreshMotos();
  }

  remove(id: number){
    this.motoService.remove(id);
    this.refreshMotos();
  }

}
