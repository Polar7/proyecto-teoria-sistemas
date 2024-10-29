import {Component, OnInit} from '@angular/core';
import {ApiRandomUserService} from "../../../core/services/api-random-user.service";
import {RandomUserDto} from "../../../core/dto/random-user-dto";

@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrl: './random-users.component.css'
})
export class RandomUsersComponent implements OnInit {

  public arrayAllUserRandom: Array<RandomUserDto> = [];

  constructor(private apiRandom: ApiRandomUserService) {
  }

  ngOnInit(): void {
    this.apiRandom.getAllRandomUsers().subscribe(respuesta => this.arrayAllUserRandom = respuesta.results);
  }



}
