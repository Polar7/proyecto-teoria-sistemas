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
import { RegisterFormComponent } from './feature/auth/register-form/register-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PaymentFormComponent } from './feature/cinemark/payment-form/payment-form.component';
import { BasicDataFormComponent } from './feature/cinemark/basic-data-form/basic-data-form.component';
import { CinemaFormComponent } from './feature/cinemark/cinema-form/cinema-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    AllCharactersComponent,
    SpecificCharacterComponent,
    RandomUsersComponent,
    SimpsonAllCharacterComponent,
    GodAllCharactersComponent,
    RegisterFormComponent,
    PaymentFormComponent,
    BasicDataFormComponent,
    CinemaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
