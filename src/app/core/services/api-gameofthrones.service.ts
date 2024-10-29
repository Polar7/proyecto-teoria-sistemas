import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GodCharacter} from "../dto/god-character";

@Injectable({
  providedIn: 'root'
})
export class ApiGameofthronesService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = "https://thronesapi.com/api/v2"
  }

  public getAllCharacters(): Observable<Array<GodCharacter>> {
    return this.http.get<Array<GodCharacter>>(this.url+"/Characters");
  }
}
