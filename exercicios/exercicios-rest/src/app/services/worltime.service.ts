import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timezone } from '../model/timezone';
import { Locales } from '../model/locales';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WorltimeService {

  constructor(private http: HttpClient) { }

  public getLocales(locales: string[]): Observable<Locales> {
    return this.http.get<Locales>('http://worldtimeapi.org/api/timezone/')
  }

  public getTimezone(timezone: string): Observable<Timezone> {
    return this.http.get<Timezone>('http://worldtimeapi.org/api/timezone/'+ timezone)
  }
}
