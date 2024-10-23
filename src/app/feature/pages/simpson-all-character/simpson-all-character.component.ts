import {Component, OnInit} from '@angular/core';
import {CharacterDto} from "../../../core/dto/character-dto";
import {ResponseApiSimpson, SimpsonCharacter} from "../../../core/dto/simpson-character";
import {ApiSimpsonService} from "../../../core/services/api-simpson.service";

@Component({
  selector: 'app-simpson-all-character',
  templateUrl: './simpson-all-character.component.html',
  styleUrl: './simpson-all-character.component.css'
})
export class SimpsonAllCharacterComponent implements OnInit {

  public arrayAllCharacters: Array<SimpsonCharacter> = [];

  constructor(private apiSimpsonService: ApiSimpsonService) {
  }

  ngOnInit(): void {
    this.apiSimpsonService.getAllCharacters()
      .subscribe(res => {
        this.arrayAllCharacters = res.docs;
      });
  }

}
