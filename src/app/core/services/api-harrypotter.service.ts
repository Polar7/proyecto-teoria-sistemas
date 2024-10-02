import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiHarrypotterService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = "https://hp-api.onrender.com/api"
  }

  /**
   * Ejecuta el llamado a la api para obtener todos los personajes
   */
  public getAllCharacters(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url + "/characters");
  }


}
