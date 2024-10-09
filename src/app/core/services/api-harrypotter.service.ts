import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterDto} from "../dto/character-dto";

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
  public getAllCharacters(): Observable<Array<CharacterDto>> {
    return this.http.get<Array<CharacterDto>>(this.url + "/characters");
  }

  public getCharacterById(id: string): Observable<Array<CharacterDto>> {
    return this.http.get<Array<CharacterDto>>(`${this.url}/character/${id}`);
  }

}
