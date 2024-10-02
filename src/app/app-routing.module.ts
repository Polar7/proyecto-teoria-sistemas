import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./feature/example/news/news.component";
import {AllCharactersComponent} from "./feature/pages/all-characters/all-characters.component";

const routes: Routes = [
  {
    path: 'clon-noticia',
    component: NewsComponent
  },
  {
    path: 'all-characters',
    component: AllCharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
