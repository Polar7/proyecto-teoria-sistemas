import {Component, OnInit} from '@angular/core';
import {CharacterDto} from "../../../core/dto/character-dto";
import {ApiHarrypotterService} from "../../../core/services/api-harrypotter.service";
import {ActivatedRoute, Router} from "@angular/router";
import {of, switchMap} from "rxjs";

@Component({
  selector: 'app-specific-character',
  templateUrl: './specific-character.component.html',
  styleUrl: './specific-character.component.css'
})
export class SpecificCharacterComponent implements OnInit {

  private idCharacter: string;

  private listCharacter: Array<CharacterDto> = [];

  public objectCharacter: CharacterDto;

  constructor(private harryPotterApiService: ApiHarrypotterService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        this.idCharacter = params.get('id');
        return of(this.idCharacter); // Convierto a observable
      })
    ).subscribe(resIdCharacter => {
      this.harryPotterApiService.getCharacterById(resIdCharacter).subscribe(listRes => {
        this.listCharacter = listRes;
        this.objectCharacter = this.listCharacter[0];
      });
    });
  }

  public redirectAllCharacter(): void {
    this.router.navigateByUrl(`/all-characters`);
  }

}
