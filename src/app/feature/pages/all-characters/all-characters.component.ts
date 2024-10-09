import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiHarrypotterService} from "../../../core/services/api-harrypotter.service";
import {CharacterDto} from "../../../core/dto/character-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrl: './all-characters.component.css'
})
export class AllCharactersComponent implements OnInit, OnDestroy {

  public arrayAllCharacters: Array<CharacterDto> = [];

  public nombre: string = "spuerX"

  constructor(private apiHarryService: ApiHarrypotterService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.apiHarryService.getAllCharacters()
      .subscribe(result => {
        this.arrayAllCharacters = result;
        this.arrayAllCharacters = this.arrayAllCharacters.slice(0, 27);
      });
  }

  ngOnDestroy(): void {
  }

  /**
   * Redirige a otro componente que muestra mas detalles del personaje
   * @param idCharacter
   */
  public redirectInfoCharacter(idCharacter: string): void {
    console.log(idCharacter)
    this.router.navigateByUrl(`/character/${idCharacter}`);
  }

}
