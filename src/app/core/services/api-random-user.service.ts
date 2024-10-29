import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RandomUserDto, ResultApi} from "../dto/random-user-dto";

@Injectable({
  providedIn: 'root'
})
export class ApiRandomUserService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = "https://randomuser.me/api/?results=20"
  }

  public getAllRandomUsers(): Observable<ResultApi> {
    return this.http.get<ResultApi>(this.url);
  }


}
