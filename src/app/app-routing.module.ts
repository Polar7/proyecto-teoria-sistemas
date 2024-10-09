import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./feature/example/news/news.component";
import {AllCharactersComponent} from "./feature/pages/all-characters/all-characters.component";
import {SpecificCharacterComponent} from "./feature/pages/specific-character/specific-character.component";

const routes: Routes = [
  {
    path: 'clon-noticia',
    component: NewsComponent
  },
  {
    path: 'all-characters',
    component: AllCharactersComponent
  },
  {
    path: "character/:id",
    component: SpecificCharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
