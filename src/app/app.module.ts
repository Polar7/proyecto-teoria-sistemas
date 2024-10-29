import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './feature/example/news/news.component';
import { AllCharactersComponent } from './feature/pages/all-characters/all-characters.component';
import {HttpClientModule} from "@angular/common/http";
import { SpecificCharacterComponent } from './feature/pages/specific-character/specific-character.component';
import { RandomUsersComponent } from './feature/pages/random-users/random-users.component';
import { GodAllCharactersComponent } from './feature/pages/god-all-characters/god-all-characters.component';
import { SimpsonAllCharacterComponent } from './feature/pages/simpson-all-character/simpson-all-character.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    AllCharactersComponent,
    SpecificCharacterComponent,
    RandomUsersComponent,
    SimpsonAllCharacterComponent,
    GodAllCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
