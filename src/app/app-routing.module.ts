import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./feature/example/news/news.component";
import {AllCharactersComponent} from "./feature/pages/all-characters/all-characters.component";
import {SpecificCharacterComponent} from "./feature/pages/specific-character/specific-character.component";
import {RandomUsersComponent} from "./feature/pages/random-users/random-users.component";
import {SimpsonAllCharacterComponent} from "./feature/pages/simpson-all-character/simpson-all-character.component";
import {GodAllCharactersComponent} from "./feature/pages/god-all-characters/god-all-characters.component";
import {RegisterFormComponent} from "./feature/auth/register-form/register-form.component";

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
  {
    path: 'all-random-users',
    component: RandomUsersComponent
  },
  {
    path: 'api-god',
    component: GodAllCharactersComponent
  },
  {
    path: 'todos-simpsons',
    component: SimpsonAllCharacterComponent
  },
  {
    path: 'registro-usuario',
    component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
