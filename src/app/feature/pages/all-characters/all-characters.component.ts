import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiHarrypotterService} from "../../../core/services/api-harrypotter.service";

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrl: './all-characters.component.css'
})
export class AllCharactersComponent implements OnInit, OnDestroy {

  public arrayAllCharacters: Array<any> = [];

  public nombre: string = "spuerX"

  constructor(private apiHarryService: ApiHarrypotterService) {
  }

  ngOnInit(): void {
    this.apiHarryService.getAllCharacters().subscribe(result =>
      this.arrayAllCharacters = result
    );
  }

  ngOnDestroy(): void {
  }



}

export interface prueba {
id,
  name;
}
