import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseApiSimpson, SimpsonCharacter} from "../dto/simpson-character";

@Injectable({
  providedIn: 'root'
})
export class ApiSimpsonService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = "https://apisimpsons.fly.dev/api/personajes?limit=12"
  }

  /**
   * Ejecuta el llamado a la api para obtener todos los personajes
   */
  public getAllCharacters(): Observable<ResponseApiSimpson> {
    return this.http.get<ResponseApiSimpson>(this.url);
  }
}
