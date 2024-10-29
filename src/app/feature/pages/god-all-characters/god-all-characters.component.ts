import {Component, OnInit} from '@angular/core';
import {CharacterDto} from "../../../core/dto/character-dto";
import {GodCharacter} from "../../../core/dto/god-character";
import {ApiGameofthronesService} from "../../../core/services/api-gameofthrones.service";
import {ApiHarrypotterService} from "../../../core/services/api-harrypotter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-god-all-characters',
  templateUrl: './god-all-characters.component.html',
  styleUrl: './god-all-characters.component.css'
})
export class GodAllCharactersComponent implements OnInit {

  public arrayAllCharacters: Array<GodCharacter> = [];

  constructor(private apiGod: ApiGameofthronesService) {
  }

  ngOnInit(): void {
    this.apiGod.getAllCharacters()
      .subscribe(res => this.arrayAllCharacters = res);
    // Funcion LAMBDA, esto es programacion funcional
    // ARROW FUNCTION
  }





}
