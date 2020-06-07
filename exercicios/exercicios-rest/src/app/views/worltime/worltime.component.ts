import { Component, OnInit } from '@angular/core';
import { Timezone } from 'src/app/model/timezone';
import { WorltimeService } from 'src/app/services/worltime.service';
import { Locales } from 'src/app/model/locales';

@Component({
  selector: 'app-worltime',
  templateUrl: './worltime.component.html',
  styleUrls: ['./worltime.component.css']
})
export class WorltimeComponent implements OnInit {

  consulta: string;
  localesObj: Locales;
  locales: string[];
  timezone: Timezone;

  constructor(private worltimeService: WorltimeService) { }

  ngOnInit(): void {
    this.consultarLocales()
  }

  consultarLocales(){
    this.worltimeService.getLocales(this.locales).subscribe(callback => {
      this.localesObj = callback;
    })
  }

  consultarTimezone(){
    this.worltimeService.getTimezone(this.consulta).subscribe(callback => {
      this.timezone = callback;
    })
  }

}
